import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.footer}>
      
      {/* LOGO */}
      <View style={styles.logoRow}>
        <View style={styles.shield}>
          <Text style={styles.shieldText}>W</Text>
        </View>
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
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },

  // LOGO
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  shield: {
    width: 28,
    height: 32,
    backgroundColor: '#d32f2f',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  shieldText: {
    color: '#fff',
    fontWeight: '900',
  },

  logoText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 2,
  },

  // COLUMNAS
  columns: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  column: {
    flex: 1,
  },

  colTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 8,
  },

  link: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },

  // REDES
  socials: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  socialBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  socialText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // COPY
  copy: {
    color: '#777',
    fontSize: 11,
  },
});