import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs Tests', () => {
  beforeEach(() => {
    render(<div>Component</div>);
  });

  test('should show Component text all the time', () => {
    expect(screen.getByText(/Component/i)).toBeInTheDocument();
  });
});
