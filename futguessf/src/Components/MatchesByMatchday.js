// MatchesByMatchday.js
import React from 'react';

const MatchesByMatchday = ({ matches }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Matches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {matches.map((match) => (
          <div key={match.id} className="border p-4">
            {/* Match details rendering here */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatchesByMatchday;
