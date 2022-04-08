<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;"><mark class="purple"> ℹ </mark>Privacy Policy</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          
          <div className='simple-card' style="background: white">
            <h3 style="text-align: left; margin-bottom: 1rem;">Privacy Policy</h3>
            <p style="margin-bottom: 1rem; text-align: start;">Your privacy is important to us. It is Swap.Dance's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, <router-link to="/">https://swap.dance</router-link>.</p>
            <p style="margin-bottom: 1rem; text-align: start;">
              This policy is effective as of 7 April 2022 and was last updated on 7 April 2022.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Information We Collect</h4>
            <p style="margin-bottom: 1rem; text-align: start;">Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Log Data</h4>
            <p style="margin-bottom: 1rem; text-align: start;">When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.</p>
            <p style="margin-bottom: 1rem; text-align: start;">Please be aware that this information may not be personally identifying by itself.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Limits of Our Policy</h4>
            <p style="margin-bottom: 1rem; text-align: start;">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Changes to This Policy</h4>
            <p style="margin-bottom: 1rem; text-align: start;">At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</p>
            <p style="margin-bottom: 1rem; text-align: start;">If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</p>
            <h4 style="text-align: left; margin-bottom: 1rem;">Contact Us</h4>
            <p style="margin-bottom: 1rem; text-align: start;">For any questions or concerns regarding your privacy, you may contact us using the following details:</p>
            <p style="text-align: start;"><router-link to="/join">https://swap.dance/join</router-link>.</p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

import { useMeta } from 'vue-meta'

export default {
  name: 'Privacy policy',
  setup() {
    useMeta({
      title: 'Privacy policy : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Privacy policy, Swap.Dance AMM',
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
