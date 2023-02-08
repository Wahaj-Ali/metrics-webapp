import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Dashboard from '../../pages/Dashboard';
import store from '../../Redux/configureStore.js';


describe('Dashboard', () => {
    test('renders correctly', () => {
      const tree = renderer.create(
        <Provider store={store}>
        <Router>
          <Dashboard />
        </Router>,
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });