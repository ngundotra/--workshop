use anchor_lang::prelude::*;

declare_id!("GSEvDf4gTarzvEdhhLL9pm1FsXMZ8NKnDc7JtQkq7Zf3");

const SIGNER_0: Pubkey = pubkey!("6tgR1upn2bsMdiprpfUAWmoniEJ8E1XVF8f9gLmWqyTS");
const SIGNER_1: Pubkey = pubkey!("CyJj5ejJAUveDXnLduJbkvwjxcmWJNqCuB9DR7AExrHn");

const SOL_STORE_PREFIX: &[u8] = b"sol-store";

#[program]
pub mod solana_bounty_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, amount: u64) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);

        transfer(
            &ctx.accounts.signer.key(),
            &ctx.accounts.sol_store.key(),
            amount
        )?;

        Ok(())
    }

    pub fn withdraw_from_sol_store(ctx: Context<WithdrawFromSolStore>, amount: u64) -> Result<()> {
        transfer(
            &ctx.accounts.sol_store.key(),
            &ctx.accounts.signer.key(),
            amount
        )?;

        Ok(())
    }

    /// Sol store pays for state bond (aka rent)
    /// Bounty manager pays sol bounty
    pub fn create_bounty(ctx: Context<CreateBounty>, amount: u64) -> Result<()> {
        let bounty_manager = &ctx.accounts.bounty_manager.key();
        let sol_store = &ctx.accounts.sol_store.key();

        transfer(
            bounty_manager,
            sol_store,
            amount
        )?;

        Ok(())
    }

    /// Bounty sol paid out to recipient
    /// State bond (aka rent) paid out to sol store
    pub fn disburse_bounty(ctx: Context<DisburseBounty>) -> Result<()> {
        Ok(())
    }

    /// Returns funds to the bounty manager
    /// Returns state bond (aka rent) to the sol store
    pub fn revoke_bounty(ctx: Context<RevokeBounty>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        constraint = 
            signer.key() == SIGNER_0 ||
            signer.key() == SIGNER_1,
        mut
    )]
    pub signer: Signer<'info>,
    
    /// CHECK: This is safe because we just store SOL here
    #[account(
        seeds = [SOL_STORE_PREFIX],
        bump
    )]
    pub sol_store: UncheckedAccount<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WithdrawFromSolStore<'info> {
    #[account(
        constraint = 
            signer.key() == SIGNER_0 ||
            signer.key() == SIGNER_1,
    )]
    pub signer: Signer<'info>,

    /// CHECK: This is safe because we just store SOL here
    #[account(
        seeds = [SOL_STORE_PREFIX],
        bump
    )]
    pub sol_store: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateBounty<'info> {
    #[account(
        seeds = [SOL_STORE_PREFIX],
        bump
    )]
    pub sol_store: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct DisburseBounty<'info> {
    #[account(
        constraint = 
            bounty_manager.key() == SIGNER_0 ||
            bounty_manager.key() == SIGNER_1,
    )]
    pub bounty_manager: Signer<'info>,

    #[account(
        seeds = [SOL_STORE_PREFIX],
        bump
    )]
    pub sol_store: UncheckedAccount<'info>,

    pub system_program: Program<'info, System>,
}
