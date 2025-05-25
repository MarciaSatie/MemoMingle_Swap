// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Collection from './components/Collection';
import collections from './model/memoData.json';

function App() {
  return (
    <>
      <Header />
      <Collection collections={collections} />
    </>
  );
}

export default App;
