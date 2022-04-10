<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;"><mark class="purple"> ℹ </mark>How Does It Works</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">New Pair</h4>
            <p style="text-align: start; line-height: 2; margin-bottom: 1rem;">The new pair creation requires having two ERC20 tokens in your wallet and a little bit ETH to cover the gas fees. By adding new pair you need to select a market type and set trading fees.</p>
            <p style="text-align: start; line-height: 2; margin-bottom: 1rem;">Market type means how the price will formed. Stable market with a fixed price will provide currency exchange at a rate close to 1. Dynamic market is more flexible and the price will depend on the mood of traders.</p>
            <p style="text-align: start; line-height: 2;">Also you can find "Future PoT Pool", if this field is "Available", that means you can deploy the <router-link to="/terms_of_service">new Proof of Trade pool</router-link> for the current pair to start stake LP tokens and earn DANCE token. DANCE token you can use as utility token in the Super Pool to receive a set of 10 LP tokens traded on the market. </p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'new pair help',
  setup() {

    useMeta({
      title: 'Create New Pair Help : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Token Pair, New Pool, Create New Pair, New Liquidity Pool, Swap tokens, Exchange tokens, DEX, AMM',
    })

    function go_back() {
      history.back();
    }
    
    return {
        go_back,
    }
  },
}
</script>
<style>

::-webkit-scrollbar {
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}

</style>
