<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 100%;"><mark class="purple"> ⩧ </mark>Add Liquidity</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
              <p style="text-align: left;width: 1%;"></p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Remove Liquidity'}" tooltip="Remove Liquidity">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-padding" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M8 16v.01"></path>
                  <path d="M8 12v.01"></path>
                  <path d="M8 8v.01"></path>
                  <path d="M16 16v.01"></path>
                  <path d="M16 12v.01"></path>
                  <path d="M16 8v.01"></path>
                  <path d="M12 8v.01"></path>
                  <path d="M12 16v.01"></path>
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
                <img @click="open_addr(token_addr)" :title="token_addr" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr)" width="24" height="24">
                <img @click="open_addr(token_addr2)" :title="token_addr2" style="margin-right: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr2)" width="24" height="24">
              </div>
            </div>
            <div v-if="token_balance_calc1 > 0 && token_balance_calc2 > 0 || (add_liquidity_station_type == 0 && token_balance_calc1 == 0 && token_balance_calc1 == 0)" className='wrapper3'>
              <router-link @click="check()" :to="{name: 'Pair List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' + token_symbol1" :disabled="true">
              </router-link>
              <router-link @click="check()" :to="{name: 'Pair List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' + token_symbol2" :disabled="true">
              </router-link>
              <input style="text-right: left; width: 100%;" id="new_liquidity_input" :value="token_amount1" @input="token_amount1 = $event.target.value" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="1.0">
            </div>
            <div v-if="add_liquidity_station_type == 1 && token_balance_calc1 == 0 && token_balance_calc2 == 0" className='wrapper2inline' style="grid-row-gap: 0rem;">
              <router-link @click="check()" :to="{name: 'Pair List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' + token_symbol1" :disabled="true">
              </router-link>
              <input 
                :value="token_amount1" 
                @input="token_amount1 = $event.target.value" 
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                placeholder="1.0">
            </div>
            <div v-if="add_liquidity_station_type == 1 && token_balance_calc1 == 0 && token_balance_calc2 == 0" className='wrapper2inline' style="grid-row-gap: 0rem;">
              <router-link @click="check()" :to="{name: 'Pair List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' + token_symbol2" :disabled="true">
              </router-link>
              <input 
                :value="token_amount_new_liquidity2" 
                @input="token_amount_new_liquidity2 = $event.target.value" 
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                placeholder="1.0">
            </div>
            
            <div v-if="token_balance_calc1 > 0 && token_balance_calc2 > 0 || (add_liquidity_station_type == 0 && token_balance_calc1 == 0 && token_balance_calc2 == 0)"  className='wrapper2inline'>
              <p style="text-align: left;">Deposit <a href="#max" @click="use_max_balance()">Max</a></p>
              <p style="text-align: right;">{{token_name1}}</p>
            </div>
            <div v-if="add_liquidity_station_type == 1 && token_balance_calc1 == 0 && token_balance_calc2 == 0"  className='wrapper2' style="grid-template-columns: 0.65fr 2.45fr;">
              <h4 style="text-align: left;">Set Price</h4>
              <p style="text-align: right;">1 {{token_symbol1}}: <mark class="purple">{{(token_amount_new_liquidity2 / token_amount1).toString().substring(0, 14)}}</mark> {{token_symbol2}}</p>
            </div>
          </div>
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">Deposit</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/liquidity_help"><div class="help-tip"></div></router-link>
            </div>
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;">
              <p style="text-align: left;">Token 1</p>
              <p style="text-align: right;">{{token_amount1}} <mark class="purple">{{token_symbol1}}</mark></p>
            </div>
            <div v-if="token_balance_calc1 > 0 && token_balance_calc2 > 0 || (add_liquidity_station_type == 0 && token_balance_calc1 == 0 && token_balance_calc2 == 0)" className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 0.55fr 2.6fr;">
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;">{{token_amount2}} <mark class="purple">{{token_symbol2}}</mark></p>
            </div>
            <div v-if="add_liquidity_station_type == 1 && token_balance_calc1 == 0 && token_balance_calc2 == 0" className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;">
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;">{{token_amount_new_liquidity2.toString().substring(0, 15)}} <mark class="purple">{{token_symbol2}}</mark></p>
            </div>
            <div className='wrapper2inline'  style="margin-bottom: 1rem; grid-template-columns: 0.9fr 2.1fr;">
              <p style="text-align: left;">You Receive</p>
              <p style="text-align: right;">{{lp_received.toString().substring(0, 12)}} <mark class="purple">LP</mark></p>
            </div>
            <h4 style="text-align: left; margin-bottom: 1rem;">Pool info</h4>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">My Share</p>
              <p style="text-align: right;" :class="my_share > 25 ? 'green_class' : ''">{{my_share.toString().substring(0, 9)}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Pool Impact</p>
              <p style="text-align: right;" :class="pool_impact > 5 ? 'green_class' : ''">{{pool_impact.toString().substring(0, 12)}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;" >Pair Fee</p>
              <p style="text-align: right;">{{token_fee1}}% / {{token_fee2}}%</p>
            </div>
            <div v-if="token_balance1 == 0 && token_balance2 == 0" className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">{{token_symbol1}} / {{token_symbol2}}</p>
              <p style="text-align: right;">{{Number(token_balance1).toFixed(1)}} / {{Number(token_balance1).toFixed(1)}}</p>
            </div>
            <div v-if="token_balance1 > 0 && token_balance2 > 0" className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">{{token_symbol1}} / {{token_symbol2}}</p>
              <p style="text-align: right;">{{token_balance1.toString().substring(0, 12)}} / {{token_balance2.toString().substring(0, 12)}}</p>
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">Pool Type</p>
              <p style="text-align: right;">{{pool_type}}</p>
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
            <div v-if="error_set_amount_token1 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Why do you try to deposit zero {{token_symbol1}}?</p>
            </div>
            <div v-if="error_set_amount_token2 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Why do you try to deposit zero {{token_symbol2}}?</p>
            </div>
            <div v-if="error_amount_token1 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Oops.. Your {{token_symbol1}} balance is zero</p>
            </div>
            <div v-if="error_amount_token2 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Oops.. Your {{token_symbol2}} balance is zero</p>
            </div>
            <div v-if="error_max_amount_token1 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">You have only {{max_token_value1.toString().substring(0, 12)}} {{token_symbol1}}</p>
            </div>
            <div v-if="error_max_amount_token2 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">You have only {{max_token_value2.toString().substring(0, 12)}} {{token_symbol2}}</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="liquidity_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Add Liquidity'" @click="check()" v-on:click="liquidity_connect">{{connect_button}}</button>
        </div>
      </section>
    </div>
</template>

<script>

import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
const { ethers } = require('ethers'); // BigNumber
import { ENumber } from "@/helpers/numbers";
import { ref, computed, watchEffect } from "vue";

export default {
  name: 'add liquidity',
  setup() {
    useMeta({
      title: 'Provide Liquidity : Swap.Dance', 
      description: 'Choose a trading pair, type an amount you want to deposit press "Deposit Liquidity", confirm the transaction and start earn on liquidity mining',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, New liquidity, liquidity pool, Swap tokens, Exchange tokens, DEX, AMM',
    })
    const store = useStore();
    const pool_type = ref("");
    const my_share = ref("0.0");
    const lp_received = ref("");
    const token_amount2 = ref("");
    const clear_amount1 = ref("");
    const clear_amount2 = ref("");
    const max_token_value1 = ref("");
    const max_token_value2 = ref("");
    const token_amount1 = ref("1.0");
    const clear_amount_slippage1 = ref("");
    const clear_amount_slippage2 = ref("");
    const token_amount_new_liquidity2 = ref("1.0");
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const slippage = computed(() => store.state.settings_slippage_liq);
    const token_addr = computed(() => store.state.add_liquidity_token_addr1);
    const token_addr2 = computed(() => store.state.add_liquidity_token_addr2);
    const token_fee1 = computed(() => store.state.add_liquidity_token_fee1);
    const token_fee2 = computed(() => store.state.add_liquidity_token_fee2);
    const token_name1 = computed(() => store.state.add_liquidity_token_name1);
    const token_name2 = computed(() => store.state.add_liquidity_token_name2);
    const token_symbol1 = computed(() => store.state.add_liquidity_token_symbol1);
    const token_symbol2 = computed(() => store.state.add_liquidity_token_symbol2);
    const token_balance1 = computed(() => store.state.add_liquidity_token_balance1);
    const token_balance2 = computed(() => store.state.add_liquidity_token_balance2);
    const connect_button = computed(() => store.state.connect_button_add_liquidity);
    const token_balance_calc1 = computed(() => store.state.add_liquidity_token_calc_balance1);
    const token_balance_calc2 = computed(() => store.state.add_liquidity_token_calc_balance2);
    const add_liquidity_station = computed(() => store.state.add_liquidity_station);
    const add_liquidity_station_type = computed(() => store.state.add_liquidity_station_type);
    const token_decimal1 = computed(() => store.state.add_liquidity_token_decimal1);
    const token_decimal2 = computed(() => store.state.add_liquidity_token_decimal2);
    
    const pool_impact = ref("");
    // errors
    const error_amount_token1 = ref(false);
    const error_amount_token2 = ref(false);
    const error_max_amount_token1 = ref(false);
    const error_max_amount_token2 = ref(false);
    const error_set_amount_token1 = ref(false);
    const error_set_amount_token2 = ref(false);

    function check() {
      store.state.liquidity_page = 1;
    }

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {
            
      if (block_number.value && Number(token_amount1.value) > 0){
        
        if (add_liquidity_station_type.value == 1) {
          pool_type.value = "DYNAMIC MARKET";
        } else {
          pool_type.value = "STABLE MARKET";
        }

        if (Number(token_balance_calc1.value) > 0 && Number(token_balance_calc2.value) > 0 
          || Number(add_liquidity_station_type.value) == 0) {        
          let amount_liquidity = await core.get_add_liquidity(
            token_addr.value,
            token_addr2.value,
            add_liquidity_station.value,  
            Number(add_liquidity_station_type.value),
            Number(token_amount1.value), 
            Number(token_balance_calc1.value), 
            Number(token_balance_calc2.value),
            Number(token_decimal1.value),
            Number(token_decimal2.value)
          );

          if (Number(amount_liquidity.user_share) == 0){
            my_share.value = "0.0";
          } else {
            my_share.value = amount_liquidity.user_share;
          }

          lp_received.value = amount_liquidity.lp_received;
          token_amount2.value = amount_liquidity.add_amount2;
          max_token_value1.value = amount_liquidity.user_token_balance;
          max_token_value2.value = amount_liquidity.user_token_balance2;

          clear_amount1.value = amount_liquidity.clear_amount1;
          clear_amount2.value = amount_liquidity.clear_amount2;
          clear_amount_slippage1.value = amount_liquidity.clear_amount_slippage1;
          clear_amount_slippage2.value = amount_liquidity.clear_amount_slippage2;
          
          if (Number(token_balance_calc1.value) == 0 && Number(token_balance_calc2.value) == 0) {
            if (Number(token_amount1.value) > 0 && Number(token_amount_new_liquidity2.value) > 0) {
              pool_impact.value = "100.0";
              my_share.value = "0.0";
            } else {
              pool_impact.value = "0.0";
              my_share.value = "0.0";
            }
          } else {
            pool_impact.value = ((((Number(token_balance_calc1.value) + 
              Number(token_amount1.value)) / Number(token_balance_calc1.value)) * 100) - 100);
          }

        } else if (Number(token_balance_calc1.value) == 0 && Number(token_balance_calc2.value) == 0){
          if (Number(token_amount1.value) > 0 && Number(token_amount_new_liquidity2.value) > 0)  {
            my_share.value = "0.0";
            pool_impact.value = "100.0";
            clear_amount_slippage1.value = token_amount1.value;
            clear_amount_slippage2.value = token_amount_new_liquidity2.value;
            clear_amount1.value = token_amount1.value;
            clear_amount2.value = token_amount_new_liquidity2.value;

            let user_tokens_balance = await core.get_liquidity_user_balance(
              token_addr.value,
              token_addr2.value,
              Number(token_decimal1.value),
              Number(token_decimal2.value)
            );
            max_token_value1.value = user_tokens_balance.user_token_balance;
            max_token_value2.value = user_tokens_balance.user_token_balance2;
            
            lp_received.value = Math.sqrt(Number(token_amount1.value) * Number(token_amount_new_liquidity2.value)) - 0.000000001;
          } else if (Number(token_amount1.value) == 0 && Number(token_amount_new_liquidity2.value) > 0 
            || Number(token_amount1.value) > 0 && Number(token_amount_new_liquidity2.value) == 0) {
            my_share.value = "0.0";
            pool_impact.value = "0.0";
            lp_received.value = "0.0";
          } 
          
        }
      } else if(Number(token_amount1.value) == 0){
        pool_impact.value = "0.0";
        token_amount2.value = "0.0";
        lp_received.value = "0.0";
      }
    })

    function use_max_balance() {
      // user lp balance
      token_amount1.value = max_token_value1.value;
    }

    return {
      check,
      my_share,
      slippage,
      pool_type,
      open_addr,
      token_addr,
      token_addr2,
      token_fee1,
      token_fee2,
      pool_impact,
      token_name1,
      token_name2,
      lp_received,
      clear_amount1,
      clear_amount2,
      token_symbol1,
      token_symbol2,
      token_amount1,
      token_amount2,
      token_decimal1,
      token_decimal2,
      token_balance1,
      token_balance2,
      connect_button,
      use_max_balance,
      max_token_value1,
      max_token_value2,
      token_balance_calc1,
      token_balance_calc2,
      clear_amount_slippage1,
      clear_amount_slippage2,
      add_liquidity_station_type,
      token_amount_new_liquidity2,
      // errors
      error_amount_token1,
      error_amount_token2,
      error_max_amount_token1,
      error_max_amount_token2,
      error_set_amount_token1,
      error_set_amount_token2,
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
        // set temp price
        this.$store.state.lp_amount = this.lp_received;
        this.$store.state.temp_price1 = this.token_amount1;
        
        if (Number(this.token_amount2) == 0) {
          this.$store.state.temp_price2 = this.token_amount_new_liquidity2;
        } else {
          this.$store.state.temp_price2 = this.token_amount2;
        }
        // do other stuff
        let pair_station = this.$store.state.add_liquidity_station;
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        let addr1 = this.$store.state.add_liquidity_token_addr1;
        let addr2 = this.$store.state.add_liquidity_token_addr2;
        let amount1 = Number(this.clear_amount1);
        let amount2 = Number(this.clear_amount2);
        let max_amount1 = Number(this.max_token_value1);
        let max_amount2 = Number(this.max_token_value2);
        let amount_slippage1 = Number(this.clear_amount_slippage1);
        let amount_slippage2 = Number(this.clear_amount_slippage2);
        
        let check_max_amount1 = ethers.utils.parseUnits(max_amount1.toString(), this.decimal1);
        let check_max_amount2 = ethers.utils.parseUnits(max_amount2.toString(), this.decimal2);
        // check errors before push new tx
        this.error_amount_token1 = false;
        this.error_amount_token2 = false;
        this.error_max_amount_token1 = false;
        this.error_max_amount_token2 = false;
        this.error_set_amount_token1 = false;
        this.error_set_amount_token2 = false;

        if (Number(max_amount1) == 0){
          this.error_amount_token1 = true;
        } else if (Number(max_amount2) == 0) {
          this.error_amount_token2 = true;
          this.error_amount_token1 = false;
        } else if (Number(amount1) == 0) {
          this.error_set_amount_token1 = true;
          this.error_amount_token2 = false;
          this.error_amount_token1 = false;
        } else if (Number(amount2) == 0) {
          this.error_set_amount_token1 = false;
          this.error_set_amount_token2 = true;
          this.error_amount_token2 = false;
          this.error_amount_token1 = false;
        } else if (Number(amount1) > Number(check_max_amount1)) {
          this.error_set_amount_token1 = false;
          this.error_set_amount_token2 = false;
          this.error_amount_token1 = false;
          this.error_amount_token2 = false;
          this.error_max_amount_token1 = true;
        } else if (Number(amount2) > Number(check_max_amount2)) {
          this.error_amount_token1 = false;
          this.error_amount_token2 = false;
          this.error_max_amount_token1 = false;
          this.error_max_amount_token2 = true;
          this.error_set_amount_token1 = false;
          this.error_set_amount_token2 = false;
        } else {
          this.error_amount_token1 = false;
          this.error_amount_token2 = false;
          this.error_max_amount_token1 = false;
          this.error_max_amount_token2 = false;
          this.error_set_amount_token1 = false;
          this.error_set_amount_token2 = false;

          this.$router.push({ path: '/confirm_new_liquidity' });
          
          if (this.token_balance1 == 0 && this.token_balance2 == 0 && this.add_liquidity_station_type == 1){
            amount1 = ethers.utils.parseUnits(ENumber(amount1).toString(), this.token_decimal1);
            amount2 = ethers.utils.parseUnits(ENumber(amount2).toString(), this.token_decimal2);
            amount_slippage1 = ethers.utils.parseUnits(ENumber(amount_slippage1).toString(), this.token_decimal1);
            amount_slippage2 = ethers.utils.parseUnits(ENumber(amount_slippage2).toString(), this.token_decimal2);
          }
          
          await core.token_approve(addr1, pair_station, amount1);
          if (this.$store.state.error_token_approve1 == false) {
            await core.token_approve2(addr2, pair_station, amount2);
            if (this.$store.state.error_token_approve2 == false) {
              await core.add_liquidity(pair_station, amount1, amount_slippage1, amount2, amount_slippage2, expiry);
              if (this.$store.state.add_liquidity_sign_tx == false) {
                await core.clean_and_update_data();
                this.$store.state.add_liquidity_station = pair_station;
                this.$store.dispatch("change_add_liquidity_pair");
              }
            }
          }
        }
      }
    },
  }
}
</script>
<style>

.wrapper2a {
  display: grid;
  grid-template-columns: 0.4fr 2.6fr;
  grid-column-gap: 1px;
  grid-row-gap: 1em;
}

::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}

.green_class {
  color: #008a7b;
}

.wrapper2 {
  display: grid;
  grid-template-columns: 0.7fr 2.3fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

.wrapper3 {
  display: grid;
  grid-template-columns: 0.9fr 0.9fr 1.2fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

</style>
