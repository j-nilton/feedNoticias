import React, { useEffect } from 'react';
import { View, FlatList, TextInput, StyleSheet, Button, RefreshControl } from 'react-native';
import { useNewsViewModel } from '../viewmodels/NewsViewModel';
import { NewsCard } from '../components/NewsCard';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorMessage } from '../components/ErrorMessage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [state, actions] = useNewsViewModel();
  const { articles, loading, error, query } = state;
  const { fetchNews, setQuery } = actions;

  useEffect(() => {
    fetchNews('react native');
  }, [fetchNews]);

  const onPressItem = (item: any) => {
    navigation.navigate('Detail', { articleUrl: item.url, article: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar notícias..."
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Buscar" onPress={() => fetchNews()} />
      </View>

      {loading && <LoadingIndicator />}

      {error ? <ErrorMessage message={error} /> : null}

      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <NewsCard item={item} onPress={onPressItem} />}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => fetchNews()} />}
        contentContainerStyle={{ paddingBottom: 24 }}
        onEndReached={() => fetchNews()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchRow: { flexDirection: 'row', padding: 8, alignItems: 'center' },
  searchInput: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 6, padding: 8, marginRight: 8 }
});
