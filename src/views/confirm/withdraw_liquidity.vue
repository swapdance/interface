<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">{{liquidity_title}}</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white;">
            
            <div v-if="error_token_approve1 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="start_to_fifty1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">       
              <p style="text-align: left;">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="start_to_fifty1 == true && fifty_to_one_hundred1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
              <div @click="open_hash(hash_token_approve1)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="fifty_to_one_hundred1 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
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
            <div v-if="error_sign_liquidity == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Withdrawal {{token_symbol1 + ' & ' + token_symbol2}}</h4>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == false && error_sign_liquidity == false" className='wrapper2i' style="margin-bottom: 1rem;"> 
              <h4 style="text-align: left;">Withdraw</h4>
              <p style="text-align: right;">{{token_symbol1 + ' & ' + token_symbol2}}</p>
            </div>  
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == true && error_sign_liquidity == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Withdraw {{token_symbol1 + ' & ' + token_symbol2}}</h4>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="tx_confirm1 == true && tx_confirm2 == false && error_sign_liquidity == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Withdraw {{token_symbol1 + ' & ' + token_symbol2}}</h4>
              <div @click="open_hash(hash_remove_approve)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Withdraw {{token_symbol1 + ' & ' + token_symbol2}}</h4>
              <p @click="open_hash(hash_remove_approve)" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
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
            <h4 style="text-align: left; margin-bottom: 1rem;">Receive</h4>
            <div style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;" className='wrapper2a'>
              <p style="text-align: left;">Token 1</p>
              <p style="text-align: right;">{{token_price1.toString().substring(0, 12)}} {{token_symbol1}}</p>
            </div>
            <div style="margin-bottom: 1rem; grid-template-columns: 0.5fr 2.6fr;" className='wrapper2a'>
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;">{{token_price2.toString().substring(0, 12)}} {{token_symbol2}}</p>
            </div>
            <div className='wrapper2a'>
              <h4 style="text-align: left;">Burn</h4>
              <p style="text-align: right;">{{lp_amount.toString().substring(0, 12)}} {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
            </div>  
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Tx hash:</h4>
              <p @click="open_hash(hash_remove_approve)" style="text-align: right; color: #008a7b; cursor: pointer;">{{hash_remove_approve.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">Thank you, come again!</p>
            <p v-if="error_token_approve1 == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Approve xDx{{token_symbol1}}x{{token_symbol2}}: You denied tx signature!</p>
            <p v-if="error_sign_liquidity == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Remove Liquidity {{token_symbol1}}/{{token_symbol2}}: Tx Failed!</p>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
//watchEffect
export default {
  name: 'confirm remove liquidity',
  setup() {
    
    const store = useStore();
    const liquidity_title = ref("");
    const liquidity_page = computed(() => store.state.liquidity_page);
    // hash info
    const etherscan_link = computed(() => store.state.etherscan_link);
    const hash_token_approve1 = computed(() => store.state.token_approve_hash1);
    const hash_remove_approve = computed(() => store.state.remove_liquidity_hash);

    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    const start_to_fifty1 = computed(() => store.state.start_to_fifty1);
    const fifty_to_one_hundred1 = computed(() => store.state.fifty_to_one_hundred1);
    
    // remove liquidity info
    const lp_amount = computed(() => store.state.lp_amount); // LP Token
    const token_price1 = computed(() => store.state.temp_price1); // Amount token 1 out
    const token_price2 = computed(() => store.state.temp_price2); // Amount token 2 out
    const token_symbol1 = computed(() => store.state.remove_liquidity_token_symbol1);
    const token_symbol2 = computed(() => store.state.remove_liquidity_token_symbol2);

    // errors
    const error_token_approve1 = computed(() => store.state.error_token_approve1);
    const error_sign_liquidity = computed(() => store.state.remove_liquidity_sign_tx);

    if (liquidity_page.value == "1"){
      liquidity_title.value = "Deposit Liquidity";
    } else {
      liquidity_title.value = "Withdraw Liquidity";
    }

    function go_back() {
      history.back();
      store.dispatch("drop_confirm_vars");
    }

    function open_hash(hash) {
        let full_link = etherscan_link.value + 'tx/' + hash
        window.open(full_link, '_blank');
    }
    
    return {
      go_back,
      open_hash,
      lp_amount,
      tx_confirm1,
      tx_confirm2,
      token_price1,
      token_price2,
      token_symbol1,
      token_symbol2,
      liquidity_title,
      start_to_fifty1,
      hash_token_approve1,
      hash_remove_approve,
      fifty_to_one_hundred1,
      // errors
      error_token_approve1,
      error_sign_liquidity,
    }
  },
}
</script>
<style>

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
  grid-template-columns: 0.25fr 2.3fr;
  grid-column-gap: 5px;
  grid-row-gap: 1em;
}

</style>