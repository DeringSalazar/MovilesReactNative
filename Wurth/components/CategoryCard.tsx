import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
};

export default function CategoryCard({ title }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>⬛</Text>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%',
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: { fontSize: 30 },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});