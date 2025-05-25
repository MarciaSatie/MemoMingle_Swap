
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import CollectionView from './pages/CollectionView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/collection" element={<CollectionView />} />
      </Routes>
    </Router>
  );
}

export default App;
