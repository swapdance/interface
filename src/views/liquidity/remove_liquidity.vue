<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>

          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 150%;"><mark class="purple"> ⩦ </mark>Remove Liquidity</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
              <p style="text-align: left;width: 1%;"></p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Add Liquidity'}" tooltip="Add Liquidity">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-2" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
                  <polyline points="4 12 12 16 20 12"></polyline>
                  <polyline points="4 16 12 20 20 16"></polyline>
                </svg>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Settings'}" tooltip="Settings">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="14" cy="6" r="2"></circle>
                  <line x1="4" y1="6" x2="12" y2="6"></line>
                  <line x1="16" y1="6" x2="20" y2="6"></line>
                  <circle cx="8" cy="12" r="2"></circle>
                  <line x1="4" y1="12" x2="6" y2="12"></line>
                  <line x1="10" y1="12" x2="20" y2="12"></line>
                  <circle cx="17" cy="18" r="2"></circle>
                  <line x1="4" y1="18" x2="15" y2="18"></line>
                  <line x1="19" y1="18" x2="20" y2="18"></line>
                </svg>
              </router-link>
            </div>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card'>
            <div className='wrapper3inline'>
              <p style="text-align: left;">Select Pool</p>
              <p style="text-align: left;"></p>
              <div className='wrapper2inline' style="margin-left: auto;">
                <img @click="open_addr(token_addr1)" :title="token_addr1" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr1)" width="24" height="24">
                <img @click="open_addr(token_addr2)" :title="token_addr2" style="margin-right: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr2)" width="24" height="24">
              </div>
            </div>
            <div className='wrapper3'>
              <router-link @click="check()" :to="{name: 'Pair List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' + token_symbol1" :disabled="true">
              </router-link>
              <router-link @click="check()" :to="{name: 'Pair List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' + token_symbol2" :disabled="true">
              </router-link>
              <input style="text-right: left; width: 100%;" id="lp_input_amount" :value="LP_amount" @input="LP_amount = $event.target.value" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="1.0">
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">Withdraw <a href="#max" @click="use_max_balance()">Max</a></p>
              <p style="text-align: right;">xDx{{token_symbol1}}x{{token_symbol2}}</p>
            </div>
          </div>
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">You Receive</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/liquidity_help"><div class="help-tip"></div></router-link>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;">
              <p style="text-align: left;">Token 1</p>
              <p style="text-align: right;">{{token_amount_out1}} <mark class="purple">{{token_symbol1}}</mark></p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 0.55fr 2.6fr;">
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;">{{token_amount_out2}} <mark class="purple">{{token_symbol2}}</mark></p>
            </div>
            <h4 style="text-align: left; margin-bottom: 1rem;">Pool info</h4>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">My Share</p>
              <p style="text-align: right;" :class="my_share > 25 ? 'green_class' : ''">{{my_share.toString().substring(0, 9)}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Pool Impact</p>
              <p style="text-align: right;" :class="pool_impact > 5 ? 'red_class' : ''">{{pool_impact.toString().substring(0, 12)}}%</p>
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">{{token_symbol1}} / {{token_symbol2}}</p>
              <p style="text-align: right;">{{token_balance1.toString().substring(0, 9)}} / {{token_balance2.toString().substring(0, 9)}}</p>
            </div>
          </div>

          <div className='wrapper3inline' style="margin-bottom: 0.3rem;">
            <p style="text-align: left; width: 100%;"><mark class="purple">Slippage</mark></p>
            <p class="to-main"></p>
            <p style="text-align: right; cursor: pointer;">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Settings'}"><mark class="purple"> ✎ {{slippage}}%</mark></router-link>
            </p>
          </div>

          <hr class="solid">
            <div v-if="error_zero_tokens == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">You have zero LP</p>
            </div>
            <div v-if="error_max_balance == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Don't try to unstake more than you can</p>
            </div>
            <div v-if="error_amount_min1 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">{{token_symbol1}} amount is lower than minimum</p>
            </div>
            <div v-if="error_amount_min2 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">{{token_symbol2}} amount is lower than minimum</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="liquidity_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Remove Liquidity'" @click="check()" v-on:click="liquidity_connect">{{connect_button}}</button>
        </div>
      </section>
    </div>
</template>

<script>

import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
const { ethers } = require('ethers');
import { ref, computed, watchEffect } from "vue";

export default {
  name: 'remove liquidity',
  setup() {

    useMeta({
      title: 'Remove Liquidity : Swap.Dance', 
      description: 'Choose a trading pair, type an amount of LP token you want to withdraw press "Remove Liquidity", confirm the transaction and receive tokens to your wallet',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Remove liquidity, liquidity pool, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();
    const my_share = ref("0.0");
    const LP_amount = ref("1.0");
    const max_token_value = ref("");
    const token_amount_out1 = ref("");
    const token_amount_out2 = ref("");
    const error_max_balance = ref(false);
    const error_zero_tokens = ref(false);
    const error_amount_min1 = ref(false);
    const error_amount_min2 = ref(false);
    const super_pool_liquidity = ref("");
    const clear_amount_slippage1 = ref("");
    const clear_amount_slippage2 = ref("");
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const slippage = computed(() => store.state.settings_slippage_liq);
    const token_name1 = computed(() => store.state.remove_liquidity_token_name1);
    const token_name2 = computed(() => store.state.remove_liquidity_token_name2);
    const token_addr1 = computed(() => store.state.remove_liquidity_token_addr1);
    const token_addr2 = computed(() => store.state.remove_liquidity_token_addr2);
    const token_balance1 = computed(() => store.state.remove_liquidity_token_balance1);
    const token_balance2 = computed(() => store.state.remove_liquidity_token_balance2);
    const token_symbol1 = computed(() => store.state.remove_liquidity_token_symbol1);
    const token_symbol2 = computed(() => store.state.remove_liquidity_token_symbol2);
    const connect_button = computed(() => store.state.connect_button_remove_liquidity);
    const remove_liquidity_station = computed(() => store.state.remove_liquidity_station);
    const token_decimal1 = computed(() => store.state.remove_liquidity_token_decimal1);
    const token_decimal2 = computed(() => store.state.remove_liquidity_token_decimal2);
    const token_balance_calc1 = computed(() => store.state.remove_liquidity_token_calc_balance1);
    
    const pool_impact = ref("");
   
    function check() {
      store.state.liquidity_page = 2;
    }
    
    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {

      if (block_number.value && Number(LP_amount.value) > 0){
        let remove_liquidity = await core.get_remove_liquidity(
          remove_liquidity_station.value,  
          Number(LP_amount.value),
          Number(token_decimal1.value),
          Number(token_decimal2.value));
        if (Number(remove_liquidity.user_share) == 0){
          my_share.value = "0.0";
        } else {
          if (connect_button.value.length == 19) {
            my_share.value = "0.0";
          } else {
            my_share.value = remove_liquidity.user_share;
          }
        }
        max_token_value.value = remove_liquidity.user_balance;
        token_amount_out1.value = remove_liquidity.remove_amount1;
        token_amount_out2.value = remove_liquidity.remove_amount2;
        super_pool_liquidity.value = remove_liquidity.super_pool_lp;

        clear_amount_slippage1.value = remove_liquidity.amount_slippage1;
        clear_amount_slippage2.value = remove_liquidity.amount_slippage2;
        pool_impact.value = (100 - (((Number(token_balance_calc1.value) - Number(token_amount_out1.value)) / Number(token_balance_calc1.value)) * (100)));
      } else if (Number(LP_amount.value) == 0) {
        my_share.value = "0.0";
        token_amount_out1.value = "0.0";
        token_amount_out2.value = "0.0";
        super_pool_liquidity.value = "0.0";
        pool_impact.value = "0.0";
      }
    })

    function use_max_balance() {
      // user lp balance
      LP_amount.value = max_token_value.value;
    }


    return {
      check,
      my_share,
      slippage,
      LP_amount,
      open_addr,
      token_addr1,
      token_addr2,
      pool_impact,
      token_name1,
      token_name2,
      token_symbol1,
      token_symbol2,
      token_balance1,
      token_balance2,
      connect_button,
      max_token_value,
      use_max_balance,
      token_amount_out1,
      token_amount_out2,
      error_amount_min1,
      error_amount_min2,
      error_zero_tokens,
      error_max_balance,
      clear_amount_slippage1,
      clear_amount_slippage2,
    }
  },
  methods: {
    getImgUrl: function (imagePath) {
      try {
        require(`@/assets/icons/${imagePath}/logo.png`);
        return require(`@/assets/icons/${imagePath}/logo.png`)
      } catch (e) {
        return require(`@/assets/icons/undefined/logo.png`)
      }
    },
    async liquidity_connect() {
      if (this.connect_button == "Connect to a wallet") {
        if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({
              method: "wallet_requestPermissions",
              params: [{
                  eth_accounts: {}
              }]
          }).then(() => window.ethereum.request({
              method: 'eth_requestAccounts'
          }));
          this.$store.dispatch("change_button_status");
          // update interface balances
          let addr1 = this.$store.state.interface_token_address1[0];
          let addr2 = this.$store.state.interface_token_address2[0];
          let decimal1 = this.$store.state.interface_token_decimal1;
          let decimal2 = this.$store.state.interface_token_decimal2;
          await core.get_balance(addr1, decimal1, addr2, decimal2);
          this.$store.state.interface_user_address = (await core.connect_wallet()).user_address;
        } 
      } else {
        // drop confirm vars
        this.$store.dispatch("drop_confirm_vars");
        // set LP amount
        this.$store.state.lp_amount = this.LP_amount;
        this.$store.state.temp_price1 = this.token_amount_out1;
        this.$store.state.temp_price2 = this.token_amount_out2;
        //
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        let lp_amount = ethers.utils.parseUnits(this.LP_amount.toString(), 18);
        let amount_min1 = this.clear_amount_slippage1;
        let amount_min2 = this.clear_amount_slippage2;
        let pair_station = this.$store.state.remove_liquidity_station;
        //
        this.error_amount_min1 = false;
        this.error_amount_min2 = false;
        this.error_max_balance = false;
        this.error_zero_tokens = false;
        if (Number(this.max_token_value) == 0) {
          this.error_zero_tokens = true;
        } else if (Number(this.LP_amount) > Number(this.max_token_value)) {
          this.error_max_balance = true;
          this.error_zero_tokens = false;
        } else if (Number(amount_min1) == 0) {
          this.error_amount_min1 = true;
          this.error_max_balance = false;
          this.error_zero_tokens = false;
        } else if (Number(amount_min2) == 0) {
          this.error_amount_min2 = true;
          this.error_amount_min1 = false;
          this.error_max_balance = false;
          this.error_zero_tokens = false;
        } else {
          this.error_amount_min1 = false;
          this.error_amount_min2 = false;
          this.error_max_balance = false;
          this.error_zero_tokens = false;
          this.$router.push({ path: '/confirm_remove_liquidity' });
        
          await core.token_approve(pair_station, pair_station, lp_amount);
          if (this.$store.state.error_token_approve1 == false) {
            await core.remove_liquidity(pair_station, lp_amount, amount_min1, amount_min2, expiry);
            if (this.$store.state.remove_liquidity_sign_tx == false) {
              await core.clean_and_update_data();
              this.$store.state.remove_liquidity_station = pair_station;
              this.$store.dispatch("change_remove_liquidity_pair");
            }
          }
        }
      }
    },
  }
}
</script>
<style>

::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}

.red_class {
  color: rgb(223, 49, 49);
}

.wrapper3 {
  display: grid;
  grid-template-columns: 0.9fr 0.9fr 1.2fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}
</style>
