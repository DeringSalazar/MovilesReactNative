import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

type Slide = {
  image: any; 
  title: string; 
  buttonLabel?: string;
};

const slides: Slide[] = [
  {
    image: require('../assets/carrusel1.png'),
    title: 'Catálogo de Herramientas Profesionales',
    buttonLabel: 'Ver catálogo',
  },
  {
    image: require('../assets/carrusel2.png'),
    title: 'Equipos de Alta Calidad',
    buttonLabel: 'Ver más',
  },
  {
    image: require('../assets/carrusel3.jpg'),
    title: 'Soluciones para tu Trabajo',
    buttonLabel: 'Ver más',
  },
];

export default function Carrusel() {
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % slides.length;
      scrollRef.current?.scrollTo({ x: next * width, animated: true });
      setActiveIndex(next);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const goToSlide = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * width, animated: true });
    setActiveIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={item.image} style={styles.image} />

            {/* Overlay oscuro */}
            <View style={styles.overlay} />

            {/* Contenido */}
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{item.buttonLabel ?? 'Ver más'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Dots */}
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <TouchableOpacity key={i} onPress={() => goToSlide(i)}>
            <View style={[styles.dot, i === activeIndex && styles.dotActive]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  slide: {
    width,
    height: 220,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  content: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 28,
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  dots: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
    width: '100%',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  dotActive: {
    width: 22,
    backgroundColor: '#fff',
  },
});