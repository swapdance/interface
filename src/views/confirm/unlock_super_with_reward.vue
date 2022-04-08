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
            <div v-if="error_unlock_super_pool == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Withdraw <mark class="purple">DANCE</mark></h4>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="tx_confirm1 == false && error_unlock_super_pool == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Tx Progress</h4>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>       
            <div v-if="tx_confirm1 == true && tx_confirm2 == false && error_unlock_super_pool == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Tx Progress</h4>
              <div @click="open_hash()" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Tx Progress</h4>
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
            <div className='wrapper2a'>
              <h4 style="text-align: left;">Withdraw</h4>
              <p style="text-align: right;">{{locked_dance_amount.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>
            <div v-for="result of super_pool_reward_list" :key="result.id">
              <div className='wrapper2i' style="margin-top: 1rem; grid-template-columns: 1.1fr 1.9fr;">
                <p style="text-align: left; cursor: pointer; width: 130%">{{result.token_symbol1}} ⥊ {{result.token_symbol2}}</p>
                <p style="text-align: right;">{{result.balance.toString().substring(0, 12)}} <mark class="purple">LP</mark></p>
              </div>
            </div>
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Tx hash:</h4>
              <p @click="open_hash()" style="text-align: right; color: #008a7b; cursor: pointer;">{{hash_unlock_approve.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">Highly recommended to convert a third of the reward to BTC, ETH and a bit to <mark class="purple">DANCE</mark> ;)</p>
            <p v-if="error_unlock_super_pool == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Withdraw <mark class="purple">DANCE</mark> and Reward: Tx Failed!</p>
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
  name: 'withdraw dance without reward',
  // to do, show reward if it is.
  // burn fees
  setup() {
    
    useMeta({
      title: 'Confirm Unlock DANCE token With Reward: Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Unlock DANCE token, Unlock DANCE token With Reward',
    })
    
    const store = useStore();
    const title = ref("Unstake & Get Reward");
    // hash info
    const etherscan_link = computed(() => store.state.etherscan_link);
    const hash_unlock_approve = computed(() => store.state.withdraw_super_pool_hash);

    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    // errors
    const error_unlock_super_pool = computed(() => store.state.error_unlock_super_pool_with_reward);
    // to do, get total DANCE BALANCE
    // new pair info
    const locked_dance_amount = computed(() => store.state.lp_amount); // Locked DANCE in Super pool
    const available_reward = computed(() => store.state.temp_price1);
    const super_pool_reward_list = computed(() => store.state.super_pool_reward_list);
    const token_symbol1 = computed(() => store.state.unstake_proof_of_trade_token_symbol1);
    const token_symbol2 = computed(() => store.state.unstake_proof_of_trade_token_symbol2);
    console.log("super_pool_reward_list", super_pool_reward_list)
    
    function go_back() {
      store.state.super_pool_reward_list = [];
      for (let i = 0; i < store.state.search_reward_list.length; i++) {
          store.state.search_reward_list[i].checked = false;
      }
      store.dispatch("drop_confirm_vars");
      history.back();
    }
    
    function open_hash() {
        let full_link = etherscan_link.value + 'tx/' + hash_unlock_approve.value
        window.open(full_link, '_blank');
    }
    
    
    return {
      title,
      go_back,
      open_hash,
      tx_confirm1,
      tx_confirm2,
      token_symbol1,
      token_symbol2,
      available_reward,
      hash_unlock_approve,
      locked_dance_amount,
      super_pool_reward_list,
      error_unlock_super_pool,
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