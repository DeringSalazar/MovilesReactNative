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

const { width } = Dimensions.get("window");

type Producto = {
  id: string;
  nombre: string;
  cat: string;
  sub: string;
  descripcion: string;
  codigo: string;
  material: string;
  uso: string;
  stock: string;
  precio: string;
  img: string;
};

type ProductCardProps = {
  name: string;
  price: string;
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
        <Text style={cardStyles.price}>{price}</Text>
      </View>

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
  const productosData: Producto[] = [
    {
      id: "1",
      nombre: "Broca Helicoidal",
      cat: "01.01",
      sub: "01.01 Brocas",
      descripcion: "Perforación de acero",
      codigo: "00618 000 116",
      material: "Acero M35",
      uso: "Para perforar acero inoxidable",
      stock: "30",
      precio: "₡4500",
      img: "https://carbonestore.cr/cdn/shop/products/1_YT-4361.jpg?v=1616453777",
    },
    {
      id: "2",
      nombre: "Disco de Corte",
      cat: "01.05",
      sub: "01.05 Discos de corte y desbaste",
      descripcion: "Corte profesional de metal",
      codigo: "55412",
      material: "Abrasivo",
      uso: "Corte de acero y metal",
      stock: "50",
      precio: "₡3200",
      img: "https://cr.epaenlinea.com/media/catalog/product/1/0/100010628.jpg_20250607204123917575.jpeg",
    },
    {
      id: "3",
      nombre: "Sierra Circular",
      cat: "01.06",
      sub: "01.06 Sierras",
      descripcion: "Corte de precisión",
      codigo: "66221",
      material: "Acero",
      uso: "Corte de madera y metal",
      stock: "10",
      precio: "₡8500",
      img: "https://ferconce.com/wp-content/uploads/2022/02/TALADRO-095506.webp",
    },
    {
      id: "4",
      nombre: "Avellanadora Industrial",
      cat: "01.02",
      sub: "01.02 Avellanadoras y fresas",
      descripcion: "Acabado preciso en perforaciones",
      codigo: "77410",
      material: "Acero endurecido",
      uso: "Avellanado y fresado en metal",
      stock: "18",
      precio: "₡6900",
      img: "https://carbonestore.cr/cdn/shop/products/1_YT-4361.jpg?v=1616453777",
    },
    {
      id: "5",
      nombre: "Juego de Machos",
      cat: "01.03",
      sub: "01.03 Machos y terrajas",
      descripcion: "Roscas internas profesionales",
      codigo: "88921",
      material: "Acero rápido",
      uso: "Roscado de precisión",
      stock: "14",
      precio: "₡9800",
      img: "https://carbonestore.cr/cdn/shop/products/1_YT-4361.jpg?v=1616453777",
    },
    {
      id: "6",
      nombre: "Corona Bimetálica",
      cat: "01.04",
      sub: "01.04 Coronas",
      descripcion: "Cortes circulares limpios",
      codigo: "55489",
      material: "Bimetal",
      uso: "Perforación en metal y madera",
      stock: "22",
      precio: "₡7600",
      img: "https://carbonestore.cr/cdn/shop/products/1_YT-4361.jpg?v=1616453777",
    },
    {
      id: "7",
      nombre: "Disco de Lija Premium",
      cat: "01.07",
      sub: "01.07 Discos de lija",
      descripcion: "Desbaste fino y uniforme",
      codigo: "33120",
      material: "Óxido de aluminio",
      uso: "Lijado de superficies metálicas",
      stock: "40",
      precio: "₡2700",
      img: "https://cr.epaenlinea.com/media/catalog/product/1/0/100010628.jpg_20250607204123917575.jpeg",
    },
    {
      id: "8",
      nombre: "Lija de Banda",
      cat: "01.08",
      sub: "01.08 Lijas",
      descripcion: "Acabado y pulido de superficies",
      codigo: "44117",
      material: "Abrasivo flexible",
      uso: "Lijado manual e industrial",
      stock: "60",
      precio: "₡1900",
      img: "https://cr.epaenlinea.com/media/catalog/product/1/0/100010628.jpg_20250607204123917575.jpeg",
    },
    {
      id: "9",
      nombre: "Muela Abrasiva",
      cat: "01.09",
      sub: "01.09 Muelas abrasivas",
      descripcion: "Rectificado y acabado de precisión",
      codigo: "99802",
      material: "Abrasivo vitrificado",
      uso: "Desbaste y rectificado",
      stock: "12",
      precio: "₡8300",
      img: "https://cr.epaenlinea.com/media/catalog/product/1/0/100010628.jpg_20250607204123917575.jpeg",
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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
    height: 240,
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