import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav components', () => {
  it('should render', () => {
    render(<Nav />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
      // Arrange
      const { getByLabelText } = render(<Nav />);

      // Act

      // Assert
      expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  });

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);

      // Act

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  });
});
