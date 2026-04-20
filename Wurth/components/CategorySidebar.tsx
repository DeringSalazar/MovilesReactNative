import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import React, { useRef } from 'react';
import {
    Animated,
    Pressable,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

type Category = {
    title: string;
    icon: string;
    href?: Href;
};

interface CategorySidebarProps {
    categories: Category[];
    activeHref?: string;
}

const COLLAPSED_WIDTH = 56;
const EXPANDED_WIDTH = 240;

export default function CategorySidebar({ categories, activeHref }: CategorySidebarProps) {
    const widthAnim = useRef(new Animated.Value(COLLAPSED_WIDTH)).current;

    const expand = () => {
        Animated.spring(widthAnim, {
            toValue: EXPANDED_WIDTH,
            useNativeDriver: false,
            speed: 20,
            bounciness: 4,
        }).start();
    };

    const collapse = () => {
        Animated.spring(widthAnim, {
            toValue: COLLAPSED_WIDTH,
            useNativeDriver: false,
            speed: 20,
            bounciness: 4,
        }).start();
    };

    const textOpacity = widthAnim.interpolate({
        inputRange: [COLLAPSED_WIDTH, EXPANDED_WIDTH * 0.7, EXPANDED_WIDTH],
        outputRange: [0, 0, 1],
    });

    return (
        <Animated.View
            style={[styles.sidebar, { width: widthAnim }]}
            // @ts-ignore - Web only
            onMouseEnter={expand}
            onMouseLeave={collapse}
        >
            {/* CÍRCULO ROJO - vuelve al home */}
            <Pressable
                style={styles.circleWrap}
                onPress={() => router.push('/(tabs)')}
            >
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="home" size={22} color="#fff" />
                </View>
                <Animated.Text style={[styles.headerLabel, { opacity: textOpacity }]}>
                    Todas las Categorías
                </Animated.Text>
            </Pressable>

            {/* CATEGORÍAS */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                {categories.map((cat) => {
                    const isActive = activeHref === cat.href;
                    return (
                        <Pressable
                            key={cat.title}
                            style={({ pressed }: any) => [
                                styles.item,
                                pressed && styles.itemPressed,
                            ]}
                            onPress={() => cat.href && router.push(cat.href)}
                        >
                            {({ hovered }: any) => (
                                <>
                                    <MaterialCommunityIcons
                                        name={cat.icon as any}
                                        size={26}
                                        color={isActive || hovered ? '#a30101' : '#fff'}
                                    />
                                    <Animated.Text
                                        style={[
                                            styles.itemLabel,
                                            (isActive || hovered) && styles.itemLabelActive,
                                            { opacity: textOpacity },
                                        ]}
                                        numberOfLines={1}
                                    >
                                        {cat.title}
                                    </Animated.Text>
                                </>
                            )}
                        </Pressable>
                    );
                })}
            </ScrollView>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: '#000',
        overflow: 'hidden',
        zIndex: 100,
    } as any,

    circleWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 12,
        paddingBottom: 8,
        marginTop: 17,
    },
    circle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#CC0000',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    headerLabel: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        gap: 14,
    },
    itemPressed: {
        backgroundColor: '#1a0000',
    },
    itemLabel: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
        flex: 1,
    },
    itemLabelActive: {
        color: '#680707',
        fontWeight: '700',
    },
});