import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../Board'

const props = {
    squares: ["O","O","","","X","O","X","X","X"],
    onClick: null
}

beforeEach(() => {
    render(<Board {...props}/>);
});

describe("Component Board tests", () => { 
    test('Board renders correct number of squares', () => {    
        
        const btnElementArray = screen.getAllByRole('button');
        
        expect(btnElementArray).toHaveLength(9);

    });

    test('Board renders correct number of O squares', () => {    

        const OBtnElementArray = screen.getAllByRole('button', { name: "O"});

        expect(OBtnElementArray).toHaveLength(3);
    });
})
