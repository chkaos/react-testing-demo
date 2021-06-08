import type { FC, MouseEvent } from 'react';
import styles from './style.css'

interface SquareProps {
    value: string
    onClick: (e: MouseEvent<HTMLElement>) => void
}

const Square:FC<SquareProps> = ({ value, onClick }) => (
    <button className={styles.square} onClick={onClick}>
        {value}
    </button>
);

export default Square;