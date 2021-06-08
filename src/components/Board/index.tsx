import type { FC } from 'react';
import type { SquaresArray } from "../types"
import Square from '../Square';
import styles from './style.css'

interface BoardProps {
    squares: SquaresArray
    onClick: any
}

const Board: FC<BoardProps> = ({ squares, onClick }) => (
    <div style={styles.board}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;