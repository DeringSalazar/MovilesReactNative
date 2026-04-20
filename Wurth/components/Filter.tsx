import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
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
}

export default function FilterSidebar({
  title = 'Filtros',
  subcategories,
  onFilterChange,
}: FilterSidebarProps) {
  const { width } = useWindowDimensions();
  const isNarrow = width < 768;

  const [selected, setSelected] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(true);

  const animHeight = useRef(new Animated.Value(1)).current;

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

  if (isNarrow) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.sidebar}>

        {/* HEADER acordeón */}
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

        {/* CONTENIDO animado */}
        <Animated.View style={{ maxHeight, overflow: 'hidden' }}>

          <View style={styles.divider} />

          {/* Badge filtros activos */}
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

        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    width: 220,
     alignSelf: 'stretch',
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
    // flex: 1,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#fff',
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
  chevron: {
    fontSize: 10,
    color: '#bbb',
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