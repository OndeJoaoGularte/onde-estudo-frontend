import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/entities'; // Ajuste o caminho da sua tipagem

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      login: (user, token) => set({ user, token, isLoggedIn: true }),
      logout: () => set({ user: null, token: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage', // Nome da chave que ficará no localStorage
    }
  )
);