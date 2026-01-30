import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { articuloService } from '../../src/services/articuloService';
import { COLORS } from '../../src/constants/config';

const CATEGORIAS = [
  'Electrónica',
  'Ropa',
  'Hogar',
  'Deportes',
  'Libros',
  'Juguetes',
  'Otro',
];

export default function AddScreen() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: 'Electrónica',
    estado: 'disponible',
  });
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!formData.nombre || !formData.descripcion) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      const articulo = await articuloService.createArticulo(formData);

      if (imageUri) {
        await articuloService.uploadImage(articulo.id, imageUri);
      }

      Alert.alert('Éxito', 'Artículo publicado correctamente', [
        {
          text: 'OK',
          onPress: () => {
            setFormData({
              nombre: '',
              descripcion: '',
              categoria: 'Electrónica',
              estado: 'disponible',
            });
            setImageUri(null);
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Error', error.detail || 'Error al publicar artículo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Publicar artículo</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nombre del artículo *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Laptop HP"
            value={formData.nombre}
            onChangeText={(value) => handleChange('nombre', value)}
          />

          <Text style={styles.label}>Descripción *</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe tu artículo..."
            value={formData.descripcion}
            onChangeText={(value) => handleChange('descripcion', value)}
            multiline
            numberOfLines={4}
          />

          <Text style={styles.label}>Categoría</Text>
          <View style={styles.categoryContainer}>
            {CATEGORIAS.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.categoryChip,
                  formData.categoria === cat && styles.categoryChipActive,
                ]}
                onPress={() => handleChange('categoria', cat)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    formData.categoria === cat && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Imagen</Text>
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <Text style={styles.imageButtonText}>
              {imageUri ? '📷 Cambiar imagen' : '📷 Agregar imagen'}
            </Text>
          </TouchableOpacity>

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.imagePreview} />
          )}

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Publicando...' : 'Publicar artículo'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
    color: COLORS.text,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryText: {
    fontSize: 14,
    color: COLORS.text,
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  imageButton: {
    backgroundColor: COLORS.card,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderStyle: 'dashed',
  },
  imageButtonText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
