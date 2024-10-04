import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('renders the component Footer', () => {
  render(<Footer  />);

  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toBeInTheDocument()
  expect(footerText.innerHTML).toBe('© 2024 Company, Inc. All rights reserved.')

  const linkFacebook = screen.getByTestId('link-facebook');
  expect(linkFacebook).toBeInTheDocument()
  expect(linkFacebook).toHaveProperty('href', "https://facebook.com/")

  const linkX = screen.getByTestId('link-x');
  expect(linkX).toBeInTheDocument()
  expect(linkX).toHaveProperty('href', "https://x.com/")
  
  const linkInstagram = screen.getByTestId('link-instagram');
  expect(linkInstagram).toBeInTheDocument()
  expect(linkInstagram).toHaveProperty('href', "https://instagram.com/")



});
