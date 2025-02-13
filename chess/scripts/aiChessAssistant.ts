import { Chess } from 'chess.js';
import { readFileSync, writeFileSync } from 'fs';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function analyzeAndSuggest(pgn: string): Promise<string> {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{
            role: "user",
            content: `Analyze this chess game and suggest the next move for ${getNextColor(pgn)}. 
      Current board:\n${new Chess(pgn).ascii()}
      Game PGN:\n${pgn}
      Respond ONLY with the SAN-formatted move, nothing else.`
        }]
    });

    return response.choices[0].message.content?.trim() || '';
}

function getNextColor(pgn: string): 'white' | 'black' {
    const chess = new Chess();
    chess.loadPgn(pgn);
    return chess.turn() === 'w' ? 'white' : 'black';
}

async function main() {
    const pgnPath = process.argv[2];
    const pgn = readFileSync(pgnPath, 'utf8');
    const chess = new Chess();
    chess.loadPgn(pgn);

    console.log("Current Board:\n");
    console.log(chess.ascii());

    if (chess.isGameOver()) {
        console.log("Game over! Result:", chess.header().Result);
        return;
    }

    try {
        const suggestion = await analyzeAndSuggest(pgn);
        console.log(`\nGPT-4o suggests: ${suggestion}`);

        // Validate and apply the move
        if (chess.move(suggestion)) {
            writeFileSync(pgnPath, chess.pgn());
            console.log("\nUpdated Board:\n");
            console.log(chess.ascii());
        } else {
            console.error("Invalid move suggested by AI");
        }
    } catch (error) {
        console.error("Error getting AI suggestion:", error);
    }
}

main(); 