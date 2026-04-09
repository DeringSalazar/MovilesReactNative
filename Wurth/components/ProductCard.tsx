import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';

type Props = {
  name: string;
  price: number;
  image: string;
  width?: number; 
};

export default function ProductCard({ name, price, image, width }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.card, width ? { width } : null]}>
      {/* Vista previa al tocar la imagen */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver más</Text>
      </TouchableOpacity>

      {/* MODAL DE VISTA PREVIA (ZOOM) */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
             <Image source={{ uri: image }} style={styles.fullImage} />
             <Text style={styles.modalTitle}>{name}</Text>
             <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Cerrar</Text>
             </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 8, // Un poco más de aire entre cartas
    alignItems: 'center',
    justifyContent: 'space-between', // Separa imagen de texto y botón
    height: 280, 
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', // Centrado vertical de la imagen
    alignItems: 'center',     // Centrado horizontal de la imagen
  },
  image: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  // ... resto de estilos (name, price)
  name: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
    height: 40, // Espacio para dos líneas
  },
  price: {
    color: '#d32f2f',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  // Estilos del Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  closeBtn: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  
});
