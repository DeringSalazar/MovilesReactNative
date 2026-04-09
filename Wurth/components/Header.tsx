import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

export default function Header() {
  return (
    <LinearGradient
      colors={['#000000', '#eaeaea']} // negro → gris
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }} // horizontal (como CSS: to right)
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

  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },

  nav: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    justifyContent: 'center',
  },

  link: {
    color: '#fff',
    fontSize: 13,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 35,
    width: 140,
  },

  logoImage: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
},

});