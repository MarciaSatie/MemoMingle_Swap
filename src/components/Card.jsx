import React, { useState } from "react";
import SwipeStack from "../components/SwipeStack";

const sampleCards = [
  {
    title: "Photosynthesis",
    content: "Process by which plants convert light into energy.",
    rarity: "Rare",
    tags: ["biology", "plants"],
  },
  {
    title: "Pythagorean Theorem",
    content: "a² + b² = c²",
    rarity: "Common",
    tags: ["math", "geometry"],
  },
  {
    title: "Recipe: Pancakes",
    content: "Flour, eggs, milk. Mix and cook on pan.",
    rarity: "Common",
    tags: ["food", "recipe"],
  },
];

export default function Home() {
  const [collected, setCollected] = useState([]);

  const handleRightSwipe = (card) => {
    setCollected((prev) => [...prev, card]);
    alert(`Collected: ${card.title}`);
  };

  const handleLeftSwipe = (card) => {
    console.log(`Skipped: ${card.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 p-4">
      <SwipeStack
        cards={sampleCards}
        onSwipeRight={handleRightSwipe}
        onSwipeLeft={handleLeftSwipe}
      />
      <div className="mt-10 text-white">
        <h2 className="text-xl font-bold mb-2">Collected Cards:</h2>
        <ul>
          {collected.map((card, i) => (
            <li key={i} className="mb-1">{card.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
