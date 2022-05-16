<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;"><mark class="purple"> ℹ </mark>TOS</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          
          <div className='simple-card' style="background: white">
            <h3 style="text-align: left; margin-bottom: 1rem;">Terms of service</h3>
            <p style="text-align: start; margin-bottom: 1rem;">These terms and conditions outline the rules and regulations for the use of Swap.Dance's Website, located at <router-link to="/">https://swap.dance</router-link>.</p>
            <p style="text-align: start; margin-bottom: 1rem;">By accessing this website we assume you accept these terms and conditions. Do not continue to use Swap.Dance if you do not agree to take all of the terms and conditions stated on this page.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Cookies</h4>
            <p style="text-align: start; margin-bottom: 1rem;">We are not using cookies on our website!</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">License</h4>
            <p style="text-align: start; margin-bottom: 1rem;">Unless otherwise stated, Swap.Dance and/or its licensors own the intellectual property rights for all material on Swap.Dance. All intellectual property rights are reserved. You may access this from Swap.Dance for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p style="text-align: start; margin-bottom: 1rem;"><strong>It is forbidden to:</strong></p>
            <p style="text-align: start; margin-bottom: 1rem;"> - Convert or swap stolen funds.</p>
            <p style="text-align: start; margin-bottom: 1rem;"> - Create pair with scam ERC20 asset.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Your Privacy</h4>
            <p style="text-align: start; margin-bottom: 1rem;">Please read <router-link to="/privacy_policy">Privacy Policy</router-link></p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Disclaimer</h4>
            <p style="text-align: start;">As long as the website (include smart contracts) and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'Terms of service',
  setup() {
    useMeta({
      title: 'Terms of service : Swap.Dance', 
      description: 'Terms of service',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Terms of service, Swap.Dance AMM',
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
