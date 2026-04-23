import { useNavigation, usePathname, useRouter, type Href } from 'expo-router';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import CategoryLayout from '../../components/CategoryLayout';
import CategorySidebar from '../../components/CategorySidebar';
import FilterSidebar from '../../components/Filter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ImageModal } from '../../components/ImageModal';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import Sidebar from '../../components/Sidebar';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { useProducts } from '../../hooks/useProducts';
import { orsyStyles } from '../../styles/orsy.styles';
import type { ProductSummary } from '../../types/products';

// Mapeo local de imágenes por product_id - AGRO
const LOCAL_IMAGES_AGRO: Record<string, any[]> = {
  'bloque-sal': [require('../../assets/images/11.00/11.01p1.png')],
  'bloque-mineral-universal': [require('../../assets/images/11.00/11.01p2.png')],
  'bloque-mineral-vacuno': [require('../../assets/images/11.00/11.01p3.png')],
  'chupete-agua-lechones': [require('../../assets/images/11.00/11.01p4.png')],
  'chupete-agua-porcino': [require('../../assets/images/11.00/11.01p5.png')],
  'pezonera-hdl': [require('../../assets/images/11.00/11.02p1.png')],
  'mangueras-leche-goma': [require('../../assets/images/11.00/11.02p2.png')],
  'filtros-leche': [require('../../assets/images/11.00/11.02p3.png')],
  'sellador-pezones-yodo': [require('../../assets/images/11.00/11.03p1.png')],
  'glumoncat': [require('../../assets/images/11.00/11.03p2.png')],
  'degramat-solido': [require('../../assets/images/11.00/11.03p3.png')],
  'contral': [require('../../assets/images/11.00/11.03p4.png')],
  'rumisec-granulado': [require('../../assets/images/11.00/11.03p5.png')],
  'lazo-morro-porcino': [require('../../assets/images/11.00/11.04p1.png')],
};

const SIDEBAR_CATEGORIES: { title: string; icon: string; href: Href }[] = [
  { title: 'Corte, Taladro y Desbaste', icon: 'disc', href: '/grupo-fabi/corteTaladroDesbaste' },
  { title: 'Químicos', icon: 'flask', href: '/grupo-erik/quimicos' },
  { title: 'Tornillería', icon: 'screwdriver', href: '/grupo-erik/tornilleria' },
  { title: 'Auto y Cargo', icon: 'car', href: '/grupo-fer/auto' },
  { title: 'Anclajes', icon: 'screw-machine-flat-top', href: '/grupo-fer/anclajes' },
  { title: 'Electricidad', icon: 'flash', href: '/grupo-iby/electricidad' },
  { title: 'Herramientas', icon: 'tools', href: '/grupo-iby/herramientas' },
  { title: 'Maquinas', icon: 'cog', href: '/grupo-alvaro/maquinas' },
  { title: 'Seguridad e Higiene', icon: 'shield-check', href: '/grupo-alvaro/seguridad' },
  { title: 'Orsy', icon: 'archive', href: '/orsy-Agro/orsy' },
  { title: 'Agro', icon: 'sprout', href: '/orsy-Agro/agro' },
];

export default function Agro() {
  const navigation = useNavigation();
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const {
    products,
    selectedProduct,
    loading,
    loadingDetail,
    error,
    fetchProductById,
    clearSelectedProduct,
  } = useProducts('agro');

  const [selectedMeasureImage, setSelectedMeasureImage] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const { carouselIndexes, goToNext, goToPrevious } = useMultipleCarousels();

  const subcategories = useMemo(() => {
    const seen = new Set<string>();
    const result: { id: string; label: string }[] = [];

    products.forEach((p) => {
      const code = p.subcategory_code;
      const name = p.subcategory_name;
      if (code && !seen.has(code)) {
        seen.add(code);
        result.push({
          id: code,
          label: name ? `${code} ${name}` : code,
        });
      }
    });

    return result.sort((a, b) => a.id.localeCompare(b.id));
  }, [products]);

  const handleOpenProduct = (id: string) => {
    fetchProductById(id);
  };

  const filteredProducts: ProductSummary[] = useMemo(() => {
    return products.filter((product) => {
      const lowerSearch = searchText.toLowerCase().trim();
      const matchesSearch =
        !lowerSearch ||
        product.product_name.toLowerCase().includes(lowerSearch) ||
        product.subcategory_code?.toLowerCase().includes(lowerSearch);
      const matchesFilter =
        selectedFilters.length === 0 ||
        selectedFilters.some((f) => product.subcategory_code?.startsWith(f));
      return matchesSearch && matchesFilter;
    });
  }, [products, searchText, selectedFilters]);

  const handleViewMeasures = (pdfPage: string) => {
    console.log('PDF Page:', pdfPage);
    if (!pdfPage) {
      return;
    }
    router.push(`/pdf-viewer?pdfPage=${encodeURIComponent(pdfPage)}`);
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <CategorySidebar categories={SIDEBAR_CATEGORIES} activeHref={pathname} />

        <View style={{ flex: 1 }}>
          <CategoryLayout
            header={<Header onSearch={setSearchText} showBackButton={true} onMenuHover={() => setSidebarVisible(true)} />}
            sidebar={
              <FilterSidebar
                title="Agro"
                subcategories={subcategories}
                onFilterChange={(filters) => setSelectedFilters(filters.subcategories)}
              />
            }
          >
            {loading && (
              <View style={{ padding: 40, alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#CC0000" />
              </View>
            )}

            {error && !loading && (
              <View style={{ alignItems: 'center', padding: 20 }}>
                <Text style={{ color: '#CC0000', fontSize: 14 }}>{error}</Text>
              </View>
            )}

            {!loading && (
              <View style={orsyStyles.productsContainer}>
                {filteredProducts.map((product) => {
                  // Convertir objetos require a string URIs
                  const localImages = (LOCAL_IMAGES_AGRO[product.product_id] || []).map(img => 
                    typeof img === 'string' ? img : img.uri
                  );
                  const totalImages = localImages.length;

                  return (
                    <ProductCard
                      key={product.product_id}
                      product={{ ...product, product_image: localImages }}
                      carouselIndex={carouselIndexes[product.product_id] ?? 0}
                      onPress={() => handleOpenProduct(product.product_id)}
                      onViewMeasures={() => handleViewMeasures(product.pdf_page)}
                      onNextImage={() => goToNext(product.product_id, totalImages)}
                      onPreviousImage={() => goToPrevious(product.product_id, totalImages)}
                    />
                  );
                })}
              </View>
            )}

            {!loading && filteredProducts.length === 0 && !error && (
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
        visible={Boolean(selectedProduct) || loadingDetail}
        product={selectedProduct ? { ...selectedProduct, product_image: LOCAL_IMAGES_AGRO[selectedProduct.product_id] || [] } : null}
        loading={loadingDetail}
        carouselIndex={carouselIndexes[selectedProduct?.product_id ?? ''] ?? 0}
        onClose={clearSelectedProduct}
      />

      <ImageModal
        visible={Boolean(selectedMeasureImage)}
        imageSource={selectedMeasureImage}
        onClose={() => setSelectedMeasureImage(null)}
      />
    </>
  );
}