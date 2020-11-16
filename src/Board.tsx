import { CellState } from "./model/cell";
import React, { useEffect, useState } from 'react';
import CellComponent from "./Cell";

export enum Player {
    Player1 = 'X',
    Player2 = '0'
}


const Board: React.FC = () => {
    const [dimension, setDimension] = useState(3);
    const inputRef = React.createRef<HTMLInputElement>();
    const [player, setPlayer] = useState<Player>(Player.Player1);
    const [board, setBoard] = useState<Array<Array<CellState>>>(new Array(3).fill(null).map(() =>new Array(3).fill(CellState.Void)));
    
    const checkGameOver = () => {
        return board.every(row => row.every(cell => cell !== CellState.Void))
    }
    const checkWinner = (row: number, col: number) => {
        let rowSum, colSum, diagSum, anitDiagSum ;
        rowSum = colSum =diagSum =anitDiagSum = 0;
        const playerCellState = player === Player.Player1? CellState.Cross : CellState.Zero;
        for(var i = 0; i< dimension; i++) {
            if(board[row][i] == playerCellState) rowSum++;
            if(board[i][col] == playerCellState) colSum++;
            if(board[i][i] == playerCellState) diagSum++;
            if(board[i][dimension-i-1] == playerCellState) anitDiagSum++;
        }
        if(rowSum === dimension || colSum === dimension || diagSum === dimension || anitDiagSum === dimension)
            return true;
        return false;
    }
    const switchPlayer = () => {
        if(player === Player.Player1)
            setPlayer(Player.Player2);
        else
            setPlayer(Player.Player1);
    }
    const onCellSelected = (row: number, col: number) => {
        if(board[row][col] !== CellState.Void) {
            return;
        }
        if(player === Player.Player1)
            board[row][col] = CellState.Cross;
        else 
            board[row][col] = CellState.Zero;
        
        if(checkWinner(row, col)) {
            alert(`Winner is Player ${player}`);
            resetGame();
            return;
        }
        if(checkGameOver()) {
            alert('Game is Tied !!');
            resetGame();
            return;
        }
        switchPlayer();
    }


    const resetGame = () => {
       
        setBoard(new Array(dimension).fill(null).map( () =>new Array(dimension).fill(CellState.Void)));
        setPlayer(Player.Player1);
    }

    const changeDimension = () => {
        const newDimension =  parseInt(inputRef.current?.value as string);
        if(!newDimension || newDimension < 3) {
            alert('Invalid Dimension !!. Please Enter Valid Dimension');
            return;
        }

        setDimension(newDimension);
    }

    useEffect(()=> {
        resetGame();
    }, [dimension])
    return <div className="Game">
        <div style={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
            <div>
                <input placeholder="Board Dimension" ref={inputRef} defaultValue={dimension} type="number" /> 
                <button onClick={changeDimension} >Change Dimension</button>
            </div>
            <button onClick={resetGame}>Reset</button>
        </div>
        <h3>Move Player: {player}</h3>
        <div className="Board">
            {board.map((row, rowIndex) => <div className="row" key={rowIndex}> 
                    {row.map((cellValue, colIndex) => <CellComponent key={colIndex} row={rowIndex} col={colIndex} value={cellValue} onClick={onCellSelected} />)}
             </div>)}
        </div>
    </div>
}

export default Board;

