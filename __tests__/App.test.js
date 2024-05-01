import { render,screen, fireEvent } from '@testing-library/react';
import Counter from '../src/components/counter/counter';
import '@testing-library/jest-dom';

describe('Counter', () => {  
  render(<Counter />);
 it('renders correctly', () => {
    const blob = screen.querySelector('svg')
    expect(blob).toBeInTheDocument();
 });
  
  it('increments count when button is clicked', () => {
    const button = screen.getByTestId('counter-button');
    expect(button).toBeInTheDocument();
    const count = parseInt(screen.getByTestId('count').textContent);
    fireEvent.click(button);
    const afterClickCount = parseInt(screen.getByTestId('count').textContent);
    expect(afterClickCount).toBe(count+1);
  });
})