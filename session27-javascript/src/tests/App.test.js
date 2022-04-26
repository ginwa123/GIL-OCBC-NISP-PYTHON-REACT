import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

test('Render halaman home dengan benar', () => {
  render(<App />);

  // * 1. Mencari text tertentu
  const title = screen.getByText(/why do we need test ?/i) // i: case insensitive
  expect(title).toBeInTheDocument();
             // matcher
             // - toBeInTheDocument()
             // - toHaveTextContent()
             // - toBe()
             // - Lengkapnya: https://jestjs.io/docs/using-matchers

  // * 2. Mencari button tertentu
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Users List')

  // * 3. Buka halaman /users --> pindah halaman
  fireEvent.click(button)

  // ? kita sudah berada di halaman /users setelah line ini

  // * 4. Ambil tombol kedua
  const backToHomeButton = screen.getByRole('button')
  expect(backToHomeButton).toBeInTheDocument()
  expect(backToHomeButton).toHaveTextContent('Back to Home')
});
