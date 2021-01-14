// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';

const server = setupServer (
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'this is a test'},
        { name: 'it is only a test'}
      ]
    }))
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders methods and routes in a history list', async () => {
render (<App />)
let items = await waitFor(() => screen.getAllByRole('listitem'));
expect(items[0]).toHaveTextContent('this is a test');
})