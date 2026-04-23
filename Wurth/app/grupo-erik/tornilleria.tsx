import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { useNavigation, useRouter } from 'expo-router';

import CategoryLayout from '../../components/CategoryLayout';
import FilterSidebar from '../../components/Filter';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { ProductCard } from '../../components/ProductCardDetail';
import { ProductModal } from '../../components/ProductModal';

import { tornilleria } from '../../constants/tornilleria';
import { useMultipleCarousels } from '../../hooks/useMultipleCarousels';
import { anclajesStyles } from '../../styles/anclajes.styles';

const mainCategories = [
  { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.jpeg'), icon: 'disc', href: '/grupo-fabi/corteTaladroDesbaste' },
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

const SUBCATEGORIES = [
  { id: '03.01', label: '03.01 Arandelas' },
  { id: '03.02', label: '03.02 Graseras' },
  { id: '03.03', label: '03.03 Normalizado DIN' },
  { id: '03.04', label: '03.04 Pías / autoperforantes' },
  { id: '03.05', label: '03.05 Remaches y tuercas remachables' },
  { id: '03.06', label: '03.06 Seguros' },
  { id: '03.07', label: '03.07 Tornillería madera' },
  { id: '03.08', label: '03.08 Tornillería métrica' },
  { id: '03.09', label: '03.09 Tuercas' },
];

export default function Tornilleria() {
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const allProducts = useMemo(
    () =>
      tornilleria.map((category) => ({
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

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
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
            selectedFilters.some((f) =>
              product.code?.startsWith(f)
            );

          return matchesSearch && matchesFilter;
        }),
      }))
      .filter((category) => category.products.length > 0);
  }, [allProducts, searchText, selectedFilters]);

  const handleViewMeasures = (pdfPage: string) => {
    if (!pdfPage) return;
    router.push(`/pdf-viewer?pdfPage=${encodeURIComponent(pdfPage)}`);
  };

  return (
    <>
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
            subcategories={SUBCATEGORIES}
            onFilterChange={(filters) =>
              setSelectedFilters(filters.subcategories)
            }
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
                  onPress={() => setSelectedProductId(product.id)}
                  onViewMeasures={() => handleViewMeasures(product.pdfPage)}
                  onNextImage={() =>
                    goToNext(product.id, product.images?.length || 0)
                  }
                  onPreviousImage={() =>
                    goToPrevious(product.id, product.images?.length || 0)
                  }
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

      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        categories={mainCategories}
      />

      <ProductModal
        visible={Boolean(selectedProduct)}
        product={selectedProduct}
        carouselIndex={
          carouselIndexes[selectedProduct?.id ?? ''] ?? 0
        }
        onClose={() => setSelectedProductId(null)}
      />
    </>
  );
}