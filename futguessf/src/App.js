import './App.css';
import React, { useState } from 'react';
import matchData from './Data/MatchData'; // JSON verinizi içeriye eklediğiniz dosyanın doğru yolunu belirtin

import Header from './Components/Header'
import MatchMenu from './Components/MatchMenu';
import Footer from './Components/Footer';
function App() {

  const [selectedDay, setSelectedDay] = useState('Matchday 1');

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <div className="container mx-auto p-4">
      <header className="mb-8">
        <Header />
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
      <MatchMenu matches={matchData.matches.filter((match) => match.round === selectedDay)} />
      {/* Diğer bileşenleri ekleyebilirsiniz */}
      <Footer />
    </div>
    </>
  );
}

export default App;
