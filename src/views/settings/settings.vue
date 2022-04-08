<template>
    <div className='layout'>
      <section className='cards'>
        <div className='card'>
          <div className='wrapper2inline'>
            <h3 style="text-align: left; cursor: pointer;" @click="go_back()"><mark class="purple">⫹ </mark>Back</h3>
            <h3 style="text-align: right;">Settings</h3>
          </div>
          <hr class="solid" style="margin-bottom: 1rem;">
          <div className='simple-card' style="background: white;">

            <h4 style="text-align: left; margin-bottom: 1rem;">Swap and Liquidity</h4>
            
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Swap Slippage</p>
                <div id="modules">
                    <div class="module"><button type="settings" v-on:click="button_slippage_swap(0.1)" @click="check_slippage(0)" :style="[activeButtonSlippage===0 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.1">0.1%</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_swap(0.5)" @click="check_slippage(1)" :style="[activeButtonSlippage===1 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.5">0.5%</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_swap(0.8)" @click="check_slippage(2)" :style="[activeButtonSlippage===2 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.8">0.8%</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_swap(1.0)" @click="check_slippage(3)" :style="[activeButtonSlippage===3 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="1.0">1.0%</button></div>
                    <div class="module"><input type="settings" @click="check_slippage(4)" :value="slippage_swap" @input="slippage_swap = $event.target.value" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="2.0%"></div>
                </div>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Liquidity Slippage</p>
                <div id="modules">
                    <div class="module"><button type="settings" v-on:click="button_slippage_liq(0.05)" @click="check_slippage_liq(0)" :style="[activeButtonSlippageLiq===0 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.05">0.05%</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_liq(0.1)" @click="check_slippage_liq(1)" :style="[activeButtonSlippageLiq===1 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.1">0.1%</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_liq(0.15)" @click="check_slippage_liq(2)" :style="[activeButtonSlippageLiq===2 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.15">0.15%</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_liq(0.2)" @click="check_slippage_liq(3)" :style="[activeButtonSlippageLiq===3 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="0.2">0.20%</button></div>
                    <div class="module"><input type="settings" @click="check_slippage_liq(4)" :value="slippage_liq" @input="slippage_liq = $event.target.value" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="0.25%"></div>
                </div>
            </div>
            <div className='wrapper2inline' style="margin-bottom: 1rem;">
              <p style="text-align: left;">Transaction Expires</p>
                <div id="modules">
                    <div class="module"><button type="settings" v-on:click="button_slippage_time(5)" @click="check_time(0)" :style="[activeButtonTime===0 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="5">5m</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_time(10)" @click="check_time(1)" :style="[activeButtonTime===1 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="10">10m</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_time(15)" @click="check_time(2)" :style="[activeButtonTime===2 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="15">15m</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_time(20)" @click="check_time(3)" :style="[activeButtonTime===3 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="20">20m</button></div>
                    <div class="module"><input type="settings" @click="check_time(4)" :value="slippage_time" @input="slippage_time = $event.target.value" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="30m"></div>
                </div>
            </div>
            <h4 style="text-align: left; margin-bottom: 1rem;">New Pool and Proof of Trade Stake</h4>
            
            <div className='wrapper2inline'>
              <p style="text-align: left;">Transaction Expires</p>
                <div id="modules">
                    <div class="module"><button type="settings" v-on:click="button_slippage_create(10)" @click="check_create(0)" :style="[activeButtonCreate===0 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="10">10m</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_create(20)" @click="check_create(1)" :style="[activeButtonCreate===1 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="20">20m</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_create(30)" @click="check_create(2)" :style="[activeButtonCreate===2 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="30">30m</button></div>
                    <div class="module"><button type="settings" v-on:click="button_slippage_create(45)" @click="check_create(3)" :style="[activeButtonCreate===3 ? {'background': '#595ec1', 'color': 'white' }: {'background': '#e3f4fe', 'color': 'black'}]" value="45">45m</button></div>
                    <div class="module"><input type="settings" @click="check_create(4)" :value="slippage_create" @input="slippage_create = $event.target.value" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" placeholder="60m"></div>
                </div>
            </div>

            <p style="text-align: left; margin-top: 1.2rem;"><strong>NOTE:</strong> Use double click if you want to switch from manual setting to a button.</p>
          </div>
        </div>

      </section>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { useMeta } from 'vue-meta'
import { computed, ref, watchEffect } from "vue";
//watchEffect
export default {
  name: 'Settings',
  setup() {
    
    useMeta({
      title: 'Settings : Swap.Dance', 
      htmlAttrs: { lang: 'en', amp: true },
      keywords: 'Swap.Dance, Swap.Dance Settings, Swap Settings, Liquidity Settings, Swap tokens, Exchange tokens, DEX, AMM',
    })

    const store = useStore();
    const slippage_liq = ref("");
    const slippage_swap = ref("");
    const slippage_time = ref("");
    const slippage_create = ref("");
    const activeButtonTime = computed(() => store.state.settings_button_time);
    const activeButtonCreate = computed(() => store.state.settings_button_create);
    const activeButtonSlippage = computed(() => store.state.settings_button_swap_slippage);
    const activeButtonSlippageLiq = computed(() => store.state.settings_button_swap_slippage_liq);

    watchEffect(async () => {
      if (slippage_liq.value) {
        store.state.settings_slippage_liq = Number(slippage_liq.value).toFixed(2);
      } 
      if (slippage_swap.value) {
        store.state.settings_slippage_swap = Number(slippage_swap.value).toFixed(2);
      }
      
      if (slippage_time.value) {
        store.state.settings_time = Number(slippage_time.value).toFixed(0);
      }
      if (slippage_create.value) {
        store.state.settings_create = Number(slippage_create.value).toFixed(0);
      }

      // set time
      if (activeButtonTime.value == 4) {
        slippage_time.value = store.state.settings_time;
      } else {
        slippage_time.value = "";
      }
      // set create
      if (activeButtonCreate.value == 4) {
        slippage_create.value = store.state.settings_create;
      } else {
        slippage_create.value = "";
      }
      // set swap slippage
      if (activeButtonSlippage.value == 4) {
        slippage_swap.value = store.state.settings_slippage_swap;
      } else {
        slippage_swap.value = "";
      }
      // set liquidity slippage
      if (activeButtonSlippageLiq.value == 4) {
        slippage_liq.value = store.state.settings_slippage_liq;
      } else {
        slippage_liq.value = "";
      }
    })

    function check_time(idx) {
      store.state.settings_button_time = idx;
    }

    function check_create(idx) {
      store.state.settings_button_create = idx;
    }

    function check_slippage(idx) {
      store.state.settings_button_swap_slippage = idx;
    }

    function check_slippage_liq(idx) {
      store.state.settings_button_swap_slippage_liq = idx;
    }

    function button_slippage_swap(e) {
      store.state.settings_slippage_swap = e;
    }
    function button_slippage_liq(e) {
      store.state.settings_slippage_liq = e;
    }
    function button_slippage_time(e) {
      store.state.settings_time = e;
    }
    function button_slippage_create(e) {
      store.state.settings_create = e;
    }
    
    function go_back() {
      history.back();
    }
    
    return {
      go_back,
      check_time,
      check_create,
      slippage_liq,
      slippage_swap,
      slippage_time,
      slippage_create,
      check_slippage,
      check_slippage_liq,
      activeButtonTime,
      activeButtonCreate,
      activeButtonSlippage,
      activeButtonSlippageLiq,
      button_slippage_swap,
      button_slippage_liq,
      button_slippage_time,
      button_slippage_create,
    }
  },
}
</script>
<style>

#modules {
    white-space:nowrap;
}

.module {
    display:inline-block;
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    background:#e3f4fe;
}

.module + .module {
    margin-left:5px;
}

.module input[type="settings"] {
  background-color: #e3f4fe;
  width:50px;
  height:50px;
  font-size: 1rem;
  text-align: center; 
  color: black;
}

.module button[type="settings"] {
  background-color: #e3f4fe;
  width:50px;
  height:50px;
  font-size: 1rem;
  text-align: center; 
  color: black;
  border: 0;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
  margin-top: 0;
  width: 100%;
  margin-bottom: 0;
}

</style>