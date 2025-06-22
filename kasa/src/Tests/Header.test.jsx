import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('Header component', () => {
    test('renders logo and navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );


        const logo = screen.getByAltText('Logo de Kasa');
        expect(logo).toBeInTheDocument();


        const accueilLink = screen.getByRole('link', { name: /Accueil/i });
        expect(accueilLink).toBeInTheDocument();
        expect(accueilLink).toHaveAttribute('href', '/');

        const aboutLink = screen.getByRole('link', { name: /A propos/i });
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveAttribute('href', '/about');
    });

    test('applies "active" class to the correct NavLink', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>
        );
        const accueilLink = screen.getByRole('link', { name: /Accueil/i });
        expect(accueilLink).toHaveClass('nav-link active');

        const aboutLink = screen.getByRole('link', { name: /A propos/i });
        expect(aboutLink).toHaveClass('nav-link');
    });
});