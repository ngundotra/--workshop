import yaml from 'yaml';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface BountyConfig {
    amount: number;
    address?: string;
    txHash?: string;
}

function createOrUpdateBounty(issueNumber: number, amount: number) {
    const bountyDir = join(process.cwd(), '.bounties');
    const bountyPath = join(bountyDir, `${issueNumber}.yaml`);

    // Create .bounties directory if needed
    if (!existsSync(bountyDir)) {
        mkdirSync(bountyDir, { recursive: true });
    }

    let existingConfig: BountyConfig = { amount: 0 };
    if (existsSync(bountyPath)) {
        existingConfig = yaml.parse(readFileSync(bountyPath, 'utf8'));
    }

    const newConfig: BountyConfig = {
        ...existingConfig,
        amount: existingConfig.amount + amount
    };

    writeFileSync(bountyPath, yaml.stringify(newConfig));
    console.log(`Updated bounty for issue #${issueNumber}: ${newConfig.amount} SOL`);
}

// Parse command line arguments
const args = process.argv.slice(2);
const issueNumber = parseInt(args[1].replace('--issue=', ''));
const amount = parseFloat(args[3].replace('--amount=', ''));

createOrUpdateBounty(issueNumber, amount); 