import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carrusel from '../../components/Carrusel';
import CategoryCard from '../../components/CategoryCard';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

interface Category {
  title: string;
  image: any; // Se usa any para los recursos de require()
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const categories: Category[] = [
    { title: 'Corte, Taladro y Desbaste', image: require('../../assets/corte.png') },
    { title: 'Químicos', image: require('../../assets/quimicos.png') },
    { title: 'Tornillería', image: require('../../assets/tornilleria.png') },
    { title: 'Auto y Cargo', image: require('../../assets/auto.png') },
    { title: 'Anclajes', image: require('../../assets/anclajes.png') },
    { title: 'Electricidad', image: require('../../assets/electricidad.png') },
    { title: 'Herramientas', image: require('../../assets/herramientas.png') },
    { title: 'Maquinas', image: require('../../assets/maquinas.png') },
    { title: 'Seguridad e Higiene', image: require('../../assets/seguridad.png') },
    { title: 'Orsy', image: require('../../assets/orsy.png') },
    { title: 'Agro', image: require('../../assets/agro.png') },
  ];

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

  card: {
  width: '30%', // Para que quepan 3 por fila con el gap
  aspectRatio: 1, // Para que sean cuadradas (opcional)
  alignItems: 'center',
  justifyContent: 'center',
  },

});