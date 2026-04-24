import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  onSearch?: (text: string) => void;
  showBackButton?: boolean;
  onMenuPress?: () => void; // 🔹 nombre corregido
}

export default function Header({ onSearch, showBackButton = false, onMenuPress }: HeaderProps) {

  const { width } = useWindowDimensions();
  const isMobile = width < 768; // 🔹 breakpoint

  return (
    <LinearGradient
      colors={['#000000', '#242424', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <View style={styles.row}>

          {/* IZQUIERDA */}
          <View style={styles.left}>

            {/* 🔹 BOTÓN SOLO EN MÓVIL */}
            {isMobile && (
              <TouchableOpacity
                onPress={onMenuPress}
                style={styles.menuBtn}
              >
                <MaterialCommunityIcons name="menu" size={30} color="#fff" />
              </TouchableOpacity>
            )}

            {/* 🔹 LOGO */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/(tabs)')}
              style={styles.logoGroup}
            >
              <Image
                source={require('../assets/Logo.png')}
                style={styles.logoImage}
              />
              <Text style={styles.logo}>WÜRTH</Text>
            </TouchableOpacity>

          </View>

          {/* DERECHA */}
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
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  menuBtn: {
    padding: 5,
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
  },
});