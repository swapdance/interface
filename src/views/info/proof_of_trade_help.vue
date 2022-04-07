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
            <h4 style="text-align: left; margin-bottom: 1rem;">Proof of Trade - Stake / Unstake</h4>
            <p style="margin-bottom: 1rem; text-align: start; line-height: 2;"><strong>Staking </strong>allows participants to earn <mark class="purple"> DANCE </mark> rewards on their LP holdings. Cumulative amount of <mark class="purple"> DANCE </mark> rewards are distributed evenly among all stakers depending on amount of their LP tokens.</p>
            <p style="text-align: start; line-height: 2;">Participants can easily <strong>unstake</strong> their LP tokens in any time. PoT pool does not charge any commissions. Also "available" and "round" reward will be withdrawn to a wallet with LP tokens.</p>
          </div> 
          
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'Proof of trade help',
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
