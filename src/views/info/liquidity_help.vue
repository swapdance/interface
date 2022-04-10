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
            <h4 style="text-align: left; margin-bottom: 1rem;">Liquidity</h4>
            <p style="text-align: start; line-height: 2;">Anyone can deposit funds to a liquidity pool and earn trading fees. </p>
            <p style="text-align: start; line-height: 2;">When you provide a new liquidity, you get an LP Token, that represents your share in the pool and as transactions occur, the trading fees accrue to your LP token.</p>
            <p style="text-align: start; line-height: 2;">You can redeem your LP tokens back into the initial pool asset at any time. But note, every time you withdraw LP with reward, the Super Pool receive 3% LP tokens for dynamic pools and 0.3% for stable pools.</p>
            <p style="text-align: start; line-height: 2;">For instance your reward is $100, you will receive $97 the remaining $3 will be sent to the Super Pool address.</p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'liquidity help',
  setup() {

    useMeta({
      title: 'Liquidity Help : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Liquidity, Add Liquidity, Remove Liquidity, Swap tokens, Exchange tokens, DEX, AMM',
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
