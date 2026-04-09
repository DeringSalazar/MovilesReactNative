import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type FooterLink = {
  label: string;
  onPress?: () => void;
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
    title: 'Sobre Nosotros',
    links: [
      { label: 'Quiénes somos' },
      { label: 'Trabaja con nosotros' },
    ],
  },
  {
    title: 'Información',
    links: [
      { label: 'Atención al cliente' },
      { label: 'Envíos y devoluciones' },
    ],
  },
];

export default function Footer({ columns = defaultColumns }: Props) {
  return (
    
    <LinearGradient
      colors={['#000000', '#2e2e2e', '#000000']}
      
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.footer}
    >
    <View style={styles.footer}>
      
      {/* LOGO */}
      <View style={styles.logoRow}>
          <Image 
                      source={require('../assets/Logo.png')}
                      style={styles.logoImage}
                  />
        <Text style={styles.logoText}>WÜRTH</Text>
      </View>

      {/* COLUMNAS */}
      <View style={styles.columns}>
        {columns.map((col) => (
          <View key={col.title} style={styles.column}>
            <Text style={styles.colTitle}>{col.title}</Text>

            {col.links.map((link) => (
              <TouchableOpacity key={link.label} onPress={link.onPress}>
                <Text style={styles.link}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* REDES (simples) */}
      <View style={styles.socials}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialText}>in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialText}>▶</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Text style={styles.socialText}>◉</Text>
        </TouchableOpacity>
      </View>

      {/* COPYRIGHT */}
      <Text style={styles.copy}>
        © 2026 WÜRTH - Todos los derechos reservados
      </Text>

    </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    
    paddingVertical: 30,
    paddingHorizontal: 15,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 0, 
  },

  logoImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 5, 
  },

  logoText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    letterSpacing: 0.5,
  },

  columns: {
    flexDirection: 'row',
    marginBottom: 25,
  },

  column: {
    flex: 1,
  },

  colTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },

  link: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 8,
  },

  socials: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  socialBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  socialText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  copy: {
    color: '#777',
    fontSize: 11,
    marginTop: 10,
  },
});