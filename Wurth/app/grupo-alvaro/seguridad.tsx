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
import { seguridadStyles } from '../../styles/seguridad.styles';
import type { ProductSummary } from '../../types/products';

// Mapeo local de imágenes por product_id
const LOCAL_IMAGES: Record<string, any[]> = {
  // 09.01 - Gafas (5 productos, imágenes p1-p5)
  'lentes-proteccion-impex': [require('../../assets/seguridad/09.01p1.jpg')],
  'lentes-proteccion-profilo': [require('../../assets/seguridad/09.01p2.jpg')],
  'lentes-proteccion-trendus': [require('../../assets/seguridad/09.01p3.jpg')],
  'lentes-seguridad-profilo': [require('../../assets/seguridad/09.01p4.jpg')],
  'lentes-seguridad-trendus': [
    require('../../assets/seguridad/09.01p5.jpg'),
  ],

  // 09.02 - Guantes (7 productos, imágenes p1-p7)
  'guantes-de-puntos-doble-cara': [require('../../assets/seguridad/09.02p1.jpg')],
  'guantes-desechables-nitrilo-negro': [require('../../assets/seguridad/09.02p2.jpg')],
  'guantes-nitrilo-gris': [require('../../assets/seguridad/09.02p3.jpg')],
  'guantes-nitrilo-microespuma': [require('../../assets/seguridad/09.02p4.jpg')],
  'guantes-pu': [require('../../assets/seguridad/09.02p5.jpg')],
  'guantes-pu-microporoso-negro': [
    require('../../assets/seguridad/09.02p6.jpg'),
    require('../../assets/seguridad/09.02p7.jpg'),
  ],
  'guantes-punto-gris': [require('../../assets/seguridad/09.02p7.jpg')],

  // 09.04 - Higiene (7 productos, imágenes p1-p7)
  'absorbente-especial-aceite': [require('../../assets/seguridad/09.04p1.jpg')],
  'dispensador-automatico-limpiador-mano': [require('../../assets/seguridad/09.04p2.jpg')],
  'dispensador-manual-limpiador-mano': [require('../../assets/seguridad/09.04p3.jpg')],
  'limpiador-manos': [require('../../assets/seguridad/09.04p4.jpg')],
  'limpiador-manos-dispensador-automatico': [require('../../assets/seguridad/09.04p5.jpg')],
  'limpiador-sistemas-sin-soporte-pared': [require('../../assets/seguridad/09.04p6.jpg')],
  'micro-absorbente-liquidos': [require('../../assets/seguridad/09.04p7.jpg')],

  // 09.05 - Protección exterior (4 productos, imágenes p1-p4)
  'cinta-antideslizante-transparente-aqua': [require('../../assets/seguridad/09.05p1.png')],
  'cinta-antideslizante-senalizacion': [require('../../assets/seguridad/09.05p2.png')],
  'cinta-antideslizante-adhesiva': [require('../../assets/seguridad/09.05p3.png')],
  'red-seguridad-anticaidas': [require('../../assets/seguridad/09.05p4.png')],
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

export default function Seguridad() {
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
  } = useProducts('seguridad-higiene');

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
    if (!pdfPage || !categorySlug) return;

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
                title="Seguridad e Higiene"
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
              <View style={seguridadStyles.productsContainer}>
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