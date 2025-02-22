```markdown
# Workshop

Welcome to the **Workshop** repository! This project serves as a comprehensive guide and toolkit for automating GitHub workflows, managing chess games, and handling bounties using Solana blockchain integrations. Whether you're looking to enhance your GitHub automation skills, manage chess game data, or implement a decentralized bounty system, this workshop provides the necessary tools and scripts to get you started.

## Table of Contents

- [Project Purpose and Features](#project-purpose-and-features)
- [Installation](#installation)
- [Usage](#usage)
  - [Managing Chess Games](#managing-chess-games)
  - [Handling Bounties](#handling-bounties)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Project Purpose and Features

### Purpose

The Workshop repository is designed to help developers automate and streamline various tasks associated with GitHub workflows, chess game management, and bounty handling using Solana blockchain. It combines practical scripts and GitHub Actions workflows to demonstrate effective automation techniques and blockchain integrations.

### Features

- **Chess Game Management:**
  - Create, validate, and analyze chess games in PGN format.
  - Automate game validations and enforce standards for game records.
  - Integrate AI-powered move suggestions using OpenAI's GPT-4.

- **Bounty Management System:**
  - Automate the creation and management of bounties for GitHub issues and pull requests.
  - Integrate with Solana blockchain to handle SOL payouts.
  - Utilize GitHub Actions for seamless automation of bounty workflows.

- **GitHub Actions Workflows:**
  - Automate bounty addition and payout processes.
  - Validate new chess game entries automatically.
  - Ensure robust and secure handling of bounties through continuous integration.

## Installation

To set up the Workshop project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 20 recommended).
- **pnpm**: The project uses pnpm as the package manager. Install it globally if you haven't:

  ```bash
  npm install -g pnpm
  ```

- **Solana CLI**: Required for blockchain interactions. Install from [Solana's official documentation](https://docs.solana.com/cli/install-solana-cli-tools).

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ngundotra/workshop.git
   cd workshop
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file based on the provided example:

   ```bash
   cp .env.example .env
   ```

   Populate the `.env` file with your Solana credentials and OpenAI API key:

   ```env
   SOLANA_PRIVATE_KEY=your_solana_private_key
   SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

The Workshop repository provides a set of scripts and GitHub Actions workflows to manage chess games and handle bounties. Below are examples of how to use these features.

### Managing Chess Games

#### Creating a New Game

To create a new chess game record:

```bash
pnpm ts-node chess/scripts/createNewGame.ts <github-username>
```

Replace `<github-username>` with your GitHub username. This script generates a new PGN file in the `chess/games` directory.

#### Validating Chess Games

To validate all chess game files:

```bash
pnpm ts-node chess/scripts/validateGames.ts
```

This ensures that all PGN files adhere to standard formats and contain valid move sequences.

#### Analyzing and Suggesting Moves

The AI-powered assistant can analyze a chess game and suggest the next move:

```bash
pnpm ts-node chess/scripts/aiChessAssistant.ts <path-to-pgn-file>
```

Replace `<path-to-pgn-file>` with the path to your PGN file. The script will output the suggested move in SAN format and update the game record accordingly.

### Handling Bounties

#### Creating or Updating a Bounty

To create or update a bounty for a specific GitHub issue:

```bash
pnpm ts-node scripts/createOrSetBounty.ts --issue=<issue-number> --amount=<sol-amount>
```

Replace `<issue-number>` with the GitHub issue number and `<sol-amount>` with the amount of SOL you wish to assign as a bounty.

#### Setting a Bounty Address

To set the payout address for a bounty:

```bash
pnpm ts-node scripts/createOrSetAddress.ts --issue=<issue-number> --address=<solana-address>
```

Ensure that the Solana address provided is valid.

#### Paying Out a Bounty

To execute the payout of a bounty once an issue or pull request is addressed:

```bash
pnpm ts-node scripts/payBounty.ts
```

Ensure all necessary environment variables are correctly set in the `.env` file before running this script.

### GitHub Actions Workflows

The repository includes several GitHub Actions workflows to automate bounty management:

- **Add Bounty to Issue:** Automatically adds a bounty when a comment with `/bounty` is made by the repository owner.
- **Pay Bounty on Issue Close:** Pays out the bounty when an issue is closed.
- **Pay Bounty on Pull Request Merge:** Pays out the bounty when a pull request is merged.
- **Set Bounty Address:** Sets the payout address based on issue comments.
- **Validate New Chess Games:** Automatically validates new or modified chess game files in pull requests.

These workflows are defined in the `.github/workflows` directory and are triggered based on specific GitHub events.

## Contribution Guidelines

We welcome contributions from the community! To ensure a smooth collaboration process, please follow these guidelines:

1. **Fork the Repository:**

   Click the "Fork" button at the top-right corner of the repository page to create your own fork.

2. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes:**

   Implement your feature or fix bugs as needed.

4. **Ensure Code Quality:**

   - **Linting:** Run linting to fix formatting issues.

     ```bash
     pnpm run lint:fix
     ```

   - **Testing:** Ensure all scripts and workflows work as expected.

5. **Commit Your Changes:**

   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request:**

   Navigate to the original repository and open a pull request from your fork's branch.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a respectful and collaborative environment.

## License

This project is licensed under the [Apache License 2.0](LICENSE). You are free to use, modify, and distribute this project in accordance with the terms of the license.

---

*Happy Coding! 🚀*
```