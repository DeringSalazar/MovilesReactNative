import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Footer from './Footer';

interface CategoryLayoutProps {
  header: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  filterCount?: number; // número de filtros activos para el badge
}

export default function CategoryLayout({
  header,
  sidebar,
  children,
  filterCount = 0,
}: CategoryLayoutProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Clonar el sidebar pasándole las props del drawer
  const sidebarWithProps = sidebar
    ? React.cloneElement(sidebar as React.ReactElement<any>, {
        drawerVisible: filterDrawerOpen,
        onDrawerClose: () => setFilterDrawerOpen(false),
      })
    : null;

  return (
    <View style={{ flex: 1 }}>

      {/* HEADER fijo */}
      {header}

      {/* BOTÓN FILTROS fijo en móvil, debajo del header */}
      {isMobile && sidebar && (
        <View style={styles.filterBar}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => setFilterDrawerOpen(true)}
          >
            <Text style={styles.filterBtnText}>⚙ Filtros</Text>
            {filterCount > 0 && (
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>{filterCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}

      {/* SCROLL */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        {isMobile ? (
          <View style={{ position: 'relative' }}>
            {children}
            {sidebarWithProps}
          </View>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <View style={{ flex: 1 }}>
              {children}
            </View>
            {sidebarWithProps}
          </View>
        )}

        <Footer />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  filterBar: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  filterBtn: {
    backgroundColor: '#CC0000',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  filterBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  filterBadge: {
    backgroundColor: '#fff',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  filterBadgeText: {
    color: '#CC0000',
    fontSize: 10,
    fontWeight: '800',
  },
});