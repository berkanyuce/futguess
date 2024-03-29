import './App.css';
import React, { useState, useEffect } from 'react';
import matchData from './Data/MatchData'; 

import Header from './Components/Header';
import MatchMenu from './Components/MatchMenu';
import Footer from './Components/Footer';
import RegisterModal from './Modals/RegisterModal';
import { getLoggedInUser, getUserById } from './Functions/userFunctions';

const App = () => {
  const [selectedDay, setSelectedDay] = useState('Matchday 1');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [predictionMade, setPredictionMade] = useState(false);

  useEffect(() => {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      const user = getUserById(loggedInUser.id);

      if (user) {
        setUser(user);
      }
    }
  }, [user]);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handlePredictionMade = () => {
    setPredictionMade(true);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <header className="mb-8">
          <Header openRegisterModal={openRegisterModal} />
        </header>
        <div className="mb-4">
          <p className="text-lg font-bold">Gün Seç:</p>
          <div className="flex overflow-x-auto space-x-4">
            {[...new Set(matchData.matches.map((match) => match.round))]
              .map((day) => parseInt(day.match(/\d+/), 10))
              .sort((a, b) => a - b)
              .map((day) => (
                <button
                  key={day}
                  className={`px-4 py-2 ${
                    selectedDay === `Matchday ${day}` ? 'bg-blue-500 text-white' : 'bg-gray-300'
                  } rounded-md`}
                  onClick={() => handleDaySelect(`Matchday ${day}`)}
                >
                  Matchday {day}
                </button>
              ))}
          </div>
        </div>
        <MatchMenu matches={matchData.matches.filter((match) => match.round === selectedDay)} onPredictionMade={handlePredictionMade} />
        <Footer />
        {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      </div>
    </>
  );
};

export default App;