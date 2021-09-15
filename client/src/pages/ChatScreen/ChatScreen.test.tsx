import { render } from '@testing-library/react';
import ChatScreen from './ChatScreen';
import { MemoryRouter } from 'react-router-dom';
describe('Chat screen tests', () => {
  test('smoke test', () => {
    render(
      <MemoryRouter>
        <ChatScreen />
      </MemoryRouter>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ChatScreen />
      </MemoryRouter>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can access inbox messages', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ChatScreen />
      </MemoryRouter>,
    );
    const inbox = getByText('Inbox Message');
    expect(inbox).toBeInTheDocument();
  });
});
