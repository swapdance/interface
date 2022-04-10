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
            <h4 style="text-align: left; margin-bottom: 1rem;">Super Pool</h4>
            <p style="text-align: start; line-height: 2; margin-bottom: 1rem;"><strong>LP-forming</strong> is a period when significant LPs accumulations take place and <mark class="purple"> DANCE </mark> token economic value are forming.</p>
            <p style="text-align: start; line-height: 2; margin-bottom: 1rem;"><strong>LP-distribution</strong> is a period when recipient can choose at on own discretion ten different LPs and withdrawal them proportional to the number of user locked <mark class="purple"> DANCE </mark> token to Super Pool <mark class="purple"> DANCE </mark> units amount.</p>
            <p style="text-align: start; line-height: 2;"><strong>The burn rate</strong> is a specific algorithm that allow avoid hyperinflation of <mark class="purple"> DANCE </mark> economic. An increase of one percent each distribution period balances the ratio of new minted tokens to the total supply.</p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'super pool help',
  setup() {

    useMeta({
      title: 'Super Pool Help : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Super Pool, Lock DANCE token, Unlock DANCE token, Get Reward, Swap tokens, Exchange tokens, DEX, AMM',
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
