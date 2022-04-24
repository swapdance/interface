<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 150%;"><mark class="purple"> ⨝ </mark>Wrap or Unwrap</h3>
            <p style="text-align: left;width: 1%;"></p>
            
            <div className='wrapper4inline' style="margin-left: auto;">

              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Home'}" tooltip="Swap Tokens">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-replace" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="3" y="3" width="6" height="6" rx="1"></rect>
                  <rect x="15" y="15" width="6" height="6" rx="1"></rect>
                  <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"></path>
                  <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"></path>
                </svg>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade'}" tooltip="Stake Pool">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" transform="scale(-1 1)" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                  <circle cx="15" cy="9" r="1"></circle>
                </svg>
              </router-link>
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
            <div className='wrapper2inline'>
              <p style="text-align: left;">Convert From</p>
              <img @click="open_addr(network_coin)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :title="network_coin" :src="getImgUrl(network_coin)" width="24" height="24">
            </div>
            <div className='wrapper2inline'>
              <router-link @click="selectToken(1)" :to="{name: 'Token List'}">
                <input 
                  type="sell_select_tokens" 
                  style="text-align: left; width: 100%;" 
                  :value="'⩖ ' + network_symbol" 
                  :disabled="true">
              </router-link>
              <input 
                ref="convert_in"
                :value="token_price1" 
                @input="token_price1 = $event.target.value" 
                :oninput="handleInput"
                inputmode="numeric"
                style="-webkit-text-stroke: 1px black;"
                placeholder="1.0">
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">{{network_name}}</p>
              <p style="text-align: right;">{{wrap_unwrap}} <a href="#max" @click="use_max_balance()">Max</a></p>
            </div>
          </div>
          <div style="margin-top: -1.5rem;"><a href="#switch" class="to-top" v-on:click="switch_tokens"></a></div>  
          <div className='simple-card' style="background: white">
            <div className='wrapper2inline'>
              <p style="text-align: left;">Convert To</p>
              <img @click="open_addr(wrapped_coin)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :title="wrapped_coin" :src="getImgUrl(wrapped_coin)" width="24" height="24">
            </div>
            <div className='wrapper2inline'>
              <router-link @click="selectToken(2)" :to="{name: 'Token List'}">
                <input 
                  type="buy_select_tokens" 
                  style="text-align: left; width: 100%;" 
                  :value="'⩖ ' + wrapped_symbol" 
                  :disabled="true">
              </router-link>
              <input style="background: white" :value="token_price1" :disabled="true">
            </div>
            <div className='wrapper2inline' style="grid-template-columns: 1fr 2fr;">
              <p style="text-align: left; width: 150%;">{{wrapped_name}}</p>
              <p style="text-align: right;">Available {{user_wrapped_balance.toString().substring(0, 15)}}</p>
            </div>
          </div>
          <hr class="solid">
          <div v-if="balance_error == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
            <p style="text-align: left;">Error</p>
            <p style="text-align: right; color: rgb(223, 49, 49);">You have only {{user_network_balance.toString().substring(0, 15)}} {{network_symbol}}</p>
          </div>
          <button v-on:click="swap_connect">{{connect_button}}</button>
        </div>
      </section>
    </div>
</template>

<script>

import { useStore } from "vuex";
import core from "../core/core";
import { useMeta } from 'vue-meta'
import { computed, watchEffect, ref } from "vue";

export default {
  name: 'convert eth to weth',
  setup() {
    
    useMeta({
      title: 'Convert ETH to WETH : Wrap / Unwrap : Swap.Dance', 
      description: 'If you have ETH, you can wrap it and get ETH by simply converting ETH to WETH. Or if you want to get back your ETH just unwrap WETH to ETH.',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Wrapped Ether (WETH), ETHEREUM, Convert, Wrap, Unwrap',
    })
    
    const store = useStore();
    const token_price1 = ref("1.0");
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const wrapped_addr = computed(() => store.state.network_coin_wrapped_addr);
    const connect_button = computed(() => store.state.connect_button_convert_eth_to_weth);
  //  const etherscan_link = computed(() => store.state.etherscan_link);
    // coins

    const updated = ref(false);
    const wrapped_name = ref("");
    const network_name = ref("");
    const wrapped_coin = ref("");
    const network_coin = ref("");
    const wrapped_symbol = ref("");
    const network_symbol = ref("");
    const balance_error = ref(false);
    const user_wrapped_balance = ref("");
    const user_network_balance = ref("");
    // interface elements
    const wrap_unwrap = ref("");

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    function use_max_balance() {
      if (wrapped_symbol.value == 'WETH') {
        if (connect_button.value != 'Connect to a wallet') {
          token_price1.value = user_network_balance.value - 0.001;
        } else {
          token_price1.value = "0.0";
        }
      } else {
        if (connect_button.value != 'Connect to a wallet') {
          token_price1.value = user_network_balance.value;
        } else {
          token_price1.value = "0.0";
        }
      }
    }

    watchEffect(async () => {
      if (wrapped_addr.value){
        if (!updated.value) {
          wrap_unwrap.value = "Wrap";
          network_name.value = store.state.network_coin_name;
          wrapped_name.value = store.state.network_coin_wrapped_name;
          network_symbol.value = store.state.network_coin_symbol;
          wrapped_symbol.value = store.state.network_coin_wrapped_symbol;
          network_coin.value = wrapped_addr.value;
          wrapped_coin.value = wrapped_addr.value;
          updated.value = true;
        }
      }
      if (connect_button.value) {

        if (connect_button.value != 'Connect to a wallet') {
          if (wrapped_symbol.value == 'WETH') {
            wrap_unwrap.value = "Wrap";
            store.state.connect_button_convert_eth_to_weth = 'Wrap ' + network_symbol.value + ' to ' + wrapped_symbol.value;
          } else if (wrapped_symbol.value == 'ETH')  {
            wrap_unwrap.value = "Unwrap";
            store.state.connect_button_convert_eth_to_weth = 'Unwrap ' + network_symbol.value + ' to ' + wrapped_symbol.value;
          }
        }
      }

      if (block_number.value) {     
        if (connect_button.value != 'Connect to a wallet') {
          let user_balance_data = await core.get_coin_and_wrapped_user_balance(wrapped_addr.value, 18);
          if (wrapped_symbol.value == 'WETH') {
            user_network_balance.value = user_balance_data.user_network_coin_balance;
            user_wrapped_balance.value = user_balance_data.user_wrapped_coin_balance;
          } else if (wrapped_symbol.value == 'ETH') {
            user_network_balance.value = user_balance_data.user_wrapped_coin_balance;
            user_wrapped_balance.value = user_balance_data.user_network_coin_balance;
          }
        } else {
          user_network_balance.value = "0.0";
          user_wrapped_balance.value = "0.0";
        }
      }
    })

    // set word wrap to unwrap

    return {
      open_addr,
      wrap_unwrap,
      wrapped_addr,
      token_price1,
      network_coin,
      wrapped_coin,
      network_name,
      wrapped_name,
      balance_error,
      network_symbol,
      wrapped_symbol,
      connect_button,
      use_max_balance,
      user_wrapped_balance,
      user_network_balance,
    }
  },
  methods: {
    setFocus: function() {
      this.$refs.convert_in.focus();
    },
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
    async swap_connect() {
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
        this.$store.state.lp_amount = this.token_price1; // amount to wrap
        this.$store.state.wrapped_side = this.wrap_unwrap; // side
        this.$store.state.temp_price1 = this.network_symbol; // token symbol 1
        this.$store.state.temp_price2 = this.wrapped_symbol; // token symbole 2
        // add errors
        this.balance_error = false;
        //
        if (this.wrapped_symbol == 'WETH') {
          if (Number(this.token_price1) > Number(this.user_network_balance)) {
            // wrapped side
            this.balance_error = true;
          } else {
            this.balance_error = false;
            this.$router.push({ path: '/confirm_convert' });
            await core.convert_eth_to_weth(this.wrapped_addr, 1, this.token_price1);
          }
        } else {
          if (Number(this.token_price1) > Number(this.user_network_balance)) {
            // unwrapped side
            this.balance_error = true;
          } else {
            this.balance_error = false;
            this.$router.push({ path: '/confirm_convert' });
            await core.convert_eth_to_weth(this.wrapped_addr, 2, this.token_price1);
          }
        }
      }
    },
    switch_tokens() {
      [this.wrapped_name, this.network_name] = [this.network_name, this.wrapped_name];
      [this.wrapped_symbol, this.network_symbol] = [this.network_symbol, this.wrapped_symbol];
      [this.user_wrapped_balance, this.user_network_balance] = [this.user_network_balance, this.user_wrapped_balance];
    },
    selectToken(idx) {
      this.$store.state.interface_selected_token = idx;
    },
  },
  created() {
    this.$nextTick(() => this.setFocus());
  },
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

.green_class {
  color: #008a7b;
}

.wrapper2 {
  display: grid;
  grid-template-columns: 0.7fr 2.3fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

.wrapper4inline {
  display: grid;
  grid-template-columns: repeat(4, 0.75fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

</style>
