<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">Select Token</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card'>
            <input v-model="searchQuery" ref="search_in" style="text-align: left; width: 100%;" autocomplete="off" placeholder="⤷ Type address, symbol or name">
          </div>
          <div className='simple-card' style="background: white; overflow-y:scroll; max-height:340px;">
            <div className='wrapper2inline' style=" margin: 1rem;">
              <p style="text-align: left; cursor: pointer; width: 130%;" @click="select_go_back('Ethereum', 'ETH', network_coin_wrapped_addr, 18)">{{network_coin_name}} ⥊ ${{network_coin_symbol}}</p>
              <img @click="open_addr(network_coin_wrapped_addr)" :title="network_coin_wrapped_addr" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(network_coin_wrapped_addr)" width="24" height="24">
            </div>
            <hr class="solid">
            <div v-for="result of resultQuery" :key="result.id">
              <div className='wrapper2i' style=" margin: 1rem;">
                <p style="text-align: left; cursor: pointer; width: 130%;"  @click="select_go_back(result.token_name, result.token_symbol, result.token_address, result.token_decimal)">{{result.token_name}} ⥊ ${{result.token_symbol}}</p>
                <img @click="open_addr(result.token_address)" :title="result.token_address" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(result.token_address)" width="24" height="24">
              </div>
              <hr class="solid">
            </div>
          </div>
        </div>

      </section>
    </div>
</template>

<script>

import { computed } from "vue";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'

export default {
  name: 'token list',
  setup() {

    useMeta({
      title: 'Token List : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Token List, ERC20 tokens, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();
    const token_list = computed(() => store.state.search_token_list);
    const etherscan_link = computed(() => store.state.etherscan_link);
    const network_coin_name = computed(() => store.state.network_coin_name);
    const network_coin_symbol = computed(() => store.state.network_coin_symbol);
    const network_coin_decimal = computed(() => store.state.network_coin_decimal);
    const network_coin_wrapped_addr = computed(() => store.state.network_coin_wrapped_addr);
    // other data for check

    const token_address1 = computed(() => store.state.interface_token_address1[0]);
    const token_address2 = computed(() => store.state.interface_token_address2[0]);

    function go_back() {
      history.back();
    }
    
    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    return {
      go_back,
      open_addr,
      token_list,
      token_address1,
      token_address2,
      network_coin_name,
      network_coin_symbol,
      network_coin_decimal,
      network_coin_wrapped_addr,
    }
  },
  data() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    setFocus: function() {
      this.$refs.search_in.focus();
    },
    select_go_back: function (token_name, token_symbol, token_address, token_decimal) {
      //  if (network_coin_symbol.value == token_symbol)
      if (this.$store.state.interface_selected_token == 1) {
        // check token 2
        if (this.token_address2 == token_address && this.network_coin_wrapped_addr == token_address){
          this.$router.push({ path: '/convert_eth_to_weth' });
        } else {

          this.$store.dispatch("change_token", {
            token_name: token_name,
            token_symbol: token_symbol,
            token_address: token_address,
            token_decimal: token_decimal,
          })
          this.$router.push({ path: '/' });
        }
      } else {
        if (this.token_address1 == token_address && this.network_coin_wrapped_addr == token_address){
          this.$router.push({ path: '/convert_eth_to_weth' });
        } else {

          this.$store.dispatch("change_token", {
            token_name: token_name,
            token_symbol: token_symbol,
            token_address: token_address,
            token_decimal: token_decimal,
          })
          this.$router.push({ path: '/' });
        }
      }
    },
    getImgUrl: function (imagePath) {
      try {
        require(`@/assets/icons/${imagePath}/logo.png`);
        return require(`@/assets/icons/${imagePath}/logo.png`)
      } catch (e) {
        return require(`@/assets/icons/undefined/logo.png`)
      }
    }
  },
  created() {
    this.$nextTick(() => this.setFocus());
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.token_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => (item.token_address.toLowerCase().includes(v) 
              || item.token_name.toLowerCase().includes(v)
              || item.token_symbol.toLowerCase().includes(v)
            ));
        });
      } else {
        return this.token_list;
      }
    },
  },
  
}
</script>
<style scoped>

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

</style>