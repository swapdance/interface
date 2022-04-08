<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">{{title}}</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white;">

            <div v-if="error_token_approve1 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{token_symbol1}}</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="start_to_fifty1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{token_symbol1}}</p>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="start_to_fifty1 == true && fifty_to_one_hundred1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{token_symbol1}}</p>
              <div @click="open_hash(hash_token_approve1)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="fifty_to_one_hundred1 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{token_symbol1}}</p>
              <p @click="open_hash(hash_token_approve1)" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
            </div>                   
            <div style="margin-bottom: 1rem;" id="modules">
              <div class="module"><p style="background: #595ec1; color: white">0.0%</p></div>
              <div class="module"><p :style="[start_to_fifty1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">20%</p></div>
              <div class="module"><p :style="[start_to_fifty1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">40%</p></div>
              <div class="module"><p :style="[start_to_fifty1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">60%</p></div>
              <div class="module"><p :style="[fifty_to_one_hundred1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">80%</p></div>
              <div class="module"><p :style="[fifty_to_one_hundred1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">100%</p></div>
              <div class="module"><p :style="[fifty_to_one_hundred1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">DONE</p></div>            
            </div>
            <div v-if="error_swap_token == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Swap {{token_symbol1 + ' &rarr; ' + token_symbol2}}</h4>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == false && error_swap_token == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Swap</h4>
              <p style="text-align: right;">{{token_symbol1 + ' &rarr; ' + token_symbol2}}</p>
            </div> 
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == true && error_swap_token == false " className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Swap {{token_symbol1 + ' &rarr; ' + token_symbol2}}</h4>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="tx_confirm1 == true && tx_confirm2 == false && error_swap_token == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Swap {{token_symbol1 + ' &rarr; ' + token_symbol2}}</h4>
              <div @click="open_hash(hash_swap_tokens)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Swap {{token_symbol1 + ' &rarr; ' + token_symbol2}}</h4>
              <p @click="open_hash(hash_swap_tokens)" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
            </div>              
            <div style="margin-bottom: 1rem;" id="modules">
              <div class="module"><p style="background: #595ec1; color: white">0.0%</p></div>
              <div class="module"><p :style="[tx_confirm1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">20%</p></div>
              <div class="module"><p :style="[tx_confirm1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">40%</p></div>
              <div class="module"><p :style="[tx_confirm1===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">60%</p></div>
              <div class="module"><p :style="[tx_confirm2===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">80%</p></div>
              <div class="module"><p :style="[tx_confirm2===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">100%</p></div>
              <div class="module"><p :style="[tx_confirm2===true ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]">DONE</p></div>            
            </div>  
            <div className='wrapper2' style="margin-bottom: 1rem; grid-template-columns: 0.3fr 2.7fr;">
              <h4 style="text-align: left; width: 100%;">Path</h4>
              <p style="text-align: right;">{{tokens_path.join(' &rarr; ')}}</p>
            </div>
            <div style="margin-bottom: 1rem; grid-template-columns: 0.3fr 2.7fr;" className='wrapper2i'>
              <h4 style="text-align: left;">Send</h4>
              <p style="text-align: right;">{{amount_in}} {{token_symbol1}}</p>
            </div>
            <div style="margin-bottom: 1rem; grid-template-columns: 0.3fr 2.7fr;" className='wrapper2i'>
              <h4 style="text-align: left;">Receive</h4>
              <p style="text-align: right;">{{amount_out}} {{token_symbol2}}</p>
            </div>
            <div style="grid-template-columns: 0.3fr 2.7fr;" className='wrapper2i'>
              <h4 style="text-align: left;">Minimum</h4>
              <p style="text-align: right;">{{min_amount_out}} {{token_symbol2}}</p>
            </div>  
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Swap Tx</h4>
              <p @click="open_hash(hash_swap_tokens)" style="text-align: right; color: #008a7b; cursor: pointer;">{{hash_swap_tokens.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">Congrats, You've swapped some money!</p>
            <p v-if="error_token_approve1 == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Approve {{token_symbol1}}: You denied tx signature!</p>
            <p v-if="error_swap_token == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Swap {{token_symbol1 + ' &rarr; ' + token_symbol2}}: Tx Failed!</p>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
import { computed, ref } from "vue";
//watchEffect
export default {
  name: 'Swap Tokens',
  setup() {

    useMeta({
      title: 'Confirm Token Swap: Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Ethereum (ETH), Wrapped Ether (WETH), Chainlink (LINK), Tether (USDT), Shiba Inu (SHIB), Wrapped Bitcoin (WBTC), Matic Token (MATIC), Curve DAO Token (CRV), 0x (ZRX), Maker (MKR), Dai Stablecoin (DAI), USDC, Loopring (LRC), Magic Internet Money, AVAX(MIM), LUNA, REN, Uniswap (UNI), Swap tokens, Exchange tokens, DEX, AMM',
    })
    
    // to do! if user has non zero amount, then we should show the reward?
    const store = useStore();
    const title = ref("Swap Tokens");
    // hash info
    const etherscan_link = computed(() => store.state.etherscan_link);
    const hash_token_approve1 = computed(() => store.state.token_approve_hash1);
    const hash_swap_tokens = computed(() => store.state.swap_token_hash);

    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    const start_to_fifty1 = computed(() => store.state.start_to_fifty1);
    const fifty_to_one_hundred1 = computed(() => store.state.fifty_to_one_hundred1);
    // errors
    const error_token_approve1 = computed(() => store.state.error_token_approve1);
    const error_swap_token = computed(() => store.state.error_swap_token);
    // new swap info
    const tokens_path = computed(() => store.state.interface_tokens_path);


    const amount_in = computed(() => store.state.lp_amount);
    const amount_out = computed(() => store.state.temp_price1);
    const min_amount_out = computed(() => store.state.temp_price2);
    const token_symbol1 = computed(() => store.state.interface_token_symbol1);
    const token_symbol2 = computed(() => store.state.interface_token_symbol2);

    function go_back() {
      history.back();
      store.dispatch("drop_confirm_vars");
    }
    
    function open_hash(hash) {
        let full_link = etherscan_link.value + 'tx/' + hash
        window.open(full_link, '_blank');
    }
    
    return {
      title,
      go_back,
      amount_in,
      amount_out,
      open_hash,
      tokens_path,
      tx_confirm1,
      tx_confirm2,
      token_symbol1,
      token_symbol2,
      min_amount_out,
      start_to_fifty1,
      hash_swap_tokens,
      hash_token_approve1,
      fifty_to_one_hundred1,
      error_token_approve1,
      error_swap_token,
    }
  },
}
</script>
<style>

.green_class {
  color: #008a7b;
}

/* Modules */
#modules {
    white-space:nowrap;
}

.module {
    display:inline-block;
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    background:#e3f4fe;
}

.module + .module {
    margin-left:6px;
}

.module input[type="settings"] {
  background-color: #e3f4fe;
  width:50px;
  height:50px;
  font-size: 1rem;
  text-align: center; 
  color: black;
}

.module button[type="settings"] {
  background-color: #e3f4fe;
  width:50px;
  height:50px;
  font-size: 1rem;
  text-align: center; 
  color: black;
  border: 0;
  padding: 0;
  border-radius: 0;
  margin-top: 0;
  width: 100%;
  margin-bottom: 0;
}

.wrapper2 {
  display: grid;
  grid-template-columns: 1.25fr 1.75fr;
  grid-column-gap: 5px;
  grid-row-gap: 1em;
}

</style>