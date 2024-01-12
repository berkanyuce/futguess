import React, { useState } from 'react';

const RegisterModal = ({ onClose, onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Kullanıcı bilgilerini al
    const newUser = {
      username,
      email,
      password,
      balance: 0,
      isAdmin: false,
    };

    // Kullanıcı bilgilerini kontrol et (Örnekte basit bir kontrol)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      alert('Bu e-posta adresiyle kayıtlı bir kullanıcı zaten var.');
      return;
    }

    // Yeni kullanıcıyı kaydet
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Kayıt işlemi tamamlandıktan sonra modal'ı kapat
    onClose();
    
    // Kayıt olan kullanıcıyı ana bileşene iletebilirsiniz
    onRegister(newUser);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
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
          className="bg-green-500 text-white rounded-md px-4 py-2 mt-4"
          onClick={handleRegister}
        >
          Kayıt Ol
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

export default RegisterModal;
