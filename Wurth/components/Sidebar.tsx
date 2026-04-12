import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
  categories: any[];
}

export default function Sidebar({ visible, onClose, categories }: SidebarProps) {
  if (!visible) return null;

  return (
    <View 
      style={styles.container}
      // @ts-ignore - Para soporte Web hover
      onMouseLeave={onClose} 
    >
      <View style={styles.header}>
        <MaterialCommunityIcons name="menu" size={24} color="#fff" />
        <Text style={styles.headerText}>Todas las Categorías</Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => {
            if (item.href) {
                router.push(item.href);
                onClose();
            }   
        }}
        >
            <View style={styles.itemLeft}>
              <MaterialCommunityIcons name={item.icon || 'tag'} size={22} color="#fff" />
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={18} color="#444" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80, // Ajusta según la altura de tu Header
    left: 0,
    width: 280,
    backgroundColor: '#121212',
    zIndex: 999,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  header: {
    backgroundColor: '#e30613',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#222',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 13,
  },
});