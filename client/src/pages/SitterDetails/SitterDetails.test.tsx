import { render } from '@testing-library/react';
import SitterDetails from './SitterDetails';
import { MemoryRouter } from 'react-router-dom';

describe('SitterDetails tests', () => {
  test('smoke test', () => {
    render(
      <MemoryRouter>
        <SitterDetails />
      </MemoryRouter>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SitterDetails />
      </MemoryRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can see sitter details', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <SitterDetails />
      </MemoryRouter>,
    );
    const location = getByText('Location:');
    expect(location).toBeInTheDocument();
    const phone = getByText('Phone:');
    expect(phone).toBeInTheDocument();
    const sitter = getByText('BECOME A SITTER');
    expect(sitter).toBeInTheDocument();
  });
});
