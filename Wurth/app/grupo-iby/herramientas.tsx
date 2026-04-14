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
import { categories } from '../../constants/herramienta';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { herramientasStyles } from '../../styles/herramientas.styles';

const SUBCATEGORIES = [
  { id: '07.01', label: '07.01 Destornilladores' },
  { id: '07.02', label: '07.02 Alicates y tenazas' },
  { id: '07.03', label: '07.03 Llaves' },
  { id: '07.04', label: '07.04 Vasos y carracas' },
  { id: '07.05', label: '07.05 Dinamométricas y multiplicadores' },
  { id: '07.06', label: '07.06 Punzones y cinceles' },
  { id: '07.07', label: '07.07 Extractores' },
  { id: '07.08', label: '07.08 Electricidad y electrónica' },
  { id: '07.09', label: '07.09 Remachadoras' },
  { id: '07.10', label: '07.10 Pistola de aplicación' },
  { id: '07.11', label: '07.11 Iluminación' },
  { id: '07.12', label: '07.12 Medidores láser' },
  { id: '07.13', label: '07.13 Pie de rey y micrómetros' },
  { id: '07.14', label: '07.14 Herramientas misceláneas' },
];

const SIDEBAR_CATEGORIES = [
  { title: 'Corte, Taladro y Desbaste', icon: 'disc' },
  { title: 'Químicos', icon: 'flask', href: '/grupo-erik/quimicos' },
  { title: 'Tornillería', icon: 'screwdriver', href: '/grupo-erik/tornilleria' },
  { title: 'Auto y Cargo', icon: 'car', href: '/grupo-fer/auto' },
  { title: 'Anclajes', icon: 'screw-machine-flat-top', href: '/grupo-fer/anclajes' },
  { title: 'Electricidad', icon: 'flash', href: '/grupo-iby/electricidad' },
  { title: 'Herramientas', icon: 'tools', href: '/grupo-iby/herramientas' },
  { title: 'Maquinas', icon: 'cog' },
  { title: 'Seguridad e Higiene', icon: 'shield-check' },
  { title: 'Orsy', icon: 'archive', href: '/orsy-Agro/orsy' },
  { title: 'Agro', icon: 'sprout', href: '/orsy-Agro/agro' },
];

export default function Herramientas() {
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
            title="Herramientas"
            subcategories={SUBCATEGORIES}
            onFilterChange={(filters) => setSelectedFilters(filters.subcategories)}
          />
        }
      >
        {filteredProducts.map((category) => (
          <View key={category.name}>
            <View style={herramientasStyles.productsContainer}>
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