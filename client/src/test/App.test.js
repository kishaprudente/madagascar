import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders hello world text', () => {
  const { getByTestId } = render(<App />);
  const testId = getByTestId(/app/i);
  expect(testId).toBeInTheDocument();
});
