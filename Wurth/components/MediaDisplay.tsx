import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { extractYouTubeId, isYouTubeUrl } from '../utils/mediaHelpers';

interface MediaDisplayProps {
  source: string | null | undefined;
  style?: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
}

/**
 * Componente que muestra imágenes o videos de YouTube de forma automática
 */
export const MediaDisplay: React.FC<MediaDisplayProps> = ({
  source,
  style = {},
  resizeMode = 'contain',
}) => {
  const mediaType = useMemo(() => {
    if (!source) return 'empty';
    const isYT = isYouTubeUrl(source);
    console.log('🎬 MediaDisplay - source:', typeof source === 'string' ? source.substring(0, 60) : source, 'isYouTube:', isYT);
    return isYT ? 'youtube' : 'image';
  }, [source]);

  const youtubeId = useMemo(() => {
    if (mediaType !== 'youtube' || !source) return null;
    const id = extractYouTubeId(source as string);
    console.log('📺 MediaDisplay - extracted YouTube ID:', id);
    return id;
  }, [mediaType, source]);

  if (!source) {
    return (
      <View style={[styles.placeholderContainer, style]}>
        <Text style={styles.placeholderText}>Sin media</Text>
      </View>
    );
  }

  if (mediaType === 'youtube' && youtubeId) {
    console.log('📺 MediaDisplay - Rendering YouTube video with YoutubeIframe');
    return (
      <View style={[styles.youtubeContainer, style]}>
        <YoutubeIframe
          height={140} // Altura fija que coincida con las imágenes
          width="100%" // Ancho completo
          play={false}
          videoId={youtubeId}
          onReady={() => console.log('✅ YouTube video ready')}
          onError={(error) => console.error('❌ YouTube video error:', error)}
          onChangeState={(state) => console.log('YouTube state:', state)}
          webViewStyle={styles.youtubeWebView}
        />
      </View>
    );
  }

  // Por defecto, mostrar como imagen
  console.log('🖼️ MediaDisplay - Rendering as image:', typeof source === 'string' ? source.substring(0, 50) : source);
  return (
    <Image
      source={
        typeof source === 'string'
          ? { uri: source }
          : source
      }
      style={[styles.image, style]}
      resizeMode={resizeMode}
      onError={(error) => {
        console.error('❌ MediaDisplay Image Error:', error.nativeEvent.error);
      }}
    />
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
    fontSize: 14,
  },
  youtubeContainer: {
    backgroundColor: '#000',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtubeWebView: {
    width: '100%',
    height: 140,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
