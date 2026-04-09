import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { findFocusedRoute } from '@react-navigation/native';

export default function Header() {
  return (
    <LinearGradient
      colors={['#000000', '#eaeaea']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          
          {/* Logo */}
          <View style={styles.logoGroup}>
            <Image 
                source={require('../assets/Logo.png')}
                style={styles.logoImage}
            />
            <Text style={styles.logo}>WÜRTH</Text>
          </View>

          {/* NAV */}
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => router.push('/(tabs)')}>
              <Text style={styles.link}>Productos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/explore')}>
              <Text style={styles.link}>Categorías</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/modal')}>
              <Text style={styles.link}>Contacto</Text>
            </TouchableOpacity>
          </View>

          {/* BUSCADOR */}
          <TextInput
            placeholder="Buscar"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 18,
    paddingTop: 25,
  },

  container: {
    paddingHorizontal: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  logoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },

  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 4,
    includeFontPadding: false,
  },

  logoImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  nav: {
    flexDirection: 'row',
    flex: 2, // Toma el espacio del medio proporcionalmente
    justifyContent: 'space-evenly', // Reparte los links sin usar paddings fijos
    marginHorizontal: 10,
  },

  link: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    // Eliminamos el paddingHorizontal: 50 porque empujaba los elementos fuera de la pantalla
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 35,
    flex: 1, // El input ahora crece o encoge según el espacio restante
    minWidth: 100, // No se hará más pequeño que esto
    maxWidth: 300, // No se hará más grande que tu diseño original
  },
});