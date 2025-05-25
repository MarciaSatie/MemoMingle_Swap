// src/components/Carousel.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

export default function Carousel({ cards }) {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <div className="relative w-[320px] h-[420px] overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: -index * 320 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ width: `${cards.length * 320}px` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] h-[420px] px-2"
            >
              <Card {...card} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={prevCard}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ⬅️
        </button>
        <button
          onClick={nextCard}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
