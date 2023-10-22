import React from 'react';
import { describe, it, expect } from 'vitest'
import App from '../src/App';
import { render, screen } from '@testing-library/react';


describe('<App />', () => {
  it('debe renderizar', () => {
    expect(1).toBe(1)
  })
  it('debe renderizar', () => {
    render(<App />)
    screen.debug()
  })
})