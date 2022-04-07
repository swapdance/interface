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
            <h4 style="text-align: left; margin-bottom: 1rem;">Create New Proof of Trade Pool</h4>
            <p style="text-align: start; line-height: 2;">Every participant can deploy a <strong>new Proof of Trade pool</strong> for a pair that has at least one approved token. Initial list of approved tokens : <strong>WBTC, WETH, WFTM, USDT, USDC, MIM</strong> (check the list here). For instance, liqiudity provider decide to create the new pool <strong>WBTC - LINK</strong>. After deploying, anyone can initialize <strong>xDxWBTCxLINK</strong> PoT pool for the new existed pair to start mint <mark class="purple"> DANCE </mark> reward for every trade made in this pair. The pair DANCE - LINK wouldn't have an access to deploy PoT pool. Visit our <strong>Discord</strong> to make a new suggestions to the list.</p>
          </div> 
          
          <hr class="solid">
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'New proof of trade pool help',
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
