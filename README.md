# Play Chess With Me

Welcome to **Play Chess With Me**, an interactive chess platform where you can engage in games and earn SOL bounties for your contributions. This project leverages GitHub's Pull Request system, smart contracts on the Solana blockchain, and AI assistance to create a unique and rewarding chess-playing experience.

## Table of Contents

- [Project Purpose and Features](#project-purpose-and-features)
- [Installation](#installation)
- [Usage](#usage)
  - [Playing a Game](#playing-a-game)
  - [Bounty Payout Process](#bounty-payout-process)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Project Purpose and Features

**Play Chess With Me** is designed to create an engaging chess-playing environment where contributors can challenge an AI opponent or other community members. By submitting well-crafted moves through GitHub Pull Requests (PRs), players can earn SOL bounties upon successful moves. The project ensures fairness and transparency through a structured bounty payout system and automated validations.

### Key Features

- **Interactive Chess Games**: Play chess by submitting PRs with your next move.
- **SOL Bounties**: Earn SOL tokens for each accepted move.
- **AI Assistance**: Utilize AI to analyze games and suggest optimal moves.
- **Automated Validation**: Ensure all moves and games adhere to chess rules.
- **Transparent Record-Keeping**: All bounty transactions are recorded for accountability.
- **Continuous Integration**: GitHub Actions workflows manage game validations and bounty payouts.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js (version 20) installed.
- **pnpm**: Package manager used for dependencies.
- **Solana Wallet**: A Solana wallet with sufficient SOL to cover bounties.
- **OpenAI API Key**: Required for AI assistance in move suggestions.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/natbot-testbot/--workshop.git
   cd --workshop
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**

   - Rename the `.env.example` file to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Open the `.env` file and set the following variables:

     ```env
     SOLANA_PRIVATE_KEY=your_solana_private_key
     SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
     OPENAI_API_KEY=your_openai_api_key
     ```

4. **Build the Project**

   ```bash
   pnpm build
   ```

## Usage

### Playing a Game

1. **Start a New Game**

   To create a new game, run the following script:

   ```bash
   pnpm ts-node chess/scripts/createNewGame.ts your_github_username
   ```

   This will generate a new PGN file in the `chess/games` directory.

2. **Submit Your Move**

   - Fork the repository and navigate to the `chess/games` directory.
   - Open the latest game PGN file and add your move following the PGN format.
   - Commit your changes and submit a Pull Request (PR) with your move.
   - Include your Solana wallet address in the PR description.

3. **Earn Bounty**

   - If your move is valid and accepted, a GitHub Action workflow will automatically process the bounty.
   - You will receive SOL tokens in your provided wallet address as a reward for your contribution.

### Bounty Payout Process

Bounties are managed through a structured and transparent process to ensure fairness and accountability:

1. **Bounty Creation**

   - Bounties are defined in YAML files located in the `.bounties` directory.
   - Each file specifies the task, reward amount, and criteria for completion.

2. **Task Completion**

   - Contributors work on the specified tasks by submitting PRs with their moves.
   - Each valid move submitted via a PR qualifies for a bounty.

3. **Review and Approval**

   - Project maintainers review the submitted moves to ensure they adhere to chess rules.
   - Approved moves trigger the bounty payout process.

4. **Payment**

   - Upon approval, the bounty reward is transferred to the contributor's Solana wallet.
   - Payment details are recorded in the respective YAML file in `.bounties`.

5. **Record Keeping**

   - All transactions and bounty completions are documented in the `.bounties` folder for transparency.

## Contribution Guidelines

We welcome and appreciate contributions from the community! To ensure a smooth collaboration process, please adhere to the following guidelines:

### How to Contribute

1. **Fork the Repository**

   - Click the "Fork" button at the top-right corner of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/--workshop.git
   cd --workshop
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Implement your feature or fix an issue.
   - Ensure your code adheres to the project's coding standards.

5. **Run Tests**

   ```bash
   pnpm test
   ```

6. **Commit Your Changes**

   ```bash
   git commit -m "Add your commit message"
   ```

7. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**

   - Navigate to your fork on GitHub.
   - Click the "Compare & pull request" button.
   - Provide a clear description of your changes.
   - Submit the PR for review.

### Code of Conduct

Please ensure all contributions adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful and considerate to maintain a healthy and collaborative environment.

### Reporting Issues

If you encounter any issues or have suggestions, please open an issue on the repository. Provide detailed information to help us understand and address the problem effectively.

## License

This project is licensed under the [Apache License 2.0](LICENSE). You are free to use, modify, and distribute this project in compliance with the license terms.

---

**Happy Playing! 🎉**

If you have any questions or need assistance, feel free to reach out through the repository's issue tracker or contact the maintainers directly.