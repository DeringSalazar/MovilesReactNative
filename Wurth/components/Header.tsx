import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SearchBar } from './SearchBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HeaderProps {
  onSearch?: (text: string) => void;
  showBackButton?: boolean;
  onMenuHover?: () => void;
}

export default function Header({ onSearch, showBackButton = false, onMenuHover }: HeaderProps){
  return (
    <LinearGradient
          colors={['#000000', '#242424', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity 
            // @ts-ignore - Soporte Web
            onMouseEnter={onMenuHover} 
            style={{ padding: 5 }}
          >
            <MaterialCommunityIcons name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          
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


            <TouchableOpacity onPress={() => router.push('/modal')}>
              <Text style={styles.link}>Contacto</Text>
            </TouchableOpacity>
          </View>

          {/* BUSCADOR */}
          <SearchBar
            placeholder="Buscar"
            showButton={false}
            containerStyle={styles.searchContainer}
            inputStyle={styles.input}
            onSearch={onSearch}
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
  
  backButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
  backText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
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
    flex: 2,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },

  link: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 35,
    flex: 1,
    minWidth: 100,
    maxWidth: 300, 
  },

  searchContainer: {
    flex: 1,
    minWidth: 100,
    maxWidth: 300,
    marginHorizontal: 0,
    paddingVertical: 0,
    gap: 0,
  },
});