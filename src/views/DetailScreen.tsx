import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Linking, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage ? <Image source={{ uri: article.urlToImage }} style={styles.image} /> : null}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.source}>{article.source?.name} • {new Date(article.publishedAt).toLocaleString()}</Text>
        <Text style={styles.desc}>{article.content ?? article.description}</Text>
        <Button title="Abrir no navegador" onPress={() => Linking.openURL(article.url)} />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 220 },
  content: { padding: 12 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  source: { color: '#767575ff', marginBottom: 12 },
  desc: { fontSize: 15, lineHeight: 22 }
});
