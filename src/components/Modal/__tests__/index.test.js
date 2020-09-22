import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Modal from '..';

afterEach(cleanup);

const mockOnClose = jest.fn();

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal onClose={mockOnClose} currentPhoto={currentPhoto} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Modal onClose={mockOnClose} currentPhoto={currentPhoto} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('Click Event', () => {
    it('calls onClose handler', () => {
      // Arrange
      const { getByText } = render(
        <Modal onClose={mockOnClose} currentPhoto={currentPhoto} />
      );

      // Act
      fireEvent.click(getByText('Close this modal'));

      // Assert
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});
