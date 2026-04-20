import { useNavigation, usePathname } from 'expo-router';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import CategoryLayout from '../../components/CategoryLayout';
import CategorySidebar from '../../components/CategorySidebar';
import FilterSidebar from '../../components/Filter';
import Header from '../../components/Header';
import { ImageModal } from '../../components/ImageModal';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import Sidebar from '../../components/Sidebar';
import { categories } from '../../constants/anclaje';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { anclajesStyles } from '../../styles/anclajes.styles';

interface Category {
  title: string;
  image: any;
  icon: string;
  href?: '/grupo-fer/auto'
  | '/grupo-fer/anclajes'
  | '/grupo-iby/electricidad'
  | '/grupo-iby/herramientas'
  | '/grupo-erik/quimicos'
  | '/grupo-erik/tornilleria'
  | '/orsy-Agro/orsy'
  | '/orsy-Agro/agro'
  | '/grupo-alvaro/maquinas'
  | '/grupo-alvaro/seguridad';
}

const mainCategories: Category[] = [
  { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.jpeg'), icon: 'disc' },
  { title: 'Químicos', image: require('../../assets/quimicos.jpeg'), icon: 'flask', href: '/grupo-erik/quimicos' },
  { title: 'Tornillería', image: require('../../assets/tornilleria.png'), icon: 'screwdriver', href: '/grupo-erik/tornilleria' },
  { title: 'Auto y Cargo', image: require('../../assets/autoYcargo.jpeg'), icon: 'car', href: '/grupo-fer/auto' },
  { title: 'Anclajes', image: require('../../assets/anclaje.png'), icon: 'screw-machine-flat-top', href: '/grupo-fer/anclajes' },
  { title: 'Electricidad', image: require('../../assets/electrecidad.png'), icon: 'flash', href: '/grupo-iby/electricidad' },
  { title: 'Herramientas', image: require('../../assets/herramientas.jpeg'), icon: 'tools', href: '/grupo-iby/herramientas' },
  { title: 'Maquinas', image: require('../../assets/maquinas.jpeg'), icon: 'cog', href: '/grupo-alvaro/maquinas' },
  { title: 'Seguridad e Higiene', image: require('../../assets/seguridad.jpeg'), icon: 'shield-check', href: '/grupo-alvaro/seguridad' },
  { title: 'Orsy', image: require('../../assets/orsy.jpeg'), icon: 'archive', href: '/orsy-Agro/orsy' },
  { title: 'Agro', image: require('../../assets/agronomia.png'), icon: 'sprout', href: '/orsy-Agro/agro' },
];

const FILTER_CATEGORIES = [
  { id: '05.01', label: '05.01 Anclaje metálico' },
  { id: '05.02', label: '05.02 Anclaje directo' },
  { id: '05.03', label: '05.03 Anclajes químicos' },
  { id: '05.04', label: '05.04 Tacos' },
];

export default function Anclajes() {
  const navigation = useNavigation();
  const pathname = usePathname();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const allProducts = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        products: category.subcategories.flatMap((sub) =>
          sub.products.map((product) => ({
            ...product,
            category: category.name,
            subcategory: sub.name,
            code: sub.code,
          }))
        ),
      })),
    []
  );

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedMeasureImage, setSelectedMeasureImage] = useState<any>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const { carouselIndexes, goToNext, goToPrevious } = useMultipleCarousels();

  const selectedProduct = useMemo(() => {
    for (const category of allProducts) {
      const found = category.products.find((p) => p.id === selectedProductId);
      if (found) return found;
    }
    return null;
  }, [allProducts, selectedProductId]);

  const filteredProducts = useMemo(() => {
    const lowerSearch = searchText.toLowerCase().trim();
    return allProducts
      .map((category) => ({
        ...category,
        products: category.products.filter((product) => {
          const matchesSearch =
            !lowerSearch ||
            product.name.toLowerCase().includes(lowerSearch) ||
            product.code?.toLowerCase().includes(lowerSearch);
          const matchesFilter =
            selectedFilters.length === 0 ||
            selectedFilters.some((f) => product.code?.startsWith(f));
          return matchesSearch && matchesFilter;
        }),
      }))
      .filter((category) => category.products.length > 0);
  }, [allProducts, searchText, selectedFilters]);

  const handleToggleMeasures = (productId: string) => {
    setExpandedId(expandedId === productId ? null : productId);
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'row' }}>

        {/* CATEGORY SIDEBAR IZQUIERDO */}
        <CategorySidebar
          categories={mainCategories}
          activeHref={pathname}
        />

        {/* CONTENIDO */}
        <View style={{ flex: 1 }}>
          <CategoryLayout
            header={<Header onSearch={setSearchText} showBackButton={true} onMenuHover={() => setSidebarVisible(true)} />}
            sidebar={
              <FilterSidebar
                title="Anclajes"
                subcategories={FILTER_CATEGORIES}
                onFilterChange={(filters) => setSelectedFilters(filters.subcategories)}
              />
            }
          >
            {filteredProducts.map((category) => (
              <View key={category.name}>
                <View style={anclajesStyles.productsContainer}>
                  {category.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      carouselIndex={carouselIndexes[product.id] ?? 0}
                      expandedId={expandedId}
                      onPress={() => setSelectedProductId(product.id)}
                      onToggleMeasures={() => handleToggleMeasures(product.id)}
                      onImagePress={setSelectedMeasureImage}
                      onNextImage={() => goToNext(product.id, product.images?.length || 0)}
                      onPreviousImage={() => goToPrevious(product.id, product.images?.length || 0)}
                    />
                  ))}
                </View>
              </View>
            ))}

            {filteredProducts.length === 0 && (
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
        categories={mainCategories}
      />

      <ProductModal
        visible={Boolean(selectedProduct)}
        product={selectedProduct}
        carouselIndex={carouselIndexes[selectedProduct?.id ?? ''] ?? 0}
        onClose={() => setSelectedProductId(null)}
      />
      <ImageModal
        visible={Boolean(selectedMeasureImage)}
        imageSource={selectedMeasureImage}
        onClose={() => setSelectedMeasureImage(null)}
      />
    </>
  );
}