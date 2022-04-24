<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 100%;"><mark class="purple"> ⪮ </mark>PoT Stake</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade Unstake'}" tooltip="Unstake">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-api-app" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"></path>
                  <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5"></path>
                  <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5"></path>
                  <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5"></path>
                </svg>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Get Reward'}" tooltip="Get Reward">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
                  <path d="M12 6v2m0 8v2"></path>
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
              <p style="text-align: left;">Select PoT Pool</p>
              <p style="text-align: left;"></p>
              <div className='wrapper2inline' style="margin-left: auto;">
                <img @click="open_addr(token_addr1)" :title="token_addr1" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr1)" width="24" height="24">
                <img @click="open_addr(token_addr2)" :title="token_addr2" style="margin-right: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr2)" width="24" height="24">
              </div>
            </div>
            <div className='wrapper3'>
              <router-link @click="check()" :to="{name: 'Proof of Trade List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' +  token_symbol1" :disabled="true">
              </router-link>
              <router-link  @click="check()" :to="{name: 'Proof of Trade List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="'⩖ ' +  token_symbol2" :disabled="true">
              </router-link>
              <input 
                style="text-right: left; width: 100%; -webkit-text-stroke: 1px black;" 
                id="pot_stake_amount" 
                :value="stake_pot" 
                @input="stake_pot = $event.target.value" 
                :oninput="handleInput"
                inputmode="numeric"
                placeholder="1.0"
              >
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">Deposit <a href="#max" @click="use_max_balance()">Max</a></p>
              <p style="text-align: right;">xDx{{token_symbol1}}x{{token_symbol2}}</p>
            </div>
          </div>        
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">PoT info</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/proof_of_trade_help"><div class="help-tip"></div></router-link>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">My Stake</p>
              <p style="text-align: right;">{{nFormatter(my_stake).toString().substring(0, 12)}} LP</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Total Staked</p>
              <p style="text-align: right;">{{nFormatter(total_staked).toString().substring(0, 12)}} LP</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">PoT Earned</p>
              <p style="text-align: right;">{{total_earned.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">My Reward</p>
              <p style="text-align: right;">{{available_reward.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>
          </div>
          <div className='wrapper3inline'>
            <p style="text-align: left; cursor: pointer; width: 120%;" @click="setFocusToField()">Increase My Share<mark class="purple"> ✎ </mark></p>
            <p class="to-main"></p>
            <p style="text-align: right;">{{share_pie}}%</p>
          </div>   
          <hr class="solid">
            <div v-if="empty_stake == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">You have zero LP</p>
            </div>
            <div v-if="empty_amount == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">LP amount is zero</p>
            </div>
            <div v-if="max_balance_error == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Don't try to stake more than you can</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="proof_of_trade_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Deposit LP'" v-on:click="proof_of_trade_connect">{{connect_button}}</button>
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
  name: 'proof of trade',
  setup() {

    useMeta({
      title: 'Stake LP Token : Proof of Trade : Swap.Dance', 
      description: 'Choose a Proof of Trade Pool accordingly to your LP token, set an amount, press "Deposit LP", confirm the transaction and start earn DANCE token on each trade were made in this trading pair. If you already have any DANCE token reward it will be sent to your wallet.',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Stake LP Token, proof of trade pool, Swap tokens, Exchange tokens, DEX, AMM',
    })
    //
    const store = useStore();
    const my_stake = ref("");
    const share_pie = ref("");
    const stake_pot = ref("1.0");
    const total_staked = ref("");
    const total_earned = ref("");
    const empty_stake = ref(false);
    const empty_amount = ref(false);
    const max_token_value = ref("");
    const available_reward = ref("0.0");
    const max_balance_error = ref(false);
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const station = computed(() => store.state.stake_proof_of_trade_station);
    const token_addr1 = computed(() => store.state.stake_proof_of_trade_token_addr1);
    const token_addr2 = computed(() => store.state.stake_proof_of_trade_token_addr2);
    const pot_station = computed(() => store.state.stake_proof_of_trade_pot_station);
    const token_symbol1 = computed(() => store.state.stake_proof_of_trade_token_symbol1);
    const token_symbol2 = computed(() => store.state.stake_proof_of_trade_token_symbol2);
    const connect_button = computed(() => store.state.connect_button_proof_of_trade_stake);
    const current_pot_swd_balance = computed(() => store.state.stake_proof_of_trade_pot_swd_balance);

    function check() {
      store.state.proof_of_trade_page = 1;
    }

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {

      if (block_number.value && pot_station.value.length > 0 || connect_button.value.length != 19){
        
        let get_amounts = await core.connect_proof_of_trade(pot_station.value, station.value);
        max_token_value.value = get_amounts.user_token_balance;
        total_staked.value = get_amounts.total_deposited_tokens;
        
        if (Number(get_amounts.actual_reward) > 0){
          available_reward.value = get_amounts.actual_reward;
        } else {
          available_reward.value = "0.0";
        }
        total_earned.value = Number(get_amounts.total_withdrawn_reward) + Number(current_pot_swd_balance.value); // add available balance
        if (total_earned.value == 0) {
          total_earned.value = "0.0";
        }
        if (connect_button.value != "Connect to a wallet") {
          if (get_amounts.my_staked_share == 0 ) {
            my_stake.value = "0.0";
            share_pie.value = "0.0";
          } else {
            my_stake.value = get_amounts.my_staked_share;
            share_pie.value = (Number(my_stake.value) / Number(total_staked.value)) * 100;
          }
        } else {
          share_pie.value = "0.0";
          my_stake.value = "0.0";
        }
      }
    })

    function use_max_balance() {
      // user lp balance
      stake_pot.value = max_token_value.value;
    }

    function setFocusToField(){
      document.getElementById("pot_stake_amount").focus();
    }

    return {
      check,
      station,
      my_stake,
      share_pie,
      stake_pot,
      open_addr,
      token_addr1,
      token_addr2,
      empty_stake,
      empty_amount,
      pot_station,
      total_staked,
      total_earned,
      token_symbol1,
      token_symbol2,
      connect_button,
      use_max_balance,
      setFocusToField,
      max_token_value,
      available_reward,
      max_balance_error,
    }
  },
  methods: {
    nFormatter,
    handleInput(e) {
      const el = e.target;
      const sel = el.selectionStart;
      const numberValue = el.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
      el.value = numberValue;
      this.$nextTick(() => {
        el.setSelectionRange(sel, sel);
      });
    },
    getImgUrl: function (imagePath) {
      try {
        require(`@/assets/icons/${imagePath}/logo.png`);
        return require(`@/assets/icons/${imagePath}/logo.png`)
      } catch (e) {
        return require(`@/assets/icons/undefined/logo.png`)
      }
    },
    async proof_of_trade_connect() {
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
        // set LP amount and available reward
        this.$store.state.lp_amount = this.stake_pot;
        this.$store.state.temp_price1 = this.available_reward;
        // do other stuff
        console.log("this.available_rewardthis.available_rewardthis.available_reward", this.available_reward)
        let trade_station = this.station;
        let amount = Number(this.stake_pot);
        let stake_station = this.pot_station;
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        let amount_units = ethers.utils.parseUnits(amount.toString(), 18);
        // check page errors before confirm tx
        this.empty_stake = false;
        this.empty_amount = false;
        this.max_balance_error = false;
        if (this.max_token_value == 0) {
          this.empty_stake = true;
        } else if (amount > this.max_token_value){
          this.empty_stake = false;
          this.max_balance_error = true;
        } else if (amount_units == 0) {
          this.empty_amount = true;
          this.empty_stake = false;
          this.max_balance_error = false;
        } else {
          this.empty_stake = false;
          this.empty_amount = false;
          this.max_balance_error = false;
          this.$router.push({ path: '/confirm_pot_deposit' });
          await core.token_approve(trade_station, stake_station, amount_units);
          if (this.$store.state.error_token_approve1 == false) {
            await core.stake_proof_of_trade(stake_station, amount_units, expiry);
            if (this.$store.state.error_sign_pot_deposit ==false){
              await core.clean_and_update_data();
              this.$store.state.stake_proof_of_trade_station = trade_station;
              this.$store.dispatch("change_pot_stake_station");
            }
          }
        }
      }
    },
  }
}
</script>
<style scoped>

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