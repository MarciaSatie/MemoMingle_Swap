// src/components/Card.jsx
import { useState } from "react";
import Modal from 'react-modal';
import img1 from '../assets/img1.png';

export default function Card({ title, cardDate, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal for more info */}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="z-100">
          <h2 className="text-bt-p text-2xl font-header mt-4">{title}</h2>
          <p className="mt-4 font-semibold">{cardDate}</p>
          <div className="mt-3">{text}</div>
        </div>
      </Modal>

      {/* Static card */}
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <img className="rounded-t-lg" src={img1} alt="command-line" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="mt-4 font-semibold text-xs">
            <h5>{cardDate}</h5>
          </div>
          <div className="mt-4">{text}</div>
        </div>
      </div>
    </>
  );
}