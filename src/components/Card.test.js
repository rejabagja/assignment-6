import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1,
  detailLink: 'https://dummyjson.com/recipes/1'
};

test('renders the component Card & given props', () => {
  render(<Card el={el} />);

  // card image
  const cardImage = screen.getByTestId(`img-recipe-${el.id}`);
  expect(cardImage).toBeInTheDocument();
  expect(cardImage).toHaveProperty('src', el.image);
  expect(cardImage).toHaveProperty('alt', el.name);

  // card title
  const cardTitle = screen.getByTestId(`title-recipe-${el.id}`);
  expect(cardTitle.innerHTML).toBe(el.name)

  // rating recipe
  const rateRecipe = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(Number(rateRecipe.innerHTML)).toBe(el.rating);

  // tag recipe
  const tagRecipe = screen.getByTestId(`tag-recipe-${el.tags[0]}`)
  expect(tagRecipe.innerHTML).toBe(el.tags[0]);

  // anchor card recipe
  const anchorCardRecipe = screen.getByTestId(`link-recipe-${el.id}`);
  expect(anchorCardRecipe).toHaveProperty('href', el.detailLink);
});
