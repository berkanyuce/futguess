import React, { useState } from 'react';

const MatchMenu = ({ matches }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Maç Listesi</h2>
      <div className="grid gap-4">
        {matches.map((match) => (
          <div key={match.id} className="border p-4 grid grid-cols-4 justify-between items-center">
            <div className="col-span-1">
              <div className="flex items-center">
                {/* <img src={match.team1.logo} alt={match.team1} className="w-8 h-8 mr-2" /> */}
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
                {/* <img src={match.team2.logo} alt={match.team2} className="w-8 h-8 ml-2" /> */}
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-around">
              <button className='bg-green-500 rounded-md px-4 py-2 text-white' onClick={openModal}>Tahmin Üret</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div className="relative p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Tahmin Üret</h2>
            <p>{loremIpsum}</p>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-md mt-4"
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
