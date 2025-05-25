// src/components/Collection.jsx
import React from 'react';
import Card from './Card';

export default function Collection({ collections }) {
  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      {collections.map(({ collection, icon, cards }) => (
        <section key={collection} className="border rounded-lg shadow-md p-4 bg-white">
          <header className="flex items-center space-x-4 mb-4">
            <img src={icon} alt={`${collection} icon`} className="w-10 h-10 object-contain" />
            <h2 className="text-xl font-bold">{collection}</h2>
          </header>

          <div className="flex flex-col items-center space-y-6">
            {cards.map(card => (
              <Card
                key={card.index}
                title={card.title}
                cardDate={card.date}
                text={card.content}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}