import React, { useState } from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

import { registerUser } from '../Functions/userFunctions';

const Header = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleRegister = async (userData) => {
    // Kullanıcıyı kaydet
    const newUser = await registerUser(userData.username, userData.email, userData.password);
  
    // Yeni kullanıcı bilgilerini set et
    setUser({
      name: newUser.username,
      balance: 0,
    });
  
    // Kayıt işlemi tamamlandıktan sonra modal'ı kapat
    closeRegisterModal();
  };
  

  const handleLogin = (userData) => {
    // Giriş işlemi burada yapılabilir
    console.log('Logging in user:', userData);

    // Kullanıcı bilgilerini set et
    setUser({
      name: userData.username,
      balance: 0,
    });

    // Giriş işlemi tamamlandıktan sonra modal'ı kapat
    closeLoginModal();
  };

  const handleLogout = () => {
    // Çıkış işlemi burada yapılabilir
    console.log('Logging out user');

    // Kullanıcı bilgilerini sıfırla
    setUser(null);
  };

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">FutGuess</h1>
      </div>
      <div className="text-white flex items-center space-x-4">
        {user ? (
          <>
            <p>{user.name}</p>
            <p>Bakiye: ${user.balance}</p>
            <button onClick={handleLogout}>Çıkış Yap</button>
          </>
        ) : (
          <>
            <button onClick={openRegisterModal}>Kayıt Ol</button>
            <button onClick={openLoginModal}>Giriş Yap</button>
          </>
        )}
      </div>

      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} onRegister={handleRegister} />}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} onLogin={handleLogin} />}
    </header>
  );
};

export default Header;
