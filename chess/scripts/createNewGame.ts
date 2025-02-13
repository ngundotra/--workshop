import { Chess } from 'chess.js';
import { randomUUID } from 'crypto';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

function createNewPGNGame(saveDirectory: string, githubUsername: string): string {
    const uuid = randomUUID().split('-')[0]; // Get first segment of UUID
    const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const filename = `game_${uuid}.pgn`;

    const pgnContent = `[Event "Casual Game"]
[Site "GitHub Chess"]
[Date "${new Date().toISOString().split('T')[0].replace(/-/g, '.')}"]
[Round "-"]
[White "Anonymous"]
[Black "${githubUsername}"]
[Result "*"]
[GameID "${uuid}"]

*`;

    const chess = new Chess();
    chess.loadPgn(pgnContent);

    mkdirSync(saveDirectory, { recursive: true });
    const fullPath = join(saveDirectory, filename);
    writeFileSync(fullPath, pgnContent);
    return fullPath;
}

if (process.argv.length < 3) {
    console.error('Usage: ts-node chess/scripts/createNewGame.ts <github-username>');
    process.exit(1);
}

const githubUsername = process.argv[2];
const newGamePath = createNewPGNGame('chess/games', githubUsername);
console.log('Created new game at:', newGamePath);