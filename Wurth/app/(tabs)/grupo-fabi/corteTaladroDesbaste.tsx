import React, { useMemo, useState } from "react";
import {View,Text,Image,TouchableOpacity,Modal,Pressable,Dimensions,ScrollView,ImageSourcePropType,} from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FilterSidebar from "../../../components/Filter";
import Sidebar from "../../../components/Sidebar";
import { corteTaladroDesbaste } from "../../../constants/corteTaladroDesbaste";
import {
  corteTaladroDesbasteStyles as styles,
  corteTaladroDesbasteCardStyles as cardStyles,
} from "../../../styles/corteTaladroDesbaste.styles";

const { width } = Dimensions.get("window");
type ProductCardProps = {
  name: string;
  price?: string;
  image: ImageSourcePropType | string;
  width?: number;
};

interface Category {
  title: string;
  image: any;
  icon: string;
  href?:
    | "/grupo-fabi/corteTaladroDesbaste"
    | "/grupo-fer/auto"
    | "/grupo-fer/anclajes"
    | "/grupo-iby/electricidad"
    | "/grupo-iby/herramientas"
    | "/grupo-erik/quimicos"
    | "/grupo-erik/tornilleria"
    | "/orsy-Agro/orsy"
    | "/orsy-Agro/agro";
}

const mainCategories: Category[] = [
  {
    title: "Corte, Taladro y Desbaste",
    image: require("../../../assets/corte.jpeg"),
    icon: "disc",
    href: "/grupo-fabi/corteTaladroDesbaste",
  },
  {
    title: "Químicos",
    image: require("../../../assets/quimicos.jpeg"),
    icon: "flask",
    href: "/grupo-erik/quimicos",
  },
  {
    title: "Tornillería",
    image: require("../../../assets/tornilleria.png"),
    icon: "screwdriver",
    href: "/grupo-erik/tornilleria",
  },
  {
    title: "Auto y Cargo",
    image: require("../../../assets/autoYcargo.jpeg"),
    icon: "car",
    href: "/grupo-fer/auto",
  },
  {
    title: "Anclajes",
    image: require("../../../assets/anclaje.png"),
    icon: "screw-machine-flat-top",
    href: "/grupo-fer/anclajes",
  },
  {
    title: "Electricidad",
    image: require("../../../assets/electrecidad.png"),
    icon: "flash",
    href: "/grupo-iby/electricidad",
  },
  {
    title: "Herramientas",
    image: require("../../../assets/herramientas.jpeg"),
    icon: "tools",
    href: "/grupo-iby/herramientas",
  },
  {
    title: "Maquinas",
    image: require("../../../assets/maquinas.jpeg"),
    icon: "cog",
  },
  {
    title: "Seguridad e Higiene",
    image: require("../../../assets/seguridad.jpeg"),
    icon: "shield-check",
  },
  {
    title: "Orsy",
    image: require("../../../assets/orsy.jpeg"),
    icon: "archive",
    href: "/orsy-Agro/orsy",
  },
  {
    title: "Agro",
    image: require("../../../assets/agronomia.png"),
    icon: "sprout",
    href: "/orsy-Agro/agro",
  },
];

function ProductCard({ name, price, image, width }: ProductCardProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const imageSource = typeof image === "string" ? { uri: image } : image;
  return (
    <View style={[cardStyles.card, width ? { width } : null]}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={cardStyles.imageContainer}
      >
        <Image source={imageSource} style={cardStyles.image} />
      </TouchableOpacity>

      <View style={cardStyles.infoContainer}>
        <Text style={cardStyles.name} numberOfLines={2}>
          {name}
        </Text>
        <Text style={cardStyles.price}>{price ?? "Sin precio"}</Text>
      </View>

      <TouchableOpacity
        style={cardStyles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={cardStyles.buttonText}>Ver medidas</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable
          style={cardStyles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={cardStyles.modalContent}>
            <Image source={imageSource} style={cardStyles.fullImage} />
            <Text style={cardStyles.modalTitle}>{name}</Text>
            <TouchableOpacity
              style={cardStyles.closeBtnCard}
              onPress={() => setModalVisible(false)}
            >
              <Text style={cardStyles.closeBtnCardText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const SUBCATEGORIAS = [
  { id: "01.01", label: "01.01 Brocas" },
  { id: "01.02", label: "01.02 Avellanadoras y fresas" },
  { id: "01.03", label: "01.03 Machos y terrajas" },
  { id: "01.04", label: "01.04 Coronas" },
  { id: "01.05", label: "01.05 Discos de corte y desbaste" },
  { id: "01.06", label: "01.06 Sierras" },
  { id: "01.07", label: "01.07 Discos de lija" },
  { id: "01.08", label: "01.08 Lijas" },
  { id: "01.09", label: "01.09 Muelas abrasivas" },
];

export default function CatalogoCorteTaladroDesbaste() {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const productosData = useMemo(
    () =>
      corteTaladroDesbaste.flatMap((category) =>
        category.subcategories.flatMap((sub) =>
          sub.products.map((product) => ({
            id: product.id,
            nombre: product.name,
            precio: product.price ?? "Sin precio",
            img: product.images?.[0],
            cat: sub.code,
            sub: sub.name,
            measuresImages: product.measuresImages ?? [],
            descripcion: product.description,
            subtitle: product.subtitle,
            features: product.features ?? [],
            applications: product.applications ?? [],
          }))
        )
      ),
    []
  );

  const productosFiltrados = useMemo(() => {
    const lowerSearch = searchText.toLowerCase().trim();
    return productosData.filter((producto) => {
      const matchesSearch =
        !lowerSearch ||
        producto.nombre.toLowerCase().includes(lowerSearch) ||
        producto.cat?.toLowerCase().includes(lowerSearch);
      const matchesFilter =
        selectedFilters.length === 0 ||
        selectedFilters.some((filterId) => producto.cat.startsWith(filterId));
      return matchesSearch && matchesFilter;
    });
  }, [productosData, selectedFilters, searchText]);

  const cardWidth = width > 900 ? (width - 340) / 3 : (width - 310) / 2;
  return (
    <>
      <View style={styles.screen}>
        <Header
          onSearch={setSearchText}
          onMenuHover={() => setSidebarVisible(true)}
        />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentRow}>
            <View style={styles.sidebar}>
              <FilterSidebar
                title="Corte, Taladro y Desbaste"
                subcategories={SUBCATEGORIAS}
                onFilterChange={(filters: { subcategories: string[] }) =>
                  setSelectedFilters(filters.subcategories)
                }
              />
            </View>

            <View style={styles.mainContent}>
              <View style={styles.estadoBox}>
                <Text style={styles.estadoFiltro}>
                  {searchText.trim() || selectedFilters.length > 0
                    ? `Resultados: ${productosFiltrados.length}`
                    : "Mostrando todos los productos"}
                </Text>
              </View>

              <View style={styles.productosGrid}>
                {productosFiltrados.length > 0 ? (
                  productosFiltrados.map((item) => (
                    <ProductCard
                      key={item.id}
                      name={item.nombre}
                      price={item.precio}
                      image={item.img}
                      width={cardWidth}
                    />
                  ))
                ) : (
                  <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                      No se encontraron productos.
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>

          <Footer />
        </ScrollView>
      </View>

      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        categories={mainCategories}
      />
    </>
  );
}