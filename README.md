```markdown
# NatBot Workshop

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/natbot-testbot/workshop/merge.yaml?branch=main)
![Coverage Status](https://img.shields.io/codecov/c/gh/natbot-testbot/workshop)

## Table of Contents

- [Project Purpose and Features](#project-purpose-and-features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [Usage](#usage)
  - [Playing a Game](#playing-a-game)
  - [AI Assistance](#ai-assistance)
- [Contribution Guidelines](#contribution-guidelines)
  - [How to Contribute](#how-to-contribute)
  - [Code of Conduct](#code-of-conduct)
  - [Reporting Issues](#reporting-issues)
- [License](#license)

## Project Purpose and Features

**NatBot Workshop** is an innovative interactive chess platform seamlessly integrated with GitHub workflows. It allows contributors to engage in chess games, earn SOL (Solana's cryptocurrency) as bounties, and leverage AI assistance for move suggestions. By utilizing GitHub pull requests and issues, the project manages gameplay, bounty distribution, and game validations, creating a collaborative and engaging environment for both chess enthusiasts and developers.

### Key Features

- **Interactive Gameplay**: Play chess games by submitting moves via GitHub pull requests.
- **Automated Bounty System**: Earn SOL rewards for successful and validated moves.
- **AI Assistance**: Use AI to analyze games and receive optimal move suggestions.
- **Move Validation**: Ensure all submitted moves adhere to standard chess rules.
- **Transparency**: Maintain accountability through recorded bounty transactions and game histories.
- **Automated Workflows**: Streamline processes with GitHub Actions for adding bounties, validating games, and distributing rewards.

## Installation

Follow the steps below to set up the NatBot Workshop project locally.

### Prerequisites

Before installing, ensure you have the following installed on your machine:

- **Node.js**: Version 14 or higher  
  [Download Node.js](https://nodejs.org/)

- **pnpm**: Preferred package manager  
  Install via npm:
  ```bash
  npm install -g pnpm
  ```

- **TypeScript**: Installed as a development dependency  
  This will be handled during installation.

- **Solana Wallet**: For handling SOL transactions  
  [Create a Solana Wallet](https://solana.com/)

- **OpenAI API Key**: Required for AI functionalities  
  [Obtain an OpenAI API Key](https://platform.openai.com/signup)

### Installation Steps

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

   Populate the `.env` file with your configurations:
   ```env
   SOLANA_PRIVATE_KEY=your_solana_private_key
   SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
   OPENAI_API_KEY=your_openai_api_key
   ```

   **Important**: Never expose your private keys or sensitive information publicly. Ensure your `.env` file is secure and added to `.gitignore`.

## Usage

### Playing a Game

Engage in a chess game by submitting your moves through GitHub pull requests.

1. **Submit a Pull Request with Your Move**

   - **Fork the Repository and Clone Your Fork**
     ```bash
     git clone https://github.com/your-username/workshop.git
     cd workshop
     ```

   - **Navigate to the Current Game's PGN File**
     Locate the current game's `.pgn` file in the `chess/games/` directory.

   - **Make Your Move**
     Edit the `.pgn` file following the [PGN format](https://en.wikipedia.org/wiki/Portable_Game_Notation).

   - **Include Your Solana Wallet Address**
     Add your Solana wallet address in the PR description.

   - **Submit the Pull Request**
     Push your changes and create a pull request to the main repository.

2. **Bounty Payout**

   - Once your move is accepted and merged, the automated workflow processes your bounty.
   - Your SOL reward is sent to the provided wallet address.
   - Transaction details are recorded in the `.bounties` folder.

### AI Assistance

Leverage AI to analyze your games and receive move suggestions.

1. **Analyze and Suggest Next Move**

   Run the AI assistant script with the game's PGN file:
   ```bash
   pnpm ts-node chess/scripts/aiChessAssistant.ts chess/games/game_<game_id>.pgn
   ```
   The script outputs the suggested SAN-formatted move based on the current board state.

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

© 2024 [NatBot TestBot](https://github.com/natbot-testbot/workshop). All rights reserved.
```