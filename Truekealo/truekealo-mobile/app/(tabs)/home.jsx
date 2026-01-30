import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../src/context/AuthContext';
import { articuloService } from '../../src/services/articuloService';
import ArticuloCard from '../../src/components/ArticuloCard';
import Loading from '../../src/components/UI/Loading';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../../src/constants/config';

export default function HomeScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    loadArticulos();
  }, []);

  const loadArticulos = async () => {
    try {
      const data = await articuloService.getArticulos();
      // Filtrar solo artículos disponibles
      const disponibles = data.filter(art => art.estado_articulo === 'disponible');
      setArticulos(disponibles);
    } catch (error) {
      console.error('Error al cargar artículos:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadArticulos();
  };

  const handleArticuloPress = (articulo) => {
    router.push(`/articulo/${articulo.id}`);
  };

  const filteredArticulos = articulos.filter(articulo =>
    articulo.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
    articulo.descripcion.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            Hola, {user?.nombre_completo?.split(' ')[0] || 'Usuario'}
          </Text>
          <Text style={styles.subtitle}>Encuentra artículos para intercambiar</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={COLORS.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar artículos..."
          placeholderTextColor={COLORS.textSecondary}
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <Ionicons
            name="close-circle"
            size={20}
            color={COLORS.textSecondary}
            onPress={() => setSearchText('')}
          />
        )}
      </View>

      <FlatList
        data={filteredArticulos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ArticuloCard
            articulo={item}
            onPress={() => handleArticuloPress(item)}
          />
        )}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primary}
            colors={[COLORS.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cube-outline" size={64} color={COLORS.textSecondary} />
            <Text style={styles.emptyText}>No se encontraron artículos</Text>
            <Text style={styles.emptySubtext}>
              {searchText ? 'Intenta con otra búsqueda' : 'Sé el primero en publicar'}
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    backgroundColor: COLORS.card,
  },
  greeting: {
    fontSize: TYPOGRAPHY.sizes['2xl'],
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.base,
    color: COLORS.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: TYPOGRAPHY.sizes.base,
    color: COLORS.text,
    marginLeft: SPACING.sm,
    fontFamily: 'System',
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING['2xl'],
  },
  emptyText: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: SPACING.md,
  },
  emptySubtext: {
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
});
