<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">Switch Network</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white">
              <hr class="solid">
            <div className='wrapper2i' style="align-items: center;">      
              <h4 style="text-align: left;">Ethereum Mainnet</h4>
              <button class="network-button" @click="select_network('0x1')" style="font-size: 1rem;">{{mainnet_button}}</button>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Total Pairs</p>
              <p style="text-align: right;">{{mainnet_total_pairs}}</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 0.7fr 2.3fr;">
              <p style="text-align: left;">Token</p>
              <p v-if="mainnet_button != 'Switch'" style="text-align: right; cursor: pointer;" @click="open_addr(dance_addr)"><mark class="purple">{{mainnet_token_name}}</mark></p>
              <p v-if="mainnet_button == 'Switch'" style="text-align: right;"><mark class="purple">{{mainnet_token_name}}</mark></p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 1.1fr 1.9fr;">
              <p style="text-align: left;">Current Supply</p>
              <p style="text-align: right;">{{mainnet_total_supply}}</p>
            </div>      
            <hr class="solid">
            <div className='wrapper2i' style="align-items: center;">    
              <h4 style="text-align: left;">Ethereum Rinkeby</h4>
              <button class="network-button" @click="select_network('0x4')" style="font-size: 1rem;">{{rinkeby_button}}</button>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Total Pairs</p>
              <p style="text-align: right;">{{rinkeby_total_pairs}}</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 0.7fr 2.3fr;">
              <p style="text-align: left;">Token</p>
              <p v-if="rinkeby_button != 'Switch'" style="text-align: right; cursor: pointer;" @click="open_addr(dance_addr)"><mark class="purple">{{rinkeby_token_name}}</mark></p>
              <p v-if="rinkeby_button == 'Switch'" style="text-align: right;"><mark class="purple">{{rinkeby_token_name}}</mark></p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 1.1fr 1.9fr;">
              <p style="text-align: left;">Current Supply</p>
              <p style="text-align: right;">{{rinkeby_total_supply}}</p>
            </div>      
            <hr class="solid">
            <div className='wrapper2i' style="align-items: center;">    
              <h4 style="text-align: left;">Ethereum Goerli</h4>
              <button class="network-button" @click="select_network('0x5')" style="font-size: 1rem;">{{goerli_button}}</button>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Total Pairs</p>
              <p style="text-align: right;">{{goerli_total_pairs}}</p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 0.7fr 2.3fr;">
              <p style="text-align: left;">Token</p>
              <p v-if="goerli_button != 'Switch'" style="text-align: right; cursor: pointer;" @click="open_addr(dance_addr)"><mark class="purple">{{goerli_token_name}}</mark></p>
              <p v-if="goerli_button == 'Switch'" style="text-align: right;"><mark class="purple">{{goerli_token_name}}</mark></p>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 1.1fr 1.9fr;">
              <p style="text-align: left;">Current Supply</p>
              <p style="text-align: right;">{{goerli_total_supply}}</p>
            </div>
            <hr class="solid">
          </div> 
          
        </div>
      </section>
    </div>
</template>

<script>

import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
import { computed, ref, watchEffect } from "vue";

export default {
  name: 'Switch Network',
  setup() {

    useMeta({
      title: 'Switch Network : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Swap.Dance Switch Network, Switch Network to Mainnet, Switch Network to Testnet, Rinkeby, Goerli, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();

    const goerli_button = ref("Switch");
    const rinkeby_button = ref("Switch");
    const mainnet_button = ref("Switch");
    // goerli data
    const goerli_token_name = ref("Connect to the Goerli");
    const goerli_total_pairs = ref("Connect to the Goerli");
    const goerli_total_supply = ref("Connect to the Goerli");
    // rinkeby data
    const rinkeby_token_name = ref("Connect to the Rinkeby");
    const rinkeby_total_pairs = ref("Connect to the Rinkeby");
    const rinkeby_total_supply = ref("Connect to the Rinkeby");
    // mainnet data
    const mainnet_token_name = ref("Connect to the Mainnet");
    const mainnet_total_pairs = ref("Connect to the Mainnet");
    const mainnet_total_supply = ref("Connect to the Mainnet");

    const dance_addr = computed(() => store.state.dance_token);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const current_network_name = computed(() => store.state.current_network_name);

    watchEffect(async () => {
      if (current_network_name.value){
        if (current_network_name.value == "Ethereum") {
            goerli_button.value = "Switch";
            rinkeby_button.value = "Switch";
            mainnet_button.value = "You are here";
            // data
            let network_data = await core.check_network_data();
            mainnet_token_name.value = network_data.token_name;
            mainnet_total_pairs.value = network_data.total_pairs;
            mainnet_total_supply.value = network_data.dance_balance + ' DANCE';
        } else if (current_network_name.value == "Rinkeby") {
            goerli_button.value = "Switch";
            rinkeby_button.value = "You are here";
            mainnet_button.value = "Switch";
            // data
            let network_data = await core.check_network_data();
            rinkeby_token_name.value = network_data.token_name;
            rinkeby_total_pairs.value = network_data.total_pairs;
            rinkeby_total_supply.value = network_data.dance_balance + ' DANCE';
        } else if (current_network_name.value == "Goerli") {
            goerli_button.value = "You are here";
            rinkeby_button.value = "Switch";
            mainnet_button.value = "Switch";
            // data
            let network_data = await core.check_network_data();
            goerli_token_name.value = network_data.token_name;
            goerli_total_pairs.value = network_data.total_pairs;
            goerli_total_supply.value = network_data.dance_balance + ' DANCE';
        }
      }
    })

    function go_back() {
        history.back();
    }

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    function select_network(network_id) {
        core.switch_network(network_id);
    }
    
    return {
        go_back,
        open_addr,
        dance_addr,
        select_network,
        // button
        goerli_button,
        rinkeby_button,
        mainnet_button,
        // network data
        goerli_token_name,
        goerli_total_pairs,
        goerli_total_supply,
        rinkeby_token_name,
        rinkeby_total_pairs,
        rinkeby_total_supply,
        mainnet_token_name,
        mainnet_total_pairs,
        mainnet_total_supply,
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
