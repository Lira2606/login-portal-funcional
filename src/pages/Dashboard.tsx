
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="music-bg min-h-screen flex flex-col">
      <header className="p-4 border-b border-purple-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#1DE9B6] w-8 h-8 rounded-lg flex items-center justify-center">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 18V5l12-2v13" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M21 16C22.6569 16 24 14.6569 24 13C24 11.3431 22.6569 10 21 10C19.3431 10 18 11.3431 18 13C18 14.6569 19.3431 16 21 16Z" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-xl text-[#1DE9B6] font-bold">Lira Music</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm">
              Olá, <span className="font-bold">{user?.name}</span>
            </div>
            <button 
              onClick={logout} 
              className="bg-purple-800 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Sair
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4">
        <div className="bg-purple-900/50 rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold mb-6">Bem-vindo à Lira Music</h2>
          <p className="text-purple-200 mb-4">
            O seu login foi realizado com sucesso. Esta é uma aplicação de demonstração.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {['Descobrir', 'Playlists', 'Artistas', 'Favoritos'].map((item) => (
              <div 
                key={item} 
                className="bg-purple-800/50 rounded-lg p-4 hover:bg-purple-700/50 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="text-sm text-purple-300 mt-1">Explorar {item.toLowerCase()}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Músicas Recomendadas</h3>
            <div className="space-y-2">
              {['Música Popular 1', 'Top Hit 2', 'Nova Música 3', 'Clássico 4'].map((song, index) => (
                <div 
                  key={index} 
                  className="bg-purple-800/30 p-3 rounded flex justify-between items-center hover:bg-purple-700/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-purple-600 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium">{song}</h4>
                      <p className="text-xs text-purple-300">Artista {index + 1}</p>
                    </div>
                  </div>
                  <div className="text-sm text-purple-300">3:2{index}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
