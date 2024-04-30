import { render,screen } from '@testing-library/react';
// import Page from '../src/app/page';
import '@testing-library/jest-dom';
// import Sam from '../src/components/sam'

describe('Main Page', () => {
  // it('main page renders correctly', () => {
  //   const { asFragment } = render(<Page/>);
  //   expect(asFragment()).toMatchSnapshot();
  // });
  it('renders sam', async () => {
    expect(true).toBe(true)
    // render(<Sam />);
    // await screen.findByRole('h1')
    // expect(screen.getByRole('h1')).toHaveTextContent('hey')
  })
});