import React from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import type { ProductSummary } from '../types/products';
import { MediaDisplay } from './MediaDisplay';

interface ProductCardProps {
  product: ProductSummary;
  carouselIndex: number;
  onPress: () => void;
  onViewMeasures: () => void; 
  onNextImage: () => void;
  onPreviousImage: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  carouselIndex,
  onPress,
  onViewMeasures, 
  onNextImage,
  onPreviousImage,
}) => {
  const { width } = useWindowDimensions();
  const cardWidth = width < 768 ? (width - 40) / 2 : '30%';
  const minHeight = width < 768 ? 200 : 360;

  const rawImages = product.product_image;
  const images: string[] = Array.isArray(rawImages) 
    ? rawImages 
    : typeof rawImages === 'string' && rawImages.trim() !== ''
      ? [rawImages] 
      : [];

  console.log('Imágenes del producto:', images);
  
  const safeIndex = images.length > 0 ? carouselIndex % images.length : 0;
  const currentImage = images[safeIndex];
  const hasManyImages = images.length > 1;

  return (
    <View style={[styles.card, { width: cardWidth, minHeight }]}>
      {/* ── Carrusel de imagen ── */}
      <View style={styles.imageCarousel}>
        <Pressable onPress={onPress} style={styles.imageTapArea}>
          {currentImage ? (
            <MediaDisplay
              source={currentImage}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.placeholderText}>Sin imagen</Text>
            </View>
          )}
        </Pressable>

        {hasManyImages && (
          <Pressable 
            style={[styles.carouselArrow, styles.carouselArrowLeft]} 
            onPress={onPreviousImage}
          >
            <Text style={styles.carouselArrowText}>‹</Text>
          </Pressable>
        )}
        {hasManyImages && (
          <Pressable 
            style={[styles.carouselArrow, styles.carouselArrowRight]} 
            onPress={onNextImage}
          >
            <Text style={styles.carouselArrowText}>›</Text>
          </Pressable>
        )}
      </View>

      {hasManyImages && (
        <View style={styles.carouselDots}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.carouselDot, index === safeIndex && styles.carouselDotActive]}
            />
          ))}
        </View>
      )}

      {/* ── Info del producto ── */}
      <Pressable onPress={onPress}>
        <Text style={styles.productName}>{product.product_name}</Text>
        {product.subcategory_code && (
          <Text style={styles.productCode}>{product.subcategory_code}</Text>
        )}
        {product.subcategory_name && (
          <Text style={styles.productSubtitle}>{product.subcategory_name}</Text>
        )}
      </Pressable>

      <Pressable onPress={onViewMeasures} style={styles.measureToggle}>
        <Text style={styles.measureToggleText}>Ver medidas</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 12,
    marginHorizontal: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent: 'space-between',
  },
  image: { 
    width: '100%', 
    height: 140, 
    borderRadius: 8,
    zIndex: 1,
  },
  placeholderImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: { color: '#999', fontSize: 12 },
  imageCarousel: {
    position: 'relative',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTapArea: { width: '100%' },
  carouselArrow: {
    position: 'absolute',
    top: '40%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  carouselArrowLeft: { left: 4 },
  carouselArrowRight: { right: 4 },
  carouselArrowText: { color: '#FFF', fontSize: 14, fontWeight: '700' },
  carouselDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 6,
    gap: 4,
  },
  carouselDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#B3B3B3' },
  carouselDotActive: { backgroundColor: '#D32F2F' },
  productName: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
  },
  productCode: {
    fontSize: 12,
    color: '#D32F2F',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 2,
  },
  productSubtitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginBottom: 4,
  },
  measureToggle: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#D32F2F',
    alignSelf: 'center',
  },
  measureToggleText: {
    color: '#FFF',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '600',
  },
  measureContainer: {
    marginTop: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 6,
    padding: 6,
  },
  measureHeader: { fontSize: 12, fontWeight: '700', marginBottom: 4, color: '#333333' },
  measureRow: { fontSize: 12, color: '#333333', marginBottom: 2 },
  measureImage: { width: '100%', height: 120, marginBottom: 6, borderRadius: 6 },
});