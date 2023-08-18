import LandingPage from '@/app/(landing)/page';
import { render, screen } from '@testing-library/react';

describe('Landing Page - Rendering', () => {
    it('should have Hero Text', () => {
        render(<LandingPage/>);
        screen.getByText('Use AI to GenerAIt');
    });
    it.todo('should display logo image in left corner of navbar');
    it.todo('should display brand name in as second item on left side of navbar');
    it.todo('should have button in upper right corner of navbar')
})