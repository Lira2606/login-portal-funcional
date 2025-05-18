
import React, { useState } from 'react';
import { Google } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await login(email, password);
    } catch (error) {
      // Erro já tratado no contexto de autenticação
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.info('Login com Google não implementado nesta versão');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center text-white mb-6">Entre na sua conta</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lira-input px-3 py-2 rounded-md"
            placeholder="seu@email.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            Senha
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="lira-input px-3 py-2 rounded-md"
            placeholder="••••••"
            required
          />
        </div>
        
        <div className="flex justify-end">
          <a href="#" className="text-sm text-[#1DE9B6] hover:underline">
            Esqueceu a senha?
          </a>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="lira-btn w-full py-2 rounded-md font-medium mt-2"
        >
          {isLoading ? 'Processando...' : 'Entrar agora'}
        </button>
      </form>
      
      <div className="lira-divider my-4">Ou faça login com</div>
      
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 py-2 rounded-md font-medium"
      >
        <Google size={20} />
        <span>Entrar com o Google</span>
      </button>
      
      <div className="text-center mt-4">
        <p className="text-sm">
          Ainda não tem uma conta?{' '}
          <a href="/" className="text-[#1DE9B6] hover:underline">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
