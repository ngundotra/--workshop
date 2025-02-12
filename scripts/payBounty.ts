import { AnchorProvider, Wallet, web3 } from "@coral-xyz/anchor";
import bs58 from "bs58";
import yaml from "yaml";
import { readFileSync, writeFileSync } from "fs";

import dotenv from "dotenv";

dotenv.config();

const MAX_BOUNTY_AMOUNT = 0.1;

async function main() {
    if (!process.env.SOLANA_PRIVATE_KEY || !process.env.SOLANA_RPC_URL) {
        throw new Error("SOLANA_PRIVATE_KEY and SOLANA_RPC_URL must be set");
    }
    if (!process.env.PR_NUMBER) {
        throw new Error("PR_NUMBER must be set");
    }
    console.log(`Paying bounty for PR #${process.env.PR_NUMBER}`);

    // Get the PR yaml from the bounties folder
    const bountyYaml = readFileSync(`.bounties/${process.env.PR_NUMBER}.yaml`, "utf8");

    // Parse the bounty yaml
    const bounty = yaml.parse(bountyYaml);
    if (!bounty.address) {
        throw new Error("Bounty address is not set");
    }
    if (!bounty.amount) {
        throw new Error("Bounty amount is not set");
    }
    if (bounty.amount >= MAX_BOUNTY_AMOUNT) {
        throw new Error(`Bounty amount is too high: ${bounty.amount} SOL`);
    }

    const connection = new web3.Connection(process.env.SOLANA_RPC_URL!);
    const walletKp = web3.Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_PRIVATE_KEY!));

    // Transfer the bounty amount to the bounty address
    const tx = new web3.Transaction();
    tx.add(web3.ComputeBudgetProgram.setComputeUnitLimit({ units: 1000 }));
    tx.add(web3.ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 10000 }));
    tx.add(web3.SystemProgram.transfer({
        fromPubkey: walletKp.publicKey,
        toPubkey: new web3.PublicKey(bounty.address),
        lamports: bounty.amount * web3.LAMPORTS_PER_SOL
    }));

    // Send & confirm the transaction
    const sig = await connection.sendTransaction(tx, [walletKp]);
    await connection.confirmTransaction({
        signature: sig,
        ...(await connection.getLatestBlockhash())
    }, "confirmed");
    console.log(`Transaction sent: https://explorer.solana.com/tx/${sig}`);

    // Write txHash back to yaml & save
    bounty.txHash = sig;
    writeFileSync(`.bounties/${process.env.PR_NUMBER}.yaml`, yaml.stringify(bounty));
    console.log(`Bounty paid out successfully: ${sig}`);
}

main().catch(console.error);