import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Results from './results.js';
import App from  './App.js';
import Form from './form.js';

test('Renders the count of the results to the page ', ()=> {
  const count = screen.getByTestId('count');
  const submitButton = screen.getByTestId('submitButton');
  fireEvent.click(submitButton);
  expect(count).toHaveTextContent(0);
})

{/* <span data-testId="marsha-money">{this.props.money}</span> */}

//from demo code
// test('dynamically updates money', () => {
//   render(<Mom />);
//   const money = screen.getByTestId('money');
//   const moneyButton = screen.getByTestId('money-button');
//   fireEvent.click(moneyButton);
//   expect(money).toHaveTextContent(200);
// });