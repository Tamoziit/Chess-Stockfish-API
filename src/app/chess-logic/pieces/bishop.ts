import { Piece } from "./pieces";
import { FENChar, Coords, Color } from "../models";

export class Bishop extends Piece {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [ //diagonal movements
        { x: 1, y: 1 },
        { x: 1, y: -1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor); //super constructor of inherited class
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop
    }
}