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
import { maquinasStyles } from '../../styles/maquinas.styles';
import type { ProductSummary } from '../../types/products';

const LOCAL_IMAGES: Record<string, any[]> = {

  // pistola-impacto-neumatica-3-4 → p1
  'pistola-impacto-neumatica-3-4': [
    require('../../assets/images/8.00/08.01p1.png'),
    require('../../assets/images/8.00/08.01p1.2.png'),
    require('../../assets/images/8.00/08.01p1.3.png'),
    require('../../assets/images/8.00/08.01p1.4.png')
  ],

  // pistola-impacto-neumatica-1p → p2
  'pistola-impacto-neumatica-1p': [
    require('../../assets/images/8.00/08.01p2.png'),
    require('../../assets/images/8.00/08.01p2.2.png'),
    require('../../assets/images/8.00/08.01p2.3.png'),
    require('../../assets/images/8.00/08.01p2.4.png'),
    require('../../assets/images/8.00/08.01p2.5.png'),
    require('../../assets/images/8.00/08.01p2.6.png')
  ],

  // pistola-impacto-neumatica-1l → p3
  'pistola-impacto-neumatica-1l': [
    require('../../assets/images/8.00/08.01p3.png'),
    require('../../assets/images/8.00/08.01p3.2.png'),
    require('../../assets/images/8.00/08.01p3.3.png'),
    require('../../assets/images/8.00/08.01p3.4.png'),
    require('../../assets/images/8.00/08.01p3.5.png'),
    require('../../assets/images/8.00/08.01p3.6.png')
  ],

  // engrasadora-neumatica-50kg → p4
  'engrasadora-neumatica-50kg': [
    require('../../assets/images/8.00/08.01p4.png'),
    require('../../assets/images/8.00/08.01p4.2.png'),
    require('../../assets/images/8.00/08.01p4.3.png'),
  ],

  // llave-impacto-neumatica-1-2 → p5
  'llave-impacto-neumatica-1-2': [
    require('../../assets/images/8.00/08.01p5.png'),
    require('../../assets/images/8.00/08.01p5.2.png'),
  ],

  // manguera-hibrida-carrete-retractil → p6
  'manguera-hibrida-carrete-retractil': [
    require('../../assets/images/8.00/08.01p6.png'),
    require('../../assets/images/8.00/08.01p6.2.png'),
    require('../../assets/images/8.00/08.01p6.3.png'),
    require('../../assets/images/8.00/08.01p6.4.png'),
    require('../../assets/images/8.00/08.01p6.5.png'),
    require('../../assets/images/8.00/08.01p6.6.png'),
  ],

  // amoladora-neumatica-plus-4-5 → p7
  'amoladora-neumatica-plus-4-5': [
    require('../../assets/images/8.00/08.01p7.png'),
  ],

  // fresadora-neumatica-plus-1-4 → p8
  'fresadora-neumatica-plus-1-4': [
    require('../../assets/images/8.00/08.01p8.png'),
  ],

  // ratchet-neumatico-plus-1-2 → p9
  'ratchet-neumatico-plus-1-2': [
    require('../../assets/images/8.00/08.01p9.png'),
  ],
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

export default function Maquinas() {
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
  } = useProducts('maquinas');

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

  const handleViewMeasures = (pdfPage: string, categorySlug: string) => {
    if (!pdfPage) return;

    const params = new URLSearchParams();
    params.append('pdfPage', pdfPage);
    params.append('categorySlug', categorySlug);
    router.push(`/pdf-viewer?${params.toString()}`);
  };

  const selectedProductWithImages = selectedProduct
    ? {
        ...selectedProduct,
        images:
          (LOCAL_IMAGES[selectedProduct.product_id] || []).length > 0
            ? (LOCAL_IMAGES[selectedProduct.product_id] || []).map((img) =>
                typeof img === 'string' ? img : img.uri
              )
            : selectedProduct.images ?? null,
      }
    : null;

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <CategorySidebar categories={SIDEBAR_CATEGORIES} activeHref={pathname} />

        <View style={{ flex: 1 }}>
          <CategoryLayout
            header={<Header onSearch={setSearchText} showBackButton={true} onMenuPress={() => setSidebarVisible(true)} />}
            sidebar={
              <FilterSidebar
                title="Máquinas"
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
              <View style={maquinasStyles.productsContainer}>
                {filteredProducts.map((product) => {
                  const localImages = (LOCAL_IMAGES[product.product_id] || []).map(img =>
                    typeof img === 'string' ? img : img.uri
                  );
                  const totalImages = localImages.length;

                  return (
                    <ProductCard
                      key={product.product_id}
                      product={{ ...product, product_image: localImages }}
                      carouselIndex={carouselIndexes[product.product_id] ?? 0}
                      onPress={() => handleOpenProduct(product.product_id)}
                      onViewMeasures={() => handleViewMeasures(product.pdf_page, product.category_slug)}
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
        product={selectedProductWithImages}
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