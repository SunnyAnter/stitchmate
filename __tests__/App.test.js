import { render,screen, fireEvent, renderHook} from '@testing-library/react';
import Counter from '../src/components/counter/counter';
import CountDownButton from '../src/components/counter/count-down-button';
import '@testing-library/jest-dom';
import ReminderForm from '../src/components/reminder/reminder-form';
import ReminderList from '../src/components/reminder/reminder-list'
import Page from '../src/app/page'
import { useStore } from '@/app/store';

describe('Counter', () => {  
  it('renders blob correctly', () => {
    render(<Counter />);
    const blob = screen.getByTestId('blob')
    expect(blob).toBeInTheDocument();
  });
  
  it('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const count = parseInt(button.textContent);
    fireEvent.click(button);
    const afterClickCount = parseInt(button.textContent);
    expect(afterClickCount).toBe(count + 1);
  });
  it('decrements when negative button is clicked', () => {
    render(<div>
      <Counter />
      <CountDownButton/>
    </div>
    );
    const incrementButton = screen.getByTestId('increment-count');
    const decrementButton = screen.getByTestId('decrement-count');
    fireEvent.click(incrementButton);
    const count = parseInt(incrementButton.textContent);
    fireEvent.click(decrementButton);
    const afterClickCount = parseInt(incrementButton.textContent);
    expect(afterClickCount).toBe(count - 1);
  })
})

describe('Reminder', () => {
  it('adds a reminder', () => {
    const { result } = renderHook(() => {
      const { setReminder } = useStore();
      return setReminder;
    });
    const mockRem = {
    id: 0,
    notification: true,
    title: 'Test',
    type: 'for-rows',
    note: 'big test note',
    repeat: {
      from: 1,
      until: 1
    },    
    }
    const handleFormSubmit =  (newReminder) => {
      result.current(newReminder);
    }
    render(
      <div>
      <ReminderList/>
      <ReminderForm reminder={mockRem} handleFormSubmit={handleFormSubmit}/>
    </div>
    );
    const saveButton = screen.getByRole('button');
    fireEvent.click(saveButton);
    expect(screen.getByText('Test')).toBeInTheDocument()
  });
  it('renders reminder on page', () => {
    render(<ReminderList/>);
    expect(screen.getByText('Short Row 1')).toBeInTheDocument()
  });

   it('renders reminder on reached count notification', () => {
    render(<Page/>)
    expect(screen.queryByTestId('Title: Short Row 1')).not.toBeInTheDocument()
    const incrementButton = screen.getByTestId('increment-count');
    fireEvent.click(incrementButton);
    
    expect(screen.getByTestId('Title: Short Row 1')).toBeInTheDocument()

  });
})

