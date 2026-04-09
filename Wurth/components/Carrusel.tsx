import { ScrollView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

type Slide = {
  image: string;
  title: string;
};

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1581092919537-7c2c6d4f0b6c',
    title: 'Catálogo de Herramientas Profesionales',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    title: 'Equipos de alta calidad',
  },
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    title: 'Soluciones para tu trabajo',
  },
];

export default function Carrusel() {
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {slides.map((item, index) => (
          <View key={index} style={{ width }}>
            
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver catálogo</Text>
              </TouchableOpacity>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 220,
  },

  overlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },

  buttonText: {
    color: '#fff',
  },
});