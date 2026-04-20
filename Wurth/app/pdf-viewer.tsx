import React, { useState } from 'react';
import { StyleSheet, View, Platform, ActivityIndicator, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';

const SERVER_URL = `https://api-moviles-lilac.vercel.app`;

export default function PdfViewerScreen() {
  const params = useLocalSearchParams();
  const targetPage = parseInt(params.pdfPage?.toString() || '1');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const viewerUrl = `${SERVER_URL}/catalogo/viewer?page=${targetPage}`;

  React.useEffect(() => {
    // Simula un pequeño delay para mostrar loading si es necesario
    const timer = setTimeout(() => {
      setLoading(false);
    },500); 

    return () => clearTimeout(timer);
  }, [targetPage]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#D32F2F" />
        <Text style={styles.loadingText}>Cargando catálogo...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <iframe
          src={viewerUrl}
          style={styles.iframe}
          title="PDF Viewer"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: viewerUrl }}
        style={styles.webview}
        onError={() => setError('Error al cargar el viewer')}
        onHttpError={(e) => {
          const { nativeEvent } = e;
          console.error('HTTP Error:', nativeEvent.statusCode, nativeEvent.url);
          if (nativeEvent.statusCode >= 400) {
            setError(`HTTP ${nativeEvent.statusCode}`);
          }
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        startInLoadingState={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        scalesPageToFit={true}
        allowsBackForwardNavigationGestures={false}
        scrollEnabled={true}
        {...(Platform.OS === 'android' && {
          setBuiltInZoomControls: true,
          setDisplayZoomControls: false,
        })}
        injectedJavaScript={`
          const meta = document.querySelector('meta[name="viewport"]');
          if (meta) {
            meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
          }
          true;
        `}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
  },
  iframe: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  webview: {
    flex: 1,
  },
});