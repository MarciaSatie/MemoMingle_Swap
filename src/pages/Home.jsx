import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import SwipeStack from "../components/SwipeStack";

export default function Home() {
  

  useEffect(() => {
    const q = query(collection(db, "cards"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cardsData = [];
      querySnapshot.forEach((doc) => {
        cardsData.push({ id: doc.id, ...doc.data() });
      });
      setCards(cardsData);
    });

    return () => unsubscribe();
  }, []);

  const handleRightSwipe = (card) => {
    setCollected((prev) => [...prev, card]);
  };

  const handleLeftSwipe = (card) => {
    // You can log or ignore skipped cards
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 p-4">
      <SwipeStack
        cards={cards}
        onSwipeRight={handleRightSwipe}
        onSwipeLeft={handleLeftSwipe}
      />
      <div className="mt-10 text-white">
        <h2 className="text-xl font-bold mb-2">Collected Cards:</h2>
        <ul>
          {collected.map((card, i) => (
            <li key={card.id || i} className="mb-1">
              {card.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
