<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 100%;"><mark class="purple"> ⟣ </mark>Get Reward</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" transform="scale(-1 1)" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                  <circle cx="15" cy="9" r="1"></circle>
                </svg>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade Unstake'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-api-app" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"></path>
                  <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5"></path>
                  <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5"></path>
                  <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5"></path>
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
            <div className='wrapper3inline'>
              <p style="text-align: left; width: 150%">Select PoT Pool</p>
              <p style="text-align: left;"></p>
              <div className='wrapper2inline' style="margin-left: auto;">
                <img @click="open_addr(token_addr1)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr1)" width="24" height="24">
                <img @click="open_addr(token_addr2)" style="margin-right: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr2)" width="24" height="24">
              </div>
            </div>
            <div className='wrapper3'>
              <router-link @click="check()" :to="{name: 'Proof of Trade List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="token_symbol1 + ' ⩖'" :disabled="true">
              </router-link>
              <router-link  @click="check()" :to="{name: 'Proof of Trade List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="token_symbol2 + ' ⩖'" :disabled="true">
              </router-link>
              <input style="text-right: left; width: 100%;" id="pot_stake_amount" :value="available_reward.toString().substring(0, 10)" :disabled="true">
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">Withdraw</p>
              <p style="text-align: right;"><mark class="purple">DANCE</mark> Reward</p>
            </div>
          </div>      
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">Reward info</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/proof_of_trade_reward_help"><div class="help-tip"></div></router-link>
            </div>

            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 1fr 2fr;">
              <p style="text-align: left;">Round Reward</p>
              <p style="text-align: right;">{{round_reward.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>
            <div className='wrapper2inline' style="grid-template-columns: 1.2fr 1.8fr;">
              <p style="text-align: left;">Available Reward</p>
              <p style="text-align: right;">{{available_reward.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>
          </div>
          <hr class="solid">
            <div v-if="reward_is_zero == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Your reward is zero</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="get_reward_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Withdraw Reward'" v-on:click="get_reward_connect">{{connect_button}}</button>
        </div>
      </section>
    </div>
</template>

<script>
import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
import { ref, computed, watchEffect } from "vue";

export default {
  name: 'get reward',
  setup() {

    useMeta({
      title: 'Get DANCE token Reward : Swap.Dance', 
      description: 'Choose a proof of trade pool where you stake your LP token, press "Withdraw Reward", confirm the transaction and receive DANCE token to your wallet',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, get reward, DANCE token reward, proof of trade pool, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();
    const round_reward = ref("");
    const available_reward = ref("");
    const reward_is_zero = ref(false);
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const pot_station_list = computed(() => store.state.search_deployed_pot_list);
    const token_addr1 = computed(() => store.state.get_reward_proof_of_trade_token_addr1);
    const token_addr2 = computed(() => store.state.get_reward_proof_of_trade_token_addr2);
    const token_name1 = computed(() => store.state.get_reward_proof_of_trade_token_name1);
    const token_name2 = computed(() => store.state.get_reward_proof_of_trade_token_name2);
    const pot_station = computed(() => store.state.get_reward_proof_of_trade_pot_station);
    const token_symbol1 = computed(() => store.state.get_reward_proof_of_trade_token_symbol1);
    const token_symbol2 = computed(() => store.state.get_reward_proof_of_trade_token_symbol2);
    const connect_button = computed(() => store.state.connect_button_proof_of_trade_get_reward);

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {

      if (block_number.value && pot_station.value.length > 0 || connect_button.value.length != 19){
        if (connect_button.value != "Connect to a wallet") {
          let get_data = await core.connect_proof_of_trade_get_reward(pot_station.value);
          if (get_data.my_staked_share == 0 ) {
            round_reward.value = get_data.user_round_reward;
            available_reward.value = get_data.actual_reward - round_reward.value;            
            if (available_reward.value == 0) {
              available_reward.value = "0.0";
            }
          } else {
            round_reward.value = get_data.user_round_reward;
            available_reward.value = (get_data.actual_reward - round_reward.value);
            if (available_reward.value == 0) {
              available_reward.value = "0.0";
            }
          }
        } else {        
          round_reward.value = "0.0";
          available_reward.value = "0.0";
        }
      }
    })

    function check() {
      store.state.proof_of_trade_page = "3";
    }

    return {
      check,
      open_addr,
      token_addr1,
      token_addr2,
      token_name1,
      token_name2,
      pot_station,
      round_reward,
      token_symbol1,
      token_symbol2,
      reward_is_zero,
      connect_button,
      pot_station_list,
      available_reward,
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
    async get_reward_connect() {
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
        // set reward amount and available reward
        this.$store.state.lp_amount = this.available_reward;
        // do other stuff
        let get_reward_pot = this.pot_station
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;

        this.reward_is_zero = false;
        if (Number(this.available_reward) == 0){
          this.reward_is_zero = true;
        } else {
          this.reward_is_zero = false;
          this.$router.push({ path: '/confirm_reward' });
          await core.get_reward_proof_of_trade(get_reward_pot, expiry);
          if (this.$store.state.error_sign_get_reward == false) {
            await core.clean_and_update_data();
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