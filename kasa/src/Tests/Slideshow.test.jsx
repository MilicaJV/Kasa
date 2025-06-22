
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slideshow from '../components/Slideshow/Slideshow';

describe('Slideshow component', () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  test('renders nothing when no pictures are provided', () => {
    const { container } = render(<Slideshow pictures={[]} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders the first image by default', () => {
    render(<Slideshow pictures={images} />);
    const img = screen.getByAltText('slide 1');

    expect(img).toHaveAttribute('src', images[0]);
    expect(screen.getByText('1/3')).toBeInTheDocument();
  });

  test('navigates to the next slide', () => {
    render(<Slideshow pictures={images} />);
    const nextButton = screen.getByRole('button', { name: '❯' });

    fireEvent.click(nextButton);
    expect(screen.getByAltText('slide 2')).toHaveAttribute('src', images[1]);
    expect(screen.getByText('2/3')).toBeInTheDocument();
  });

  test('navigates to the previous slide', () => {
    render(<Slideshow pictures={images} />);
    const prevButton = screen.getByRole('button', { name: '❮' });

    fireEvent.click(prevButton);
    expect(screen.getByAltText('slide 3')).toHaveAttribute('src', images[2]);
    expect(screen.getByText('3/3')).toBeInTheDocument();
  });

  test('loops from last to first image with next button', () => {
    render(<Slideshow pictures={images} />);
    const nextButton = screen.getByRole('button', { name: '❯' });

    fireEvent.click(nextButton); // 2
    fireEvent.click(nextButton); // 3
    fireEvent.click(nextButton); // back to 1

    expect(screen.getByAltText('slide 1')).toBeInTheDocument();
  });
});
