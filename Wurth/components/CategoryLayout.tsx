import React from 'react';
import { ScrollView, View } from 'react-native';
import Footer from './Footer';

interface CategoryLayoutProps {
  header: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export default function CategoryLayout({
  header,
  sidebar,
  children,
}: CategoryLayoutProps) {
  return (
    <View style={{ flex: 1 }}>

      {/* HEADER fijo arriba */}
      {header}

      {/* SCROLL EXTERNO: todo hace scroll junto */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        {/* BODY: contenido + sidebar lado a lado */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>

          {/* CONTENIDO principal primero */}
          <View style={{ flex: 1 }}>
            {children}
          </View>

          {/* SIDEBAR a la derecha */}
          {sidebar}

    </View>

        {/* FOOTER siempre al final del scroll */ }
  <Footer />

      </ScrollView >

    </View >
  );
}