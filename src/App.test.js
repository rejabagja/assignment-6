import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


test('renders App component with NavBar, image banner, and Footer', async () => {
  render(<App />);

  // image banner is rendered 
  const banner = screen.getByTestId('image-banner')
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveProperty('src', 'https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg')

  // test for waiting fetch api data
  const recipes = await waitFor(
    () => screen.findByText(/Chocolate Chip Cookies/i),
    { timeout: 3000 }
  );
  expect(recipes).toBeInTheDocument();

  // brand name
  const brandName = screen.getByTestId('my-recipe');
  expect(brandName).toBeInTheDocument()
  expect(brandName.innerHTML).toBe('My Recipe');

  // form-search
  const formSearch = screen.getByTestId('form-search');
  expect(formSearch).toBeInTheDocument();

});