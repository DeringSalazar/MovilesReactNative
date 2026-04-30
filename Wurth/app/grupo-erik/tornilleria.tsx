import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, usePathname, useRouter, type Href } from 'expo-router';

import CategoryLayout from '../../components/CategoryLayout';
import CategorySidebar from '../../components/CategorySidebar';
import FilterSidebar from '../../components/Filter';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { anclajesStyles } from '../../styles/anclajes.styles';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/drmpxxugi/image/upload';
const API_BASE = 'https://api-moviles-lilac.vercel.app';

const SIDEBAR_CATEGORIES: { title: string; icon: string; href: Href }[] = [
  { title: 'Corte, Taladro y Desbaste', icon: 'disc',                   href: '/grupo-fabi/corteTaladroDesbaste' },
  { title: 'Químicos',                  icon: 'flask',                  href: '/grupo-erik/quimicos' },
  { title: 'Tornillería',               icon: 'screwdriver',            href: '/grupo-erik/tornilleria' },
  { title: 'Auto y Cargo',              icon: 'car',                    href: '/grupo-fer/auto' },
  { title: 'Anclajes',                  icon: 'screw-machine-flat-top', href: '/grupo-fer/anclajes' },
  { title: 'Electricidad',              icon: 'flash',                  href: '/grupo-iby/electricidad' },
  { title: 'Herramientas',              icon: 'tools',                  href: '/grupo-iby/herramientas' },
  { title: 'Maquinas',                  icon: 'cog',                    href: '/grupo-alvaro/maquinas' },
  { title: 'Seguridad e Higiene',       icon: 'shield-check',           href: '/grupo-alvaro/seguridad' },
  { title: 'Orsy',                      icon: 'archive',                href: '/orsy-Agro/orsy' },
  { title: 'Agro',                      icon: 'sprout',                 href: '/orsy-Agro/agro' },
];

interface ProductSummary {
  category_slug: string;
  category_name: string;
  subcategory_code: string;
  subcategory_name: string;
  product_id: string;
  product_name: string;
  product_image: string;
}

interface ProductDetail {
  product_id: string;
  product_name: string;
  category_name: string;
  subcategory_code: string;
  subcategory_name: string;
  features: string[];
  applications: string[];
  images: string[];
  pdf_page?: string;
}

function toCloudinaryUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const filename = path.split('/').pop();
  return `${CLOUDINARY_BASE}/${filename}`;
}

export default function Tornilleria() {
  const navigation = useNavigation();
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [allProducts, setAllProducts]             = useState<ProductSummary[]>([]);
  const [loadingList, setLoadingList]             = useState(true);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct]     = useState<ProductDetail | null>(null);
  const [loadingDetail, setLoadingDetail]         = useState(false);
  const [searchText, setSearchText]               = useState('');
  const [selectedFilters, setSelectedFilters]     = useState<string[]>([]);
  const [sidebarVisible, setSidebarVisible]       = useState(false);

  const { carouselIndexes, goToNext, goToPrevious } = useMultipleCarousels();

  // 1. Cargar listado desde API
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res  = await fetch(`${API_BASE}/tornilleria`);
        const data: ProductSummary[] = await res.json();
        if (!cancelled) setAllProducts(data);
      } catch (e) {
        console.error('Error cargando tornillería:', e);
      } finally {
        if (!cancelled) setLoadingList(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // 2. Cargar detalle + PDF cuando se abre un producto
  useEffect(() => {
    if (!selectedProductId) {
      setSelectedProduct(null);
      return;
    }
    let cancelled = false;
    setLoadingDetail(true);
    setSelectedProduct(null);

    (async () => {
      try {
        const [detailRes, pdfRes] = await Promise.all([
          fetch(`${API_BASE}/tornilleria/${selectedProductId}`),
          fetch(`${API_BASE}/tornilleria/${selectedProductId}/pdf`),
        ]);
        const detail: ProductDetail          = await detailRes.json();
        const pdfData: { pdf_page?: string } = pdfRes.ok ? await pdfRes.json() : {};

        if (!cancelled) {
          setSelectedProduct({
            ...detail,
            images: (detail.images ?? []).map(toCloudinaryUrl),
            pdf_page: pdfData.pdf_page,
          });
        }
      } catch (e) {
        console.error('Error cargando detalle:', e);
      } finally {
        if (!cancelled) setLoadingDetail(false);
      }
    })();

    return () => { cancelled = true; };
  }, [selectedProductId]);

  // Subcategorías para el filtro lateral
  const subcategories = useMemo(() => {
    const seen   = new Set<string>();
    const result: { id: string; label: string }[] = [];
    allProducts.forEach((p) => {
      if (p.subcategory_code && !seen.has(p.subcategory_code)) {
        seen.add(p.subcategory_code);
        result.push({ id: p.subcategory_code, label: `${p.subcategory_code} ${p.subcategory_name}` });
      }
    });
    return result.sort((a, b) => a.id.localeCompare(b.id));
  }, [allProducts]);

  // Filtrado por búsqueda y filtros laterales
  const filteredProducts = useMemo(() => {
    const lowerSearch = searchText.toLowerCase().trim();
    return allProducts.filter((p) => {
      const matchesSearch =
        !lowerSearch ||
        p.product_name.toLowerCase().includes(lowerSearch) ||
        p.subcategory_code?.toLowerCase().includes(lowerSearch) ||
        p.subcategory_name?.toLowerCase().includes(lowerSearch);
      const matchesFilter =
        selectedFilters.length === 0 ||
        selectedFilters.some((f) => p.subcategory_code?.startsWith(f));
      return matchesSearch && matchesFilter;
    });
  }, [allProducts, searchText, selectedFilters]);

  // Navegar al PDF
const handleViewMeasures = useCallback(async (productId: string) => {
    if (selectedProduct?.product_id === productId && selectedProduct.pdf_page) {
      router.push(`/pdf-viewer?page=${encodeURIComponent(selectedProduct.pdf_page)}&categorySlug=03`);
      return;
    }
    try {
      const res  = await fetch(`${API_BASE}/tornilleria/${productId}/pdf`);
      const data = await res.json();
      if (data.pdf_page) {
        router.push(`/pdf-viewer?pdfPage=${encodeURIComponent(data.pdf_page)}&categorySlug=03`);
      }
    } catch (e) {
      console.error('Error obteniendo PDF:', e);
    }
  }, [selectedProduct, router]);

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <CategorySidebar categories={SIDEBAR_CATEGORIES} activeHref={pathname} />

        <View style={{ flex: 1 }}>
          <CategoryLayout
            header={
              <Header
                onSearch={setSearchText}
                showBackButton={true}
                onMenuHover={() => setSidebarVisible(true)}
              />
            }
            sidebar={
              <FilterSidebar
                title="Tornillería"
                subcategories={subcategories}
                onFilterChange={(filters) => setSelectedFilters(filters.subcategories)}
              />
            }
          >
            {loadingList ? (
              <View style={{ alignItems: 'center', padding: 40 }}>
                <Text style={{ fontSize: 16, color: '#666' }}>Cargando productos…</Text>
              </View>
            ) : (
              <View style={anclajesStyles.productsContainer}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.product_id}
                    product={{
                      product_id:       product.product_id,
                      product_name:     product.product_name,
                      subcategory_code: product.subcategory_code,
                      subcategory_name: product.subcategory_name,
                      product_image:    toCloudinaryUrl(product.product_image),
                    }}
                    carouselIndex={carouselIndexes[product.product_id] ?? 0}
                    onPress={() => setSelectedProductId(product.product_id)}
                    onViewMeasures={() => handleViewMeasures(product.product_id)}
                    onNextImage={() => goToNext(product.product_id, 1)}
                    onPreviousImage={() => goToPrevious(product.product_id, 1)}
                  />
                ))}
              </View>
            )}

            {!loadingList && filteredProducts.length === 0 && (
              <View style={{ alignItems: 'center', padding: 20 }}>
                <Text style={{ fontSize: 16, color: '#666' }}>No se encontraron productos.</Text>
              </View>
            )}
          </CategoryLayout>
        </View>
      </View>

      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        categories={SIDEBAR_CATEGORIES}
      />

      <ProductModal
        visible={Boolean(selectedProductId)}
        product={selectedProduct}
        loading={loadingDetail}
        carouselIndex={carouselIndexes[selectedProductId ?? ''] ?? 0}
        onClose={() => setSelectedProductId(null)}
      />
    </>
  );
}