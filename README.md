```markdown
# Play Chess With Me

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/natbot-testbot/workshop/merge.yaml?branch=main)
![Coverage Status](https://img.shields.io/codecov/c/gh/natbot-testbot/workshop)

## Table of Contents

- [Project Purpose and Features](#project-purpose-and-features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Playing a Game](#playing-a-game)
  - [AI Assistance](#ai-assistance)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Project Purpose and Features

**Play Chess With Me** is an interactive chess platform that leverages GitHub pull requests to allow contributors to play chess moves. By participating, contributors can enhance their chess skills and earn SOL (Solana's cryptocurrency) as bounties for successful moves.

### Key Features

- **Interactive Gameplay**: Submit chess moves via GitHub pull requests.
- **Automated Bounty System**: Earn SOL rewards for accepted moves.
- **AI Assistance**: Utilize AI to analyze games and suggest optimal moves.
- **Move Validation**: Ensure all submitted moves are valid and adhere to chess rules.
- **Transparency**: All bounty transactions and game histories are recorded for accountability.

## Installation

Follow the steps below to set up the project locally.

### Prerequisites

- **Node.js**: Version 14 or higher
- **pnpm**: Package manager (preferred)  
  Install pnpm globally if not already installed:
  ```bash
  npm install -g pnpm
  ```
- **TypeScript**: Installed as a development dependency
- **Solana Wallet**: For handling SOL transactions
- **OpenAI API Key**: Required for AI functionalities

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/natbot-testbot/workshop.git
   cd workshop
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory based on the provided `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Then, populate the `.env` file with your configurations:

   - `SOLANA_PRIVATE_KEY`: Your Solana wallet's private key.
   - `SOLANA_RPC_URL`: Solana RPC endpoint (e.g., `https://api.mainnet-beta.solana.com`).
   - `OPENAI_API_KEY`: Your OpenAI API key.

## Configuration

Ensure that all necessary environment variables are correctly set in your `.env` file. Here's an example:

```env
SOLANA_PRIVATE_KEY=your_solana_private_key
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
OPENAI_API_KEY=your_openai_api_key
```

**Note**: Never expose your private keys or sensitive information publicly. Always keep your `.env` file secure and consider adding it to `.gitignore`.

## Usage

### Playing a Game

1. **Submit a Pull Request with Your Move**

   - Fork the repository and clone your fork.
   - Navigate to the `chess/games/` directory and locate the current game's `.pgn` file.
   - Make your move by editing the `.pgn` file following the [PGN format](https://en.wikipedia.org/wiki/Portable_Game_Notation).
   - Include your Solana wallet address in the PR description.
   - Submit the pull request.

2. **Bounty Payout**

   - If your move is accepted and merges into the main branch, the automated workflow will process your bounty.
   - Your SOL reward will be sent to the provided wallet address.
   - Transaction details will be recorded in the `.bounties` folder.

### AI Assistance

Leverage AI to analyze your games and receive move suggestions.

1. **Analyze and Suggest Next Move**

   Run the AI assistant script with the game's PGN file:

   ```bash
   pnpm ts-node chess/scripts/aiChessAssistant.ts chess/games/game_<game_id>.pgn
   ```

   The script will output the suggested SAN-formatted move based on the current board state.

## Contribution Guidelines

We welcome contributions from the community! To ensure a smooth and efficient collaboration, please follow the guidelines below.

### How to Contribute

1. **Fork the Repository**
   - Click the "Fork" button at the top-right corner of the repository page.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/workshop.git
   cd workshop
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Implement new features, fix bugs, or improve documentation.

5. **Run Tests and Linters**
   ```bash
   pnpm lint
   pnpm run validate-games
   ```

6. **Commit Your Changes**
   ```bash
   git commit -m "Add meaningful commit message"
   ```

7. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Navigate to the original repository and click "New pull request".
   - Provide a clear description of your changes.

### Code of Conduct

Please adhere to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) in all interactions.

### Reporting Issues

If you encounter any issues or have suggestions, please open an issue in the [Issues](https://github.com/natbot-testbot/workshop/issues) section of the repository.

## License

This project is licensed under the [Apache License 2.0](LICENSE). You are free to use, modify, and distribute this software in compliance with the license terms.

---

© 2024 [natbot-testbot](https://github.com/natbot-testbot/workshop). All rights reserved.
```