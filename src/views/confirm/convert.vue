<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">{{wrapped_side}}</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white;">
            <div v-if="error_wrap_or_unwrap == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Sign Tx</h4>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="tx_confirm1 == false && error_wrap_or_unwrap == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">{{wrapped_side}} {{token_symbol1 + ' &rarr; ' + token_symbol2}}</p>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>       
            <div v-if="tx_confirm1 == true && tx_confirm2 == false && error_wrap_or_unwrap == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">{{wrapped_side}} {{token_symbol1 + ' &rarr; ' + token_symbol2}}</p>
              <div @click="open_hash(wrap_or_unwrap_hash)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">{{wrapped_side}}ped</h4>
              <p @click="open_hash(wrap_or_unwrap_hash)" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
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
            <div className='wrapper2a'>
              <h4 style="text-align: left;">{{wrapped_side}}</h4>
              <p style="text-align: right;">{{wrapped_amount.toString().substring(0, 12)}} <strong>{{token_symbol1 + ' &rarr; ' + token_symbol2}}</strong></p>
            </div> 
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Tx hash:</h4>
              <p @click="open_hash(wrap_or_unwrap_hash)" style="text-align: right; color: #008a7b; cursor: pointer;">{{wrap_or_unwrap_hash.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">{{wrapped_side}} was processed successfully!</p>
            <p v-if="error_wrap_or_unwrap == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">{{wrapped_side}} {{token_symbol1 + ' &rarr; ' + token_symbol2}}: Tx Failed!</p>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
//watchEffect
export default {
  name: 'convert',
  
  setup() {
    useMeta({
      title: 'Confirm Convert: Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Wrap ETH, Unwrap WETH',
    })

    
    const store = useStore();

    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    // hash info
    const etherscan_link = computed(() => store.state.etherscan_link);
    const wrap_or_unwrap_hash = computed(() => store.state.wrap_or_unwrap_hash);
    
    // new pair info
    const wrapped_amount = computed(() => store.state.lp_amount); // wrapped amount
    const token_symbol1 = computed(() => store.state.temp_price1); // token_symbol1
    const token_symbol2 = computed(() => store.state.temp_price2); // token_symbol2
    const wrapped_side = computed(() => store.state.wrapped_side); // side
    // errors
    const error_wrap_or_unwrap = computed(() => store.state.error_wrap_or_unwrap);

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
      tx_confirm1,
      tx_confirm2,
      wrapped_side,
      token_symbol1,
      token_symbol2,
      wrapped_amount,
      wrap_or_unwrap_hash,
      error_wrap_or_unwrap,
    }
  },
}
</script>
<style>

.wrapper2 {
  display: grid;
  grid-template-columns: 0.25fr 2.75fr;
  grid-column-gap: 1px;
  grid-row-gap: 1em;
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

</style>