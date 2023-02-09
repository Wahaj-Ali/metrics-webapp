import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

describe('Header', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('renders the correct header', () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>,
  );
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
});
