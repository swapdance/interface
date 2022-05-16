<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;"><mark class="purple"> ℹ </mark>Join</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem; ">
          
          <div className='simple-card' style="background: white; line-height: 2;">
            <h4 style="text-align: left;">Join To Community</h4>

             <div className='wrapper2inline'>
                <p style="text-align: start;">Discord:</p>
                <a href="http://discord.gg/GSVZurABjd">http://discord.gg/GSVZurABjd</a>
            </div>


             <div className='wrapper2inline'>
                <p style="text-align: start;">Reddit:</p>
                <a href="https://www.reddit.com/r/DancerDD/">https://www.reddit.com/r/DancerDD/</a>
            </div>

            <div className='wrapper2inline'>
              <p style="text-align: start;">Twitter:</p>
              <a href="https://twitter.com/SwapDance">https://twitter.com/SwapDance</a>
            </div>
          
            <div className='wrapper2inline'>
              <p style="text-align: start;">Owner:</p>
              <a href="https://twitter.com/SwapOperator">https://twitter.com/SwapOperator</a>
            </div>

          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'join',
  setup() {

    useMeta({
      title: 'Join to Community : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Trading Community, Trader Chat, Crypto Trading Community, Swap tokens, Exchange tokens, DEX, AMM',
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
