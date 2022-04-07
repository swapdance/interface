<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>

          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 100%;"><mark class="purple"> ⚛ </mark>New Pot Pool</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
              <p style="text-align: left;width: 1%;"></p>
                <router-link style="text-decoration: none; color: inherit;" :to="{name: 'New Pool'}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-polygon" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="5" r="2"></circle>
                    <circle cx="19" cy="8" r="2"></circle>
                    <circle cx="5" cy="11" r="2"></circle>
                    <circle cx="15" cy="19" r="2"></circle>
                    <path d="M6.5 9.5l3.5 -3"></path>
                    <path d="M14 5.5l3 1.5"></path>
                    <path d="M18.5 10l-2.5 7"></path>
                    <path d="M13.5 17.5l-7 -5"></path>
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
              <p style="text-align: left; width: 150%">Select Available Pair</p>
              <p style="text-align: left;"></p>
              <div v-if="token_address1.length > 0" className='wrapper2inline' style="margin-left: auto;">
                <img @click="open_addr(token_address1)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_address1)" width="24" height="24">
                <img @click="open_addr(token_address2)" style="margin-right: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_address2)" width="24" height="24">
              </div>
            </div>
            <div v-if="pot_station_list.length > 0" className='wrapper3'>
              <router-link :to="{name: 'New PoT List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="token_symbol1 + ' ⩖'" :disabled="true">
              </router-link>
              <router-link :to="{name: 'New PoT List'}">
                <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="token_symbol2 + ' ⩖'" :disabled="true">
              </router-link>
              <input style="text-right: left; width: 100%;" :value="'Select 1 of ' + pot_station_list.length" :disabled="true">
            </div>
            <div v-if="pot_station_list.length == 0" className='wrapper3'>
              <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="token_symbol1 + ' ⩖'" :disabled="true">
              <input type="sell_select_tokens" style="text-align: left; width: 100%;" :value="token_symbol2 + ' ⩖'" :disabled="true">
              <input style="text-right: left; width: 100%;" :value="'List is empty'" :disabled="true">
            </div>
            <p style="text-align: left;">This pool will collect <mark class="purple">$DANCE</mark> token every trade.</p>
            
          </div>      
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">Pool info</h4>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Pair Fee</p>
              <p style="text-align: right;">{{token_fee1}}% / {{token_fee2}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;">
              <p style="text-align: left;">Token 1</p>
              <p style="text-align: right;"><mark class="purple">{{token_name1}}</mark></p>
            </div>
            <div className='wrapper2inline' style="grid-template-columns: 0.55fr 2.45fr;">
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;"><mark class="purple">{{token_name2}}</mark></p>
            </div>

          </div>
          <p style="margin-bottom: 1rem;">Proof of trade pool allow you and other LP providers receive <mark class="purple">$DANCE</mark> token to claim Super Pool LPs.</p>
          <hr class="solid">
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="proof_of_trade_connect">{{connect_button}}</button>
          <router-link to="/confirm_new_pot"><button v-if="connect_button == 'Create a New PoT Pool'" v-on:click="proof_of_trade_connect">{{connect_button}}</button></router-link>
        </div>
      </section>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import core from "@/core/core";
export default {
  name: 'new pool',
  setup() {
    const store = useStore();
    const connect_button = computed(() => store.state.connect_button_create_new_pot);
    const pot_station_list = computed(() => store.state.search_new_pot_list);
    const token_symbol1 = computed(() => store.state.new_pot_token_symbol1);
    const token_symbol2 = computed(() => store.state.new_pot_token_symbol2);
    const token_address1 = computed(() => store.state.new_pot_token_addr1);
    const token_address2 = computed(() => store.state.new_pot_token_addr2);
    const new_pot_station = computed(() => store.state.new_pot_station);
    const token_name1 = computed(() => store.state.new_pot_token_name1);
    const token_name2 = computed(() => store.state.new_pot_token_name2);
    const token_fee1 = computed(() => store.state.new_pot_token_fee1);
    const token_fee2 = computed(() => store.state.new_pot_token_fee2);
    const etherscan_link = computed(() => store.state.etherscan_link);

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    return {
      open_addr,
      token_fee1,
      token_fee2,
      token_name1,
      token_name2,
      token_symbol1,
      token_symbol2,
      token_address1,
      token_address2,
      connect_button,
      new_pot_station,
      pot_station_list,
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
        let new_pot = this.new_pot_station;
        let await_time = Number(this.$store.state.settings_create);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        
        await core.create_new_pot_station(new_pot, expiry);
        if (this.$store.state.error_new_pot_sign_tx == false) {
          await core.clean_and_update_data();
          this.$store.dispatch("update_proof_of_trade_addr_after_create");
          this.$store.state.stake_proof_of_trade_station = new_pot;
          this.$store.dispatch("change_pot_stake_station");
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