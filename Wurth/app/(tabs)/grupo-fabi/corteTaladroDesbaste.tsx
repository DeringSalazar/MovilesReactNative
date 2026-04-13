import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FilterSidebar from "../../../components/Filter";
import { corteTaladroDesbaste } from "../../../constants/corteTaladroDesbaste";

const { width } = Dimensions.get("window");

type ProductCardProps = {
  name: string;
  price?: string;
  image: ImageSourcePropType | string;
  width?: number;
};

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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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
    if (selectedFilters.length === 0) return productosData;

    return productosData.filter((producto) =>
      selectedFilters.some((filterId) => producto.cat.startsWith(filterId))
    );
  }, [productosData, selectedFilters]);

  const cardWidth = width > 900 ? (width - 340) / 3 : (width - 310) / 2;

  return (
    <View style={styles.screen}>
      <Header />

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
                {selectedFilters.length === 0
                  ? "Mostrando todos los productos"
                  : `Filtrando por: ${selectedFilters.join(", ")}`}
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
                    No se encontraron productos con ese filtro.
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    height: 280,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  infoContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    color: "#333",
    height: 40,
  },
  price: {
    color: "#d32f2f",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#d32f2f",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
    minWidth: 100,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "#111",
  },
  closeBtnCard: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  closeBtnCardText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  sidebar: {
    width: 260,
    marginRight: 16,
  },
  mainContent: {
    flex: 1,
  },
  estadoBox: {
    paddingBottom: 12,
    paddingHorizontal: 4,
  },
  estadoFiltro: {
    color: "#666",
    fontSize: 13,
  },
  productosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 16,
  },
  emptyContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  emptyText: {
    textAlign: "center",
    color: "#555",
    fontSize: 15,
    marginBottom: 14,
  },
});