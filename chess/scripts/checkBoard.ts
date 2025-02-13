import { Chess } from 'chess.js';
import { readFileSync } from 'fs';

const chess = new Chess();
const pgn = readFileSync(process.argv[2], 'utf8');
chess.loadPgn(pgn);

console.log('Initial position validation:');
console.log(chess.ascii());
console.log('Is standard setup?', chess.fen() === chess.header().FEN);

// Validate moves
function isValidMove(move: string): boolean {
    try {
        chess.move(move);
        return true;
    } catch (e) {
        return false;
    }
}

// Example usage
console.log('e4 valid:', isValidMove('e4'));  // true
console.log('Nc3 valid:', isValidMove('Nc3')); // true
console.log('O-O valid:', isValidMove('O-O')); // true (castling)
console.log('Checkmate:', chess.isCheckmate());