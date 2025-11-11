import { useState, useCallback } from 'react';
import { Article } from '../models/Article';
import { NewsService } from '../services/NewsService';

export type NewsState = {
  articles: Article[];
  loading: boolean;
  error: string | null;
  query: string;
};

export type NewsActions = {
  fetchNews: (query?: string) => Promise<void>;
  setQuery: (q: string) => void;
};

export function useNewsViewModel(): [NewsState, NewsActions] {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const fetchNews = useCallback(async (q?: string) => {
    const search = typeof q === 'string' ? q : query;
    setLoading(true);
    setError(null);
    try {
      const result = await NewsService.fetchEverything(search || 'tecnologia');
      setArticles(result);
    } catch (err: any) {
      setError(err.message || 'Erro ao obter notícias');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  return [
    { articles, loading, error, query },
    { fetchNews, setQuery }
  ];
}
