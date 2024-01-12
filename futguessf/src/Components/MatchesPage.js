import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import matchData from '../Data/MatchData.json';

const MatchList = () => {
    return (
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Tüm Maçlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {matchData.matches.map((match) => (
              <div key={match.date} className="border p-4">
                <h3 className="text-lg font-bold mb-2">{match.round}</h3>
                <p>{match.group}</p>
                <p>{match.date}</p>
                <div className="flex items-center mb-2">
                  <img src={getTeamLogo(match.team1)} alt={match.team1} className="w-8 h-8 mr-2" />
                  <p>{match.team1}</p>
                </div>
                <div className="flex items-center mb-2">
                  <img src={getTeamLogo(match.team2)} alt={match.team2} className="w-8 h-8 mr-2" />
                  <p>{match.team2}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };
    
    const getTeamLogo = (team) => {
      // Takım logosu için bir link veya kendi logo bilginizi ekleyin
      return `https://via.placeholder.com/50?text=${team}`;
    };
  
  export default MatchList;
  
