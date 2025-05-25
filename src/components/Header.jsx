// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="bg-[black] text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img className='img-size' src='/src/assets/icon.png' style={{ width: '10%' }} alt="logo" />
        <h1 className="text-2xl font-bold">Memo Mingle</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
