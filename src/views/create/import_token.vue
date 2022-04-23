<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">Import Token</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card'>
            <input v-model="searchQuery" style="text-align: left; width: 100%;" autocomplete="off" autofocus="true" placeholder="⤷ Type token address">
          </div>
          <div className='simple-card' style="background: white; overflow-y:scroll; max-height:340px;">
            <div v-if="resultQuery.length == 0">Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span></div>
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

import core from "@/core/core";
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
import { computed, watchEffect } from "vue";

export default {
  name: 'import token list',
  setup() {
    useMeta({
      title: 'Import or Select Token : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, DANCE token, Ethereum (ETH), Wrapped Ether (WETH), Chainlink (LINK), Tether (USDT), Shiba Inu (SHIB), Wrapped Bitcoin (WBTC), Matic Token (MATIC), Curve DAO Token (CRV), 0x (ZRX), Maker (MKR), Dai Stablecoin (DAI), USDC, Loopring (LRC), Magic Internet Money, AVAX(MIM), LUNA, REN, Uniswap (UNI), Swap tokens, Exchange tokens, DEX, AMM',
    })
    const store = useStore();
    const etherscan_link = computed(() => store.state.etherscan_link);
    const token_list = computed(() => store.state.search_import_list);
    const search_input = computed(() => store.state.import_token_search_query);
    const not_found_token_in_main_list = computed(() => store.state.search_import_tokens);
    
    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }

    watchEffect(async () => {
      if (not_found_token_in_main_list.value == true && search_input.value.length == 42) {
        // load new token with core.
        let token_data = await core.get_new_token_data(search_input.value);
        if (token_data.token_name == "") {

          store.state.import_new_address = "";
          store.state.import_new_name = "";
          store.state.import_new_symbol = "";
          store.state.import_new_decimal = "";
        } else {
          store.state.import_new_address = search_input.value;
          store.state.import_new_name = token_data.token_name;
          store.state.import_new_symbol = token_data.token_symbol;
          store.state.import_new_decimal = token_data.token_decimals;
          store.dispatch("add_new_import_token");
        }
      }
    })
    
    function go_back() {
      history.back();
    }

    function select_go_back(token_name, token_symbol, token_address, token_decimal) {
      store.dispatch("add_new_import_token_selected", {
        token_name: token_name,
        token_symbol: token_symbol,
        token_address: token_address,
        token_decimal: token_decimal,
      })
      history.back();
    }
    
    return {
      go_back,
      open_addr,
      token_list,
      select_go_back,
    }
  },
  data() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    getImgUrl: function (imagePath) {
      try {
        require(`@/assets/icons/${imagePath}/logo.png`);
        return require(`@/assets/icons/${imagePath}/logo.png`)
      } catch (e) {
        return require(`@/assets/icons/undefined/logo.png`)
      }
    },
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
  watch: {
    resultQuery: {
      deep: true,
      handler: function (newVal) {
        if (newVal.length > 0){
          this.$store.state.search_import_tokens = false;
        } else {
          this.$store.state.search_import_tokens = true;
          this.$store.state.import_token_search_query = this.searchQuery;
        }
      }
    }
  },
}
</script>
<style scoped>

.wrapper2i {
  display: grid;
  grid-template-columns: 2.8fr 0.2fr;
  grid-column-gap: 1px;
  grid-row-gap: 1em;
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

</style>