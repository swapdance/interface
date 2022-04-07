<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper3inline'>
            <h3 style="text-align: left; width: 150%;"><mark class="purple"> ℹ </mark>How Does It Works</h3>
            <p style="text-align: left;width: 1%;"></p>
            <div className='wrapper3inline' style="margin-left: auto;">
            <p></p>
            <p></p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Settings'}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" style="margin-left: auto; margin-top: 0.1rem; cursor: pointer; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="14" cy="6" r="2"></circle>
                  <line x1="4" y1="6" x2="12" y2="6"></line>
                  <line x1="16" y1="6" x2="20" y2="6"></line>
                  <circle cx="8" cy="12" r="2"></circle>
                  <line x1="4" y1="12" x2="6" y2="12"></line>
                  <line x1="10" y1="12" x2="20" y2="12"></line>
                  <circle cx="17" cy="18" r="2"></circle>
                  <line x1="4" y1="18" x2="15" y2="18"></line>
                  <line x1="19" y1="18" x2="20" y2="18"></line>
                </svg>
              </router-link>
            </div>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">Proof of Trade</h4>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>Staking </strong>allows participants to earn <mark class="purple"> DANCE </mark> rewards on their LP holdings. Cumulative amount of <mark class="purple"> DANCE </mark> rewards are distributed evenly among all stakers depending on amount of their LP tokens.</p>
            <p style="margin-bottom: 1rem; text-align: start;">Participants can easily <strong>unstake</strong> their LP tokens in any time. PoT pool does not charge any commissions. Also "available" and "round" reward will be withdrawn to a wallet with LP tokens.</p>
            <p style="margin-bottom: 1rem; text-align: start;">PoT pool has two types of reward. <strong>"Round"</strong> is the lastest minted reward but not available for withdrawn. <strong>"Available"</strong> reward is calculated when participants stake or unstake LP tokens, at this moment "Round" reward becomes "Available".</p>
            <p style="text-align: start;">Every participant can deploy a <strong>new Proof of Trade pool</strong> for a pair that has at least one approved token. Initial list of approved tokens : <strong>WBTC, WETH, WFTM, USDT, USDC, MIM</strong> (check the list here). For instance, liqiudity provider decide to create the new pool <strong>WBTC - LINK</strong>. After deploying, anyone can initialize <strong>xDxWBTCxLINK</strong> PoT pool for the new existed pair to start mint <mark class="purple"> DANCE </mark> reward for every trade made in this pair. The pair DANCE - LINK wouldn't have an access to deploy PoT pool. Visit our <strong>Discord</strong> to make a new suggestions to the list.</p>
          </div> 
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">Super Pool</h4>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>LP-forming</strong> is a period when significant LPs accumulations take place and <mark class="purple"> DANCE </mark> token economic value are forming.</p>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>LP-distribution</strong> is a period when recipient can choose at on own discretion ten different LPs and withdrawal them proportional to the number of user locked <mark class="purple"> DANCE </mark> token to Super Pool <mark class="purple"> DANCE </mark> units amount.</p>
            <p style="text-align: start;"><strong>The burn rate</strong> is a specific algorithm that allow avoid hyperinflation of <mark class="purple"> DANCE </mark> economic. An increase of one percent each distribution period balances the ratio of new minted tokens to the total supply.</p>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">Work with Liquidity</h4>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>LP token</strong> is the assurance token that proves that you deposit tokens in the smart contract of the corresponding liquidity pool for instance WFTM - USDT. You can stake your LP tokens with Proof of Trade pool to get extra profit in <mark class="purple"> DANCE </mark> token.</p>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>The burn rate</strong> is a specific algorithm that allow avoid hyperinflation of <mark class="purple"> DANCE </mark> economic. An increase of one percent each distribution period balances the ratio of new minted tokens to the total supply.</p>
            <p style="text-align: start;"><strong>LP-distribution</strong> is a period when recipient can choose at on own discretion ten different LPs and withdrawal them proportional to the number of user locked <mark class="purple"> DANCE </mark> token to Super Pool <mark class="purple"> DANCE </mark> units amount.</p>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white">
            <h4 style="text-align: left; margin-bottom: 1rem;">Swap Token</h4>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>LP token</strong> is the warranty token that proves that you deposit tokens in the smart contract of the corresponding liquidity pool for instance WFTM - USDT. You can stake your LP tokens with Proof of Trade pool to get extra profit in <mark class="purple"> DANCE </mark> token.</p>
            <p style="margin-bottom: 1rem; text-align: start;"><strong>The burn rate</strong> is a specific algorithm that allow avoid hyperinflation of <mark class="purple"> DANCE </mark> economic. An increase of one percent each distribution period balances the ratio of new minted tokens to the total supply.</p>
            <p style="text-align: start;"><strong>LP-distribution</strong> is a period when recipient can choose at on own discretion ten different LPs and withdrawal them proportional to the number of user locked <mark class="purple"> DANCE </mark> token to Super Pool <mark class="purple"> DANCE </mark> units amount.</p>
          </div>
          
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'How Does It Work',
  setup() {
    
    return {
        
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
