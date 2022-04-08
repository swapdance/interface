<template>
  <main>
    <metainfo>
    </metainfo>
    <header className='navbar'>
      <div className='container'>
        <div className='logo'><router-link style="text-decoration: none; color: inherit; vertical-align: bottom; margin-top: 0.1rem; " :to="{name: 'Home'}"><mark class="purple"> ⫓ </mark>Swap.Dance</router-link></div>
          <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Convert ETH to WETH'}"><p style="margin-top: 0.1rem; margin-bottom: 0.5rem;">Wrap</p></router-link>
          <div class="dropdown1">
          <span><p style="margin-bottom: 0.5rem;">Create     
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: auto; margin-top: 0.1rem; vertical-align: bottom;" width="23" height="23"  viewBox="0 0 23 23" class="ml-1 h-5 w-5 fill-current text-gray-700">
            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
            </svg>
            </p>
          </span>
          <div class="dropdown-content">
            <router-link style="text-decoration: none; color: inherit;" :to="{name: 'New Pool'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">New Pair</p></router-link>
            <router-link style="text-decoration: none; color: inherit;" :to="{name: 'New PoT'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">New PoT Pool</p></router-link>
          </div>
          </div>
          <div class="dropdown2">
          <span><p style="margin-bottom: 0.5rem;">Liquidity
            <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: auto; margin-top: 0.1rem; vertical-align: bottom;" width="23" height="23"  viewBox="0 0 23 23" class="ml-1 h-5 w-5 fill-current text-gray-700">
            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
            </svg>
            </p>
          </span>
          <div class="dropdown-content">
            <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Add Liquidity'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">Add Liquidity</p></router-link>
            <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Remove Liquidity'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">Remove Liquidity</p></router-link>
          </div>
          </div>
          <div class="dropdown3">
            <span><p style="margin-bottom: 0.5rem;">Proof of Trade  
              <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: auto; margin-top: 0.1rem; vertical-align: bottom;" width="23" height="23"  viewBox="0 0 23 23" class="ml-1 h-5 w-5 fill-current text-gray-700">
              <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
              </svg>
              </p>
            </span>
            <div class="dropdown-content">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">PoT Stake</p></router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Proof of Trade Unstake'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">PoT Unstake</p></router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Get Reward'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">Get Reward</p></router-link>
            </div>
          </div>
          <div class="dropdown3">
            <span><p style="margin-bottom: 0.5rem;">Super Pool  
              <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: auto; margin-top: 0.1rem; vertical-align: bottom;" width="23" height="23"  viewBox="0 0 23 23" class="ml-1 h-5 w-5 fill-current text-gray-700">
              <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
              </svg>
              </p>
            </span>
            <div class="dropdown-content">
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Super Pool'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">Lock Funds</p></router-link>
              <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Super Pool Unlock'}"><p style="margin-bottom: 0.4rem; margin-top: 0.4rem;">Claim Funds</p></router-link>
            </div>
          </div>
          <p style="margin-top: 0.1rem; margin-bottom: 0.5rem;">Stats</p>
          <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Join To Community'}"><p style="margin-top: 0.1rem; margin-bottom: 0.5rem;">Join</p></router-link>
              
          <router-link style="text-decoration: none; color: inherit;" :to="{name: 'Switch Network'}">
            <button class="network-button">{{current_network_name}}
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-planet"  style="margin-left: auto; margin-bottom: 0.1rem; vertical-align: bottom;" width="23" height="23" viewBox="0 0 23 23" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9-.745 1.46-5.783-.259-11.255-3.838-5.47-3.579-9.304-7.664-8.56-9.123.464-.91 2.926-.444 5.803.805"></path>
                <circle cx="12" cy="12" r="7"></circle>
              </svg>
            </button>
          </router-link>
      </div>
    </header>
    <router-view />
    <footer>
      <div className='container'>
        <div className='wrapper3app'>
          <p style="text-align: left; color: black;"><router-link style="text-decoration: none; color: inherit;" to="/terms_of_service">Terms of service</router-link></p>
          <p style="text-align: left; color: black;"><router-link style="text-decoration: none; color: inherit;" to="/privacy_policy">Privacy Policy</router-link></p>
          <p style="text-align: left; color: black;"><router-link style="text-decoration: none; color: inherit;" to="/risks">Risks</router-link></p>
        </div>
        <mark class="purple" style="cursor: pointer;" @click="open_block()"> {{block_number}}</mark>
      </div>
    </footer>
  </main>
</template>

<script>

import { computed } from "vue";
import core from "./core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  setup() {

    useMeta({
      icon: '@/assets/favicon.ico', 
    })

    const store = useStore();
    const block_number = computed(() => store.state.block_num);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const current_network_name = computed(() => store.state.current_network_name);

    function open_block() {
        let full_link = etherscan_link.value + 'block/' + block_number.value
        window.open(full_link, '_blank');
    }
    return {
      open_block,
      block_number,
      current_network_name,
    }

  },
  async beforeMount() {
    await core.connect_network();
    await core.clean_and_update_data();
    this.$store.state.is_updated = true;
    console.log("done");
    core.update_block();
    
  },
}
</script>

<style>
  .dropdown1 {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown2 {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown3 {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    border-radius: 1rem;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown1:hover .dropdown-content {
    display: block;
    min-width: 9rem;
  }

  .dropdown2:hover .dropdown-content {
    display: block;
    min-width: 11rem;
  }

  .dropdown3:hover .dropdown-content {
    display: block;
    min-width: 9rem;
  }

  .wrapper3app {
    display: grid;
    grid-template-columns: 0.14fr 0.12fr 0.5fr;
    grid-column-gap: 10px;
    grid-row-gap: 1em;
    width: 100%;
  }

</style>