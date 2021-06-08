import type { FC } from 'react';
import { useState } from 'react';
import { calculateWinner } from '../helpers';
import styles from './style.css'
import Board from '../Board';

const Game: FC = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = (i: number) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        // If user click an occupied square or if game is won, return
        if (winner || squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);        
        setXisNext(!xIsNext);
    }

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

    const reset = () => {
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setXisNext(true)
    }

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className={styles.game}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                <button style={{marginBottom: '10px'}} onClick={() => reset()}>restart</button>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;