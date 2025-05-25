// src/components/SwipeStack.jsx
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "./Card";

export default function SwipeStack({ cards, onSwipeRight, onSwipeLeft }) {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (!cards.length) return;

    if (direction === "right") {
      onSwipeRight(cards[index]);
    } else if (direction === "left") {
      onSwipeLeft(cards[index]);
    }

    // Move to next card; wrap around if at end
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!cards.length) return <p className="text-white text-center mt-8">No cards available.</p>;

  return (
    <div
      {...handlers}
      className="w-full max-w-md mx-auto mt-10 cursor-grab select-none"
    >
      {/* Render the current card */}
      <Card card={cards[index]} />
      <div className="mt-4 text-center text-white font-semibold">
        Swipe left to skip, right to collect
      </div>
    </div>
  );
}
