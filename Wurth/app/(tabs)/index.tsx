
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList } from 'react-native';
import Carrusel from '../../components/Carrusel';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { useState } from 'react';



interface Category {
  title: string;
  image: any; 
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const categories: Category[] = [
    { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.jpeg') },
    { title: 'Químicos', image: require('../../assets/quimicos.jpeg') },
    { title: 'Tornillería', image: require('../../assets/tornilleria.png') },
    { title: 'Auto y Cargo', image: require('../../assets/autoYcargo.jpeg') },
    { title: 'Anclajes', image: require('../../assets/anclaje.png') },
    { title: 'Electricidad', image: require('../../assets/electrecidad.png') },
    { title: 'Herramientas', image: require('../../assets/herramientas.jpeg') },
    { title: 'Maquinas', image: require('../../assets/maquinas.jpeg') },
    { title: 'Seguridad e Higiene', image: require('../../assets/seguridad.jpeg') },
    { title: 'Orsy', image: require('../../assets/orsy.jpeg') },
    { title: 'Agro', image: require('../../assets/agronomia.png') },
  ];

  const { width } = Dimensions.get('window');
  const cardWidth = (width - 40) / 3;
  const flatListRef = useRef<FlatList>(null);
  const scrollRef = useRef<ScrollView>(null);

const [scrollOffset, setScrollOffset] = useState(0);

const scrollLeft = () => {
  const newOffset = Math.max(0, scrollOffset - (cardWidth + 10));
  scrollRef.current?.scrollTo({ x: newOffset, animated: true });
  setScrollOffset(newOffset);
};

const scrollRight = () => {
  const newOffset = scrollOffset + (cardWidth + 10);
  scrollRef.current?.scrollTo({ x: newOffset, animated: true });
  setScrollOffset(newOffset);
};

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };
  return (
    <ScrollView>
      <Header />

      {/* HERO */}
      <Carrusel />

      {/* CATEGORÍAS */}
      <View style={styles.section}>
        <View style={styles.grid}>
          {(showAll ? categories : categories.slice(0, 6)).map((item) => (
            <CategoryCard 
              key={item.title} 
              title={item.title} 
              image={item.image} // Pasamos la propiedad image
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.redBtn}
          onPress={() => setShowAll(!showAll)}
        >
          <Text style={styles.btnText}>
            {showAll ? 'Ver menos' : 'Ver más'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* PRODUCTOS */}
      <View style={styles.sectionDestacados}>
        <View style={styles.headerRow}>
          <Text style={styles.subtitleDestacados}>Productos Destacados</Text>
        </View>

        <View style={styles.carouselContainer}>
          {/* Flecha Izquierda */}
          <TouchableOpacity style={[styles.arrowBtn, styles.leftArrow]} onPress={scrollLeft}>
            <Text style={styles.arrowText}>{"<"}</Text>
          </TouchableOpacity>


          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={cardWidth + 10} // <-- ESTO es lo que hace que pase de 1 en 1 como imán
            decelerationRate="fast"
            snapToAlignment="center" // <-- Centra la carta en la pantalla
            contentContainerStyle={{ paddingHorizontal: 10 }} // Espacio inicial para que la primera no pegue al borde
          >
            <ProductCard name="Broca HSS-Co" price={12.99} image="https://suconel.com/_next/image?url=https%3A%2F%2Fcms.suconel.com%2Fuploads%2Fht2008r_d74531a064.png&w=1200&q=75" width={cardWidth} />
            <ProductCard name="Taladro TEENO" price={299.99} image="https://suconel.com/_next/image?url=https%3A%2F%2Fcms.suconel.com%2Fuploads%2Fht2008r_d74531a064.png&w=1200&q=75" width={cardWidth} />
            <ProductCard name="Ponchadora RJ45" price={20.99} image="https://suconel.com/_next/image?url=https%3A%2F%2Fcms.suconel.com%2Fuploads%2Fht2008r_d74531a064.png&w=1200&q=75" width={cardWidth} />
            <ProductCard name="Ponchadora RJ45" price={20.99} image="https://suconel.com/_next/image?url=https%3A%2F%2Fcms.suconel.com%2Fuploads%2Fht2008r_d74531a064.png&w=1200&q=75" width={cardWidth} />
          </ScrollView>

          {/* Flecha Derecha */}
          <TouchableOpacity style={[styles.arrowBtn, styles.rightArrow]} onPress={scrollRight}>
            <Text style={styles.arrowText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* OFERTAS */}
      <View style={styles.offer}>
        <Text style={styles.offerText}>Ofertas especiales</Text>
        <TouchableOpacity style={styles.blackBtn}>
          <Text style={styles.btnText}>Ver ofertas</Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <Footer />
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');
// Calculamos el ancho: (Ancho total - padding lateral - espacios entre tarjetas) / 3
const cardWidth = (width - 60) / 3;
const styles = StyleSheet.create({
  section: {
    padding: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'center',
    gap: 10,   
    paddingVertical: 10,

  },

  redBtn: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  offer: {
    backgroundColor: '#fbc02d',
    padding: 20,
    alignItems: 'center',
  },

  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  blackBtn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 25,
  },

  card: {
  width: '30%', // Para que quepan 3 por fila con el gap
  aspectRatio: 1, // Para que sean cuadradas (opcional)
  alignItems: 'center',
  justifyContent: 'center',
  },

  gridDestacados: {
    flexDirection: 'row',
    flexWrap: 'wrap',       // <--- Esto hace que la 4ta carta baje
    justifyContent: 'flex-start', // Las alinea a la izquierda para que sigan el orden
    width: '100%',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  subtitleDestacados: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  verMasText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  sectionDestacados: {
    paddingVertical: 20,
    backgroundColor: '#666', // El gris oscuro de tu imagen
  },
  carouselContainer: {
    position: 'relative',
    paddingHorizontal: 10, // Espacio para que las cartas no toquen el borde
  },
  arrowBtn: {
    position: 'absolute',
    zIndex: 10,
    top: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Súper transparente como pediste
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftArrow: { left: 5 },
  rightArrow: { right: 5 },
  arrowText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
});