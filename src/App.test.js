import { render, screen } from '@testing-library/react';
import App from './App';


// C:/Users/TOSHIBA/Desktop/reactjs/portfolio/git

// C: /Users/TOSHIBA/Desktop/reactjs/portfolio
// ssh-add ~/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
