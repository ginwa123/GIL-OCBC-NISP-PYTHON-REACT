import { render, screen, waitFor } from '@testing-library/react';

import Users from '../pages/Users';

test('Render halaman Users dengan benar', async () => {
  render(<Users />)

  // * TEST 1: Mencari tombol tertentu
  // ! Pastikan kita sudah menambahkan role="button"
  const backToHomeButton = screen.getByRole('button')
  expect(backToHomeButton).toBeInTheDocument()
  expect(backToHomeButton).toHaveTextContent('Back to Home')

  // * TEST 2: Menunggu proses fetch user dari API
  // Kita gunakan waitFor() dengan timeout selama 4 detik
  // Lalu kita dapatkan salah satu nama dari API tersebut
  // ! Pastikan untuk mengubah arrow function dalam test() ini
  // ! menjadi async () => {}!
  const user = await waitFor(() => {
    return screen.findByText('Leanne Graham')
  }, { timeout: 4000 }) // ? timeout di sini dalam milliseconds
  expect(user).toBeInTheDocument()
})
