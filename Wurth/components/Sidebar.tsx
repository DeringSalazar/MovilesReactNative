import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
  categories: any[];
}

export default function Sidebar({ visible, onClose, categories }: SidebarProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const sidebarWidth = Math.min(width * 0.75, 280);

  if (!visible || !isMobile) return null;

  return (
    <>
      {/* OVERLAY: toca fuera para cerrar */}
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      />

      {/* SIDEBAR */}
      <View
        style={[styles.container, { width: sidebarWidth }]}
        // @ts-ignore - Soporte Web
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
                <Text style={styles.itemText} numberOfLines={1}>{item.title}</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={18} color="#444" />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 998,
  },
  container: {
    position: 'absolute',
    top: 84,
    left: 0,
    backgroundColor: '#000000',
    zIndex: 999,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderBottomRightRadius: 15,
  },
  header: {
    backgroundColor: '#d32f2f',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
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
    flex: 1,
    marginRight: 8,
  },
  itemText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 15,
    flex: 1,
  },
});