
enum Side {
    Bid = 0,
    Ask = 1,
}

// Enum for various Swap types
enum Swap {
    Saber = 0,
    SaberAddDecimalsDeposit,
    SaberAddDecimalsWithdraw,
    TokenSwap,
    Sencha,
    Step,
    Cropper,
    Raydium,
    Crema, // 'a_to_b' bool
    Lifinity,
    Mercurial,
    Cykura,
    Serum, // 'side' (Side)
    MarinadeDeposit,
    MarinadeUnstake,
    Aldrin, // 'side' (Side)
    AldrinV2, // 'side' (Side)
    Whirlpool, // 'a_to_b' bool
    Invariant, // 'x_to_y' bool
    Meteora,
    GooseFX,
    DeltaFi, // 'stable' bool
    Balansol,
    MarcoPolo, // 'x_to_y' bool
    Dradex, // 'side' (Side)
    LifinityV2,
    RaydiumClmm,
    Openbook, // 'side' (Side)
    Phoenix, // 'side' (Side)
    Symmetry, // 'from_token_id' u64, 'to_token_id' u64
    TokenSwapV2,
    HeliumTreasuryManagementRedeemV0,
    StakeDexStakeWrappedSol,
    StakeDexSwapViaStake, // 'bridge_stake_seed' u32
    GooseFXV2,
    Perps,
    PerpsAddLiquidity,
    PerpsRemoveLiquidity,
    MeteoraDlmm,
    OpenBookV2, // 'side' (Side)
    RaydiumClmmV2,
    StakeDexPrefundWithdrawStakeAndDepositStake, // 'bridge_stake_seed' u32
    Clone, // 'pool_index' u8, 'quantity_is_input' bool, 'quantity_is_collateral' bool
    SanctumS, // 'src_lst_value_calc_accs' u8, 'dst_lst_value_calc_accs' u8, 'src_lst_index' u32, 'dst_lst_index' u32
    SanctumSAddLiquidity, // 'lst_value_calc_accs' u8, 'lst_index' u32
    SanctumSRemoveLiquidity, // 'lst_value_calc_accs' u8, 'lst_index' u32
    RaydiumCP,
    WhirlpoolSwapV2, // 'a_to_b' bool
    OneIntro,
    PumpdotfunWrappedBuy,
    PumpdotfunWrappedSell,
    PerpsV2,
    PerpsV2AddLiquidity,
    PerpsV2RemoveLiquidity,
    MoonshotWrappedBuy,
    MoonshotWrappedSell,
    StabbleStableSwap,
    StabbleWeightedSwap,
    Obric, // 'x_to_y' bool
    FoxBuyFromEstimatedCost,
    FoxClaimPartial, // 'is_y' bool
    SolFi, // 'is_quote_to_base' bool
    SolayerDelegateNoInit,
    SolayerUndelegateNoInit,
    TokenMill, // 'side' (Side)
    DaosFunBuy,
    DaosFunSell,
    ZeroFi,
    StakeDexWithdrawWrappedSol,
    VirtualsBuy,
    VirtualsSell,
    Perena, // 'in_index' u8, 'out_index' u8
    PumpdotfunAmmBuy,
    PumpdotfunAmmSell,
    Gamma,
    MeteoraDlmmSwapV2, // 'remaining_accounts_info' option
    Woofi,
}


// RoutePlanStep structure
interface RoutePlanStep {
    swap: any;
    percent: number;  // u8
    input_index: number;  // u8
    output_index: number;  // u8
}

interface RouteArgs {
    route_plan: RoutePlanStep[];
    in_amount: bigint;  // u64
    quoted_out_amount: bigint;  // u64
    slippage_bps: number;  // u16
    platform_fee_bps: number;  // u8
}
export {
    Swap,
    RoutePlanStep,
    RouteArgs
}