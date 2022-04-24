<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">Select LP Tokens</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card'>
            <input v-model="searchQuery" style="text-align: left; width: 100%;" autocomplete="off" placeholder="⤷ Type address, symbol or name">
          </div>
          <div className='simple-card' style="background: white; overflow-y:scroll; max-height:340px;">
            
            <div v-for="result of resultQuery" :key="result.id">
              <div className='wrapper3' style="margin: 1rem;">
                <div @click="select_and_check(result.id, result.token_symbol1, result.token_symbol2, result.pair_station)" v-bind:class="[result.checked===true ? 'circlefull' : 'circleempty']"></div>
                <p @click="select_and_check(result.id, result.token_symbol1, result.token_symbol2, result.pair_station)" style="text-align: left; cursor: pointer; width: 130%">{{result.token_symbol1}} ⥊ {{result.token_symbol2}}</p>
                <p style="text-align: right; width: 110%;">{{result.balance}} LP</p>
              </div>
              <hr class="solid" >
            </div>
          </div>
          <hr class="solid" style=" margin-bottom: 1rem;">
          <p v-if="lock_status == 1 && how_much_left > 0" style="text-align: left; margin-bottom: 1rem;">Select token pair to receive estimate reward based on an amount you locked in Super Pool. <mark class="purple"><strong>{{how_much_left}} left</strong>.</mark></p>
          <p v-if="lock_status == 1 && how_much_left == 0" style="text-align: left; margin-bottom: 1rem;">Select token pair to receive estimate reward based on an amount you locked in Super Pool. <button @click="go_back()">Withdraw</button></p>
          <div v-if="lock_status == 0" className='wrapper2inline' style="margin-bottom: 1rem; grid-template-columns: 2fr 1fr; align-items: center;">
            <p style="text-align: left;">Type an amount you would like to lock. Then select pairs to receive estimate reward. <mark class="purple"><strong>{{how_much_left}} left</strong>.</mark></p>
            <input type="text" 
                  :value="amount_to_lock"
                  @input="amount_to_lock = $event.target.value" 
                  @keyup="change_amount(amount_to_lock)"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                  style="width:100%; height: 4.4rem; padding-right: 0.6rem; -webkit-text-stroke: 1px black;" 
                  placeholder="1.0" />
          </div>
          <hr class="solid" >
            <div v-for="result of list_reward" :key="result.id">
              <div className='wrapper2i' style="margin-top: 1rem; grid-template-columns: 1.1fr 1.9fr;">
                <p style="text-align: left; cursor: pointer; width: 130%">{{result.token_symbol1}} ⥊ {{result.token_symbol2}}</p>
                <p style="text-align: right;">{{result.balance.toString().substring(0, 12)}} <mark class="purple">LP</mark></p>
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
import { computed, ref } from "vue";

export default {
  name: 'reward list',
  setup() {

    useMeta({
      title: 'Reward List : Super Pool : Swap.Dance', 
      description: 'Type an amount of DANCE token you want to lock then select a set of 10 LP tokens on your choice to receive estimate reward you can to withdraw at LP-Distribution cycle.',
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Super Pool Reward List, Reward List, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();
    const list_reward = ref([]);
    const how_much_left = ref(10);
    const amount_to_lock = ref(100);
    const pair_station_list = computed(() => store.state.search_reward_list);
    const lock_status = computed(() => store.state.super_status_for_reward_list);
    
    function go_back() {
      store.state.super_pool_reward_list = list_reward.value;
      history.back();
    }
    
    return {
      go_back,
      lock_status,
      list_reward,
      how_much_left,
      amount_to_lock,
      pair_station_list,
    }
  },
  data() {
    return {
      searchQuery: null,
    };
  },
  async beforeMount() {
    await core.connect_reward_list();
  },
  created () {
    this.drop_checked_pairs();
    this.$store.state.reward_checked_list = 0;
  },
  methods: {
    async change_amount(amount_to_lock){
      for (let i = 0; i < this.list_reward.length; i++) {
        let pair_station = this.list_reward[i].pair_station;
        let check_estimate_reward = await core.connect_reward_list_check_estimate_reward(Number(amount_to_lock).toFixed(18), pair_station);
        this.list_reward[i].balance = check_estimate_reward;
      }
    },
    check_market(idx) {
      if (this.pair_station_list[idx].checked === false) {
        if (this.$store.state.reward_checked_list < 10) {
          this.pair_station_list[idx].checked = true;
          this.$store.state.reward_checked_list += 1;
          this.how_much_left -= 1;
        }
      } else {
        this.pair_station_list[idx].checked = false;
        this.$store.state.reward_checked_list -= 1;
        this.how_much_left += 1;
      }
    },
    async select_and_check(idx, token_symbol1, token_symbol2, pair_station){
      
      let amount = this.amount_to_lock;
      this.check_market(idx);
      
      let index_list = this.list_reward.findIndex(x => x.id === idx);
      if (index_list == -1) {
        // calc balance
        let check_estimate_reward = await core.connect_reward_list_check_estimate_reward(Number(amount).toFixed(18), pair_station);
        
        this.list_reward.push(
          {
            "id":idx,
            "token_symbol1": token_symbol1,
            "token_symbol2": token_symbol2,
            "balance": check_estimate_reward,
            "pair_station": pair_station,
          }
        )
      } else {
        this.list_reward.splice(index_list, 1);
      }
    },
    drop_checked_pairs() {
      for (let i = 0; i < this.pair_station_list.length; i++) {
          this.pair_station_list[i].checked = false;
      }
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.pair_station_list.filter(item => {
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
            ));
        });
      } else {
        return this.pair_station_list;
      }
    },
  },
}
</script>
<style scoped>

.wrapper2 {
  display: grid;
  grid-template-columns: 0.9fr 2.1fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

.circleempty {
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;
  background: #fff;
  margin-left: auto; 
  border: 2px solid #4c51bf;
  color: #4c51bf;
  text-align: center;
  vertical-align: bottom;
}

.circlefull {
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;
  background: #4c51bf;
  margin-left: auto; 
  border: 2px solid white;
  color: #4c51bf;
  text-align: center;
  vertical-align: bottom;
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

.wrapper3 {
  display: grid;
  grid-template-columns: 0.1fr 1.1fr 1.8fr;
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}
</style>