import { Color, Coords, FENChar } from "../models";
import { Piece } from "./pieces";

export class King extends Piece {
    private _hasMoved: boolean = false; //for castling purpose
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [ //same as queen
        { x: 0, y: 1 },
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: -1 },
        { x: 1, y: 1 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: -1, y: -1 }
    ];

    constructor(private pieceColor: Color) {
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
    }

    public get hasMoved(): boolean {
        return this._hasMoved;
    }

    public set hasMoved(_) {
        this._hasMoved = true;
    }
}