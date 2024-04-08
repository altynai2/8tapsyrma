import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoticeForm from '../NoticeForm';

test('renders notice form correctly', () => {
  const { getByPlaceholderText } = render(<NoticeForm />);
  const inputElement = getByPlaceholderText(/Enter notice.../i);
  expect(inputElement).toBeInTheDocument();
});

test('adds new notice correctly', () => {
  const { getByPlaceholderText, getByText } = render(<NoticeForm />);
  const inputElement = getByPlaceholderText(/Enter notice.../i);
  fireEvent.change(inputElement, { target: { value: 'Test notice' } });
  fireEvent.click(getByText(/Add Notice/i));
  expect(getByText(/Test notice/i)).toBeInTheDocument();
});
