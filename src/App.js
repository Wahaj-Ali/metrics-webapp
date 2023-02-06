import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MobileDashboard from './pages/MobileDashboard';
import MobileSpecs from './pages/MobileSpecs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MobileDashboard />} />
          <Route path="/MobileDetails" element={<MobileSpecs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
