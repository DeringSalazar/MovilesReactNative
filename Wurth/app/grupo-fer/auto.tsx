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
import { autoStyles } from '../../styles/auto.styles';
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
const getAutoImages = (imagePath: string | string[] | null | undefined): any[] => {
    if (!imagePath) return [];

    const paths = Array.isArray(imagePath) ? imagePath : [imagePath];

    // Todas las imágenes disponibles en assets/autoYCargo
    const imageMap: Record<string, any> = {
        '04.01.01.01p241.png': require('../../assets/autoYCargo/04.01.01.01p241.png'),
        '04.01.01.02p241.png': require('../../assets/autoYCargo/04.01.01.02p241.png'),
        '04.01.02p242.png': require('../../assets/autoYCargo/04.01.02p242.png'),
        '04.02.01.01p243.png': require('../../assets/autoYCargo/04.02.01.01p243.png'),
        '04.02.01.02p243.png': require('../../assets/autoYCargo/04.02.01.02p243.png'),
        '04.02.02p243.png': require('../../assets/autoYCargo/04.02.02p243.png'),
        '04.02.03.01p244.png': require('../../assets/autoYCargo/04.02.03.01p244.png'),
        '04.02.03.02p244.png': require('../../assets/autoYCargo/04.02.03.02p244.png'),
        '04.02.04.01p245.png': require('../../assets/autoYCargo/04.02.04.01p245.png'),
        '04.02.04.02p245.png': require('../../assets/autoYCargo/04.02.04.02p245.png'),
        '04.02.05.01p246.png': require('../../assets/autoYCargo/04.02.05.01p246.png'),
        '04.02.05.02p246.png': require('../../assets/autoYCargo/04.02.05.02p246.png'),
        '04.02.06p247.png': require('../../assets/autoYCargo/04.02.06p247.png'),
        '04.02.07p248.png': require('../../assets/autoYCargo/04.02.07p248.png'),
        '04.03.01p250.png': require('../../assets/autoYCargo/04.03.01.png'),
        '04.03.02p250.png': require('../../assets/autoYCargo/04.03.02.png'),
        '04.03.03p250.png': require('../../assets/autoYCargo/04.03.03.png'),
        '04.03.04p250.png': require('../../assets/autoYCargo/04.03.04.png'),
        '04.03.05p250.png': require('../../assets/autoYCargo/04.03.05.png'),
        '04.03.06p250.png': require('../../assets/autoYCargo/04.03.06.png'),
        '04.03.07p250.png': require('../../assets/autoYCargo/04.03.07.png'),
        '04.03.08p250.png': require('../../assets/autoYCargo/04.03.08.png'),
        '04.03.09p250.png': require('../../assets/autoYCargo/04.03.09.png'),
        '04.03.10p250.png': require('../../assets/autoYCargo/04.03.10.png'),
        '04.03.11p250.png': require('../../assets/autoYCargo/04.03.11.png'),
        '04.03.12p250.png': require('../../assets/autoYCargo/04.03.12.png'),
        '04.03.13p250.png': require('../../assets/autoYCargo/04.03.13.png'),
        '04.03.14p250.png': require('../../assets/autoYCargo/04.03.14.png'),
        '04.03.15p250.png': require('../../assets/autoYCargo/04.03.15.png'),
        '04.03.16p250.png': require('../../assets/autoYCargo/04.03.16.png'),
        '04.03.17p250.png': require('../../assets/autoYCargo/04.03.17.png'),
        '04.03.18p250.png': require('../../assets/autoYCargo/04.03.18.png'),
        '04.03.19p250.png': require('../../assets/autoYCargo/04.03.19.png'),
        '04.03.20p250.png': require('../../assets/autoYCargo/04.03.20.png'),
        '04.03.21p250.png': require('../../assets/autoYCargo/04.03.21.png'),
        '04.03.22p250.png': require('../../assets/autoYCargo/04.03.22.png'),
        '04.03.23p250.png': require('../../assets/autoYCargo/04.03.23.png'),
        '04.03.24p250.png': require('../../assets/autoYCargo/04.03.24.png'),

        '04.03.25p251.png': require('../../assets/autoYCargo/04.03.25.png'),
        '04.03.26p251.png': require('../../assets/autoYCargo/04.03.26.png'),
        '04.03.27p251.png': require('../../assets/autoYCargo/04.03.27.png'),
        '04.03.28p251.png': require('../../assets/autoYCargo/04.03.28.png'),
        '04.03.29p251.png': require('../../assets/autoYCargo/04.03.29.png'),
        '04.03.30p251.png': require('../../assets/autoYCargo/04.03.30.png'),
        '04.03.31p251.png': require('../../assets/autoYCargo/04.03.31.png'),
        '04.03.32p251.png': require('../../assets/autoYCargo/04.03.32.png'),
        '04.03.33p251.png': require('../../assets/autoYCargo/04.03.33.png'),
        '04.03.34p251.png': require('../../assets/autoYCargo/04.03.34.png'),
        '04.03.35p251.png': require('../../assets/autoYCargo/04.03.35.png'),
        '04.03.36p251.png': require('../../assets/autoYCargo/04.03.36.png'),
        '04.03.37p251.png': require('../../assets/autoYCargo/04.03.37.png'),
        '04.03.38p251.png': require('../../assets/autoYCargo/04.03.38.png'),
        '04.03.39p251.png': require('../../assets/autoYCargo/04.03.39.png'),
        '04.03.40p251.png': require('../../assets/autoYCargo/04.03.40.png'),
        '04.03.41p251.png': require('../../assets/autoYCargo/04.03.41.png'),
        '04.03.42p251.png': require('../../assets/autoYCargo/04.03.42.png'),
        '04.03.43p251.png': require('../../assets/autoYCargo/04.03.43.png'),
        '04.03.44p251.png': require('../../assets/autoYCargo/04.03.44.png'),
        '04.03.45p251.png': require('../../assets/autoYCargo/04.03.45.png'),
        '04.03.46p251.png': require('../../assets/autoYCargo/04.03.46.png'),

        '04.03.47p252.png': require('../../assets/autoYCargo/04.03.47.png'),
        '04.03.48p252.png': require('../../assets/autoYCargo/04.03.48.png'),
        '04.03.49p252.png': require('../../assets/autoYCargo/04.03.49.png'),
        '04.03.50p252.png': require('../../assets/autoYCargo/04.03.50.png'),
        '04.03.51p252.png': require('../../assets/autoYCargo/04.03.51.png'),
        '04.03.52p252.png': require('../../assets/autoYCargo/04.03.52.png'),
        '04.03.53p252.png': require('../../assets/autoYCargo/04.03.53.png'),
        '04.03.54p252.png': require('../../assets/autoYCargo/04.03.54.png'),
        '04.03.55p252.png': require('../../assets/autoYCargo/04.03.55.png'),
        '04.03.56p252.png': require('../../assets/autoYCargo/04.03.56.png'),
        '04.03.57p252.png': require('../../assets/autoYCargo/04.03.57.png'),

        '04.03.58p253.png': require('../../assets/autoYCargo/04.03.58.png'),
        '04.03.59p253.png': require('../../assets/autoYCargo/04.03.59.png'),
        '04.03.60p253.png': require('../../assets/autoYCargo/04.03.60.png'),
        '04.03.61p253.png': require('../../assets/autoYCargo/04.03.61.png'),
        '04.03.62p253.png': require('../../assets/autoYCargo/04.03.62.png'),
        '04.03.63p253.png': require('../../assets/autoYCargo/04.03.63.png'),

        '04.03.64p254.png': require('../../assets/autoYCargo/04.03.64.png'),
        '04.03.65p254.png': require('../../assets/autoYCargo/04.03.65.png'),
        '04.03.66p254.png': require('../../assets/autoYCargo/04.03.66.png'),
        '04.03.67p254.png': require('../../assets/autoYCargo/04.03.67.png'),
        '04.03.68p254.png': require('../../assets/autoYCargo/04.03.68.png'),
        '04.03.69p254.png': require('../../assets/autoYCargo/04.03.69.png'),
        '04.03.70p254.png': require('../../assets/autoYCargo/04.03.70.png'),
        '04.03.71p254.png': require('../../assets/autoYCargo/04.03.71.png'),
        '04.04.01p255.png': require('../../assets/autoYCargo/autoYCargo04.04.01p255.png'),
        '04.04.02p256.png': require('../../assets/autoYCargo/autoYCargo04.04.02p256.png'),
        '04.05.01p257.png': require('../../assets/autoYCargo/04.05.01p257.png'),
        '04.05.02p258.png': require('../../assets/autoYCargo/04.05.02p258.png'),
    };

    return paths.map(path => {
        const filename = typeof path === 'string' ? path.split('/').pop() : '';
        return filename && filename in imageMap ? imageMap[filename] : null;
    }).filter(img => img !== null);
};

export default function Auto() {
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
    } = useProducts('auto');

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
                                title="Auto y Cargo"
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
                            <View style={autoStyles.productsContainer}>
                                {filteredProducts.map((product) => {
                                    const localImages = getAutoImages(product.product_image).map(img => 
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
                product={selectedProduct ? { ...selectedProduct, images: getAutoImages(selectedProduct.images).map(img => typeof img === 'string' ? img : img.uri) } : null}
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