import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <Container fluid className="App">
                <Dashboard />
                {' '}
              </Container>
            )}
          />
          <Route
            path="/Details"
            element={(
              <Container fluid className="App">
                <Details />
              </Container>
            )}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
