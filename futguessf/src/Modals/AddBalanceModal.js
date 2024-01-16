import React, { useState } from 'react';
import { setUsersToLocalStorage, getUsersFromLocalStorage, setLoggedInUser } from '../Functions/userFunctions';

const AddBalanceModal = ({ onClose, onAddBalance }) => {
  const [amount, setAmount] = useState('');

  const handleAddBalance = () => {
    const parsedAmount = parseFloat(amount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

      if (loggedInUser) {
        const userId = loggedInUser.id;
        const users = getUsersFromLocalStorage();
        const storedUserIndex = users.findIndex((u) => u.id === userId);

        if (storedUserIndex !== -1) {
          users[storedUserIndex].balance += parsedAmount;
          loggedInUser.balance += parsedAmount;
          setUsersToLocalStorage(users);
          setLoggedInUser(loggedInUser);
          onClose();
          onAddBalance(parsedAmount);
        } else {
          alert('Oturum açan kullanıcı bulunamadı.');
        }
      } else {
        alert('Oturum açan kullanıcı bulunamadı.');
      }
    } else {
      alert('Geçerli bir miktar giriniz.');
    }
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Bakiye Ekle</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Miktar ($):</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button
          className="bg-green-500 text-white rounded-md px-4 py-2 mt-4"
          onClick={handleAddBalance}
        >
          Bakiye Ekle
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

export default AddBalanceModal;
