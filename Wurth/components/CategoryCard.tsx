import { Href, router } from 'expo-router';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

type Props = {
  title: string;
  image: ImageSourcePropType;
  href?: Href;
};

export default function CategoryCard({ title, image, href }: Props) {
  const { width } = useWindowDimensions();
  const cardWidth = width / 4; 
  const imageSize = cardWidth * 0.55;

  const handlePress = () => {
    if (href) router.push(href);
  };

  return (
    <Pressable
      style={[styles.card, { width: cardWidth }]}
      onPress={handlePress}
      disabled={!href}
    >
      <Image
        source={image}
        style={{ width: imageSize, height: imageSize, resizeMode: 'cover' }}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 4,
  },
  text: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});