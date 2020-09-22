import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from '..';

const portrait = {
  name: 'portraits',
  description: 'Portraits of people in my life',
};

afterEach(cleanup);

describe('Gallery component', () => {
  it('renders', () => {
    const { getByTestId } = render(<Gallery currentGallery={portrait} />);
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentGallery={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
