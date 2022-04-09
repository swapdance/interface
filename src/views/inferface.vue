<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 150%;"><mark class="purple"> ⫓ </mark>Swap</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper4inline' style="margin-left: auto;">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" transform="scale(-1 1)" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                  <circle cx="15" cy="9" r="1"></circle>
                </svg>
              </router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Add Liquidity'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-2" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="12 4 4 8 12 12 20 8 12 4"></polyline>
                  <polyline points="4 12 12 16 20 12"></polyline>
                  <polyline points="4 16 12 20 20 16"></polyline>
                </svg>
              </router-link>

              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Convert ETH to WETH'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-blur" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.4"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 21a9.01 9.01 0 0 0 2.32 -.302a9.004 9.004 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035z"></path>
                  <path d="M12 3v17"></path>
                  <path d="M12 12h9"></path>
                  <path d="M12 9h8"></path>
                  <path d="M12 6h6"></path>
                  <path d="M12 18h6"></path>
                  <path d="M12 15h8"></path>
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
              <p style="text-align: left;">From</p>
              <img @click="open_addr(token_addr_interface1)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr_interface1)" width="24" height="24">
            </div>
            <div className='wrapper2inline'>
              <router-link @click="selectToken(1)" :to="{name: 'Token List'}">
                <input 
                  type="sell_select_tokens" 
                  style="text-align: left; width: 100%;" 
                  :value="token_symbol1 + ' ⩖'" 
                  :disabled="true">
              </router-link>
              <input 
                :value="token_price1" 
                @input="token_price1 = $event.target.value" 
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                placeholder="1.0">
            </div>
            <div className='wrapper2inline'>
              <p style="text-align: left;">{{token_name1}}</p>
              <p style="text-align: right;">Trade <a href="#max" @click="use_max_balance()">Max</a></p>
            </div>
          </div>
          <div style="margin-top: -1.5rem;"><a href="#switch" class="to-top" v-on:click="switch_tokens"></a></div>  
          <div className='simple-card' style="background: white">
            <div className='wrapper2inline'>
              <p style="text-align: left;">To</p>
              <img @click="open_addr(token_addr_interface2)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(token_addr_interface2)" width="24" height="24">
            </div>
            <div className='wrapper2inline'>
              <router-link @click="selectToken(2)" :to="{name: 'Token List'}">
                <input 
                  type="buy_select_tokens" 
                  style="text-align: left; width: 100%;" 
                  :value="token_symbol2 + ' ⩖'" 
                  :disabled="true">
              </router-link>
              <input style="background: white" :value="token_price2" :disabled="true">
            </div>
            <div className='wrapper2inline' style="grid-template-columns: 0.9fr 2.1fr;">
              <p style="text-align: left; width: 150%;">{{token_name2}}</p>
              <p style="text-align: right;">Balance {{nFormatter(user_balance2).toString().substring(0, 12)}}</p>
            </div>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='wrapper3inline' >
            <p style="text-align: left; width: 100%;"><mark class="purple">Slippage</mark></p>
            <p class="to-main"></p>
            <p style="text-align: right; cursor: pointer;">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Settings'}"><mark class="purple"> ✎ {{slippage}}%</mark></router-link>
            </p>
          </div>
          <div v-if="tokens_path.length != 0">
            <div className='wrapper2' style="margin-bottom: 1rem; grid-template-columns: 0.6fr 2.4fr;">
              <p style="text-align: left; width: 100%;">Trade Path</p>
              <p style="text-align: right;">{{tokens_path.join(' &rarr; ')}}</p>
            </div>
            <div className='wrapper2' style="margin-bottom: 1rem; grid-template-columns: 0.7fr 2.3fr;">
              <p style="text-align: left; width: 100%;">Price Impact</p>
              <p style="text-align: right;" :class="price_impact_sum > 5 ? 'red_class' : 'green_class'">{{price_impact_array.join('% &rarr; ')}}%</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 1.2fr 1.8fr;">
              <p style="text-align: left; width: 100%;"><mark class="purple"> <strong>Minimum Received </strong></mark></p>
              <p style="text-align: right;"><mark class="purple"> <strong>{{token_price2_min}} </strong></mark></p>
            </div>
          </div>
          <hr class="solid">
            <div v-if="error_route == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Oh... seems no route found</p>
            </div>
            <div v-if="error_route2 == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Oh... sorry not enough liquidity</p>
            </div>
            <div v-if="error_token_balance == true" className='wrapper2inline' style="margin-top: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <p style="text-align: left;">Error</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Don't try to swap more than you can</p>
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
const { ethers } = require('ethers');
import { nFormatter } from "@/helpers/numbers";
import { ref, computed, watchEffect } from "vue";

export default {
  name: 'interface',
  setup() {

    useMeta({
      title: 'Swap.Dance - Proof of Trade AMM : Swap Tokens', 
      description: 'Swaps are instant. You just connect your metamask wallet, select your ERC20 assets and a token you want to receive. Click and confirm token swap. Once the transaction gets confirmed the funds will be moved to your wallet. You do not have to go through any KYC procedure.',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Ethereum (ETH), Wrapped Ether (WETH), Chainlink (LINK), Tether (USDT), Shiba Inu (SHIB), Wrapped Bitcoin (WBTC), Matic Token (MATIC), Curve DAO Token (CRV), 0x (ZRX), Maker (MKR), Dai Stablecoin (DAI), USDC, Loopring (LRC), Magic Internet Money, AVAX(MIM), LUNA, REN, Uniswap (UNI), Swap tokens, Exchange tokens, DEX, AMM',
    })
    
    const store = useStore();
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const slippage = computed(() => store.state.settings_slippage_swap);
    const connect_button = computed(() => store.state.connect_button_interface);
    const tokens_pair = computed(() => store.state.interface_station_address);
    const token_address1 = computed(() => store.state.interface_token_address1);
    const token_address2 = computed(() => store.state.interface_token_address2[0]);
    const token_decimal1 = computed(() => store.state.interface_token_decimal1);
    const token_decimal2 = computed(() => store.state.interface_token_decimal2);
    const tokens_path = computed(() => store.state.interface_tokens_path);
    const user_addr = computed(() => store.state.interface_user_address);
    const route_error = computed(() => store.state.interface_route_error);
    const token_name1 = computed(() => store.state.interface_token_name1);
    const token_name2 = computed(() => store.state.interface_token_name2);
    const token_symbol1 = computed(() => store.state.interface_token_symbol1);
    const token_symbol2 = computed(() => store.state.interface_token_symbol2);
    const user_balance1 = computed(() => store.state.interface_token_balance1);
    const user_balance2 = computed(() => store.state.interface_token_balance2);
    const token_station_bal1 = computed(() => store.state.interface_token_station_balance1);
    const token_station_bal2 = computed(() => store.state.interface_token_station_balance2);
    // wrapped

    const wrapped_addr = computed(() => store.state.network_coin_wrapped_addr);
    const network_coin_symbol = computed(() => store.state.network_coin_symbol);
    //
    const price_impact_sum = ref("0.0");
    const token_price1 = ref("1.0");
    const token_price2 = ref("");
    const token_price2_min = ref("0.0");
    const price_impact = ref("");
    const price_impact_array = ref([]);
    // temp array
    const token_array = ref([]);
    const station_array = ref([]);
    const temp_amount_in_array = ref([]);
    const temp_amount_out_array = ref([]);
    // errors
    const error_route = ref(false);
    const error_route2 = ref(false);
    const error_token_balance = ref(false);
    // separate tokens addr
    const token_addr_interface1 = ref("");
    const token_addr_interface2 = ref("");

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    function use_max_balance() {
      // user lp balance
      if (wrapped_addr.value == token_address1.value[0] && network_coin_symbol.value == token_symbol1.value) {
        token_price1.value = user_balance1.value - 0.001;
      } else {
        token_price1.value = user_balance1.value;
      }
    }
    
    watchEffect(async () => {
      token_addr_interface1.value = token_address1.value[0];
      token_addr_interface2.value = token_address2.value;

      if (block_number.value && Number(token_price1.value) > 0  && route_error.value.length == 0
        || token_decimal1.value > 0 && Number(token_price1.value) > 0 && route_error.value.length == 0){

        let info_list_get_amounts = await core.get_amounts(
          tokens_pair.value, 
          token_address1.value, 
          Number(token_price1.value), 
          token_decimal1.value, 
          token_decimal2.value
        );
        let full_data = store.state.full_data_list;
        let get_price = info_list_get_amounts.get_price;
        let get_stations = info_list_get_amounts.station_list;
        let get_tokens_in = info_list_get_amounts.token_in_list;
        
        let get_amounts_in = info_list_get_amounts.amount_in_list;
        let get_amounts_out = info_list_get_amounts.amount_out_list;
        // set temp array
        token_array.value = get_tokens_in;
        station_array.value = get_stations;
        temp_amount_in_array.value = get_amounts_in;
        temp_amount_out_array.value = get_amounts_out;
        
        token_price2.value = get_price;
        
        token_price2_min.value = (token_price2.value - (token_price2.value * slippage.value)/100).toFixed(6);

        let temp_impact_price;
        let temp_impact_price2;
        let temp_impact_balance;
        let temp_impact_station;
        let temp_impact_balance2;
        let token_impact_array = [];
        
        if (get_tokens_in.length != 1) {
          
          for (let i = 0; i < get_stations.length; i++) {

            let amounts_in = get_amounts_in[i];
            let token_station = get_stations[i];
            let token_impact = get_tokens_in[i];
            let amount_impact = get_amounts_out[i];

            full_data.forEach(function(pair){
                if (pair.station_address == token_station && pair.token_address_a == token_impact 
                    || pair.station_address == token_station && pair.token_address_b == token_impact )
                    if (pair.token_address_a == token_impact) {
                      temp_impact_station = pair.station_type;
                      temp_impact_price2 = ethers.utils.formatUnits(amount_impact, pair.token_decimals_b);
                      temp_impact_price = ethers.utils.formatUnits(amounts_in, pair.token_decimals_a);
                      
                      temp_impact_balance = ethers.utils.formatUnits(pair.token_balance_a, pair.token_decimals_a);
                      temp_impact_balance2 = ethers.utils.formatUnits(pair.token_balance_b, pair.token_decimals_b);
                    } else if (pair.token_address_b == token_impact) {
                      temp_impact_station = pair.station_type;
                      temp_impact_price = ethers.utils.formatUnits(amounts_in, pair.token_decimals_b);
                      temp_impact_price2 = ethers.utils.formatUnits(amount_impact, pair.token_decimals_a);
                      temp_impact_balance = ethers.utils.formatUnits(pair.token_balance_b, pair.token_decimals_b);
                      temp_impact_balance2 = ethers.utils.formatUnits(pair.token_balance_a, pair.token_decimals_a);
                    }
                }
            );
            if (Number(temp_impact_station) == 1) {
              
              let price_before_swap = Number(temp_impact_balance) / Number(temp_impact_balance2);
              let price_after_swap = (Number(temp_impact_balance) + Number(temp_impact_price)) / (Number(temp_impact_balance2) - Number(temp_impact_price2));
              
              if (price_before_swap > price_after_swap) {
                price_impact.value = (((price_before_swap - price_after_swap) / price_before_swap) * 100).toFixed(3);
              } else {
                price_impact.value = (((price_after_swap - price_before_swap) / price_after_swap) * 100).toFixed(3);
              }


              token_impact_array.push(price_impact.value);
            } else if (Number(temp_impact_station) == 0) {

              let price_before_swap = (51922968585348.28 - Number(temp_impact_balance)) / (51922968585348.28 - Number(temp_impact_balance2));
              let price_after_swap = (51922968585348.28 - (Number(temp_impact_balance) + Number(temp_impact_price))) / (51922968585348.28 - (Number(temp_impact_balance2) - Number(temp_impact_price2)));

              if (price_before_swap > price_after_swap) {
                price_impact.value = (((Number(price_before_swap) - Number(price_after_swap)) / Number(price_before_swap)) * 100).toFixed(3);
              } else {
                price_impact.value = (((Number(price_after_swap) - Number(price_before_swap)) / Number(price_after_swap)) * 100).toFixed(3);
              }
              token_impact_array.push(price_impact.value);
            }
          }

        } else if (get_tokens_in.length == 1) {

          let token_station = get_stations[0];
          let token_impact = get_tokens_in[0];

          full_data.forEach(function(pair){
              if (pair.station_address == token_station && pair.token_address_a == token_impact 
                  || pair.station_address == token_station && pair.token_address_b == token_impact )
                  if (pair.token_address_a == token_impact) {
                    temp_impact_station = pair.station_type;
                  } else if (pair.token_address_b == token_impact) {
                    temp_impact_station = pair.station_type;
                  }
              }
          );
          temp_impact_price = token_price1.value;
          temp_impact_balance = token_station_bal1.value;
        
          if (Number(temp_impact_station) == 1) {

            let price_before_swap = temp_impact_balance / token_station_bal2.value;
            let price_after_swap = (Number(temp_impact_balance) + Number(temp_impact_price)) / (Number(token_station_bal2.value) - Number(token_price2.value));

            if (price_before_swap > price_after_swap) {
              price_impact.value = (((price_before_swap - price_after_swap) / price_before_swap) * 100).toFixed(3);
            } else {
              price_impact.value = (((price_after_swap - price_before_swap) / price_after_swap) * 100).toFixed(3);
            }

            token_impact_array.push(price_impact.value);
            
          } else if (Number(temp_impact_station) == 0) {

            let price_before_swap = (51922968585348.28 - Number(temp_impact_balance)) / (51922968585348.28 - Number(token_station_bal2.value));
            let price_after_swap = (51922968585348.28 - (Number(temp_impact_balance) + Number(temp_impact_price))) / (51922968585348.28 - (Number(token_station_bal2.value) - Number(token_price2.value)));

            if (price_before_swap > price_after_swap) {
              price_impact.value = (((price_before_swap - price_after_swap) / price_before_swap) * 100).toFixed(5);
            } else {
              price_impact.value = (((price_after_swap - price_before_swap) / price_after_swap) * 100).toFixed(5);
            }
            token_impact_array.push(price_impact.value);
          }
        }   
        
        var count = 0;
        for(var i=0, n=token_impact_array.length; i < n; i++) 
        { 
            count += Number(token_impact_array[i]); 
        }
        price_impact_sum.value = count;
        price_impact_array.value = token_impact_array;
        if (user_addr.value.length > 0){
          // check user balance after update
          let addr1 = store.state.interface_token_address1[0];
          let addr2 = store.state.interface_token_address2[0];
          let decimal1 = store.state.interface_token_decimal1;
          let decimal2 = store.state.interface_token_decimal2;
          await core.get_balance(addr1, decimal1, addr2, decimal2);
        }
      } else {
        token_price2.value = route_error.value;
        price_impact_sum.value = 0;
        price_impact_array.value = [];
        token_price2_min.value = "0.0";
        price_impact.value = 0;
        if (user_addr.value.length > 0){
          // check user balance after update
          let addr1 = store.state.interface_token_address1[0];
          let addr2 = store.state.interface_token_address2[0];
          let decimal1 = store.state.interface_token_decimal1;
          let decimal2 = store.state.interface_token_decimal2;
          await core.get_balance(addr1, decimal1, addr2, decimal2);
        }
      }
    })

    return {
      slippage,
      open_addr,
      token_array,
      station_array,
      tokens_path,
      price_impact,
      token_price1,
      token_price2,
      token_name1,
      token_name2,
      token_symbol1,
      token_symbol2,
      user_balance1,
      user_balance2,
      connect_button,
      token_address2,
      use_max_balance,
      token_price2_min,
      price_impact_sum,
      price_impact_array,
      //
      error_route,
      error_route2,
      error_token_balance,
      temp_amount_in_array,
      temp_amount_out_array,
      //
      wrapped_addr,
      network_coin_symbol,
      token_addr_interface1,
      token_addr_interface2,
    }
  },
  methods: {
    nFormatter,
    async single_swap(expiry){
      let token = this.token_array[0];
      let station = this.station_array[0];
      let amount_in = this.temp_amount_in_array[0];
      let amount_out = this.temp_amount_out_array[0];
      this.$router.push({ path: '/confirm_swap' });
      await core.token_approve(token, station, amount_in);
      if (this.$store.state.error_token_approve1 == false) {
        await core.swap_single_token(
          token, station, amount_in, amount_out, expiry,
        );
      }
    },
    async multi_swap(expiry, main_token_out, with_approve) {
      // with_approve - set true if it's simple multiswap without network coin
      // set false if you wanna send network coin to swap
      // set vars
      let token = this.token_array[0];
      let amount_in = this.temp_amount_in_array[0];
      let router_addr = this.$store.state.router_addr;
      let multi_swap_token = this.$store.state.multi_swap_token;
      // array
      let stations_path = multi_swap_token[0];
      let tokens_in_path = multi_swap_token[1]; 
      let amounts_in_path = multi_swap_token[2]; 
      let amounts_out_path = multi_swap_token[3]; 
      if (with_approve == true) {
        // approve and swap token
        this.$router.push({ path: '/confirm_swap' });
        await core.token_approve(token, router_addr, amount_in);
        if (this.$store.state.error_token_approve1 == false) {
          await core.swap_multi_tokens(
            expiry, main_token_out, 
            stations_path, tokens_in_path, 
            amounts_in_path, amounts_out_path
          );
        }
      } else { // swap network coin to token
        
        this.$router.push({ path: '/confirm_swap_coin' });
        await core.swap_multi_tokens_with_network_coin(
          expiry, main_token_out, 
          stations_path, tokens_in_path, 
          amounts_in_path, amounts_out_path
        );
      }
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
        // set vars
        let wrapped_addr = this.wrapped_addr;
        let network_coin_symbol = this.network_coin_symbol;
        let inerface_addr1 = this.token_addr_interface1;
        let inerface_addr2 = this.token_addr_interface2;
        let interface_symbol1 = this.token_symbol1;
        let interface_symbol2 = this.token_symbol2;
        //
        let await_time = Number(this.$store.state.settings_time);
        let expiry = Math.floor(Date.now() / 1000) + 60 * await_time;
        // drop confirm vars
        this.$store.dispatch("drop_confirm_vars");
        // set amount in and out
        this.$store.state.lp_amount = this.token_price1; // amount in
        this.$store.state.temp_price1 = this.token_price2; // amount out
        this.$store.state.temp_price2 = this.token_price2_min; // amount min out
        // check page errors
        this.error_route = false;
        this.error_route2 = false;
        this.error_token_balance = false;
        if (Number(this.token_price1) > Number(this.user_balance1)){
          this.error_token_balance = true;
        } else if (this.token_price2 == 'No route found') {
          this.error_route = true;
          this.error_token_balance = false;
        } else if (Number(this.token_price2_min) == 0) {
          this.error_route2 = true;
          this.error_route = false;
          this.error_token_balance = false;
        } else {
          this.error_route = false; 
          this.error_route2 = false;
          this.error_token_balance = false;
          // start check here ->  
          // router or station swap
          if (inerface_addr1 == wrapped_addr && interface_symbol1 == network_coin_symbol) {
            // user wanna swap from network coin
            let main_token_out = this.token_address2; // set erc20 token
            await this.multi_swap(expiry, main_token_out, false);
          
          } else if (inerface_addr2 == wrapped_addr && interface_symbol2 == network_coin_symbol) {
            let main_token_out = process.env.VUE_APP_ZERO_ADDR; // set main token to zero addr to withdraw eth
            await this.multi_swap(expiry, main_token_out, true);
          } else {
          //  console.log("simple swap");
          //  simple swap
            if (this.token_array.length == 1) {
              await this.single_swap(expiry);
            } else {
              let main_token_out = this.token_address2; // set erc20 token
              await this.multi_swap(expiry, main_token_out, true);
            }
          }
        }
      }
    },
    selectToken(idx) {
      this.$store.state.interface_selected_token = idx;
    },
    switch_tokens() {
      [this.$store.state.interface_token_name1, this.$store.state.interface_token_name2] = [this.$store.state.interface_token_name2, this.$store.state.interface_token_name1];
      [this.$store.state.interface_token_symbol1, this.$store.state.interface_token_symbol2] = [this.$store.state.interface_token_symbol2, this.$store.state.interface_token_symbol1];
      [this.$store.state.interface_token_address1, this.$store.state.interface_token_address2] = [this.$store.state.interface_token_address2, this.$store.state.interface_token_address1];
      [this.$store.state.interface_token_decimal1, this.$store.state.interface_token_decimal2] = [this.$store.state.interface_token_decimal2, this.$store.state.interface_token_decimal1];
      [this.$store.state.interface_token_balance1, this.$store.state.interface_token_balance2] = [this.$store.state.interface_token_balance2, this.$store.state.interface_token_balance1];
      [this.$store.state.interface_token_station_balance1, this.$store.state.interface_token_station_balance2] = [this.$store.state.interface_token_station_balance2, this.$store.state.interface_token_station_balance1];
      // station balances
      this.token_price1 = "1.0";
      this.$store.dispatch("switch_prices");
    }
  },
  //mounted() {
  //  window.ethereum.request({ method: 'eth_requestAccounts' })
  //  this.$root.core = core.default
  //}
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
