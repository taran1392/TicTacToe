import { CellState } from "./model/cell";
import React from 'react';

export interface CellProps {
    value: CellState,
    onClick: (row: number , col: number) => void,
    row: number,
    col: number
}

const CellComponent: React.FC<CellProps> = ({row, col, onClick, value}) => {

    return <div className="cell" onClick={() => {onClick(row,col)}}>
        <span>
            {value == CellState.Void ? '': value == CellState.Cross? 'X': '0'}
        </span>
    </div>
}

export default CellComponent;

