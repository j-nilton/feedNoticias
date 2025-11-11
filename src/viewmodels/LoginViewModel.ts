import { useState } from 'react';
import { LoginState, LoginActions } from '../models/LoginTypes';

export function useLoginViewModel(): [LoginState, LoginActions] {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Simulação de autenticação local. Substituir por chamada real se houver.
      await new Promise((res) => setTimeout(res, 800));
      if (email === 'aluno@ifpi.com' && password === 'pdmifpi') {
        setUserId('user-123');
        return;
      }
      throw new Error('Credenciais inválidas');
    } catch (err: any) {
      setError(err.message || 'Erro no login');
      setUserId(null);
    } finally {
      setLoading(false);
    }
  };

  return [{ userId, loading, error }, { handleLogin }];
}
