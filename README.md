# NatBot TestBot Workshop

Welcome to the **NatBot TestBot Workshop**! This project is an interactive chess platform that allows contributors to play chess through GitHub pull requests, with the added incentive of Solana (SOL) bounties for successful moves. Whether you're a chess enthusiast, a developer, or someone interested in decentralized applications, this workshop provides a unique way to engage, contribute, and earn rewards.

## Table of Contents

- [Project Purpose and Features](#project-purpose-and-features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
  - [Playing a Game](#playing-a-game)
  - [AI Chess Assistant](#ai-chess-assistant)
- [Contribution Guidelines](#contribution-guidelines)
- [Bounty Payout Process](#bounty-payout-process)
- [License](#license)
- [Contact](#contact)

## Project Purpose and Features

### Purpose

The NatBot TestBot Workshop aims to create an engaging and interactive chess-playing experience directly within GitHub. By leveraging pull requests and automated workflows, contributors can play chess moves, have their moves validated, and receive SOL bounties for successful contributions. This setup not only fosters a collaborative environment but also integrates blockchain technology to incentivize participation.

### Features

- **Interactive Chess Games**: Play chess by submitting pull requests with your moves.
- **SOL Bounties**: Earn Solana rewards for accepted moves, encouraging active participation.
- **AI Integration**: Utilize an AI assistant to analyze games and suggest optimal moves.
- **Automated Validation**: Ensure the integrity of games through automated scripts that validate each move.
- **Transparent Record-Keeping**: All bounty payments and game histories are transparently stored and accessible.
- **Continuous Integration**: Automated workflows handle validations and bounty payouts seamlessly upon pull request merges.

## Demo

![Chess Game](https://github.com/natbot-testbot/workshop/assets/your-image-url)

*Screenshot of an ongoing chess game managed through pull requests.*

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js**: Ensure you have Node.js (v14 or later) installed. You can download it from [here](https://nodejs.org/).
- **pnpm**: This project uses `pnpm` as the package manager. Install it globally using:

  ```bash
  npm install -g pnpm
  ```

- **Solana Wallet**: You'll need a Solana wallet to manage bounties. You can create one using [Phantom](https://phantom.app/) or [Sollet](https://www.sollet.io/).
- **Solana CLI**: Install the Solana Command Line Interface from [here](https://docs.solana.com/cli/install-solana-cli-tools).

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

3. **Configure Environment Variables**

   - Rename the `.env.example` file to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Open `.env` and set the following variables:

     ```env
     SOLANA_PRIVATE_KEY=your_solana_private_key
     SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
     OPENAI_API_KEY=your_openai_api_key
     ```

     - **SOLANA_PRIVATE_KEY**: Your Solana wallet's private key in Base58 format.
     - **SOLANA_RPC_URL**: The Solana RPC endpoint. The default points to the mainnet.
     - **OPENAI_API_KEY**: Your OpenAI API key for AI move suggestions.

4. **Run the Project**

   ```bash
   pnpm start
   ```

## Usage

### Playing a Game

To participate in a chess game, follow these steps:

1. **Submit a Pull Request with Your Move**

   - Fork the repository and clone it to your local machine.
   - Navigate to the `chess/games/` directory.
   - Open the latest `.pgn` file and add your move in Standard Algebraic Notation (SAN).
   - Commit and push your changes, then create a pull request.

2. **Include Your Solana Wallet Address**

   - In your pull request description, include your Solana wallet address to receive bounty rewards.

   ```markdown
   **My Move:**

   34. Qe2

   **Solana Wallet Address:** YourWalletAddressHere
   ```

3. **Await Move Acceptance and Bounty Payment**

   - Project maintainers will review your move. If accepted, the corresponding bounty will be paid to your Solana wallet.
   - Bounty payment records can be found in the `.bounties/` directory.

### AI Chess Assistant

The project includes an AI assistant that analyzes games and suggests optimal moves.

#### Using the AI Assistant

1. **Run the AI Assistant Script**

   ```bash
   pnpm ts-node chess/scripts/aiChessAssistant.ts path/to/game.pgn
   ```

2. **AI Move Suggestion**

   - The script will analyze the current board state and suggest the next move in SAN format.
   - Example Output:

     ```
     Current Board:

     r n b q k b n r
     p p p p . p p p
     . . . . p . . .
     . . . . . . . .
     . . . . P . . .
     . . N . . . . .
     P P P P . P P P
     R . B Q K B N R

     GPT-4o suggests: O-O
     ```

3. **Apply the Suggested Move**

   - You can manually apply the suggested move to the `.pgn` file by editing it or modify the script to automate this process.

## Contribution Guidelines

We welcome contributions from the community! Here's how you can get involved:

### How to Contribute

1. **Fork the Repository**

   - Click on the "Fork" button at the top-right corner of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/workshop.git
   cd workshop
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Your Changes**

   - Implement your feature or fix bugs as needed.

5. **Lint and Test Your Code**

   ```bash
   pnpm lint
   pnpm test
   ```

6. **Commit Your Changes**

   ```bash
   git commit -m "Add feature: YourFeatureName"
   ```

7. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

8. **Create a Pull Request**

   - Navigate to your fork on GitHub and click the "Compare & pull request" button.
   - Provide a clear description of your changes and submit the pull request.

### Code Style

- Follow the existing code style and conventions.
- Ensure your code passes linting and tests before submitting.

### Reporting Issues

- If you encounter any issues or have suggestions, please open an issue in the [Issues](https://github.com/natbot-testbot/workshop/issues) section.

## Bounty Payout Process

Bounties are paid out through a structured and transparent process to ensure fairness and accountability. Here's how it works:

### 1. Bounty Creation

- Bounties are defined in YAML files located in the `.bounties/` directory.
- Each YAML file corresponds to a specific pull request and includes:
  - **Address**: Solana wallet address to receive the bounty.
  - **Amount**: SOL amount to be paid.
  - **txHash**: Transaction hash after payout (initially empty).

### 2. Task Completion

- Contributors make moves by submitting pull requests.
- Upon acceptance of a move, a bounty YAML file is created or updated with the relevant details.

### 3. Review and Approval

- Project maintainers review the submitted pull requests to ensure the move is valid and adheres to the game's rules.

### 4. Payment

- Once a pull request is merged, GitHub Actions workflow (`.github/workflows/merge.yaml`) triggers the `payBounty.ts` script.
- The script processes the payment using the Solana blockchain:
  - Transfers SOL to the contributor's wallet.
  - Records the transaction hash in the respective YAML file for transparency.

### 5. Record Keeping

- All bounty transactions are recorded in the `.bounties/` directory.
- Example of a bounty record:

  ```yaml
  address: B9Ds5FLLQK6wPKwb69jC5drLurDqj97zFUVBJA9a7vx8
  amount: 0.001
  txHash: 59ANCNV11MUiAvgFiG7X6M76p2oWL7VUps4d6iJfnUvqhwWAxW7eAHGpAbKkBraUFBgJMKYy5rGHPM2C9QugmbfH
  ```

### Workflow Automation

- The workflow ensures that bounties are only paid once per pull request.
- It validates the bounty amount and verifies that the payout has not already been processed.

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](./LICENSE) file for details.

```text
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/
...
```

## Contact

For any questions, suggestions, or support, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub Issues**: [Open an Issue](https://github.com/natbot-testbot/workshop/issues)
- **Discord**: [Join our Discord Server](https://discord.gg/your-discord-invite)

---

*Happy Coding and Good Games! 🤖♟️*