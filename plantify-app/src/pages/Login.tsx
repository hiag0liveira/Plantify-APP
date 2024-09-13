import React, { useState } from 'react';
import fundoLogin from '../assets/login/fundologin.png';
import platifyLogo from '../assets/logos/Plantify LOGO corte-svg.svg';
import plantifyLogoP from '../assets/logos/Plantify SIMBOLO copy-svg.svg';

function LoginPage() {

  // Estado para armazenar e-mail e senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função que é chamada ao submeter o formulário
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Verifica se o e-mail e senha não estão vazios
    if (email === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Aqui você pode adicionar a lógica de autenticação ou envio do formulário
    console.log('E-mail:', email);
    console.log('Senha:', senha);

    // Limpar os campos após o envio
    setEmail('');
    setSenha('');
  };

  return (
    <div
      className="relative w-full h-screen grid grid-cols-2"
      style={{ backgroundImage: `url(${fundoLogin})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Coluna da esquerda (Logo P centralizado) */}
      <div className="flex justify-center items-center">
        <img src={plantifyLogoP} alt="Logo" className="w-64" />
      </div>

      {/* Coluna da direita (Formulário centralizado) */}
      <div className="flex justify-center items-center">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg" style={{ width: '420px', height: '450px' }}>
          <h1 className="text-4xl font-bold text-green-700 text-center mb-6">
            <img src={platifyLogo} alt="Logo" className="w-64" />
          </h1>
          <form onSubmit={handleSubmit}>
            {/* E-mail input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Informe seu e-mail"
              />
            </div>

            {/* Senha input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Informe sua senha"
              />
            </div>

            {/* Esqueceu a senha */}
            <div className="text-right mb-6">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Esqueci minha senha
              </a>
            </div>

            {/* Botões */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Entrar
              </button>
            </div>
            <div className="text-center mt-4">
              <button
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Cadastre-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
