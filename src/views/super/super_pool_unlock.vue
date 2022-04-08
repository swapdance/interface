<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 180%;"><mark class="purple"> ✲ </mark>Claim Funds</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
            <p></p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Super Pool'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-model-2" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 8h8v8h-8z"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                </svg>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Settings'}">
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
              <p style="text-align: left;">Unlock</p>
              <img @click="open_addr()" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(dance_addr)" width="24" height="24">
            </div>
            <div className='wrapper2inline'>
                <input type="sell_select_tokens" style="text-align: left; width: 87%;" value="DANCE" :disabled="true">
                <router-link :to="{name: 'Reward List'}">
                  <input style="cursor: pointer; " :value="select_list" :disabled="true">
                </router-link>
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">Swap.Dance Token</p>
              <p style="text-align: right;"><mark class="purple"><strong>Collected {{tokens_count}}</strong></mark> LP Tokens</p>
            </div>
          </div>
             
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">Status</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/super_pool_help"><div class="help-tip"></div></router-link>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Period</p>
              <p style="text-align: right;">{{forming}}</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Burn Rate</p>
              <p style="text-align: right;">{{burn_rate}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Selected LPs</p>
              <p style="text-align: right;">{{selected_lp_tokens}}</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Withdrawal type</p>
              <p style="text-align: right;">{{withdrawal_type}}</p>
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
            <div v-if="empty_stake == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Your DANCE balance is zero</p>
            </div>
            <div v-if="select_error == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Could you please select more LP? {{10 - count_checked}} Left</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="super_pool_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Withdraw DANCE'" v-on:click="super_pool_connect">{{connect_button}}</button>
        </div>
      </section>
    </div>
</template>

<script>

import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
import { nFormatter } from "@/helpers/numbers";
import { ref, computed, watchEffect } from "vue";
//  to do
// estimate value and real value after pool has been locked
// calc you will receive : old_balance * token_balance / SWDB
export default {
  name: 'Super Pool Claim Funds',
  setup() {

    useMeta({
      title: 'Unlock DANCE Token and Claim Funds : Super Pool : Swap.Dance', 
      description: '',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Super Pool, Unlock DANCE token, Claim Funds and Reward, Swap tokens, Exchange tokens, DEX, AMM',
    })
    //
    const store = useStore();
    
    const forming = ref("");
    const my_stake = ref("");
    const empty_stake = ref(false);
    const select_error = ref(false);
    const select_list = ref("Select 10 LP Tokens");
    const lock_status = ref("");
    const burn_rate = ref("0.0");
    const tokens_count = ref("");
    const dance_balance = ref("");
    const stake_super = ref("1.0");
    const withdrawal_type = ref("");
    const selected_lp_tokens = ref("");
    const dance_addr = computed(() => store.state.dance_token);
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const count_checked = computed(() => store.state.reward_checked_list);
    const pair_station_list = computed(() => store.state.search_reward_list);
    const connect_button = computed(() => store.state.connect_button_super_pool_unlock);

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

        if (burn_rate.value == 0) {
          burn_rate.value = "0.0";
        }
        if (dance_balance.value == 0) {
          dance_balance.value = "0.0";
        }
        if (lock_status.value == 1) {
          forming.value = "LP-Distribution";
          withdrawal_type.value = "Get Reward";
          selected_lp_tokens.value = count_checked.value + " of 10";
        } else {
          forming.value = "LP-Forming";
          withdrawal_type.value = "Without Reward";
          selected_lp_tokens.value = "Unavailable";
          select_list.value = "Select Unavailable"
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

    return {
      forming,
      my_stake,
      open_addr,
      burn_rate,
      dance_addr,
      empty_stake,
      select_error,
      select_list,
      stake_super,
      lock_status,
      tokens_count,
      count_checked,
      dance_balance,
      connect_button,
      withdrawal_type,
      pair_station_list,
      selected_lp_tokens,
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
        this.empty_stake = false;
        this.select_error = false;
        this.$store.dispatch("drop_confirm_vars");
        this.$store.state.lp_amount = this.my_stake;
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        if (this.lock_status == 1){
          let token_map = [];
          let checked_list = this.pair_station_list;
          for (let i = 0; i < checked_list.length; i++) {
            if (checked_list[i].checked == true) {
              token_map.push(checked_list[i].pair_station);
            }
          }
          if (Number(this.my_stake) == 0) {
            this.empty_stake = true;
          } else if (this.count_checked != 10) {
            this.empty_stake = false;
            this.select_error = true;
          } else {
            this.empty_stake = false;
            this.select_error = false;
            this.$router.push({ path: '/confirm_super_with_reward' });
            await core.super_pool_unstake_with_reward(token_map, expiry);
            if(this.$store.state.error_unlock_super_pool_with_reward == false) {
              await core.clean_and_update_data();
            }
          }
        } else {
          this.select_error = false;
          if (Number(this.my_stake) == 0) {
            this.empty_stake = true;
          } else {
            this.empty_stake = false;
            this.$router.push({ path: '/confirm_super_without_reward' });
            await core.super_pool_unstake_without_reward(expiry);
            if(this.$store.state.error_unlock_super_pool_without_reward == false) {
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

.wrapper3 {
  display: grid;
  grid-template-columns: 0.9fr 0.9fr 1.2fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

</style>
