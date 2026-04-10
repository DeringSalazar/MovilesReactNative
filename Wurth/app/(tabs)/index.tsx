import { useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carrusel from '../../components/Carrusel';
import CategoryCard from '../../components/CategoryCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';


interface Category {
  title: string;
  image: any; 
<<<<<<< HEAD
  href?: '/grupo-fer/auto' | '/grupo-fer/anclajes' | '/grupo-iby/electricidad' | '/grupo-iby/herramientas' | '/grupo-alvaro/seguridad' | '/grupo-alvaro/maquinas' | '/grupo-erik/quimicos' | '/grupo-erik/tornilleria';
=======
  href?: '/grupo-fer/auto' | '/grupo-fer/anclajes' | '/grupo-iby/electricidad' | '/grupo-iby/herramientas' | '/grupo-erik/quimicos' | '/grupo-erik/tornilleria'| '/orsy-Agro/agro';
>>>>>>> Desarrollo
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const categories: Category[] = [
    { title: 'Químicos', image: require('../../assets/quimicos.jpeg'), href: '/grupo-erik/quimicos' },
    { title: 'Tornillería', image: require('../../assets/tornilleria.png'), href: '/grupo-erik/tornilleria' },
    { title: 'Auto y Cargo', image: require('../../assets/autoYcargo.jpeg'), href: '/grupo-fer/auto' },
    { title: 'Anclajes', image: require('../../assets/anclaje.png'), href: '/grupo-fer/anclajes' },
    { title: 'Maquinas', image: require('../../assets/maquinas.jpeg'), href: '/grupo-alvaro/maquinas' },
    { title: 'Seguridad e Higiene', image: require('../../assets/seguridad.jpeg'), href: '/grupo-alvaro/seguridad' },
    { title: 'Electricidad', image: require('../../assets/electrecidad.png'), href: '/grupo-iby/electricidad' },
    { title: 'Herramientas', image: require('../../assets/herramientas.jpeg'), href: '/grupo-iby/herramientas' },
<<<<<<< HEAD
    { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.jpeg') },
    { title: 'Orsy', image: require('../../assets/orsy.jpeg') },
    { title: 'Agro', image: require('../../assets/agronomia.png') },
=======
    { title: 'Maquinas', image: require('../../assets/maquinas.jpeg') },
    { title: 'Seguridad e Higiene', image: require('../../assets/seguridad.jpeg') },
    { title: 'Orsy', image: require('../../assets/orsy.jpeg'), href: '/orsy-Agro/orsy' },
    { title: 'Agro', image: require('../../assets/agronomia.png'), href: '/orsy-Agro/agro' },
>>>>>>> Desarrollo
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
              image={item.image} 
              href={item.href}
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
            snapToInterval={cardWidth + 10} 
            decelerationRate="fast"
            snapToAlignment="center" 
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            <ProductCard name="Broca HSS-Co" price={12.99} image= "https://carbonestore.cr/cdn/shop/products/1_YT-4361.jpg?v=1616453777" width={cardWidth} />
            <ProductCard name="Taladro TEENO" price={299.99} image="https://ferconce.com/wp-content/uploads/2022/02/TALADRO-095506.webp" width={cardWidth} />
            <ProductCard name="Ponchadora RJ45" price={20.99} image="https://www.irs.com.co/cdn/shop/products/Capturadepantalla2022-05-11105142_900x.jpg?v=1652285505" width={cardWidth} />
            <ProductCard name="Tornillo para madera" price={5.00} image="https://cr.epaenlinea.com/media/catalog/product/1/0/100010628.jpg_20250607204123917575.jpeg" width={cardWidth} />
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
  width: '30%', 
  aspectRatio: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },

  gridDestacados: {
    flexDirection: 'row',
    flexWrap: 'wrap',      
    justifyContent: 'flex-start', 
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
    backgroundColor: '#7A7A7A', 
  },
  carouselContainer: {
    position: 'relative',
    paddingHorizontal: 10, 
  },
  arrowBtn: {
    position: 'absolute',
    zIndex: 10,
    top: '40%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
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