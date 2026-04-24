import { Href, router } from 'expo-router';
import { useRef } from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions
} from 'react-native';

type Props = {
  title: string;
  image: ImageSourcePropType;
  href?: Href;
};

export default function CategoryCard({ title, image, href }: Props) {
  const { width } = useWindowDimensions();
  const columns = width < 768 ? 3 : 4;
  const cardWidth = (width - 40) / columns;
  const imageSize = cardWidth * 0.55;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.92,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 10, // rebote al soltar
    }).start();
  };

  const handlePress = () => {
    if (href) router.push(href);
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={!href}
    >
      <Animated.View
        style={[
          styles.card,
          { width: cardWidth },
          { transform: [{ scale }] },
        ]}
      >
        <Image
          source={image}
          style={{ width: imageSize, height: imageSize, resizeMode: 'cover' }}
        />
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
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