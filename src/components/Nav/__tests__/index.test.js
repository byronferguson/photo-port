import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

let component;

beforeEach(() => {
  component = render(
    <Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      setContactSelected={mockSetContactSelected}
      contactSelected={mockContactSelected}
    />
  );
});

describe('Nav components', () => {
  it('should render', () => {});

  it('should match snapshot', () => {
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
      // Arrange
      const { getByLabelText } = component;

      // Act

      // Assert
      expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  });

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = component;

      // Act

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  });
});
