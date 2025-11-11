import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useLoginViewModel } from '../viewmodels/LoginViewModel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [{ userId, loading, error }, { handleLogin }] = useLoginViewModel();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userId) {
      navigation.replace('Home');
    }
  }, [userId, navigation]);

  const onSubmit = async () => {
    await handleLogin(email.trim(), password);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={onSubmit} disabled={loading} />
      <View style={styles.note}>
        <Text>Use aluno@ifpi.com / pdmifpi para teste local.</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
  error: { color: '#b00020', marginBottom: 8 },
  note: { marginTop: 16, alignItems: 'center' }
});
