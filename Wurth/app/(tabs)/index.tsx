import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carrusel from '../../components/Carrusel';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <ScrollView>
      <Header />

      {/* HERO */}
      <Carrusel />

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
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    fontWeight: '600',
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
  footer: {
    backgroundColor: '#222',
    padding: 20,
    alignItems: 'center',
  },
});