<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;"><mark class="purple"> ℹ </mark>Risks</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">Risks</h4>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 1.5fr 1.5fr;">
              <p style="text-align: left; color: black;"><router-link style="text-decoration: none; color: inherit;" to="/terms_of_service"><strong>Terms of service</strong></router-link></p>
              <p style="text-align: right; color: black;"><router-link style="text-decoration: none; color: inherit;" to="/privacy_policy"><strong>Privacy Policy</strong></router-link></p>
            </div>
            <p style="text-align: start; margin-bottom: 1rem;">Warning! This project is in beta, the contracts are not audited yet and users are expected to use the protocol at their own risks.</p>
            <p style="text-align: start; margin-bottom: 1rem;">Swap.Dance smart contracts is immutable and not upgradeable. That guarantees that any funds you put into a contract will only be used according to that contract's code.</p>
            <p style="text-align: start; margin-bottom: 1rem;">Swap.Dance can't guarantee that "bad tokens" will not be listed in the token list. Swap.Dance operator can't control a new listing of any token. You must do DYOR before buy any new asset. Anyone can report about "bad token" in our <a href="https://discord.gg/GSVZurABjd">official discord</a>. We will definitely take action after investigation.</p>
            <p style="text-align: start;">Please remember that any professional trader risks only the money the loss of which will not lead to financial collapse. That allows the trader to avoid causes of depression and unhappiness.</p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'risks',
  setup() {

    useMeta({
      title: 'Risks : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Trading Risks, Risks, Smart Contract Risks, Swap tokens, Exchange tokens, DEX, AMM',
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
