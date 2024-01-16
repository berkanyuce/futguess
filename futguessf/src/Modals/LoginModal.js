import React, { useState } from 'react';
import { setLoggedInUser } from '../Functions/userFunctions';

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      setLoggedInUser(user); 
      onLogin(user);
      onClose();
    } else {
      alert('Hatalı kullanıcı adı veya şifre. Tekrar deneyin.');
    }
  };
  

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">E-posta:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
          onClick={handleLogin}
        >
          Giriş Yap
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md mt-4 ml-2"
          onClick={onClose}
        >
          İptal
        </button>
      </div>
    </div>
  );
};

export default LoginModal;