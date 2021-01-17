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

test('Renders the correct links in the nav of the header', async () => {
render (<App />)
let items = await waitFor(() => screen.getAllByRole('listitem'));
expect(items[0]).toHaveTextContent('Home');
expect(items[1]).toHaveTextContent('History');
expect(items[2]).toHaveTextContent('Help');
})