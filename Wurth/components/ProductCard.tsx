import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  name: string;
  price: number;
  image: string;
  width?: number; 
  onPress?: () => void;
};

export default function ProductCard({ name, price, image, width, onPress }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.card, width ? { width } : null]}>
      {/* Vista previa al tocar la imagen */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
      </View>

      <TouchableOpacity
  style={styles.button}
  onPress={() => setModalVisible(true)}
>
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
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 6,
    elevation: 4,
    justifyContent: 'space-between', // distribuye mejor
  },

  imageContainer: {
    width: '100%',
    height: 160, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '90%',
  height: '90%',
  resizeMode: 'contain',
  },

  infoContainer: {
    marginVertical: 8,
    alignItems: 'center',
  },

  name: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
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
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8, 
    width: 120,
    alignSelf: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
    maxWidth: 400, // controla el tamaño en pantallas grandes
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
  },

  closeBtn: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: 120,
    alignSelf: 'center'
  },
});