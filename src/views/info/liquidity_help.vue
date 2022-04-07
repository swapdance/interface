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
            <p style="margin-bottom: 1rem; text-align: start;">Add Liquidity...</p>
            <p style="margin-bottom: 1rem; text-align: start;">Remove Liquidity...</p>
            <p style="text-align: start; line-height: 2;"><strong>LP token</strong> is the assurance token that proves that you deposit tokens in the smart contract of the corresponding liquidity pool for instance WFTM - USDT. You can stake your LP tokens with Proof of Trade pool to get extra profit in <mark class="purple"> DANCE </mark> token.</p>
          </div>
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'liquidity help',
  setup() {

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
