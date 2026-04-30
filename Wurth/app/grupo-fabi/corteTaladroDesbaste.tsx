import React, { useMemo, useState, useLayoutEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useNavigation, usePathname, useRouter, type Href } from 'expo-router';
import CategoryLayout from '../../components/CategoryLayout';
import CategorySidebar from '../../components/CategorySidebar';
import FilterSidebar from '../../components/Filter';
import Header from '../../components/Header';
import { ImageModal } from '../../components/ImageModal';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import Sidebar from '../../components/Sidebar';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { electricidadStyles } from '../../styles/electricidad.styles';
import { useProducts } from '../../hooks/useProducts';
import type { ProductSummary } from '../../types/products';

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

// Mapeo dinámico de imágenes desde rutas de la API
const getCorteImages = (imagePath: string | string[] | null | undefined): any[] => {
  if (!imagePath) return [];

  const paths = Array.isArray(imagePath) ? imagePath : [imagePath];

  const imageMap: Record<string, any> = {
    '01.01p1.png': require('../../assets/Corte/01.01p1.png'),
    '01.01p2.png': require('../../assets/Corte/01.01p2.png'),
    '01.01p4.png': require('../../assets/Corte/01.01p4.png'),
    '01.01p5.png': require('../../assets/Corte/01.01p5.png'),
    '01.01p6.png': require('../../assets/Corte/01.01p6.png'),
    '01.01p7.png': require('../../assets/Corte/01.01p7.png'),
    '01.01p9.png': require('../../assets/Corte/01.01p9.png'),
    '01.01p10.png': require('../../assets/Corte/01.01p10.png'),
    '01.01p11.1.png': require('../../assets/Corte/01.01p11.1.png'),
    '01.01p11.png': require('../../assets/Corte/01.01p11.png'),
    '01.01p12.png': require('../../assets/Corte/01.01p12.png'),
    '01.01p13.png': require('../../assets/Corte/01.01p13.png'),
    '01.01p14.png': require('../../assets/Corte/01.01p14.png'),
    '01.01p15.png': require('../../assets/Corte/01.01p15.png'),
    '01.01p16.png': require('../../assets/Corte/01.01p16.png'),
    '01.01p17.png': require('../../assets/Corte/01.01p17.png'),

    '01.02p18.png': require('../../assets/Corte/01.02p18.png'),
    '01.02p21.png': require('../../assets/Corte/01.02p21.png'),

    '01.03p22.png': require('../../assets/Corte/01.03p22.png'),
    '01.03p23.png': require('../../assets/Corte/01.03p23.png'),
    '01.03p24.png': require('../../assets/Corte/01.03p24.png'),
    '01.03p25.png': require('../../assets/Corte/01.03p25.jpg'),
    '01.03p26.png': require('../../assets/Corte/01.03p26.png'),

    '01.04p27.png': require('../../assets/Corte/01.04p27.png'),

    '01.05p28.png': require('../../assets/Corte/01.05p28.png'),
    '01.05p29.png': require('../../assets/Corte/01.05p29.png'),
    '01.05p30.png': require('../../assets/Corte/01.05p30.png'),

    '01.06p31.png': require('../../assets/Corte/01.06p31.png'),

    '01.07p32.png': require('../../assets/Corte/01.07p32.png'),

    '01.08p33.png': require('../../assets/Corte/01.08p33.png'),

    '01.09p34.png': require('../../assets/Corte/01.09p34.png'),
  };

  return paths
    .map((path) => {
      const filename = typeof path === 'string' ? path.split('/').pop() : '';
      return filename && filename in imageMap ? imageMap[filename] : null;
    })
    .filter((img) => img !== null);
};

export default function CorteTaladroDesbaste() {
  const navigation = useNavigation();
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const {
    products,
    selectedProduct,
    loading,
    loadingDetail,
    error,
    fetchProductById,
    clearSelectedProduct,
  } = useProducts('corte');

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
    const params = new URLSearchParams();
    params.append('pdfPage', pdfPage);
    params.append('categorySlug', categorySlug);
    router.push(`/pdf-viewer?${params.toString()}`);
  };

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
                onMenuPress={() => setSidebarVisible(true)}
              />
            }
            sidebar={
              <FilterSidebar
                title="Corte/Taladro/Desbaste"
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
              <View style={electricidadStyles.productsContainer}>
                {filteredProducts.map((product) => {
                  const localImages = getCorteImages(product.product_image).map((img) =>
                    typeof img === 'string' ? img : img?.uri ?? img
                  );

                  const totalImages = localImages.length || 1;

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
                <Text style={{ fontSize: 16, color: '#666' }}>
                  No se encontraron productos.
                </Text>
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
        product={
          selectedProduct
            ? {
                ...selectedProduct,
                images: getCorteImages(selectedProduct.images).map((img) =>
                  typeof img === 'string' ? img : img?.uri ?? img
                ),
              }
            : null
        }
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