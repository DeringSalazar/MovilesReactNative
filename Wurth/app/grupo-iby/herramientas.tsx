import React, { useLayoutEffect, useState, useMemo } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useNavigation, useRouter, usePathname } from 'expo-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ImageModal } from '../../components/ImageModal';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import Sidebar from '../../components/Sidebar';
import FilterSidebar from '../../components/Filter';
import CategoryLayout from '../../components/CategoryLayout';
import CategorySidebar from '../../components/CategorySidebar';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { herramientasStyles } from '../../styles/herramientas.styles';
import { useProducts } from '../../hooks/useProducts';
import type { ProductSummary } from '../../types/products';

interface Category {
  title: string;
  image: any;
  icon: string;
  href?: '/grupo-fabi/corteTaladroDesbaste'
    | '/grupo-erik/quimicos'
    | '/grupo-erik/tornilleria'
    | '/grupo-fer/auto'
    | '/grupo-fer/anclajes'
    | '/grupo-iby/electricidad'
    | '/grupo-iby/herramientas'
    | '/grupo-alvaro/maquinas'
    | '/grupo-alvaro/seguridad'
    | '/orsy-Agro/orsy'
    | '/orsy-Agro/agro';
}

const mainCategories: Category[] = [
  { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.jpeg'),       icon: 'disc' },
  { title: 'Químicos',                  image: require('../../assets/quimicos.jpeg'),     icon: 'flask',                  href: '/grupo-erik/quimicos' },
  { title: 'Tornillería',               image: require('../../assets/tornilleria.png'),   icon: 'screwdriver',            href: '/grupo-erik/tornilleria' },
  { title: 'Auto y Cargo',              image: require('../../assets/autoYcargo.jpeg'),   icon: 'car',                    href: '/grupo-fer/auto' },
  { title: 'Anclajes',                  image: require('../../assets/anclaje.png'),       icon: 'screw-machine-flat-top', href: '/grupo-fer/anclajes' },
  { title: 'Electricidad',              image: require('../../assets/electrecidad.png'),  icon: 'flash',                  href: '/grupo-iby/electricidad' },
  { title: 'Herramientas',              image: require('../../assets/herramientas.jpeg'), icon: 'tools',                  href: '/grupo-iby/herramientas' },
  { title: 'Maquinas',                  image: require('../../assets/maquinas.jpeg'),     icon: 'cog',                    href: '/grupo-alvaro/maquinas' },
  { title: 'Seguridad e Higiene',       image: require('../../assets/seguridad.jpeg'),    icon: 'shield-check',           href: '/grupo-alvaro/seguridad' },
  { title: 'Orsy',                      image: require('../../assets/orsy.jpeg'),         icon: 'archive',                href: '/orsy-Agro/orsy' },
  { title: 'Agro',                      image: require('../../assets/agronomia.png'),     icon: 'sprout',                 href: '/orsy-Agro/agro' },
];

export default function Herramientas() {
  const navigation = useNavigation();
  const router     = useRouter();
  const pathname   = usePathname();

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
  } = useProducts('herramientas');

  const [selectedMeasureImage, setSelectedMeasureImage] = useState<any>(null);
  const [searchText,           setSearchText]           = useState<string>('');
  const [selectedFilters,      setSelectedFilters]      = useState<string[]>([]);
  const [sidebarVisible,       setSidebarVisible]       = useState(false);

  const { carouselIndexes, goToNext, goToPrevious } = useMultipleCarousels();

  const subcategories = useMemo(() => {
    const seen = new Set<string>();
    const result: { id: string; label: string }[] = [];

    products.forEach((p) => {
      const code = p.subcategory_code;
      const name = p.subcategory_name;
      if (code && !seen.has(code)) {
        seen.add(code);
        result.push({ id: code, label: name ? `${code} ${name}` : code });
      }
    });

    return result.sort((a, b) => a.id.localeCompare(b.id));
  }, [products]);

  const handleOpenProduct = (id: string) => fetchProductById(id);

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
    router.push(`/pdf-viewer?pdfPage=${encodeURIComponent(pdfPage)}`);
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'row' }}>

        {/* CATEGORY SIDEBAR IZQUIERDO */}
        <CategorySidebar
          categories={mainCategories}
          activeHref={pathname}
        />

        {/* CONTENIDO PRINCIPAL */}
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
                title="Herramientas"
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
              <View style={herramientasStyles.productsContainer}>
                {filteredProducts.map((product) => {
                  const rawImages = Array.isArray(product.product_image)
                    ? product.product_image
                    : typeof product.product_image === 'string' && product.product_image.trim() !== ''
                      ? [product.product_image]
                      : [];
                  const totalImages = rawImages.length;

                  return (
                    <ProductCard
                      key={product.product_id}
                      product={product}
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

            <Footer />
          </CategoryLayout>
        </View>

      </View>

      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        categories={mainCategories}
      />

      <ProductModal
        visible={Boolean(selectedProduct) || loadingDetail}
        product={selectedProduct}
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