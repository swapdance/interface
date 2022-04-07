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
            
            <div v-if="error_new_pair_sign_tx == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Create {{token_symbol1 + ' & ' + token_symbol2}} Pair</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="tx_confirm1 == false && error_new_pair_sign_tx == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Create {{token_symbol1 + ' & ' + token_symbol2}} Pair</p>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>       
            <div v-if="tx_confirm1 == true && tx_confirm2 == false && error_new_pair_sign_tx == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Creating {{token_symbol1 + ' & ' + token_symbol2}}</p>
              <div @click="open_hash()" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">{{token_symbol1 + ' & ' + token_symbol2}} Pair Created</p>
              <p @click="open_hash()" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
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
            <h4 style="text-align: left; margin-bottom: 1rem;">Pair Info</h4>
            <div style="margin-bottom: 1rem;" className='wrapper2inline'>
              <p style="text-align: left;">Token 1</p>
              <p style="text-align: right;">{{token_symbol1}}</p>
            </div>
            <div style="margin-bottom: 1rem;" className='wrapper2inline'>
              <p style="text-align: left;">Token 2</p>
              <p style="text-align: right;">{{token_symbol2}}</p>
            </div>
            <div className='wrapper2' style="grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">LP Token</h4>
              <p style="text-align: right;">{{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
            </div>  
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Pair Addr</h4>
              <p @click="open_addr()" style="text-align: right; color: #008a7b; cursor: pointer;">{{pair_addr.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true && create_proof_of_trade == false" style="text-align: center; margin-top: 1rem; color: #008a7b;">You did it! So proud of you!</p>
            <p v-if="tx_confirm2 == true && create_proof_of_trade == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">Let's create  <router-link to="/new_pot">Proof Of Trade Pool</router-link> to earn <mark class="purple">DANCE</mark>!</p>
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">Do you want to <router-link to="/add_liquidity">deposit liquidity?</router-link></p>
            <p v-if="error_new_pair_sign_tx == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">New Pair {{token_symbol1}}/{{token_symbol2}}: Tx Failed!</p>
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
  name: 'confirm new liquidity',
  setup() {
    
    const store = useStore();
    const title = ref("New Pair");
    // confirm info
    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    // hash info
    const hash = computed(() => store.state.create_new_pair_hash);
    const etherscan_link = computed(() => store.state.etherscan_link);
    // new pair info
    const pair_addr = computed(() => store.state.create_new_pair_addr);
    const create_proof_of_trade = computed(() => store.state.lp_amount);
    const token_symbol1 = computed(() => store.state.new_pool_token_symbol1);
    const token_symbol2 = computed(() => store.state.new_pool_token_symbol2);
    // errors
    const error_new_pair_sign_tx = computed(() => store.state.error_new_pair_sign_tx);

    function go_back() {
      history.back();
      store.dispatch("drop_confirm_vars");
    }

    function open_addr() {
        let full_link = etherscan_link.value + 'address/' + pair_addr.value
        window.open(full_link, '_blank');
    }

    function open_hash() {
        let full_link = etherscan_link.value + 'tx/' + hash.value
        window.open(full_link, '_blank');
    }
    
    return {
      title,
      go_back,
      open_addr,
      open_hash,
      pair_addr,
      tx_confirm1,
      tx_confirm2,
      token_symbol1,
      token_symbol2,
      create_proof_of_trade,
      error_new_pair_sign_tx,
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
  grid-template-columns: 0.7fr 2.3fr;
  grid-column-gap: 5px;
  grid-row-gap: 1em;
}

</style>