import { Chess } from 'chess.js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

function findGameById(gameId: string): string | null {
    const gamesRoot = join(process.cwd(), 'chess/games');
    const files = readdirSync(gamesRoot, { withFileTypes: true })
        .filter(file => file.isFile() && file.name.endsWith('.pgn'));
    for (const file of files) {
        if (file.name === `game_${gameId}.pgn`) {
            return join(gamesRoot, file.name);
        }
    }
    return null;
}

function validateGame(filePath: string): { isValid: boolean; hasMoves: boolean } {
    try {
        const pgn = readFileSync(filePath, 'utf8');
        const chess = new Chess();
        const parsed = chess.loadPgn(pgn, { strict: true });

        return {
            isValid: true,
            hasMoves: chess.history().length > 0
        };
    } catch (e) {
        return { isValid: false, hasMoves: false };
    }
}

function main() {
    const gameId = process.argv[2];
    if (!gameId) {
        console.error('Usage: ts-node chess/scripts/checkGameById.ts <game-id>');
        process.exit(1);
    }

    const gamePath = findGameById(gameId);
    if (!gamePath) {
        console.error(`Game with ID ${gameId} not found`);
        process.exit(1);
    }

    const { isValid, hasMoves } = validateGame(gamePath);
    console.log(`Game Validation for ${gameId}:`);
    console.log(`- File Location: ${gamePath}`);
    console.log(`- PGN Valid: ${isValid ? '✅' : '❌'}`);
    console.log(`- Contains Moves: ${hasMoves ? '✅' : '❌'}`);

    if (!isValid || hasMoves) {
        process.exit(1);
    }
}

main(); 