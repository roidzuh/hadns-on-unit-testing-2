import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HomeView from '@/view/Home';

describe('home view', () => {
  it('should handle render homepage', () => {
    const { container } = render(<HomeView />);
    expect(container).toMatchSnapshot();
  });

  it('should handle button click', () => {
    const { getByText } = render(<HomeView />);
    const button = getByText('submit');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
