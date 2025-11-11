import axios from 'axios';
import { Article } from '../models/Article';

const NEWS_API_BASE = 'https://newsapi.org/v2';
const API_KEY = 'a01dfee5f32444d18fbb4d93afd66784';

export const NewsService = {
  async fetchEverything(query: string, pageSize = 50): Promise<Article[]> {
    const q = encodeURIComponent(query || 'tecnologia');
    const url = `${NEWS_API_BASE}/everything?q=${q}&language=pt&pageSize=${pageSize}&apiKey=${API_KEY}`;
    const resp = await axios.get(url);
    if (resp.status !== 200) {
      throw new Error(`Erro na API: ${resp.status}`);
    }
    const articles = resp.data.articles as Article[];
    return articles;
  }
};
