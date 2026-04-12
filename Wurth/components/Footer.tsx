import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native';

type FooterLink = {
  label: string;
  url: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type Props = {
  columns?: FooterColumn[];
};

const defaultColumns: FooterColumn[] = [
{
    title: 'SOBRE WÜRTH',
    links: [
      { label: 'Empresa', url: 'https://www.wurth.es/empresa' },
      { label: 'Museo', url: 'https://www.museowurth.es/' },
      { label: 'Ayuda', url: 'https://www.wurth.es/ayuda' },
      { label: 'Compliance', url: 'https://www.wurth.es/compliance' },
      { label: 'Calidad', url: 'https://www.wurth.es/calidadwurth' },
      { label: 'Sostenibilidad', url: 'https://www.wurth.es/sostenibilidad' },
    ],
  },
  {
    title: 'Contáctanos',
    links: [
      { label: '+506 4404 5000', url: 'tel:+50644045000' }, 
    ],
  },
];
export default function Footer({ columns = defaultColumns }: Props) {
  
  const handlePress = (url: string) => {
    if (url && url !== '#') {
      Linking.openURL(url).catch((err) => console.error("Error al abrir URL:", err));
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#1a1a1a', '#000000']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradientWrapper}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        {/* LOGO */}
        <View style={styles.logoRow}>
          <Image 
            source={require('../assets/Logo.png')} 
            style={styles.logoImage} 
          />
          <Text style={styles.logoText}>WÜRTH</Text>
        </View>

        {/* COLUMNA SOBRE WÜRTH */}
        <View style={styles.columnsGrid}>
          {columns.map((col, index) => (
            <View key={index} style={styles.column}>
              <Text style={styles.colTitle}>{col.title}</Text>
              
              {col.links.map((link) => (
                <TouchableOpacity 
                  key={link.label} 
                  onPress={() => handlePress(link.url)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.linkText}>{link.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* REDES SOCIALES */}
        <Text style={styles.colTitle}>¡SÍGUENOS!</Text>
        <View style={styles.socials}>
          {[
            { id: 'fb', url: 'https://www.facebook.com/WURTH.ES/', img: require('../assets/images/facebook.png') },
            { id: 'yt', url: 'https://www.youtube.com/user/canalwurtheshop', img: require('../assets/images/youtube.png') },
            { id: 'in', url: 'https://linkedin.com', img: require('../assets/images/linkedin.png') },
            { id: 'ig', url: 'https://www.instagram.com/wurth_es/', img: require('../assets/images/instagram.png') },
            { id: 'tk', url: 'https://www.tiktok.com/@wurth_es', img: require('../assets/images/tik-tok.png') },
          ].map((social) => (
            <TouchableOpacity 
              key={social.id} 
              style={styles.socialBtn} 
              onPress={() => handlePress(social.url)}
            >
              <Image 
                source={social.img} 
                style={styles.socialIconImage} 
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* COPYRIGHT */}
        <View style={styles.footerBottom}>
          <Text style={styles.copy}>
            © 2026 WÜRTH - Todos los derechos reservados
          </Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 30,
    paddingHorizontal: 35,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  logoText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 24,
    letterSpacing: 1,
  },

  columnsGrid: {
    flexDirection: 'row', 
    flexWrap: 'wrap',    
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  column: {
    minWidth: '45%', 
    marginBottom: 20,
  },
  colTitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  linkText: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 10,
  },
  socials: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  socialBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#979595be',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  socialIconImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 20,
    alignItems: 'center',
  },
  copy: {
    color: '#666',
    fontSize: 11,
  },
});
