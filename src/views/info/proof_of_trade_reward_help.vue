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
            <h4 style="text-align: left; margin-bottom: 1rem;">Proof of Trade Reward</h4>
            <p style="text-align: start; line-height: 2;">PoT pool has two types of reward. <strong>"Round"</strong> is the lastest minted reward but not available for withdrawn. <strong>"Available"</strong> reward is calculated when participants stake or unstake LP tokens, at this moment "Round" reward becomes "Available".</p>
          </div> 
          
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'Proof of trade reward help',
  setup() {

    useMeta({
      title: 'Get Reward : Proof of Trade Help : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Get Reward, PoT pool, Proof of Trade Pool, Swap tokens, Exchange tokens, DEX, AMM',
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
