// src/components/Collection.jsx
import React from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

export default function Collection({ collections }) {
  return (
    <div className="space-y-8 p-6 max-w-6xl mx-auto">
      {collections.map(({ collection, icon, cards }) => (
        <section
          key={collection}
          className="border rounded-lg shadow-md p-4 bg-white"
        >
          <header className="flex items-center space-x-4 mb-4">
            <img
              src={icon}
              alt={`${collection} icon`}
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-xl font-bold">{collection}</h2>
          </header>

          <Carousel responsive={responsive} infinite autoPlay={false}>
            {cards.map(card => (
              <Card
                key={card.index}
                title={card.title}
                cardDate={card.date}
                text={card.content}
              />
            ))}
          </Carousel>
        </section>
      ))}
    </div>
  );
}
