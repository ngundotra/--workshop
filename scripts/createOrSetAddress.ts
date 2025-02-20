import yaml from 'yaml';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

interface BountyConfig {
    amount: number;
    address?: string;
    txHash?: string;
}

function setBountyAddress(issueNumber: number, address: string) {
    const bountyPath = join(process.cwd(), `.bounties/${issueNumber}.yaml`);

    if (!existsSync(bountyPath)) {
        throw new Error(`Bounty file for issue #${issueNumber} not found`);
    }

    const existingConfig = yaml.parse(readFileSync(bountyPath, 'utf8')) as BountyConfig;

    if (existingConfig.txHash) {
        throw new Error('Bounty already paid out');
    }

    const newConfig: BountyConfig = {
        ...existingConfig,
        address
    };

    writeFileSync(bountyPath, yaml.stringify(newConfig));
    console.log(`Set address for issue #${issueNumber} to ${address}`);
}

// Parse command line arguments
const args = process.argv.slice(2);
const issueNumber = parseInt(args[1].replace('--issue=', ''));
const address = args[3].replace('--address=', '');

// Validate Solana address format
if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) {
    throw new Error('Invalid Solana address format');
}

setBountyAddress(issueNumber, address); 