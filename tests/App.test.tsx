import React from 'react';
import { describe, expect, test } from 'vitest'
import App from '../src/App';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';


describe('<App />', () => {
  const user = userEvent.setup()

  test('debe añadir un valor (5) y mostrar la serie (0, 1, 1, 2, 3)', async () => {
    render(<App />)
    // buscar el input
    const input = screen.getByRole('spinbutton')
    expect(input).toBeDefined()
    // buscar el button
    const btn = screen.getByRole('button')
    expect(btn).toBeDefined()
    // añadir un valor al input
    await user.type(input, '5')
    await user.click(btn)
    // comprobar que se inserte la serie
    expect(screen.getByText('0, 1, 1, 2, 3'))
  })
})