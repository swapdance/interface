<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 150%;"><mark class="purple"> ❂ </mark>Lock Funds</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
            <p></p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Super Pool Unlock'}" tooltip="Unlock Funds">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-artboard" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                <line x1="3" y1="8" x2="4" y2="8"></line>
                <line x1="3" y1="16" x2="4" y2="16"></line>
                <line x1="8" y1="3" x2="8" y2="4"></line>
                <line x1="16" y1="3" x2="16" y2="4"></line>
                <line x1="20" y1="8" x2="21" y2="8"></line>
                <line x1="20" y1="16" x2="21" y2="16"></line>
                <line x1="8" y1="20" x2="8" y2="21"></line>
                <line x1="16" y1="20" x2="16" y2="21"></line>
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
            <div className='wrapper2inline'>
              <p style="text-align: left;">Lock</p>
              <img @click="open_addr()" :title="dance_addr" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(dance_addr)" width="24" height="24">
            </div>
            <div className='wrapper2' style="grid-template-columns: 0.95fr 2.05fr;">
                <input type="sell_select_tokens" style="text-align: left; width: 87%;" value="DANCE" :disabled="true">
                <input 
                  style="text-right: left;" 
                  id="super_input" 
                  :value="stake_super"
                  @input="stake_super = $event.target.value" 
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  placeholder="1.0">
            </div>

            <div className='wrapper2inline'>
              <p style="text-align: left;">Swap.Dance Token</p>
              <p style="text-align: right;">Lock <a href="#max" @click="use_max_balance()">Max</a></p>
            </div>
          </div>
             
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">Status</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/super_pool_help"><div class="help-tip"></div></router-link>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Phase</p>
              <p style="text-align: right;">{{forming}}</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Total</p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Reward List'}"><p style="text-align: right;"><mark class="purple"><strong>{{tokens_count}}</strong></mark> LP Tokens</p></router-link>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Burn Rate</p>
              <p style="text-align: right;">{{burn_rate}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Super Balance</p>
              <p style="text-align: right;">{{nFormatter(dance_balance)}} <mark class="purple">DANCE</mark></p>
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">My Locked Balance</p>
              <p style="text-align: right;">{{nFormatter(my_stake)}} <mark class="purple">DANCE</mark></p>
            </div>
            
          </div>
          
          <hr class="solid">
            <div v-if="error_stake_distr == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Sorry, you can't lock DANCE in distribution phase</p>
            </div>
            <div v-if="error_stake_amount == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">DANCE amount is zero</p>
            </div>
            <div v-if="error_stake_balance == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Don't try to lock more than you can</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="super_pool_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Lock DANCE'" v-on:click="super_pool_connect">{{connect_button}}</button>
        </div>
      </section>
    </div>
</template>

<script>

import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
const { ethers } = require('ethers');
import { nFormatter } from "@/helpers/numbers";
import { ref, computed, watchEffect } from "vue";

export default {
  name: 'Super Pool',
  setup() {

    useMeta({
      title: 'Lock DANCE Token : Super Pool : Swap.Dance', 
      description: 'Lock your DANCE token to claim reward. Super pool has two phase, LP-Forming and LP-Distribution. In the first stage you can lock your DANCE token reward to receive a set of 10 LP on your choice when the super pool will change status to LP-Distribution.',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Super Pool, Lock DANCE token, Swap tokens, Exchange tokens, DEX, AMM',
    })
    //
    const store = useStore();
    const forming = ref("");
    const my_stake = ref("");
    const lock_status = ref("");
    const burn_rate = ref("0.0");
    const tokens_count = ref("");
    const dance_balance = ref("");
    const stake_super = ref("1.0");
    const user_dance_balance = ref("");
    const error_stake_distr = ref(false);
    const error_stake_amount = ref(false);
    const error_stake_balance = ref(false);
    const dance_addr = computed(() => store.state.dance_token);
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const connect_button = computed(() => store.state.connect_button_super_pool_deposit);

    function open_addr() {
        let full_link = etherscan_link.value + 'token/' + dance_addr.value;
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {
      if (block_number.value || connect_button.value.length != 19){
        
        let get_super_data = await core.connect_super_pool();
        burn_rate.value = (get_super_data.burn_rate / 100).toFixed(1);
        lock_status.value = get_super_data.lock_status;
        tokens_count.value = get_super_data.tokens_count;
        dance_balance.value = get_super_data.dance_balance;
        user_dance_balance.value = get_super_data.actual_user_balance;

        //token_img_addr.value = store.state.dance_token.toString();

        if (burn_rate.value == 0) {
          burn_rate.value = "0.0";
        }
        if (dance_balance.value == 0) {
          dance_balance.value = "0.0";
        }
        if (lock_status.value == 1) {
          forming.value = "LP-Distribution";
        } else {
          forming.value = "LP-Forming";
        }
        if (connect_button.value.length != 19) {
          if (get_super_data.user_dance_balance == 0 ) {
            my_stake.value = "0.0";
          } else {
            my_stake.value = get_super_data.user_dance_balance;
          }
        } else {
          my_stake.value = "0.0";
        }
      }
    })

    function use_max_balance() {
      // user lp balance
      stake_super.value = user_dance_balance.value;
    }



    return {
      forming,
      my_stake,
      open_addr,
      burn_rate,
      dance_addr,
      stake_super,
      lock_status,
      tokens_count,
      dance_balance,
      connect_button,
      use_max_balance,
      error_stake_distr,
      error_stake_amount,
      user_dance_balance,
      error_stake_balance,
    }
  },
  methods: {
    nFormatter,
    getImgUrl: function (imagePath) {
      try {
        require(`@/assets/icons/${imagePath}/logo.png`);
        return require(`@/assets/icons/${imagePath}/logo.png`)
      } catch (e) {
        return require(`@/assets/icons/undefined/logo.png`)
      }
    },
    async super_pool_connect() {
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
        this.$store.state.lp_amount = this.stake_super;
        if (Number(this.dance_balance) > 0) {

          let user_share = ((((Number(this.dance_balance) + 
              Number(this.stake_super)) / Number(this.dance_balance)) * 100) - 100);
          this.$store.state.temp_price1 = user_share;
        } else {
          this.$store.state.temp_price1 = "100.0";
        }
        // do other stuff
        let amount = Number(this.stake_super);
        let dance_token = this.$store.state.dance_token;
        let super_station = this.$store.state.super_station; // super pool
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        let amount_units = ethers.utils.parseUnits(amount.toString(), 18);

        this.error_stake_distr = false;
        this.error_stake_amount = false;
        this.error_stake_balance = false;
        
        if (this.lock_status == 1) {
          this.error_stake_distr = true;
        } else if (amount == 0) {
          this.error_stake_distr = false;
          this.error_stake_amount = true;
        } else if (amount > this.user_dance_balance) {
          this.error_stake_distr = false;
          this.error_stake_amount = false;
          this.error_stake_balance = true;
        } else {
          this.error_stake_distr = false;
          this.error_stake_amount = false;
          this.error_stake_balance = false;

          this.$router.push({ path: '/confirm_lock_funds' });
          await core.token_approve(dance_token, super_station, amount_units);
          if(this.$store.state.error_token_approve1 == false) {
            await core.super_pool_deposit(amount_units, expiry);
            if(this.$store.state.error_lock_super_pool == false) {
              await core.clean_and_update_data();
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

.wrapper2 {
  display: grid;
  grid-template-columns: 0.9fr 2.1fr;
  grid-column-gap: 5px;
  grid-row-gap: 1em;
}

</style>
