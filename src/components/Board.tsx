import React from 'react';
import type { SquaresArray } from "./types"
import Square from './Square';

const style = {
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
}

interface BoardProps {
    squares: SquaresArray
    onClick: any
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((square: string, i: number) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;