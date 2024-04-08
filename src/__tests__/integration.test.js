import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { NoticeContext } from '../contexts/NoticeContext';
import Percy from '@percy/puppeteer';

Percy.snapshot(page, 'Notice List');
test('user can add and delete notices', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);
  const inputElement = getByPlaceholderText(/Enter notice.../i);
  fireEvent.change(inputElement, { target: { value: 'Test notice' } });
  fireEvent.click(getByText(/Add Notice/i));
  expect(getByText(/Test notice/i)).toBeInTheDocument();
  fireEvent.click(getByText(/Delete/i));
  expect(queryByText(/Test notice/i)).not.toBeInTheDocument();
});
