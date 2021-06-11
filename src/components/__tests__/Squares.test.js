import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from '../Square'

describe('Component Square tests', () => {
  test('Square has correct init value ', () => {
    const props = {
      value: "X",
      onClick: null
    }
    // a simple smoke test
    render(<Square {...props}/>);
  
    const btnElement = screen.getByRole('button', { name: props.value });
  
    expect(btnElement).toBeInTheDocument();
  
  });
})
