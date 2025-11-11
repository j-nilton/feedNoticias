import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Article } from '../models/Article';

export const NewsCard: React.FC<{ item: Article; onPress: (a: Article) => void }> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      {item.urlToImage ? (
        <Image source={{ uri: item.urlToImage }} style={styles.image} resizeMode="cover" />
      ) : null}
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        {item.description ? <Text numberOfLines={3} style={styles.desc}>{item.description}</Text> : null}
        <Text style={styles.source}>{item.source?.name ?? 'Fonte desconhecida'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2
  },
  image: {
    width: 100,
    height: 100
  },
  content: {
    flex: 1,
    padding: 8
  },
  title: {
    fontWeight: '700'
  },
  desc: {
    marginTop: 4,
    fontSize: 13
  },
  source: {
    marginTop: 6,
    fontSize: 12,
    color: '#555'
  }
});
