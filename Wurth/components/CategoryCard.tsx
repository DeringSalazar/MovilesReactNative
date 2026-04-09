import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type Props = {
  title: string;
  image: ImageSourcePropType; // Tipo específico de RN para imágenes
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <View style={styles.card}>
      <Image 
        source={image} 
        style={styles.imageIcon} 
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%',
    backgroundColor: '#fff', // Cambiado a blanco para que resalte como en la imagen
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // Sombras opcionales para parecerse a la imagen de referencia
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain', // Importante para que no se deforme el icono
  },
  text: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});