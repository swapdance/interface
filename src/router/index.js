import { createWebHistory, createRouter } from "vue-router";
// Home
import Home from "@/views/inferface.vue";
import ETHtoWETH from "@/views/convert_eth_to_weth.vue";
import Settings from "@/views/settings/settings.vue";
import SwitchNetwork from "@/views/settings/switch_network.vue";
// create
import NewPoT from "@/views/create/new_pot.vue";
import NewPool from "@/views/create/new_pool.vue";
import ImportToken from "@/views/create/import_token.vue";
// super
import SuperPool from "@/views/super/super_pool.vue";
import SuperPoolUnlock from "@/views/super/super_pool_unlock.vue";
// liquidity
import AddLiquidity from "@/views/liquidity/add_liquidity.vue";
import RemoveLiquidity from "@/views/liquidity/remove_liquidity.vue";
// proof of trade
import GetReward from "@/views/proof/get_reward.vue";
import ProofOfTrade from "@/views/proof/proof_of_trade.vue";
import ProofOfTradeUnstake from "@/views/proof/proof_of_trade_unstake.vue";
// lists
import PairList from "@/views/lists/pair_list.vue";
import TokenList from "@/views/lists/token_list.vue";
import RewardList from "@/views/lists/reward_list.vue";
import NewPoTList from "@/views/lists/new_pot_list.vue";
import ProofOfTradeList from "@/views/lists/pot_list.vue";
// help
import NewPoTHelp from "@/views/info/new_pot_help.vue";
import NewPairHelp from "@/views/info/new_pair_help.vue";
import PoTHelp from "@/views/info/proof_of_trade_help.vue";
import LiquidityHelp from "@/views/info/liquidity_help.vue";
import SuperPoolHelp from "@/views/info/super_pool_help.vue";
import PoTReward from "@/views/info/proof_of_trade_reward_help.vue";
// confirm
import ConfirmReward from "@/views/confirm/reward.vue"; 
import ConfirmConvert from "@/views/confirm/convert.vue";  
import ConfirmNewPoT from "@/views/confirm/create_pot.vue";
import ConfirmSwapCoin from "@/views/confirm/swap_coin.vue";
import ConfirmNewPair from "@/views/confirm/create_pair.vue";
import ConfirmLockFunds from "@/views/confirm/super_lock.vue"; 
import ConfirmSwapTokens from "@/views/confirm/swap_tokens.vue";
import ConfirmPoTDeposit from "@/views/confirm/deposit_pot_lp.vue";
import ConfirmPoTWithdrawal from "@/views/confirm/withdraw_pot_lp.vue";
import ConfirmNewLiquidity from "@/views/confirm/deposit_liquidity.vue";
import ConfirmRemoveLiquidity from "@/views/confirm/withdraw_liquidity.vue";
import ConfirmSuperWithReward from "@/views/confirm/unlock_super_with_reward.vue";
import ConfirmSuperWithoutReward from "@/views/confirm/unlock_super_without_reward.vue";
// footer
import Risks from "@/views/info/risks.vue";
import TermsOfService from "@/views/info/terms_of_service.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/switch_network",
    name: "Switch Network",
    component: SwitchNetwork,
  },
  {
    path: "/convert_eth_to_weth",
    name: "Convert ETH to WETH",
    component: ETHtoWETH,
  },
  {
    path: "/risks",
    name: "Risks",
    component: Risks,
  },
  {
    path: "/terms_of_service",
    name: "Terms of Service",
    component: TermsOfService,
  },
  {
    path: "/token_list",
    name: "Token List",
    component: TokenList,
  },
  {
    path: "/pair_list",
    name: "Pair List",
    component: PairList,
  },
  {
    path: "/add_liquidity",
    name: "Add Liquidity",
    component: AddLiquidity,
  },
  {
    path: "/remove_liquidity",
    name: "Remove Liquidity",
    component: RemoveLiquidity,
  },
  {
    path: "/new_pool",
    name: "New Pool",
    component: NewPool,
  },
  {
    path: "/new_pot",
    name: "New PoT",
    component: NewPoT,
  },
  {
    path: "/new_pot_list",
    name: "New PoT List",
    component: NewPoTList,
  },
  {
    path: "/import_token",
    name: "Import Token",
    component: ImportToken,
  },
  {
    path: "/proof_of_trade",
    name: "Proof of Trade",
    component: ProofOfTrade,
  },
  {
    path: "/proof_of_trade_unstake",
    name: "Proof of Trade Unstake",
    component: ProofOfTradeUnstake,
  },
  {
    path: "/get_reward",
    name: "Get Reward",
    component: GetReward,
  },
  {
    path: "/pot_list",
    name: "Proof of Trade List",
    component: ProofOfTradeList,
  },
  {
    path: "/super_pool",
    name: "Super Pool",
    component: SuperPool,
  },
  {
    path: "/super_pool_unlock",
    name: "Super Pool Unlock",
    component: SuperPoolUnlock,
  },
  {
    path: "/new_pair_help",
    name: "New Pair Help",
    component: NewPairHelp,
  },
  {
    path: "/proof_of_trade_help",
    name: "Proof of trade help",
    component: PoTHelp,
  },
  {
    path: "/new_pot_pool_help",
    name: "New PoT Pool Help",
    component: NewPoTHelp,
  },
  {
    path: "/proof_of_trade_reward_help",
    name: "Proof of trade reward help",
    component: PoTReward,
  },
  {
    path: "/super_pool_help",
    name: "Super Pool Help",
    component: SuperPoolHelp,
  },
  {
    path: "/liquidity_help",
    name: "Liquidity Help",
    component: LiquidityHelp,
  },
  {
    path: "/reward_list",
    name: "Reward List",
    component: RewardList,
  },
  {
    path: "/confirm_new_liquidity",
    name: "Confirm New Liquidity",
    component: ConfirmNewLiquidity,
  },
  {
    path: "/confirm_remove_liquidity",
    name: "Confirm Remove Liquidity",
    component: ConfirmRemoveLiquidity,
  },
  {
    path: "/confirm_new_pair",
    name: "Confirm New Pair",
    component: ConfirmNewPair,
  },
  {
    path: "/confirm_new_pot",
    name: "Confirm New PoT",
    component: ConfirmNewPoT,
  },
  {
    path: "/confirm_pot_deposit",
    name: "Confirm PoT Deposit",
    component: ConfirmPoTDeposit,
  },
  {
    path: "/confirm_pot_withdrawal",
    name: "Confirm PoT Withdrawal",
    component: ConfirmPoTWithdrawal,
  },
  {
    path: "/confirm_lock_funds",
    name: "Confirm Lock Funds",
    component: ConfirmLockFunds,
  },
  {
    path: "/confirm_reward",
    name: "Confirm Reward",
    component: ConfirmReward,
  },
  {
    path: "/confirm_convert",
    name: "Confirm Convert",
    component: ConfirmConvert,
  },
  {
    path: "/confirm_swap",
    name: "Swap Tokens",
    component: ConfirmSwapTokens,
  },
  {
    path: "/confirm_swap_coin",
    name: "Swap Coin",
    component: ConfirmSwapCoin,
  },
  {
    path: "/confirm_super_with_reward",
    name: "Confirm Super With Reward",
    component: ConfirmSuperWithReward,
  },
  {
    path: "/confirm_super_without_reward",
    name: "Confirm Super Without Reward",
    component: ConfirmSuperWithoutReward,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;