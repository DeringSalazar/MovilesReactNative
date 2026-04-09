import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

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
          
          {/* LOGO */}

        <Image 
            source={require('../assets/Logo.png')}
            style={styles.logoImage}
        />
          <Text style={styles.logo}>WÜRTH</Text>

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
    paddingVertical: 15,
  },

  container: {
    paddingHorizontal: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  logoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 4,
  },

  logoImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  nav: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },

  link: {
    color: '#fff',
    fontSize: 13,
    paddingHorizontal: 50,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 35,
    width: 300,
  },
});