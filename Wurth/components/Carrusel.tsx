import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
    image: require('../assets/carrusel3.png'),
    title: 'Soluciones para tu Trabajo',
    buttonLabel: 'Ver más',
  },
];

// Diferentes configuraciones Ken Burns para cada slide
const kenBurnsConfigs = [
  {fromScale: 1.15, toScale: 1.0, fromX: -25,  toX: 25 },
  { fromScale: 1.15, toScale: 1.0, fromX: -25,  toX: 25 },
  { fromScale: 1.15, toScale: 1.0, fromX: -25,  toX: 25 },
];

export default function Carrusel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  // Animaciones Ken Burns
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const translateXAnim = useRef(new Animated.Value(0)).current;

  // Fade entre slides
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Texto
  const textFade = useRef(new Animated.Value(1)).current;
  const textTranslate = useRef(new Animated.Value(0)).current;

  const startKenBurns = (index: number) => {
    const cfg = kenBurnsConfigs[index % kenBurnsConfigs.length];
    scaleAnim.setValue(cfg.fromScale);
    translateXAnim.setValue(cfg.fromX);

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: cfg.toScale,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: cfg.toX,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateTextIn = () => {
    textFade.setValue(0);
    textTranslate.setValue(20);
    Animated.parallel([
      Animated.timing(textFade, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(textTranslate, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const goToSlide = (next: number) => {
    // Fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setPrevIndex(activeIndex);
      setActiveIndex(next);
      fadeAnim.setValue(0);

      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();

      startKenBurns(next);
      animateTextIn();
    });
  };

  // Auto-slide cada 4 segundos
  useEffect(() => {
    startKenBurns(0);
    animateTextIn();

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % slides.length;
        goToSlide(next);
        return prev; // goToSlide maneja el cambio
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[activeIndex];

  return (
    <View style={styles.wrapper}>
      {/* Imagen con Ken Burns */}
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateX: translateXAnim },
            ],
          },
        ]}
      >
        <Image source={current.image} style={styles.image} resizeMode="cover" />
      </Animated.View>

      {/* Overlay degradado */}
      <View style={styles.overlay} />

      {/* Contenido con animación */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity: textFade,
            transform: [{ translateY: textTranslate }],
          },
        ]}
      >
        <Text style={styles.title}>{current.title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{current.buttonLabel ?? 'Ver más'}</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Flecha izquierda */}
      <TouchableOpacity
        style={[styles.arrow, styles.arrowLeft]}
        onPress={() => goToSlide((activeIndex - 1 + slides.length) % slides.length)}
      >
        <Text style={styles.arrowText}>‹</Text>
      </TouchableOpacity>

      {/* Flecha derecha */}
      <TouchableOpacity
        style={[styles.arrow, styles.arrowRight]}
        onPress={() => goToSlide((activeIndex + 1) % slides.length)}
      >
        <Text style={styles.arrowText}>›</Text>
      </TouchableOpacity>

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
    width: '100%',
    height: 420,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',
  } as any,
  image: {
    width: '100%',
    height: '100%',
  } as any,
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  content: {
    position: 'absolute',
    bottom: 50,
    left: 24,
    right: 24,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 14,
    lineHeight: 32,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  } as any,
  arrowLeft: {
    left: 12,
  },
  arrowRight: {
    right: 12,
  },
  arrowText: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 32,
  },
  dots: {
    position: 'absolute',
    bottom: 14,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  } as any,
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