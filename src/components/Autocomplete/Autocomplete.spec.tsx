import { render, screen, fireEvent } from '@testing-library/react';
import { Autocomplete } from './Autocomplete.component';

const mockData = [
  { name: 'LeBron James', team: 'Los Angeles Lakers' },
  { name: 'Stephen Curry', team: 'Golden State Warriors' },
  { name: 'Kevin Durant', team: 'Brooklyn Nets' },
];

describe('Autocomplete', () => {
  it('renders the component', () => {
    render(
      <Autocomplete data={mockData} loading={false} getPlayers={() => {}} />,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('displays the input value and options correctly', () => {
    render(
      <Autocomplete data={mockData} loading={false} getPlayers={() => {}} />,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'le' } });
    const options = screen.getAllByRole('listitem');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('LeBron James');
  });

  it('calls the getPlayers function on input change', () => {
    const getPlayers = jest.fn();
    render(
      <Autocomplete data={mockData} loading={false} getPlayers={getPlayers} />,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'ke' } });
    expect(getPlayers).toHaveBeenCalled();
  });

  it('displays loading message when loading prop is true', () => {
    render(
      <Autocomplete data={mockData} loading={true} getPlayers={() => {}} />,
    );
    const loadingMessage = screen.getByText('Loading players');
    expect(loadingMessage).toBeInTheDocument();
  });
});
