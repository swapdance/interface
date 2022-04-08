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
              <p style="text-align: left;">Approve <mark class="purple">DANCE</mark></p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="start_to_fifty1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve <mark class="purple">DANCE</mark></p>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="start_to_fifty1 == true && fifty_to_one_hundred1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve <mark class="purple">DANCE</mark></p>
              <div @click="open_hash(hash_token_approve1)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="fifty_to_one_hundred1 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve <mark class="purple">DANCE</mark></p>
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
            <div v-if="error_lock_super_pool == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit <mark class="purple">DANCE</mark></h4>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == false && error_lock_super_pool == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit</h4>
              <p style="text-align: right;"><mark class="purple">DANCE</mark></p>
            </div> 
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == true && error_lock_super_pool == false " className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit <mark class="purple">DANCE</mark></h4>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="tx_confirm1 == true && tx_confirm2 == false && error_lock_super_pool == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit <mark class="purple">DANCE</mark></h4>
              <div @click="open_hash(hash_lock_approve)" style="text-align: right; cursor: pointer;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit <mark class="purple">DANCE</mark></h4>
              <p @click="open_hash(hash_lock_approve)" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
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
            <div style="margin-bottom: 1rem;" className='wrapper2a'>
              <h4 style="text-align: left;">Lock</h4>
              <p style="text-align: right;">{{locked_dance_amount.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>
            <div className='wrapper2' style="grid-template-columns: 1.5fr 1.5fr;">
              <p style="text-align: left;">Share of the Super Pool</p>
              <p style="text-align: right;" :class="user_share > 10 ? 'green_class' : ''">{{user_share}}%</p>
            </div>  
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Tx hash:</h4>
              <p @click="open_hash(hash_lock_approve)" style="text-align: right; color: #008a7b; cursor: pointer;">{{hash_lock_approve.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">You can withdraw your DANCE tokens in any cycle. LP-Distributions with reward or LP-Forming without reward  !</p>
            <p v-if="error_token_approve1 == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Approve <mark class="purple">DANCE</mark>: You denied tx signature!</p>
            <p v-if="error_lock_super_pool == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Deposit <mark class="purple">DANCE</mark>: Tx Failed!</p>
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
  name: 'lock funds / super pool',
  setup() {

    useMeta({
      title: 'Lock DANCE token: Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Super Pool, Lock DANCE token',
    })
    
    const store = useStore();
    const title = ref("Lock Funds");
    // hash info
    const etherscan_link = computed(() => store.state.etherscan_link);
    const hash_token_approve1 = computed(() => store.state.token_approve_hash1);
    const hash_lock_approve = computed(() => store.state.deposit_super_pool_hash);

    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    const start_to_fifty1 = computed(() => store.state.start_to_fifty1);
    const fifty_to_one_hundred1 = computed(() => store.state.fifty_to_one_hundred1);
    // errors
    const error_token_approve1 = computed(() => store.state.error_token_approve1);
    const error_lock_super_pool = computed(() => store.state.error_lock_super_pool);
    // new pair info
    const user_share = computed(() => store.state.temp_price1);
    const locked_dance_amount = computed(() => store.state.lp_amount); // User DANCE amount
    const token_symbol1 = computed(() => store.state.stake_proof_of_trade_token_symbol1);
    const token_symbol2 = computed(() => store.state.stake_proof_of_trade_token_symbol2);

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
      open_hash,
      user_share,
      tx_confirm1,
      tx_confirm2,
      token_symbol1,
      token_symbol2,
      start_to_fifty1,
      hash_lock_approve,
      hash_token_approve1,
      locked_dance_amount,
      fifty_to_one_hundred1,
      error_token_approve1,
      error_lock_super_pool,
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