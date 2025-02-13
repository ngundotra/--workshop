import { Chess } from 'chess.js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

function validatePGNFile(filePath: string): boolean {
    try {
        const pgn = readFileSync(filePath, 'utf8');
        const chess = new Chess();
        chess.loadPgn(pgn, { strict: false });

        // Basic validation
        if (!chess.header('White') || !chess.header('Black')) {
            console.error('Missing player headers in:', filePath);
            return false;
        }

        // Validate all moves
        const temp = new Chess();
        const moves = chess.history();
        for (const move of moves) {
            try {
                temp.move(move);
            } catch (e) {
                console.error(`Invalid move ${move} in ${filePath}`);
                return false;
            }
        }

        return true;
    } catch (e) {
        console.error('Error processing', filePath, e);
        return false;
    }
}

function validateAllGames() {
    const gamesDir = join(process.cwd(), 'chess/games');
    console.log('Games directory:', gamesDir);
    const months = readdirSync(gamesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    let allValid = true;

    for (const month of months) {
        console.log('Validating', month);
        const pgnFiles = readdirSync(join(gamesDir, month))
            .filter(file => file.endsWith('.pgn'));

        for (const file of pgnFiles) {
            console.log('Validating', join(gamesDir, month, file));
            const valid = validatePGNFile(join(gamesDir, month, file));
            if (!valid) allValid = false;
        }
    }

    if (!allValid) {
        throw new Error('Invalid PGN files detected');
    }
    console.log('All games validated successfully!');
}

validateAllGames(); 