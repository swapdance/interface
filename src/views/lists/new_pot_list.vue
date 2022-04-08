<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">Select PoT Pool</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card'>
            <input v-model="searchQuery" style="text-align: left; width: 100%;" autocomplete="off" placeholder="⤷ Type address, symbol or name">
          </div>
          <div className='simple-card' style="background: white; overflow-y:scroll; max-height:340px;">
            <div v-for="result of resultQuery" :key="result.id">
            <div className='wrapper3inline'  style=" margin: 1rem;">
                <p style="text-align: left; cursor: pointer; width: 130%" @click="select_go_back(result.pair_station)">{{result.token_symbol1}} ⥊ {{result.token_symbol2}}</p>
                <div className='wrapper2inline'>
                  <img @click="open_addr(result.token_address1)" style="margin-left: auto; border-radius: 50%; cursor: pointer;" :src="getImgUrl(result.token_address1)" width="24" height="24">
                  <img @click="open_addr(result.token_address2)" style="border-radius: 50%; cursor: pointer;" :src="getImgUrl(result.token_address2)" width="24" height="24">
                </div>
                <p style="width: 130%">{{result.token_balance1}} ⥊ {{result.token_balance2}}</p>
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
  name: 'new pot list',
  setup() {

    useMeta({
      title: 'New Proof of Trade Pool List: Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Proof of Trade Pool, PoT Pool, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();
    const etherscan_link = computed(() => store.state.etherscan_link);
    const pot_station_list = computed(() => store.state.search_new_pot_list);

    function open_addr(addr) {
        let full_link = etherscan_link.value + 'token/' + addr
        window.open(full_link, '_blank');
    }
    function select_go_back(pair_station) {
      store.state.new_pot_station = pair_station;
      store.dispatch("change_new_pot_station");
      history.back();
    }
    
    function go_back() {
      history.back();
    }
    
    return {
      go_back,
      open_addr,
      select_go_back,
      pot_station_list,
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
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.pot_station_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => (item.pair_station.toLowerCase().includes(v) 
              || item.token_name1.toLowerCase().includes(v)
              || item.token_name2.toLowerCase().includes(v)
              || item.token_name1.toLowerCase().includes(v)
              || item.token_symbol1.toLowerCase().includes(v)
              || item.token_symbol2.toLowerCase().includes(v)
              || item.token_address1.toLowerCase().includes(v)
              || item.token_address2.toLowerCase().includes(v)
              || item.pot_station.toLowerCase().includes(v)
            ));
        });
      } else {
        return this.pot_station_list;
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