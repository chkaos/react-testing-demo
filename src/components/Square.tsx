import React, { MouseEvent } from 'react';

const style = {
    border: "4px solid #000",
    fontSize: "30px",
    fontWeight: 800,
    cursor: "pointer",
    outline: "none",
    margin: "0 -4px -4px 0"
}

interface SquareProps {
    value: string;
    onClick: (e: MouseEvent<HTMLElement>) => void
}

const Square:React.FC<SquareProps> = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;