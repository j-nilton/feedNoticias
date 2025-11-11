export type LoginState = {
  userId: string | null;
  loading: boolean;
  error: string | null;
};

export type LoginActions = {
  handleLogin: (email: string, password: string) => Promise<void>;
};
