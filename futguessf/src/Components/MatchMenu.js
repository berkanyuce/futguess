// MatchMenu.js
import React, { useState } from 'react';
import { updateUserBalance, getLoggedInUser } from '../Functions/userFunctions';

const MatchMenu = ({ matches, onPredictionMade }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const user = getLoggedInUser();

  const openModal = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMatch(null);
    setIsModalOpen(false);
  };

  const handlePrediction = () => {
    if (selectedMatch) {
      // Tahmin et butonuna tıklandığında kullanıcının bakiyesini 1 azalt
      updateUserBalance(user.id, user.balance - 1);
      // Ana bileşende tahminin üretildiği bilgisini işle
      onPredictionMade();
      // Modal'ı kapat
      closeModal();
    }
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Maç Listesi</h2>
      <div className="grid gap-4">
        {matches.map((match) => (
          <div key={match.id} className="border p-4 grid grid-cols-4 justify-between items-center">
            <div className="col-span-1">
              <div className="flex items-center">
                <p className="text-lg font-bold">{match.team1}</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex items-center">
                <p className="text-xl">{match.date}</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex items-center">
                <p className="text-lg font-bold">{match.team2}</p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-around">
              <button className='bg-green-500 rounded-md px-4 py-2 text-white' onClick={() => openModal(match)}>Tahmin Üret</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Tahmin Üret</h2>
            {selectedMatch && (
              <div>
                <p>Maç: {selectedMatch.team1} vs {selectedMatch.team2}</p>
                <p>Tarih: {selectedMatch.date}</p>
                {/* Diğer maç bilgilerini burada göstermek istediğiniz şekilde ekleyebilirsiniz */}
              </div>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handlePrediction}
            >
              Tahmin Et
            </button>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-md mt-4 ml-2"
              onClick={closeModal}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MatchMenu;
