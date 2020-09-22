import React from 'react';
import { render, cleanup, findByTestId } from '@testing-library/react';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('match snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render properly', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('contact')).toHaveTextContent('Contact me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
