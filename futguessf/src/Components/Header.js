// Header.js

import React, { useState, useEffect } from 'react';
import RegisterModal from '../Modals/RegisterModal';
import LoginModal from '../Modals/LoginModal';
import AddBalanceModal from '../Modals/AddBalanceModal';
import { registerUser, getUserById, getLoggedInUser } from '../Functions/userFunctions';

const Header = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAddBalanceModalOpen, setIsAddBalanceModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Sayfa yüklendiğinde ve kullanıcı giriş yaptığında user state'ini güncelle
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      const user = getUserById(loggedInUser.id);

      if (user) {
        setUser(user);
      }
    }
  }, []);

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

  const openAddBalanceModal = () => {
    setIsAddBalanceModalOpen(true);
  };

  const closeAddBalanceModal = () => {
    setIsAddBalanceModalOpen(false);
  };

  const handleRegister = async (userData) => {
    const newUser = await registerUser(userData.username, userData.email, userData.password);

    setUser({
      name: newUser.username,
      balance: 0,
    });

    closeRegisterModal();
  };

  const handleLogin = (userData) => {
    console.log('Logging in user:', userData);
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      const user = getUserById(loggedInUser.id);

      if (user) {
        setUser(user);
      }
    }

    closeLoginModal();
  };

  const handleLogout = () => {
    console.log('Logging out user');
    
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  const handleAddBalance = (amount) => {
    console.log(`Adding ${amount} to user's balance`);

    setUser((prevUser) => ({
      ...prevUser,
      balance: prevUser.balance + amount,
    }));

    closeAddBalanceModal();
  };

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white text-2xl font-bold">FutGuess</h1>
      </div>
      <div className="text-white flex items-center space-x-4">
        {user ? (
          <>
            <p>{user.username}</p>
            <p>Bakiye: ${user.balance}</p>
            <button onClick={openAddBalanceModal}>Bakiye Ekle</button>
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
      {isAddBalanceModalOpen && <AddBalanceModal onClose={closeAddBalanceModal} onAddBalance={handleAddBalance} />}
    </header>
  );
};

export default Header;
