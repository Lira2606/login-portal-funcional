
import React, { useState } from 'react';
import { Google } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await register(name, email, password);
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
      <h2 className="text-xl font-semibold text-center text-white mb-6">Registre-se agora</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Nome
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="lira-input px-3 py-2 rounded-md"
            placeholder="Nome completo"
            required
          />
        </div>
        
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
            minLength={6}
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="lira-btn w-full py-2 rounded-md font-medium mt-2"
        >
          {isLoading ? 'Processando...' : 'Entre e curta a música'}
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
          Já faz parte da Lira Music?{' '}
          <a href="/login" className="text-[#1DE9B6] hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
