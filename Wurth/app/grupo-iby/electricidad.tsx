import { useNavigation } from 'expo-router';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CategoryLayout from '../../components/CategoryLayout';
import FilterSidebar from '../../components/Filter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ImageModal } from '../../components/ImageModal';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import Sidebar from '../../components/Sidebar';
import { categories } from '../../constants/electricidad';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { electricidadStyles } from '../../styles/electricidad.styles';

const SUBCATEGORIES = [
  { id: '06.01', label: '06.01 Terminales Y aislamiento' },
  { id: '06.02', label: '06.02 Conexiones y bornes' },
  { id: '06.03', label: '06.03 Complementos de electricidad' },
  { id: '06.04', label: '06.04 Fusibles' },
  { id: '06.05', label: '06.05 Bridas Y sujeción de cables' },
];

const SIDEBAR_CATEGORIES = [
  { title: 'Corte, Taladro y Desbaste', icon: 'disc' },
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

export default function Electricidad() {
  const navigation = useNavigation();

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
      <CategoryLayout
        header={
          <View style={{ position: 'relative' }}>
            <Header
              onSearch={setSearchText}
              showBackButton={true}
              onMenuHover={() => setSidebarVisible(true)}
            />
            {/* Capa invisible sobre el ícono hamburguesa */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 60,
                height: '100%',
              }}
              onPress={() => setSidebarVisible((prev) => !prev)}
            />
          </View>
        }
        sidebar={
          <FilterSidebar
            title="Electricidad"
            subcategories={SUBCATEGORIES}
            onFilterChange={(filters) => setSelectedFilters(filters.subcategories)}
          />
        }
      >
        {filteredProducts.map((category) => (
          <View key={category.name}>
            <View style={electricidadStyles.productsContainer}>
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
            <Text style={{ fontSize: 16, color: '#666' }}>
              No se encontraron productos.
            </Text>
          </View>
        )}

        <Footer />
      </CategoryLayout>

      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        categories={SIDEBAR_CATEGORIES}
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