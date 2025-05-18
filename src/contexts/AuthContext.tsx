
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('lira_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('lira_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo purposes, we'll accept any email/password, but validate format
      if (!email || !password) {
        throw new Error('Email e senha são obrigatórios');
      }
      
      if (!email.includes('@') || password.length < 6) {
        throw new Error('Email ou senha inválidos');
      }
      
      // Create mock user
      const newUser = {
        id: `user_${Date.now()}`,
        name: email.split('@')[0],
        email
      };
      
      // Save user to localStorage
      localStorage.setItem('lira_user', JSON.stringify(newUser));
      setUser(newUser);
      
      toast.success('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Ocorreu um erro durante o login');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (!name || !email || !password) {
        throw new Error('Todos os campos são obrigatórios');
      }
      
      if (!email.includes('@')) {
        throw new Error('Email inválido');
      }
      
      if (password.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres');
      }
      
      // Create mock user
      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email
      };
      
      // Save user to localStorage
      localStorage.setItem('lira_user', JSON.stringify(newUser));
      setUser(newUser);
      
      toast.success('Cadastro realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Ocorreu um erro durante o cadastro');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('lira_user');
    setUser(null);
    navigate('/');
    toast.success('Você saiu do sistema');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
