import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoticeList from '../NoticeList';
import { NoticeContext } from '../../contexts/NoticeContext';

test('renders notice list correctly', () => {
  const { getByText } = render(
    <NoticeContext.Provider value={{ notices: ['Notice 1', 'Notice 2'], addNotice: jest.fn(), deleteNotice: jest.fn() }}>
      <NoticeList />
    </NoticeContext.Provider>
  );
  expect(getByText(/Notice 1/i)).toBeInTheDocument();
  expect(getByText(/Notice 2/i)).toBeInTheDocument();
});

test('deletes notice correctly', () => {
  const { getByText } = render(
    <NoticeContext.Provider value={{ notices: ['Notice 1'], addNotice: jest.fn(), deleteNotice: jest.fn() }}>
      <NoticeList />
    </NoticeContext.Provider>
  );
  fireEvent.click(getByText(/Delete/i));
  expect(getByText(/Notice 1/i)).not.toBeInTheDocument();
});
