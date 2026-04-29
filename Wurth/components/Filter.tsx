import React, { useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

export type SubCategory = {
  id: string;
  label: string;
};

export type Filters = {
  subcategories: string[];
};

interface FilterSidebarProps {
  title?: string;
  subcategories: SubCategory[];
  onFilterChange?: (filters: Filters) => void;
  // Drawer controlado desde afuera en móvil
  drawerVisible?: boolean;
  onDrawerClose?: () => void;
}

export default function FilterSidebar({
  title = 'Filtros',
  subcategories,
  onFilterChange,
  drawerVisible = false,
  onDrawerClose,
}: FilterSidebarProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(true);

  const animHeight = useRef(new Animated.Value(1)).current;
  const drawerAnim = useRef(new Animated.Value(260)).current;

  // Sincronizar animación con drawerVisible
  React.useEffect(() => {
    if (drawerVisible) {
      Animated.spring(drawerAnim, {
        toValue: 0,
        useNativeDriver: true,
        speed: 20,
        bounciness: 4,
      }).start();
    } else {
      Animated.timing(drawerAnim, {
        toValue: 260,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [drawerVisible]);

  const toggleAccordion = () => {
    Animated.timing(animHeight, {
      toValue: expanded ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const toggleItem = (id: string) => {
    const updated = selected.includes(id)
      ? selected.filter((c) => c !== id)
      : [...selected, id];
    setSelected(updated);
    onFilterChange?.({ subcategories: updated });
  };

  const clearAll = () => {
    setSelected([]);
    onFilterChange?.({ subcategories: [] });
  };

  const maxHeight = animHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 600],
  });

  const filterContent = (
    <>
      <View style={styles.divider} />

      {selected.length > 0 && (
        <View style={styles.activeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {selected.length} activo{selected.length > 1 ? 's' : ''}
            </Text>
          </View>
          <TouchableOpacity onPress={clearAll}>
            <Text style={styles.clearBtn}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.sectionTitle}>Subcategorías</Text>

      {subcategories.length === 0 ? (
        <Text style={styles.emptyText}>Sin subcategorías</Text>
      ) : (
        subcategories.map((item, index) => {
          const isSelected = selected.includes(item.id);
          const isLast = index === subcategories.length - 1;
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.checkRow,
                isSelected && styles.checkRowSelected,
                isLast && styles.checkRowLast,
              ]}
              onPress={() => toggleItem(item.id)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                {isSelected && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={[styles.checkLabel, isSelected && styles.checkLabelSelected]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })
      )}
    </>
  );

  // ── MÓVIL: drawer controlado desde afuera ─────────────────────────────────
  if (isMobile) {
    if (!drawerVisible) return null;
    return (
      <>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onDrawerClose}
        />
        <Animated.View
          style={[styles.drawer, { transform: [{ translateX: drawerAnim }] }]}
        >
          <View style={styles.drawerHeader}>
            <View style={styles.titleRow}>
              <View style={styles.titleAccent} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onDrawerClose}>
              <Text style={styles.closeBtn}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {filterContent}
          </ScrollView>
        </Animated.View>
      </>
    );
  }

  // ── DESKTOP: sidebar fijo ─────────────────────────────────────────────────
  return (
    <View style={styles.wrapper}>
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={toggleAccordion}
          activeOpacity={0.8}
        >
          <View style={styles.titleRow}>
            <View style={styles.titleAccent} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.chevron}>{expanded ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        <Animated.View style={{ maxHeight, overflow: 'hidden' }}>
          {filterContent}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    width: 220,
  },
  sidebar: {
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  chevron: {
    fontSize: 10,
    color: '#bbb',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 98,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 260,
    backgroundColor: '#fff',
    zIndex: 99,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: -3, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  closeBtn: {
    fontSize: 18,
    color: '#888',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleAccent: {
    width: 4,
    height: 18,
    backgroundColor: '#CC0000',
    borderRadius: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: 0.2,
  },
  divider: {
    height: 1,
    backgroundColor: '#f5f5f5',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  activeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#fff0f0',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#ffcccc',
  },
  badgeText: {
    fontSize: 11,
    color: '#CC0000',
    fontWeight: '700',
  },
  clearBtn: {
    fontSize: 12,
    color: '#CC0000',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#bbb',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 10,
  },
  checkRowSelected: {
    backgroundColor: '#fff8f8',
    borderLeftWidth: 3,
    borderLeftColor: '#CC0000',
  },
  checkRowLast: {
    marginBottom: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxSelected: {
    backgroundColor: '#CC0000',
    borderColor: '#CC0000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '900',
  },
  checkLabel: {
    fontSize: 13,
    color: '#555',
    flex: 1,
    lineHeight: 18,
  },
  checkLabelSelected: {
    color: '#CC0000',
    fontWeight: '700',
  },
  emptyText: {
    fontSize: 13,
    color: '#bbb',
    fontStyle: 'italic',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});