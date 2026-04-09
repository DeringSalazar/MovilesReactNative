import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import CategoryCard from '../../components/CategoryCard';
import ProductCard from '../../components/ProductCard';
import Carrusel from '../../components/Carrusel';

export default function Home() {
  return (
    <ScrollView>
      <Header />

      {/* HERO */}
      <View style={styles.hero}>
        {/*<Carrusel />*/}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1581092919537-7c2c6d4f0b6c' }}
          style={styles.heroImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Catálogo de Herramientas Profesionales</Text>
          <TouchableOpacity style={styles.redBtn}>
            <Text style={styles.btnText}>Ver catálogo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CATEGORÍAS */}
      <View style={styles.section}>
        <View style={styles.grid}>
          {[
            'Herramientas',
            'Anclajes',
            'Tornillería',
            'Corte y Desbaste',
            'Químicos',
            'Agronomía',
          ].map((item) => (
            <CategoryCard key={item} title={item} />
          ))}
        </View>

        <TouchableOpacity style={styles.redBtn}>
          <Text style={styles.btnText}>Ver más</Text>
        </TouchableOpacity>
      </View>

      {/* PRODUCTOS */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Productos Destacados</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard
            name="Broca HSS-Co"
            price={12.99}
            image="https://cdn-icons-png.flaticon.com/512/809/809957.png"
          />
          <ProductCard
            name="Taladro TEENO"
            price={299.99}
            image="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
          />
          <ProductCard
            name="Ponchadora RJ45"
            price={20.99}
            image="https://cdn-icons-png.flaticon.com/512/4149/4149675.png"
          />
        </ScrollView>
      </View>

      {/* OFERTAS */}
      <View style={styles.offer}>
        <Text style={styles.offerText}>Ofertas especiales</Text>
        <TouchableOpacity style={styles.blackBtn}>
          <Text style={styles.btnText}>Ver ofertas</Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={{ color: '#fff' }}>WÜRTH</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: { position: 'relative' },
  heroImage: { width: '100%', height: 200 },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  redBtn: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  btnText: { color: '#fff' },
  section: { padding: 15 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  },
  footer: {
    backgroundColor: '#222',
    padding: 20,
    alignItems: 'center',
  },
});