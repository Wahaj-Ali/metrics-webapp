import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import store from './Redux/configureStore.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
              path="/:topLevelDomain"
              element={(
                <Container fluid className="App">
                  <Details />
                </Container>
            )}
            />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
