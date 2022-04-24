<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>

          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 100%;"><mark class="purple"> ⫃ </mark>New Pool</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
              <p style="text-align: left;width: 1%;"></p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'New PoT'}" tooltip="Create a New Stake Pool">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                  <line x1="14" y1="7" x2="20" y2="7"></line>
                  <line x1="17" y1="4" x2="17" y2="10"></line>
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
              <p style="text-align: left;">Import Tokens</p>
              <p style="text-align: left;"></p>
              <div className='wrapper2inline' style="margin-left: auto;">
                <img v-if="token_address1.length > 0" @click="open_addr(token_address1)" :title="token_address1" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_address1)" width="24" height="24">
                <img v-if="token_address2.length > 0" @click="open_addr(token_address2)" :title="token_address2" style="margin-right: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_address2)" width="24" height="24">
              </div>
            </div>
            <div className='wrapper3'>
              <router-link @click="selectToken(1)" :to="{name: 'Import Token'}">
                <input 
                  type="sell_select_tokens" 
                  style="text-align: left; width: 100%;" 
                  :value="'⩖ ' + token_symbol1" 
                  :disabled="true"
                >
              </router-link>
              <router-link @click="selectToken(2)" :to="{name: 'Import Token'}">
                <input 
                  type="sell_select_tokens" 
                  style="text-align: left; width: 100%;"
                  :value="'⩖ ' + token_symbol2"  
                  :disabled="true"
                >
              </router-link>
              <input 
                style="text-right: left; width: 100%; -webkit-text-stroke: 1px black;" 
                :value="fees" 
                @input="fees = $event.target.value" 
                :oninput="handleInput"
                inputmode="numeric"
                placeholder="0.3%"
              >
            </div>
            <div className='wrapper3' style="grid-template-columns: 1.7fr 0.6fr 0.05fr 0.8fr; grid-column-gap: 1px;">
              <p style="text-align: left;">Recommended Fee</p>
              <p style="text-align: right;"><a href="#stable" @click="set_fee(4)">Stable 4</a>&nbsp;</p>
              <p style="text-align: right;">/</p>
              <p style="text-align: right;"><a href="#dynamic" @click="set_fee(30)">Dynamic 30</a></p>
            </div>
          </div>      
          <div className='simple-card' style="background: white">
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 2.9fr 0.2fr;">
              <h4 style="text-align: left;">Pool info</h4>
              <router-link style="text-decoration: none; color: inherit;" to="/new_pair_help"><div class="help-tip"></div></router-link>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Pair Fee</p>
              <p style="text-align: right;">{{fees_in_block}} %</p>
            </div>
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;">
              <p style="text-align: left;">Token 1</p>
              <p style="text-align: right;"><mark class="purple">{{token_name1}}</mark></p>
            </div>
            <div className='wrapper2a' style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;">
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;"><mark class="purple">{{token_name2}}</mark></p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">MARKET</p>
              <p style="text-align: right;">{{market}}</p>
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">Future PoT Pool</p>
              <p style="text-align: right;">{{future_pot_pool}}</p>
            </div>

          </div>
          <div className='wrapper3inline' style="margin-bottom: 1rem;">
            <p style="text-align: left; width:105%">Select Market Type</p>
            <div className='wrapper2inline'>
              <div @click="check_market(1)" v-bind:class="[market_type===1 ? 'circlefull' : 'circleempty']"></div>
              <p style="text-align: left; cursor: pointer;" @click="check_market(1)">Stable</p>
            </div>
            <div className='wrapper2inline' >
              <div @click="check_market(2)" v-bind:class="[market_type===2 ? 'circlefull' : 'circleempty']"></div>
              <p style="text-align: right; cursor: pointer;" @click="check_market(2)">Dynamic</p>
            </div>
          </div>
          <hr class="solid">
          <p style="margin-bottom: 1rem; margin-top: 1rem;">For your convenience and other traders, follow the sequence of tokens when creating a new pair. <br><strong>For instance, wBTC - USDC or wETH - DANCE</strong>.</p>
          <hr class="solid">
            <div v-if="empty_fees == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Empty fee</p>
            </div>
            <div v-if="empty_type == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Select market type</p>
            </div>
            <div v-if="empty_token1 == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Select token 1</p>
            </div>
            <div v-if="empty_token2 == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Select token 2</p>
            </div>
            <div v-if="same_tokens == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Token 1 is same as Token 2</p>
            </div>
            <div v-if="pair_exist == true" className='wrapper2inline' style="margin-top: 1rem;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Pair already exist</p>
            </div>
          <button v-if="connect_button == 'Connect to a wallet'" v-on:click="create_connect">{{connect_button}}</button>
          <button v-if="connect_button == 'Create a New Pair'" v-on:click="create_connect">{{connect_button}}</button>
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
  name: 'new pool',
  setup() {
    useMeta({
      title: 'Create a New Liquidity Pool : Swap.Dance', 
      description: 'Choose ERC20 tokens that will form a trading pair, press "Create a new pair", confirm the transaction and start earn on liquidity mining',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, New liquidity, liquidity pool, new pair, new pool, new token pool, Swap tokens, Exchange tokens, DEX, AMM',
    })
    const store = useStore();
    const fees = ref("");
    const market = ref("SELECT MARKET");
    const future_pot_pool = ref("SELECT TOKENS");
    // errors
    const pair_exist = ref(false);
    const empty_fees = ref(false);
    const empty_type = ref(false);
    const empty_token1 = ref(false);
    const empty_token2 = ref(false);
    const same_tokens = ref(false);

    const internal_future_pot_pool = ref(false);
    const fees_in_block = ref("Min 0.01 Max 0.99");
    const block_number = computed(() => store.state.block_num);
    const market_type = computed(() => store.state.market_type);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const token_address1 = computed(() => store.state.new_pool_token_addr1);
    const token_address2 = computed(() => store.state.new_pool_token_addr2);
    const token_name1 = computed(() => store.state.new_pool_token_name1);
    const token_name2 = computed(() => store.state.new_pool_token_name2);
    const token_symbol1 = computed(() => store.state.new_pool_token_symbol1);
    const token_symbol2 = computed(() => store.state.new_pool_token_symbol2);
    const connect_button = computed(() => store.state.connect_button_create_new_pool);
    
    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {

      if (block_number.value){
        if (fees.value > 0) {
          fees_in_block.value = (fees.value / 100);
        } else if (fees.value == 0) {
          fees_in_block.value = "Min 0.01 Max 0.99";
        }
        // MARKET TYPE
        if (market_type.value == 1) {
          market.value = "STABLE POOL"
        } else if (market_type.value == 2) {
          market.value = "DYNAMIC POOL"
        }
        // PoT Pool
        if (token_address1.value.length > 0 && token_address2.value.length > 0) {
          let result = await core.get_approved_tokens(token_address1.value, token_address2.value);
          if (result.result == true) {
            future_pot_pool.value = "Available";
            internal_future_pot_pool.value = true;
          } else {
            future_pot_pool.value = "Unavailable";
            internal_future_pot_pool.value = false;
          }
        }
      }
    })

    function check_market(idx) {
      store.state.market_type = idx;
    }

    function set_fee(idx) {
      fees.value = idx;
    }

    return {
      fees,
      market,
      set_fee,
      open_addr,
      empty_fees,
      empty_type,
      pair_exist,
      same_tokens,
      empty_token1,
      empty_token2,
      token_name1,
      token_name2,
      market_type,
      check_market,
      fees_in_block,
      token_symbol1,
      token_symbol2,
      token_address1,
      token_address2,
      connect_button,
      future_pot_pool,
      internal_future_pot_pool,
    }
  },
  methods: {
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
    async create_connect() {
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
        this.$store.state.lp_amount = this.internal_future_pot_pool;
        // do other stuff
        let await_time = Number(this.$store.state.settings_create);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        let token1 = this.$store.state.new_pool_token_addr1;
        let token2 = this.$store.state.new_pool_token_addr2;
        let market_type = Number(this.$store.state.market_type);
        let fee = Number(this.fees); 
        //
        if (market_type == 2) {
          market_type = 1;
        } else if (market_type == 1) {
          market_type = 0;
        }

        this.same_tokens = false;
        this.pair_exist = false;
        this.empty_token2 = false;
        this.empty_type = false;
        this.empty_fees = false;
        this.empty_token1 = false;

        if (token1.length == 42 && token2.length == 42) {
          await core.check_pair_exist(token1, token2);
        }
        
        let check_market_error = Number(this.$store.state.market_type);
        if (this.fees == "") {
          this.empty_fees = true;
        } else if (check_market_error == ""){

          this.empty_fees = false;
          this.empty_type = true;

        } else if (token1.length != 42) {

          this.empty_type = false;
          this.empty_fees = false;
          this.empty_token1 = true;

        } else if (token2.length != 42) {

          this.empty_token2 = true;
          this.empty_type = false;
          this.empty_fees = false;
          this.empty_token1 = false;

        } else if (this.$store.state.pair_exist == true) {

          this.pair_exist = true;
          this.empty_type = false;
          this.empty_fees = false;
          this.empty_token1 = false;
          this.empty_token2 = false;

        }  else if (token1 == token2) {

          this.same_tokens = true;
          this.pair_exist = false;
          this.empty_type = false;
          this.empty_fees = false;
          this.empty_token1 = false;
          this.empty_token2 = false;

        } else {
          this.same_tokens = false;
          this.pair_exist = false;
          this.empty_token2 = false;
          this.empty_type = false;
          this.empty_fees = false;
          this.empty_token1 = false;
          //
          this.$router.push({ path: '/confirm_new_pair' });
          //
          let new_pair_info = await core.create_new_pair(token1, token2, fee, fee, market_type, expiry);
          let get_station = await new_pair_info.new_pair_address;
          await core.clean_and_update_data();
          this.$store.state.add_liquidity_station = get_station;
          this.$store.dispatch("change_add_liquidity_pair");
          if (this.internal_future_pot_pool == true) {
            this.$store.state.new_pot_station = get_station;
            this.$store.dispatch("change_new_pot_station");
          }
        }
      }
    },
    selectToken(idx) {
      this.$store.state.new_pool_selected_token = idx;
    },
  }
}
</script>
<style>

.wrapper2a {
  display: grid;
  grid-template-columns: 0.55fr 2.45fr;
  grid-column-gap: 1px;
  grid-row-gap: 1em;
}

.circleempty {
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;
  background: #fff;
  margin-left: auto; 
  border: 2px solid #4c51bf;
  color: #4c51bf;
  text-align: center;
  vertical-align: bottom;
}

.circlefull {
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;
  background: #4c51bf;
  margin-left: auto; 
  border: 2px solid white;
  color: #4c51bf;
  text-align: center;
  vertical-align: bottom;
}

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
