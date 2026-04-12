import { useNavigation } from 'expo-router';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import CategoryLayout from '../../components/CategoryLayout';
import FilterSidebar from '../../components/Filter';
import Header from '../../components/Header';
import { ImageModal } from '../../components/ImageModal';
import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';
import { categories } from '../../constants/quimicos';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { anclajesStyles } from '../../styles/anclajes.styles';

const SUBCATEGORIES = [
  { id: '02.01', label: '02.01 Selladores y juntas químicas' },
  { id: '02.02', label: '02.02 Adhesivos y pegamento' },
  { id: '02.03', label: '02.03 Limpiadores y disolventes' },
  { id: '02.04', label: '02.04 Lubricantes y penetrantes' },
  { id: '02.05', label: '02.05 Imprimaciones y lacas' },
];

export default function Quimicos() {
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

  const [expandedId, setExpandedId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedMeasureImage, setSelectedMeasureImage] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

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

  const handleToggleMeasures = (productId) => {
    setExpandedId(expandedId === productId ? null : productId);
  };

  return (
    <>
      <CategoryLayout
        header={<Header onSearch={setSearchText} showBackButton={true} />}
        sidebar={
          <FilterSidebar
            title="Químicos"
            subcategories={SUBCATEGORIES}
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
            <Text style={{ fontSize: 16, color: '#666' }}>
              No se encontraron productos.
            </Text>
          </View>
        )}

      </CategoryLayout>

      {/* MODALES fuera del layout para que funcionen como overlays */}
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