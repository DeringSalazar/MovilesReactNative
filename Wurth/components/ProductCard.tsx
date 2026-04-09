import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff' }}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  price: {
    color: 'red',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#d32f2f',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
});