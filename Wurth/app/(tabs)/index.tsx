import { usePathname, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Carrusel from '../../components/Carrusel';
import CategoryCard from '../../components/CategoryCard';
import CategorySidebar from '../../components/CategorySidebar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Sidebar from '../../components/Sidebar';

interface Category {
  title: string;
  image: any;
  icon: string;
  href?:
  | '/grupo-fer/auto'
  | '/grupo-fer/anclajes'
  | '/grupo-iby/electricidad'
  | '/grupo-iby/herramientas'
  | '/grupo-erik/quimicos'
  | '/grupo-erik/tornilleria'
  | '/orsy-Agro/orsy'
  | '/orsy-Agro/agro'
  | '/grupo-alvaro/seguridad'
  | '/grupo-alvaro/maquinas'
  | '/grupo-fabi/corteTaladroDesbaste';
}

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const [showAll, setShowAll] = useState(false);
  const extraAnim = useRef(new Animated.Value(0)).current;
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const categories: Category[] = [
    { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.jpeg'), icon: 'disc', href: '/grupo-fabi/corteTaladroDesbaste' },
    { title: '  Químicos', image: require('../../assets/quimicos.jpeg'), icon: 'flask', href: '/grupo-erik/quimicos' },
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

  {/*categorias iniciales*/ }
  const homeCategories: Category[] = [
  { title: 'Construcción', image: require('../../assets/construccion.png'), icon: 'brush' },
  { title: 'Ferretería', image: require('../../assets/ferreteria.png'), icon: 'lightbulb' },
  { title: 'Auto y Cargo', image: require('../../assets/autoYcargo.jpeg'), icon: 'toolbox' },
  ...categories,
  ];

  const getColumns = () => {
    if (width > 1200) return 4;
    if (width > 768) return 3;
    return 2;
  };

  const columns = getColumns();
  const cardWidth = Math.min(width / columns, 450);
  const scrollRef = useRef<ScrollView>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleToggle = () => {
    if (!showAll) {
      setShowAll(true);
      Animated.spring(extraAnim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 12,
        bounciness: 6,
      }).start();
    } else {
      Animated.timing(extraAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowAll(false));
    }
  };

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

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>

      {/* SIDEBAR IZQUIERDO */}
      <CategorySidebar
        categories={categories}
        activeHref={pathname}
      />

      <View style={{ flex: 1 }}>

        {/* HEADER FIJO */}
        <Header
          onMenuPress={() => setSidebarVisible(true)}
          showSearch={false}
        />

        {/* CONTENIDO con scroll */}
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

          {/* HERO */}
          <Carrusel />

          {/* CATEGORÍAS */}
          <View style={styles.section}>
            <View style={styles.grid}>
              {homeCategories.slice(0, 3).map((item) => (
                <TouchableOpacity
                  key={item.title}
                  onPress={() => item.href && router.push(item.href)}
                  activeOpacity={0.8}
                >
                  <CategoryCard title={item.title} image={item.image} />
                </TouchableOpacity>
              ))}

              {showAll && (
                <Animated.View style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 10,
                  width: '100%',
                  opacity: extraAnim,
                  transform: [{
                    translateY: extraAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  }],
                }}>
                  {homeCategories.slice(3).map((item) => (
                    <CategoryCard
                      key={item.title}
                      title={item.title}
                      image={item.image}
                      href={item.href}
                    />
                  ))}
                </Animated.View>
              )}
            </View>

            <TouchableOpacity style={styles.redBtn} onPress={handleToggle}>
              <Text style={styles.btnText}>
                {showAll ? 'Ver menos' : 'Ver más'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* PRODUCTOS DESTACADOS */}
          <View style={styles.sectionDestacados}>
            <View style={styles.headerRow}>
              <Text style={styles.subtitleDestacados}>Productos Destacados</Text>
            </View>

            <View style={styles.carouselContainer}>
              <TouchableOpacity style={[styles.arrowBtn, styles.leftArrow]} onPress={scrollLeft}>
                <Text style={styles.arrowText}>{'<'}</Text>
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
                <ProductCard name="Broca HSS-Co" price={12.99} image="https://carbonestore.cr/cdn/shop/products/1_YT-4361.jpg?v=1616453777" width={cardWidth} />
                <ProductCard name="Taladro TEENO" price={299.99} image="https://ferconce.com/wp-content/uploads/2022/02/TALADRO-095506.webp" width={cardWidth} />
                <ProductCard name="Ponchadora RJ45" price={20.99} image="https://www.irs.com.co/cdn/shop/products/Capturadepantalla2022-05-11105142_900x.jpg?v=1652285505" width={cardWidth} />
                <ProductCard name="Tornillo para madera" price={5.00} image="https://cr.epaenlinea.com/media/catalog/product/1/0/100010628.jpg_20250607204123917575.jpeg" width={cardWidth} />
              </ScrollView>

              <TouchableOpacity style={[styles.arrowBtn, styles.rightArrow]} onPress={scrollRight}>
                <Text style={styles.arrowText}>{'>'}</Text>
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

          <Footer />

        </ScrollView>
      </View>

      {/* SIDEBAR HAMBURGUESA */}
      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        categories={categories}
      />

    </View>
  );
}

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
    color: '#000',
  },
});