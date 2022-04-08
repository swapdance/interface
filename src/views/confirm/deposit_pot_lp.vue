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
              <p style="text-align: left;">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="start_to_fifty1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="start_to_fifty1 == true && fifty_to_one_hundred1 == false && error_token_approve1 == false" className='wrapper2i' style="margin-bottom: 1rem;">
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
            <div v-if="error_sign_pot_deposit == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</h4>
              <p style="text-align: right; color: rgb(223, 49, 49);">Failed</p>
            </div> 
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == false && error_sign_pot_deposit == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit</h4>
              <p style="text-align: right;">{{'xDx' + token_symbol1 + 'x' + token_symbol2}}</p>
            </div> 
            <div v-if="tx_confirm1 == false && fifty_to_one_hundred1 == true && error_sign_pot_deposit == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</h4>
              <div style="text-align: right;">Sign Tx<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div> 
            <div v-if="tx_confirm1 == true && tx_confirm2 == false" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</h4>
              <div @click="open_hash(hash_deposit_approve)" style="text-align: right;">Tx Pending<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
            </div>          
            <div v-if="tx_confirm2 == true" className='wrapper2i' style="margin-bottom: 1rem;">
              <h4 style="text-align: left;">Deposit {{'xDx' + token_symbol1 + 'x' + token_symbol2}}</h4>
              <p @click="open_hash(hash_deposit_approve)" style="text-align: right; cursor: pointer; color: #008a7b;">Tx Approved</p>
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
            <div v-if="available_reward == 0" className='wrapper2a'>
              <h4 style="text-align: left;">Stake</h4>
              <p style="text-align: right;">{{lp_amount}} <mark class="purple">{{'xDx' + token_symbol1 + 'x' + token_symbol2}}</mark></p>
            </div>  
            <div v-if="available_reward > 0" style="margin-bottom: 1rem;" className='wrapper2a'>
              <h4 style="text-align: left;">Stake</h4>
              <p style="text-align: right;">{{lp_amount}} <mark class="purple">{{'xDx' + token_symbol1 + 'x' + token_symbol2}}</mark></p>
            </div>  
            <div v-if="Number(available_reward) > 0" className='wrapper2a'>
              <h4 style="text-align: left;">Receive</h4>
              <p style="text-align: right;">{{available_reward.toString().substring(0, 12)}} <mark class="purple">DANCE</mark></p>
            </div>  
            <div v-if="tx_confirm2 == true" className='wrapper2' style="margin-bottom: 1rem; margin-top: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <h4 style="text-align: left;">Tx hash:</h4>
              <p @click="open_hash(hash_deposit_approve)" style="text-align: right; color: #008a7b; cursor: pointer;">{{hash_deposit_approve.toString().substring(0, 18) + '...'}}</p>
            </div>  
            <p v-if="tx_confirm2 == true" style="text-align: center; margin-top: 1rem; color: #008a7b;">This is awesome! You're awesome!</p>
            <p v-if="error_token_approve1 == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Approve {{'xDx' + token_symbol1 + 'x' + token_symbol2}}: You denied tx signature!</p>
            <p v-if="error_sign_pot_deposit == true" style="text-align: center; margin-top: 1rem; color: rgb(223, 49, 49);">Deposit PoT Pool {{token_symbol1}}/{{token_symbol2}}: Tx Failed!</p>
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
  name: 'confirm new lp token deposit',
  setup() {

    useMeta({
      title: 'Confirm Deposit LP Token: Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, LP Token, Proof of trade, Deposit token',
    })
    
    const store = useStore();
    const title = ref("PoT Deposit");
    // hash info
    const etherscan_link = computed(() => store.state.etherscan_link);
    const hash_token_approve1 = computed(() => store.state.token_approve_hash1);
    const hash_deposit_approve = computed(() => store.state.deposit_pot_hash);

    const tx_confirm1 = computed(() => store.state.tx_confirm1);
    const tx_confirm2 = computed(() => store.state.tx_confirm2);
    const start_to_fifty1 = computed(() => store.state.start_to_fifty1);
    const fifty_to_one_hundred1 = computed(() => store.state.fifty_to_one_hundred1);
    // errors
    const error_token_approve1 = computed(() => store.state.error_token_approve1);
    const error_sign_pot_deposit = computed(() => store.state.error_sign_pot_deposit);
    // new pair info
    const lp_amount = computed(() => store.state.lp_amount); // LP token
    const available_reward = computed(() => store.state.temp_price1); // Reward
    const token_symbol1 = computed(() => store.state.stake_proof_of_trade_token_symbol1);
    const token_symbol2 = computed(() => store.state.stake_proof_of_trade_token_symbol2);
    console.log("available_rewardavailable_reward", available_reward.value)
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
      lp_amount,
      tx_confirm1,
      tx_confirm2,
      token_symbol1,
      token_symbol2,
      start_to_fifty1,
      available_reward,
      hash_token_approve1,
      hash_deposit_approve,
      fifty_to_one_hundred1,
      error_token_approve1,
      error_sign_pot_deposit,
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