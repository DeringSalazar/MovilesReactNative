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
  TextInput,
  ImageSourcePropType,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  img: any;
};

type CategoriaPrincipal = "TODOS" | "CORTE" | "TALADRO" | "DESBASTE";

type ProductCardProps = {
  name: string;
  price: string;
  image: ImageSourcePropType | string;
  width?: number;
  onViewMore?: () => void;
};

function ProductCard({
  name,
  price,
  image,
  width,
  onViewMore,
}: ProductCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const imageSource =
    typeof image === "string" ? { uri: image } : image;

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

      <TouchableOpacity style={cardStyles.button} onPress={onViewMore}>
        <Text style={cardStyles.buttonText}>Ver más</Text>
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

const SUBCATEGORIAS: Record<
  Exclude<CategoriaPrincipal, "TODOS">,
  { codigo: string; nombre: string }[]
> = {
  CORTE: [
    { codigo: "01.05", nombre: "01.05 Discos de corte y desbaste" },
    { codigo: "01.06", nombre: "01.06 Sierras" },
  ],
  TALADRO: [
    { codigo: "01.01", nombre: "01.01 Brocas" },
    { codigo: "01.02", nombre: "01.02 Avellanadoras y fresas" },
    { codigo: "01.03", nombre: "01.03 Machos y terrajas" },
    { codigo: "01.04", nombre: "01.04 Coronas" },
  ],
  DESBASTE: [
    { codigo: "01.07", nombre: "01.07 Discos de lija" },
    { codigo: "01.08", nombre: "01.08 Lijas" },
    { codigo: "01.09", nombre: "01.09 Muelas abrasivas" },
  ],
};

const MAPA_CATEGORIAS: Record<Exclude<CategoriaPrincipal, "TODOS">, string[]> = {
  CORTE: ["01.05", "01.06"],
  TALADRO: ["01.01", "01.02", "01.03", "01.04"],
  DESBASTE: ["01.07", "01.08", "01.09"],
};

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
      img: require("../assets/Broca Helicoidal.png"),
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
      img: require("../assets/DiscoCorte.jpg"),
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
      img: require("../assets/Sierra.png"),
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
      img: require("../assets/Broca Helicoidal.png"),
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
      img: require("../assets/Broca Helicoidal.png"),
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
      img: require("../assets/Broca Helicoidal.png"),
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
      img: require("../assets/DiscoCorte.jpg"),
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
      img: require("../assets/DiscoCorte.jpg"),
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
      img: require("../assets/DiscoCorte.jpg"),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Producto | null>(null);

  const [categoriaActiva, setCategoriaActiva] =
    useState<CategoriaPrincipal>("TODOS");
  const [subcategoriaActiva, setSubcategoriaActiva] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");

  const abrir = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setProductoSeleccionado(null);
  };

  const cambiarCategoria = (categoria: CategoriaPrincipal) => {
    if (categoria === "TODOS") {
      setCategoriaActiva("TODOS");
      setSubcategoriaActiva(null);
      return;
    }

    if (categoriaActiva === categoria) {
      setCategoriaActiva("TODOS");
      setSubcategoriaActiva(null);
      return;
    }

    setCategoriaActiva(categoria);
    setSubcategoriaActiva(null);
  };

  const productosFiltrados = useMemo(() => {
    let resultado = [...productosData];

    if (categoriaActiva !== "TODOS") {
      const categoriasPermitidas = MAPA_CATEGORIAS[categoriaActiva];
      resultado = resultado.filter((producto) =>
        categoriasPermitidas.includes(producto.cat)
      );
    }

    if (subcategoriaActiva) {
      resultado = resultado.filter(
        (producto) => producto.cat === subcategoriaActiva
      );
    }

    if (busqueda.trim()) {
      const texto = busqueda.toLowerCase().trim();

      resultado = resultado.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(texto) ||
          producto.sub.toLowerCase().includes(texto) ||
          producto.descripcion.toLowerCase().includes(texto) ||
          producto.codigo.toLowerCase().includes(texto) ||
          producto.material.toLowerCase().includes(texto) ||
          producto.uso.toLowerCase().includes(texto)
      );
    }

    return resultado;
  }, [categoriaActiva, subcategoriaActiva, busqueda]);

  const renderCategoriaPrincipal = (
    key: CategoriaPrincipal,
    label: string
  ) => (
    <TouchableOpacity
      key={key}
      style={[
        styles.categoriaBtn,
        categoriaActiva === key && styles.categoriaBtnActiva,
      ]}
      onPress={() => cambiarCategoria(key)}
    >
      <Text
        style={[
          styles.categoriaBtnText,
          categoriaActiva === key && styles.categoriaBtnTextActiva,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.headerInfo}>
            <Text style={styles.titulo}>Catálogo Würth</Text>
            <Text style={styles.subtitulo}>Corte, Taladro y Desbaste</Text>
          </View>

          <View style={styles.categoriasSection}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriasRow}
            >
              {renderCategoriaPrincipal("TODOS", "Todos")}
              {renderCategoriaPrincipal("CORTE", "Corte")}
              {renderCategoriaPrincipal("TALADRO", "Taladro")}
              {renderCategoriaPrincipal("DESBASTE", "Desbaste")}
            </ScrollView>
          </View>

          {categoriaActiva !== "TODOS" && (
            <View style={styles.subcategoriasContainer}>
              <Text style={styles.subcategoriaTitulo}>{categoriaActiva}</Text>

              {SUBCATEGORIAS[categoriaActiva].map((item) => (
                <TouchableOpacity
                  key={item.codigo}
                  style={[
                    styles.subcategoriaItem,
                    subcategoriaActiva === item.codigo &&
                      styles.subcategoriaItemActiva,
                  ]}
                  onPress={() =>
                    setSubcategoriaActiva(
                      subcategoriaActiva === item.codigo ? null : item.codigo
                    )
                  }
                >
                  <Text
                    style={[
                      styles.subcategoriaTexto,
                      subcategoriaActiva === item.codigo &&
                        styles.subcategoriaTextoActivo,
                    ]}
                  >
                    {item.nombre}
                  </Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.mostrarTodosBtn}
                onPress={() => setSubcategoriaActiva(null)}
              >
                <Text style={styles.mostrarTodosText}>
                  Ver todos los de {categoriaActiva.toLowerCase()}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.estadoBox}>
            <Text style={styles.estadoFiltro}>
              {categoriaActiva === "TODOS"
                ? "Mostrando todos los productos"
                : subcategoriaActiva
                ? `Filtrando por subcategoría ${subcategoriaActiva}`
                : `Mostrando productos de ${categoriaActiva.toLowerCase()}`}
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
                  width={(width - 44) / 2}
                  onViewMore={() => abrir(item)}
                />
              ))
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  No se encontraron productos con ese filtro o búsqueda.
                </Text>
              </View>
            )}
          </View>
        </View>

        <Footer />
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeBtn} onPress={cerrarModal}>
              <Text style={styles.closeText}>✖</Text>
            </Pressable>

            {productoSeleccionado && (
              <>
                <Image
                  source={productoSeleccionado.img}
                  style={styles.modalImg}
                />

                <Text style={styles.modalNombre}>
                  {productoSeleccionado.nombre}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.modalLabel}>Subcategoría: </Text>
                  {productoSeleccionado.sub}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.modalLabel}>Código: </Text>
                  {productoSeleccionado.codigo}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.modalLabel}>Material: </Text>
                  {productoSeleccionado.material}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.modalLabel}>Uso: </Text>
                  {productoSeleccionado.uso}
                </Text>

                <Text style={styles.modalText}>
                  <Text style={styles.modalLabel}>Stock: </Text>
                  {productoSeleccionado.stock}
                </Text>

                <Text style={styles.precio}>{productoSeleccionado.precio}</Text>

                <TouchableOpacity style={styles.btnSolicitar}>
                  <Text style={styles.btnSolicitarText}>Solicitar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    marginBottom: 12,
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
    marginVertical: 10,
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

  content: {
    paddingBottom: 20,
  },

  headerInfo: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  subtitulo: {
    marginTop: 4,
    color: "#666",
    fontSize: 14,
  },

  categoriasSection: {
    paddingLeft: 16,
    marginBottom: 14,
  },

  categoriasRow: {
    paddingRight: 16,
    gap: 10,
  },

  categoriaBtn: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  categoriaBtnActiva: {
    backgroundColor: "#D32F2F",
    borderColor: "#D32F2F",
  },

  categoriaBtnText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "700",
  },

  categoriaBtnTextActiva: {
    color: "#FFF",
  },

  subcategoriasContainer: {
    marginHorizontal: 16,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E3E3E3",
  },

  subcategoriaTitulo: {
    fontSize: 16,
    fontWeight: "800",
    color: "#C62828",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 8,
  },

  subcategoriaItem: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    backgroundColor: "#F7F7F7",
  },

  subcategoriaItemActiva: {
    backgroundColor: "#FFECEC",
  },

  subcategoriaTexto: {
    fontSize: 14,
    color: "#333",
  },

  subcategoriaTextoActivo: {
    color: "#C62828",
    fontWeight: "700",
  },

  mostrarTodosBtn: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    backgroundColor: "#FFF5F5",
  },

  mostrarTodosText: {
    color: "#C62828",
    fontSize: 14,
    fontWeight: "700",
  },

  estadoBox: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  estadoFiltro: {
    color: "#666",
    fontSize: 13,
  },

  productosGrid: {
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.60)",
  },

  modalContent: {
    backgroundColor: "#FFF",
    padding: 22,
    borderRadius: 14,
    width: 320,
    alignItems: "center",
    position: "relative",
  },

  modalImg: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },

  modalNombre: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
    marginBottom: 10,
  },

  modalText: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
    textAlign: "center",
  },

  modalLabel: {
    fontWeight: "700",
    color: "#111",
  },

  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#D32F2F",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    zIndex: 5,
  },

  closeText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 14,
  },

  precio: {
    color: "#D32F2F",
    fontWeight: "700",
    fontSize: 18,
    marginTop: 10,
  },

  btnSolicitar: {
    backgroundColor: "#D32F2F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 10,
  },

  btnSolicitarText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "700",
  },
});