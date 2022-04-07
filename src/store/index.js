import { ethers } from "ethers";
import core from "@/core/core";
import { createStore } from 'vuex';
import { create, all } from 'mathjs';
import { nFormatter, ENumber } from "../helpers/numbers";
import { shortestPath, get_path } from "../helpers/calc_route";
// Math
const config = {number: 'BigNumber', precision: 100};
const math = create(all, config);

const zero_addr = process.env.VUE_APP_ZERO_ADDR;

function Graph() {
    var neighbors = this.neighbors = {}; // Key = vertex, value = array of neighbors.
  
    this.addEdge = function (u, v) {
      if (neighbors[u] === undefined) {  // Add the edge u -> v.
        neighbors[u] = [];
      }
      neighbors[u].push(v);
      if (neighbors[v] === undefined) {  // Also add the edge v -> u in order
        neighbors[v] = [];               // to implement an undirected graph.
      }                                  // For a directed graph, delete
      neighbors[v].push(u);              // these four lines.
    };
    return this;
}
  

const store = createStore({
    state: {
        // update block num
        block_num: "",
        // update data list
        is_updated: false,
        // data list
        data_list: "",
        // networt coin
        network_coin_name: "",
        network_coin_symbol: "",
        network_coin_decimal: "",
        network_coin_wrapped_addr: "",
        network_coin_wrapped_name: "",
        network_coin_wrapped_symbol: "",
        // parsed data
        token_list: [],
        route_graph: Graph,
        full_data_list: [],
        search_pair_list: [],
        search_token_list: [],
        search_reward_list: [],
        search_import_list: [],
        search_new_pot_list: [],
        search_deployed_pot_list: [],
        search_pair_list_remove_liquidity: [],
        // App button
        connect_button_interface: "Connect to a wallet",
        connect_button_add_liquidity: "Connect to a wallet",
        connect_button_create_new_pot: "Connect to a wallet",
        connect_button_create_new_pool: "Connect to a wallet",
        connect_button_remove_liquidity: "Connect to a wallet",
        connect_button_super_pool_unlock: "Connect to a wallet",
        connect_button_super_pool_deposit: "Connect to a wallet",
        connect_button_convert_eth_to_weth: "Connect to a wallet",
        connect_button_proof_of_trade_stake: "Connect to a wallet",
        connect_button_proof_of_trade_unstake: "Connect to a wallet",
        connect_button_proof_of_trade_get_reward: "Connect to a wallet",
        // interface vars init
        interface_tokens_path: "",
        interface_user_address: "",
        interface_route_error: "",
        interface_token_price: "1.0",
        interface_token_name1: "",
        interface_token_name2: "",
        interface_token_symbol1: "",
        interface_token_symbol2: "",
        interface_token_address1: "",
        interface_token_address2: "",
        interface_station_address: "",
        interface_token_decimal1: "",
        interface_token_decimal2: "",
        interface_selected_token: 1,
        interface_token_balance1: "0.0",
        interface_token_balance2: "0.0",
        interface_token_station_type: "",
        interface_token_station_balance1: "0.0",
        interface_token_station_balance2: "0.0",
        // add liquidity vars init
        add_liquidity_station: "",
        add_liquidity_station_type: "",
        add_liquidity_token_addr1: "",
        add_liquidity_token_addr2: "",
        add_liquidity_token_name1: "",
        add_liquidity_token_name2: "",
        add_liquidity_token_symbol1: "",
        add_liquidity_token_symbol2: "",
        add_liquidity_token_decimal1: "",
        add_liquidity_token_decimal2: "",
        add_liquidity_token_balance1: "",
        add_liquidity_token_balance2: "",
        add_liquidity_token_fee1: "",
        add_liquidity_token_fee2: "",
        add_liquidity_token_calc_balance1: "",
        add_liquidity_token_calc_balance2: "",
        // remove liquidity vars init
        remove_liquidity_station: "",
        remove_liquidity_token_addr1: "",
        remove_liquidity_token_addr2: "",
        remove_liquidity_token_name1: "",
        remove_liquidity_token_name2: "",
        remove_liquidity_token_symbol1: "",
        remove_liquidity_token_symbol2: "",
        remove_liquidity_token_decimal1: "",
        remove_liquidity_token_decimal2: "",
        remove_liquidity_token_balance1: "",
        remove_liquidity_token_balance2: "",
        remove_liquidity_token_calc_balance1: "",
        // stake proof of trade init vars
        stake_proof_of_trade_station: "",
        stake_proof_of_trade_token_fee1: "",
        stake_proof_of_trade_token_fee2: "",
        stake_proof_of_trade_pot_station: "",
        stake_proof_of_trade_token_addr1: "",
        stake_proof_of_trade_token_addr2: "",
        stake_proof_of_trade_token_name1: "",
        stake_proof_of_trade_token_name2: "",
        stake_proof_of_trade_token_symbol1: "",
        stake_proof_of_trade_token_symbol2: "",
        stake_proof_of_trade_pot_swd_balance: "",
        // unstake proof of trade init vars
        unstake_proof_of_trade_station: "",
        unstake_proof_of_trade_pot_station: "",
        unstake_proof_of_trade_token_addr1: "",
        unstake_proof_of_trade_token_addr2: "",
        unstake_proof_of_trade_token_name1: "",
        unstake_proof_of_trade_token_name2: "",
        unstake_proof_of_trade_token_symbol1: "",
        unstake_proof_of_trade_token_symbol2: "",
        unstake_proof_of_trade_pot_swd_balance: "",
        // get reward proof of trade init vars
        get_reward_proof_of_trade_station: "",
        get_reward_proof_of_trade_pot_station: "",
        get_reward_proof_of_trade_token_addr1: "",
        get_reward_proof_of_trade_token_addr2: "",
        get_reward_proof_of_trade_token_name1: "",
        get_reward_proof_of_trade_token_name2: "",
        get_reward_proof_of_trade_token_symbol1: "",
        get_reward_proof_of_trade_token_symbol2: "",
        get_reward_proof_of_trade_pot_swd_balance: "",
        // others init vars
        liquidity_page: "1",
        proof_of_trade_page: "1",
        reward_checked_list: 0,
        super_status_for_reward_list: "",
        super_pool_reward_list: [],
        // settings button
        settings_button_swap_slippage_liq: 0,
        settings_button_swap_slippage: 1,
        settings_button_create: 2,
        settings_button_time: 3,
        settings_slippage_swap: "0.5",
        settings_slippage_liq: "0.05",
        settings_create: "30",
        settings_time: "20",
        // create new pool
        market_type: "",
        pair_exist: false,
        // import tokens vars
        import_new_name: "",
        import_new_symbol: "",
        import_new_address: "",
        import_new_decimal: "",
        search_import_tokens: false,
        import_token_search_query: "",
        // new pool vars
        new_pool_selected_token: 1,
        new_pool_token_addr1: "",
        new_pool_token_addr2: "",
        new_pool_token_name1: "Add new token",
        new_pool_token_name2: "Add new token",
        new_pool_token_symbol1: "ADD",
        new_pool_token_symbol2: "ADD",
        new_pool_token_decimal1: "",
        new_pool_token_decimal2: "",
        // new pot station
        new_pot_station: "",
        new_pot_token_addr1: "",
        new_pot_token_addr2: "",
        new_pot_token_name1: "SELECT PAIR",
        new_pot_token_name2: "SELECT PAIR",
        new_pot_token_symbol1: "ADD",
        new_pot_token_symbol2: "ADD",
        new_pot_token_fee1: "0.0",
        new_pot_token_fee2: "0.0",
        // confirm tx progress
        lp_amount: "",
        temp_price1: "",
        temp_price2: "",
        wrapped_side: "",
        tx_confirm1: false,
        tx_confirm2: false,
        start_to_fifty1: false,
        start_to_fifty2: false,
        fifty_to_one_hundred1: false,
        fifty_to_one_hundred2: false,
        // errors tx progress
        error_swap_token: false,
        error_wrap_or_unwrap: false,
        error_token_approve1: false,
        error_token_approve2: false,
        error_new_pot_sign_tx: false,
        error_new_pair_sign_tx: false,
        add_liquidity_sign_tx: false,
        remove_liquidity_sign_tx: false,
        error_sign_get_reward: false,
        error_sign_pot_deposit: false,
        error_sign_pot_withdraw: false,
        error_lock_super_pool: false,
        error_unlock_super_pool_with_reward: false,
        error_unlock_super_pool_without_reward: false,
        // env + store
        dance_token: "",
        router_addr: "",
        super_station: "",
        etherscan_link: "",
        current_network_name: "",
        // confirm addr
        create_new_pot_addr: "",
        create_new_pair_addr: "",
        // confirm hashes
        swap_token_hash: "",
        token_approve_hash1: "",
        token_approve_hash2: "",
        create_new_pot_hash: "",
        create_new_pair_hash: "",
        add_liquidity_hash: "",
        remove_liquidity_hash: "",
        deposit_pot_hash: "",
        withdraw_pot_hash: "",
        withdraw_pot_reward_hash: "",
        deposit_super_pool_hash: "",
        withdraw_super_pool_hash: "",
        wrap_or_unwrap_hash: "",
        // multi swap array
        multi_swap_token: [],
    },
    mutations: {
        async clean_exchange_data(state) {
            state.data_list = "";
            state.token_list = [];
            state.route_graph = Graph;
            state.full_data_list = [];
            state.search_pair_list = [];
            state.search_token_list = [];
            state.search_reward_list = [];
            state.search_import_list = [];
            state.search_new_pot_list = [];
            state.search_deployed_pot_list = [];
            state.search_pair_list_remove_liquidity = [];
        },
        async load_exchange_data(state) {

            let data_list = state.data_list;
            let station_list = data_list[0];
            let pot_station_list = data_list[1];
            let token_list_a = data_list[2];
            let token_list_b = data_list[3]; 
            let token_array_name_a = data_list[4];
            let token_array_name_b = data_list[5];
            let token_array_symbols = data_list[6];
            let pair_params_array = data_list[7];
            let token_decimals_balances = data_list[8];
            let station_pot_array_balances= data_list[9];

            for (let i = 0; 49 >= i; i++) { // set max i
                let station_address = station_list[i];
                if (station_address != zero_addr) {
                    let token_address_a = token_list_a[i];
                    let token_address_b = token_list_b[i];
                    let pot_station_address = pot_station_list[i];
                    
                    let decimals_string_a = String(token_decimals_balances[i].toString() +" & 2^6 - 1");
                    let decimals_string_b = String(token_decimals_balances[i].toString() +" >> 6 & 2^6 - 1");
                    let balances_string_a = String(token_decimals_balances[i].toString() +" >> 12 & 2^112 - 1");
                    let balances_string_b = String(token_decimals_balances[i].toString() +" >> 124");

                    let lp_balance_string = String(station_pot_array_balances[i].toString() +" & 2^128 - 1");
                    let pot_balance_string = String(station_pot_array_balances[i].toString() +" >> 128");
                        
                    let token_decimals_a = math.evaluate(decimals_string_a).toString();
                    let token_decimals_b = math.evaluate(decimals_string_b).toString();
                    let token_balance_a = math.evaluate(balances_string_a).toString();
                    let token_balance_b = math.evaluate(balances_string_b).toString();

                    token_balance_a = ENumber(token_balance_a);
                    token_balance_b = ENumber(token_balance_b);

                    let pool_token_balance = math.evaluate(lp_balance_string).toString();
                    let pot_swd_balance = math.evaluate(pot_balance_string).toString();

                    let token_name_a = ethers.utils.parseBytes32String(token_array_name_a[i]);
                    let token_name_b = ethers.utils.parseBytes32String(token_array_name_b[i]);

                    let token_symbol_a = ethers.utils.parseBytes32String(token_array_symbols[i]).split('/')[0];
                    let token_symbol_b = ethers.utils.parseBytes32String(token_array_symbols[i]).split('/')[1];

                    let station_type_string = String(pair_params_array[i].toString() +" >> 4 & 2^2 - 1");
                    let station_lock_status_string = String(pair_params_array[i].toString() +" >> 6 & 2^2 - 1");
                    let station_approved_status_string = String(pair_params_array[i].toString() +" >> 8 & 2^2 - 1");
                    let decimal_diff_a_string = String(pair_params_array[i].toString() +" >> 128 & 2^64 - 1");
                    let decimal_diff_b_string = String(pair_params_array[i].toString() +" >> 192");

                    let station_type = math.evaluate(station_type_string).toString();
                    let station_lock_status = math.evaluate(station_lock_status_string).toString();
                    let station_approved_status = math.evaluate(station_approved_status_string).toString();
                    let decimal_diff_a = math.evaluate(decimal_diff_a_string).toString();
                    let decimal_diff_b = math.evaluate(decimal_diff_b_string).toString();
                        
                    let token_fee_string_a = String(pair_params_array[i].toString() +" >> 16 & 2^16 - 1");
                    let token_fee_string_b = String(pair_params_array[i].toString() +" >> 32 & 2^16 - 1");
                    let station_fee_string = String(pair_params_array[i].toString() +" >> 64 & 2^16 - 1");
                    let token_fee_a = math.evaluate(token_fee_string_a).toString();
                    let token_fee_b = math.evaluate(token_fee_string_b).toString();
                    let station_fee = math.evaluate(station_fee_string).toString();
                    // before push token, check pair balance
                    if (ENumber(pool_token_balance) > 0) {
                        state.token_list.push({
                            "token_address": token_address_a,
                            "token_name": token_name_a, 
                            "token_symbol": token_symbol_a,
                            "token_decimals": token_decimals_a,
                        })
                        state.token_list.push({
                            "token_address": token_address_b,
                            "token_name": token_name_b, 
                            "token_symbol": token_symbol_b,
                            "token_decimals": token_decimals_b,
                        })
                    }
                    
                    state.full_data_list.push({
                        "station_address": station_address,
                        "pot_station_address": pot_station_address,
                        "token_address_a": token_address_a,
                        "token_address_b": token_address_b,
                        "token_decimals_a": token_decimals_a,
                        "token_decimals_b": token_decimals_b,
                        "token_balance_a": token_balance_a,
                        "token_balance_b": token_balance_b,
                        "pool_token_balance": pool_token_balance,
                        "pot_swd_balance": pot_swd_balance,
                        "token_name_a": token_name_a,
                        "token_name_b": token_name_b,
                        "token_symbol_a": token_symbol_a,
                        "token_symbol_b": token_symbol_b,
                        "token_fee_a": token_fee_a,
                        "token_fee_b": token_fee_b,
                        "station_fee": station_fee,
                        "station_type": station_type,
                        "station_lock_status":station_lock_status,
                        "station_approved_status":station_approved_status,
                        "decimal_diff_a":decimal_diff_a,
                        "decimal_diff_b":decimal_diff_b,
                    });
                }  
            }
        },
        async prepare_data(state) {
        //    console.log("state.full_data_list", state.full_data_list)
            
            if (state.search_pair_list.length > 0) {
                state.search_pair_list = [];
                state.search_token_list = [];
                state.search_import_list = [];
                state.search_reward_list = [];
                state.search_new_pot_list = [];
                state.search_deployed_pot_list = [];
            }
            
            let route_graph = new Graph();
            let new_station_array = new Array(9).fill(zero_addr)
            let new_token_in_array = new Array(9).fill(zero_addr)
            let new_token_in_array2 = new Array(9).fill(zero_addr)
            new_station_array.splice(0, 0, state.full_data_list[0].station_address);
            new_token_in_array.splice(0, 0, state.full_data_list[0].token_address_a);
            new_token_in_array2.splice(0, 0, state.full_data_list[0].token_address_b);

            state.interface_token_address1 = new_token_in_array;
            state.interface_token_address2 = new_token_in_array2;
            state.interface_token_decimal1 = state.full_data_list[0].token_decimals_a;
            state.interface_token_decimal2 = state.full_data_list[0].token_decimals_b;
            state.interface_station_address = new_station_array;
            state.interface_token_name1 = state.full_data_list[0].token_name_a;
            state.interface_token_name2 = state.full_data_list[0].token_name_b;
            state.interface_token_symbol1 = state.full_data_list[0].token_symbol_a;
            state.interface_token_symbol2 = state.full_data_list[0].token_symbol_b;
            state.interface_token_station_type = state.full_data_list[0].station_type;
            state.interface_tokens_path = [state.interface_token_symbol1, state.interface_token_symbol2];
            state.interface_token_station_balance1 = ethers.utils.formatUnits(state.full_data_list[0].token_balance_a, state.full_data_list[0].token_decimals_a);
            state.interface_token_station_balance2 = ethers.utils.formatUnits(state.full_data_list[0].token_balance_b, state.full_data_list[0].token_decimals_b);
            
            state.token_list = state.token_list.map(JSON.stringify).reverse().filter(function (e, i, a) {
                return a.indexOf(e, i+1) === -1;
            }).reverse().map(JSON.parse);
            // Token Search
            for (let i = 0; i < state.token_list.length; i++) {
                if (state.token_list[i].token_address == state.network_coin_wrapped_addr) {
                    // wrapped token to top
                    state.search_token_list.unshift({
                        "id":i,
                        "token_address": state.token_list[i].token_address,
                        "token_name": state.token_list[i].token_name, 
                        "token_symbol": state.token_list[i].token_symbol,
                        "token_decimal": state.token_list[i].token_decimals,
                    })
                } else {
                    state.search_token_list.push({
                        "id":i,
                        "token_address": state.token_list[i].token_address,
                        "token_name": state.token_list[i].token_name, 
                        "token_symbol": state.token_list[i].token_symbol,
                        "token_decimal": state.token_list[i].token_decimals,
                    })
                }
            }
            // Import Token Search
            for (let i = 0; i < state.token_list.length; i++) {
                if (state.token_list[i].token_address == state.network_coin_wrapped_addr) { 
                    // wrapped token to top
                    state.search_import_list.unshift({
                        "id":i,
                        "token_address": state.token_list[i].token_address,
                        "token_name": state.token_list[i].token_name, 
                        "token_symbol": state.token_list[i].token_symbol,
                        "token_decimal": state.token_list[i].token_decimals,
                    })
                } else {
                    state.search_import_list.push({
                        "id":i,
                        "token_address": state.token_list[i].token_address,
                        "token_name": state.token_list[i].token_name, 
                        "token_symbol": state.token_list[i].token_symbol,
                        "token_decimal": state.token_list[i].token_decimals,
                    })
                }
            }
            // Pair search
            for (let i = 0; i < state.full_data_list.length; i++) {
                let balance1 = ethers.utils.formatUnits(state.full_data_list[i].token_balance_a, state.full_data_list[i].token_decimals_a);
                let balance2 = ethers.utils.formatUnits(state.full_data_list[i].token_balance_b, state.full_data_list[i].token_decimals_b);
                balance1 = Number(balance1).toFixed(3);
                balance2 = Number(balance2).toFixed(3);
                if (balance1 > 0 && balance2 > 0) {
                    state.search_pair_list_remove_liquidity.push({
                        "id":i,
                        "pair_station": state.full_data_list[i].station_address, 
                        "token_name1": state.full_data_list[i].token_name_a, 
                        "token_name2": state.full_data_list[i].token_name_b, 
                        "token_symbol1": state.full_data_list[i].token_symbol_a,
                        "token_symbol2": state.full_data_list[i].token_symbol_b,
                        "token_decimal1": state.full_data_list[i].token_decimals_a,
                        "token_decimal2": state.full_data_list[i].token_decimals_b,
                        "token_address1": state.full_data_list[i].token_address_a,
                        "token_address2": state.full_data_list[i].token_address_b,
                        "token_balance1": nFormatter(balance1),
                        "token_balance2": nFormatter(balance2),
                    })
                }
                state.search_pair_list.push({
                    "id":i,
                    "pair_station": state.full_data_list[i].station_address, 
                    "token_name1": state.full_data_list[i].token_name_a, 
                    "token_name2": state.full_data_list[i].token_name_b, 
                    "token_symbol1": state.full_data_list[i].token_symbol_a,
                    "token_symbol2": state.full_data_list[i].token_symbol_b,
                    "token_decimal1": state.full_data_list[i].token_decimals_a,
                    "token_decimal2": state.full_data_list[i].token_decimals_b,
                    "token_address1": state.full_data_list[i].token_address_a,
                    "token_address2": state.full_data_list[i].token_address_b,
                    "token_balance1": nFormatter(balance1),
                    "token_balance2": nFormatter(balance2),
                })
                state.search_reward_list.push({
                    "id":i,
                    "pair_station": state.full_data_list[i].station_address, 
                    "token_name1": state.full_data_list[i].token_name_a, 
                    "token_name2": state.full_data_list[i].token_name_b, 
                    "token_symbol1": state.full_data_list[i].token_symbol_a,
                    "token_symbol2": state.full_data_list[i].token_symbol_b,
                    "token_decimal1": state.full_data_list[i].token_decimals_a,
                    "token_decimal2": state.full_data_list[i].token_decimals_b,
                    "token_address1": state.full_data_list[i].token_address_a,
                    "token_address2": state.full_data_list[i].token_address_b,
                    "token_balance1": nFormatter(balance1),
                    "token_balance2": nFormatter(balance2),
                    "checked": false,
                    "balance": "",
                })
            }
            // Token search graph
            for (let i = 0; i < state.full_data_list.length; i++) {
                if (state.full_data_list[i].token_balance_a > 0 && state.full_data_list[i].token_balance_b > 0) {
                    route_graph.addEdge(state.full_data_list[i].token_address_a, state.full_data_list[i].token_address_b);
                }
            }
            state.route_graph = route_graph;
            // PoT pair search
            for (let i = 0; i < state.full_data_list.length; i++) {
                if (state.full_data_list[i].station_approved_status == 1) {

                    let balance1 = ethers.utils.formatUnits(state.full_data_list[i].token_balance_a, state.full_data_list[i].token_decimals_a);
                    let balance2 = ethers.utils.formatUnits(state.full_data_list[i].token_balance_b, state.full_data_list[i].token_decimals_b);
                    balance1 = Number(balance1).toFixed(3);
                    balance2 = Number(balance2).toFixed(3);

                    if (state.full_data_list[i].pot_station_address == zero_addr) {
                        state.search_new_pot_list.push({
                            "id":i,
                            "pair_station": state.full_data_list[i].station_address, 
                            "pot_station": state.full_data_list[i].pot_station_address, 
                            "token_name1": state.full_data_list[i].token_name_a, 
                            "token_name2": state.full_data_list[i].token_name_b, 
                            "token_symbol1": state.full_data_list[i].token_symbol_a,
                            "token_symbol2": state.full_data_list[i].token_symbol_b,
                            "token_decimal1": state.full_data_list[i].token_decimals_a,
                            "token_decimal2": state.full_data_list[i].token_decimals_b,
                            "token_address1": state.full_data_list[i].token_address_a,
                            "token_address2": state.full_data_list[i].token_address_b,
                            "token_balance1": nFormatter(balance1),
                            "token_balance2": nFormatter(balance2),
                        })
                    } else {
                        state.search_deployed_pot_list.push({
                            "id":i,
                            "pair_station": state.full_data_list[i].station_address,
                            "pot_station": state.full_data_list[i].pot_station_address, 
                            "token_name1": state.full_data_list[i].token_name_a, 
                            "token_name2": state.full_data_list[i].token_name_b, 
                            "token_symbol1": state.full_data_list[i].token_symbol_a,
                            "token_symbol2": state.full_data_list[i].token_symbol_b,
                            "token_decimal1": state.full_data_list[i].token_decimals_a,
                            "token_decimal2": state.full_data_list[i].token_decimals_b,
                            "token_address1": state.full_data_list[i].token_address_a,
                            "token_address2": state.full_data_list[i].token_address_b,
                            "token_balance1": nFormatter(balance1),
                            "token_balance2": nFormatter(balance2),
                        })
                    }
                }
            }
            // Add Liquidity (init vars)
            let balance1 = ethers.utils.formatUnits(state.full_data_list[0].token_balance_a, state.full_data_list[0].token_decimals_a);
            let balance2 = ethers.utils.formatUnits(state.full_data_list[0].token_balance_b, state.full_data_list[0].token_decimals_b);

            state.add_liquidity_token_addr1 = state.full_data_list[0].token_address_a;
            state.add_liquidity_token_addr2 = state.full_data_list[0].token_address_b;
            state.add_liquidity_token_name1 = state.full_data_list[0].token_name_a;
            state.add_liquidity_token_name2 = state.full_data_list[0].token_name_b;
            state.add_liquidity_token_symbol1 = state.full_data_list[0].token_symbol_a;
            state.add_liquidity_token_symbol2 = state.full_data_list[0].token_symbol_b;
            state.add_liquidity_token_decimal1 = state.full_data_list[0].token_decimals_a;
            state.add_liquidity_token_decimal2 = state.full_data_list[0].token_decimals_b;
            state.add_liquidity_token_fee1 = (state.full_data_list[0].token_fee_a / 100);
            state.add_liquidity_token_fee2 = (state.full_data_list[0].token_fee_b / 100);
            state.add_liquidity_token_calc_balance1 = balance1;
            state.add_liquidity_token_calc_balance2 = balance2;
            balance1 = Number(balance1).toFixed(state.add_liquidity_token_decimal1);
            balance2 = Number(balance2).toFixed(state.add_liquidity_token_decimal2);
            state.add_liquidity_token_balance1 = nFormatter(balance1);
            state.add_liquidity_token_balance2 = nFormatter(balance2);
            state.add_liquidity_station = state.full_data_list[0].station_address;
            state.add_liquidity_station_type = state.full_data_list[0].station_type;

            // Remove liquidity (init vars)
            state.remove_liquidity_station = state.full_data_list[0].station_address;
            state.remove_liquidity_token_addr1 = state.full_data_list[0].token_address_a;
            state.remove_liquidity_token_addr2 = state.full_data_list[0].token_address_b;
            state.remove_liquidity_token_name1 = state.full_data_list[0].token_name_a;
            state.remove_liquidity_token_name2 = state.full_data_list[0].token_name_b;
            state.remove_liquidity_token_symbol1 = state.full_data_list[0].token_symbol_a;
            state.remove_liquidity_token_symbol2 = state.full_data_list[0].token_symbol_b;
            state.remove_liquidity_token_decimal1 = state.full_data_list[0].token_decimals_a;
            state.remove_liquidity_token_decimal2 = state.full_data_list[0].token_decimals_b;
            state.remove_liquidity_token_calc_balance1 = balance1;
            state.remove_liquidity_token_balance1 = nFormatter(balance1);
            state.remove_liquidity_token_balance2 = nFormatter(balance2);

            // Stake Proof of Trade (init vars)
            for (let i = 0; i < state.full_data_list.length; i++) {
                if (state.full_data_list[i].station_approved_status == 1) {
                    if (state.full_data_list[i].pot_station_address != zero_addr) {
                        state.stake_proof_of_trade_station = state.full_data_list[i].station_address;
                        state.stake_proof_of_trade_pot_station = state.full_data_list[i].pot_station_address;
                        state.stake_proof_of_trade_token_addr1 = state.full_data_list[i].token_address_a;
                        state.stake_proof_of_trade_token_addr2 = state.full_data_list[i].token_address_b;
                        state.stake_proof_of_trade_token_name1 = state.full_data_list[i].token_name_a;
                        state.stake_proof_of_trade_token_name2 = state.full_data_list[i].token_name_b;
                        state.stake_proof_of_trade_token_symbol1 = state.full_data_list[i].token_symbol_a;
                        state.stake_proof_of_trade_token_symbol2 = state.full_data_list[i].token_symbol_b;
                        state.stake_proof_of_trade_pot_swd_balance = ethers.utils.formatUnits(state.full_data_list[i].pot_swd_balance, 18);
                        break;
                    }
                }
            }

            for (let i = 0; i < state.full_data_list.length; i++) {
                if (state.full_data_list[i].station_approved_status == 1) {
                    if (state.full_data_list[i].pot_station_address != zero_addr) {
                        state.unstake_proof_of_trade_station = state.full_data_list[i].station_address;
                        state.unstake_proof_of_trade_pot_station = state.full_data_list[i].pot_station_address;
                        state.unstake_proof_of_trade_token_addr1 = state.full_data_list[i].token_address_a;
                        state.unstake_proof_of_trade_token_addr2 = state.full_data_list[i].token_address_b;
                        state.unstake_proof_of_trade_token_name1 = state.full_data_list[i].token_name_a;
                        state.unstake_proof_of_trade_token_name2 = state.full_data_list[i].token_name_b;
                        state.unstake_proof_of_trade_token_symbol1 = state.full_data_list[i].token_symbol_a;
                        state.unstake_proof_of_trade_token_symbol2 = state.full_data_list[i].token_symbol_b;
                        state.unstake_proof_of_trade_pot_swd_balance = ethers.utils.formatUnits(state.full_data_list[i].pot_swd_balance, 18);
                        break;
                    }
                }
            }
            for (let i = 0; i < state.full_data_list.length; i++) {
                if (state.full_data_list[i].station_approved_status == 1) {
                    if (state.full_data_list[i].pot_station_address != zero_addr) {
                        state.get_reward_proof_of_trade_station = state.full_data_list[i].station_address;
                        state.get_reward_proof_of_trade_pot_station = state.full_data_list[i].pot_station_address;
                        state.get_reward_proof_of_trade_token_addr1 = state.full_data_list[i].token_address_a;
                        state.get_reward_proof_of_trade_token_addr2 = state.full_data_list[i].token_address_b;
                        state.get_reward_proof_of_trade_token_name1 = state.full_data_list[i].token_name_a;
                        state.get_reward_proof_of_trade_token_name2 = state.full_data_list[i].token_name_b;
                        state.get_reward_proof_of_trade_token_symbol1 = state.full_data_list[i].token_symbol_a;
                        state.get_reward_proof_of_trade_token_symbol2 = state.full_data_list[i].token_symbol_b;
                        state.get_reward_proof_of_trade_pot_swd_balance = ethers.utils.formatUnits(state.full_data_list[i].pot_swd_balance, 18);
                        break;
                    }
                }
            }
        },
        async change_button_status(state) {
            state.connect_button_interface = "Swap Tokens";
            state.connect_button_add_liquidity = "Add Liquidity";
            state.connect_button_proof_of_trade_stake = "Deposit LP";
            state.connect_button_super_pool_unlock = "Withdraw DANCE";
            state.connect_button_create_new_pool = "Create a New Pair";
            state.connect_button_remove_liquidity = "Remove Liquidity";
            state.connect_button_proof_of_trade_unstake = "Withdraw LP";
            state.connect_button_super_pool_deposit = "Lock DANCE";
            state.connect_button_create_new_pot = "Create a New PoT Pool";
            state.connect_button_proof_of_trade_get_reward = "Withdraw Reward";
            state.connect_button_convert_eth_to_weth = "Convert ETH to WETH";
        },
        async set_new_block(state, new_block) {
            let block_now = new_block.new_block;
            state.block_num = block_now;
        },
        async change_token(state,newToken) {

            var token_idx = state.interface_selected_token;
            var data = state.full_data_list;
            var token_addr = newToken.token_address;
            var token_name = newToken.token_name;
            var token_symbol = newToken.token_symbol;
            var token_decimal = newToken.token_decimal;
            var check_token_addr1 = state.interface_token_address1[0];
            var check_token_addr2 = state.interface_token_address2[0];
            var check_token_symbol1 =state.interface_token_symbol1;
            var check_token_symbol2 =state.interface_token_symbol2;

            var network_coin_symbol = state.network_coin_symbol;
            var network_coin_wrapped_addr = state.network_coin_wrapped_addr;


            if (token_idx == 1) {
                let token_in = token_addr;
                let token_out = state.interface_token_address2[0];
                let trade_route = shortestPath(state.route_graph, token_in, token_out);
                
                if (trade_route != undefined) {
                    state.interface_route_error = "";
                    let main_path = get_path(trade_route, data, [], []);
                    let station_path = main_path.station_path;
                    let balances = main_path.balances;
                    state.interface_token_station_balance1 = balances[0];
                    state.interface_token_station_balance2 = balances[1];
                    
                    // HTML PATH
                    let html_path = []; 

                    if (token_symbol == network_coin_symbol && network_coin_wrapped_addr == token_addr && trade_route.length > 0) {

                        html_path.push(network_coin_symbol);

                    }   
                    
                    for (let i = 0; i < trade_route.length; i++) {
                        // looking for index
                        let token_index = state.search_token_list.findIndex(
                            pair => pair.token_address.toLowerCase() === trade_route[i].toLowerCase()
                        );
                        html_path.push(state.search_token_list[token_index].token_symbol);
                    }

                    if (check_token_symbol2 == network_coin_symbol && network_coin_wrapped_addr == check_token_addr2 && trade_route.length > 0) {

                        html_path.push(network_coin_symbol);

                    }
                    state.interface_tokens_path = html_path;
                    let new_trade_route = trade_route.slice(0, -1); 
                    
                    for (let i = 0; new_trade_route.length != 10; i++) {
                        new_trade_route.push(zero_addr)
                    }
                    for (let i = 0; station_path[0].length != 10; i++) {
                        station_path[0].push(zero_addr)
                    }
                    
                    // init vars
                    state.interface_token_name1 = token_name;
                    state.interface_token_symbol1 = token_symbol;
                    state.interface_token_address1 = new_trade_route;
                    state.interface_token_decimal1 = token_decimal;
                    state.interface_station_address = station_path[0];
                } else {
                    // set block to check and alert user
                    state.interface_route_error = "No route found";
                    state.interface_tokens_path = "";
                    let new_token_in_array = new Array(9).fill(zero_addr);
                    new_token_in_array.splice(0, 0, token_addr);
                    state.interface_token_name1 = token_name;
                    state.interface_token_symbol1 = token_symbol;
                    state.interface_token_address1 = new_token_in_array;
                    state.interface_token_decimal1 = token_decimal;
                    state.interface_token_station_balance1 = "";
                    state.interface_token_station_balance2 = "";
                }
            } else {
                let token_in = state.interface_token_address1[0];
                let token_out = token_addr;
                let trade_route = shortestPath(state.route_graph, token_in, token_out);
                
                if (trade_route != undefined) {
                    state.interface_route_error = "";
                    let main_path = get_path(trade_route, data, [], []);
                    let station_path = main_path.station_path;
                    let balances = main_path.balances;
                    state.interface_token_station_balance1 = balances[0];
                    state.interface_token_station_balance2 = balances[1];
                    // HTML PATH

                    let html_path = [];

                    if (check_token_symbol1 == network_coin_symbol && network_coin_wrapped_addr == check_token_addr1 && trade_route.length > 0) {

                        html_path.push(network_coin_symbol);

                    }

                    for (let i = 0; i < trade_route.length; i++) {
                        // looking for index
                        let token_index = state.search_token_list.findIndex(
                            pair => pair.token_address.toLowerCase() === trade_route[i].toLowerCase()
                        );
                        html_path.push(state.search_token_list[token_index].token_symbol)
                    }

                    if (token_symbol == network_coin_symbol && network_coin_wrapped_addr == token_addr && trade_route.length > 0) {

                        html_path.push(network_coin_symbol);

                    }


                    
                    state.interface_tokens_path = html_path;
                    let new_trade_route = trade_route.slice(0, -1); 
                    
                    for (let i = 0; new_trade_route.length != 10; i++) {
                        new_trade_route.push(zero_addr)
                    }
                    for (let i = 0; station_path[0].length != 10; i++) {
                        station_path[0].push(zero_addr)
                    }
                    
                    state.interface_token_name2 = token_name;
                    state.interface_token_symbol2 = token_symbol;
                    state.interface_token_address1 = new_trade_route;
                    state.interface_token_decimal2 = token_decimal;
                    state.interface_station_address = station_path[0];
                    let new_token_in_array2 = new Array(9).fill(zero_addr);
                    new_token_in_array2.splice(0, 0, token_addr);
                    state.interface_token_address2 = new_token_in_array2;
                } else {
                    // set block to check and alert user
                    state.interface_route_error = "No route found";
                    // HTML PATH
                    state.interface_tokens_path = "";
                    let new_token_in_array = new Array(9).fill(zero_addr);
                    new_token_in_array.splice(0, 0, token_addr);
                    state.interface_token_name2 = token_name;
                    state.interface_token_symbol2 = token_symbol;
                    state.interface_token_address2 = new_token_in_array;
                    state.interface_token_decimal2 = token_decimal;
                    state.interface_token_station_balance1 = "";
                    state.interface_token_station_balance2 = "";
                }
            }
        },
        async switch_prices(state) {
            let data = state.full_data_list;
            let token_in = state.interface_token_address1[0];
            let token_out = state.interface_token_address2[0];
            let trade_route = shortestPath(state.route_graph, token_in, token_out);

            if (trade_route != undefined) {
                state.interface_route_error = "";
                let main_path = get_path(trade_route, data, [], []);
                let station_path = main_path.station_path;
                let balances = main_path.balances;
                state.interface_token_station_balance1 = balances[0];
                state.interface_token_station_balance2 = balances[1];
                // HTML PATH
                let html_path = [];

                if (state.interface_tokens_path[state.interface_tokens_path.length - 1] == state.network_coin_symbol) {

                    html_path.push(state.network_coin_symbol);

                }

                for (let i = 0; i < trade_route.length; i++) {
                    // looking for index
                    let token_index = state.search_token_list.findIndex(
                        pair => pair.token_address.toLowerCase() === trade_route[i].toLowerCase()
                    );
                    html_path.push(state.search_token_list[token_index].token_symbol)
                }

                if (state.interface_tokens_path[0] == state.network_coin_symbol) {

                    html_path.push(state.network_coin_symbol);

                }

                state.interface_tokens_path = html_path;
                let new_trade_route = trade_route.slice(0, -1); 
                
                for (let i = 0; new_trade_route.length != 10; i++) {
                    new_trade_route.push(zero_addr)
                }
                for (let i = 0; station_path[0].length != 10; i++) {
                    station_path[0].push(zero_addr)
                }
                state.interface_token_address1 = new_trade_route;
                state.interface_station_address = station_path[0];
            } else {
                // set block to check and alert user
                state.interface_route_error = "No route found";
                // HTML PATH
                state.interface_tokens_path = "";
                state.interface_token_station_balance1 = "";
                state.interface_token_station_balance2 = "";
            }
        },
        async change_add_liquidity_pair(state) {
            let data = state.full_data_list
            let new_liquidity_pair = state.add_liquidity_station;
            let pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === new_liquidity_pair.toLowerCase());
            
            // Add Liquidity New Pairt
            let balance1 = ethers.utils.formatUnits(data[pair_index].token_balance_a, data[pair_index].token_decimals_a);
            let balance2 = ethers.utils.formatUnits(data[pair_index].token_balance_b, data[pair_index].token_decimals_b);

            state.add_liquidity_token_addr1 = data[pair_index].token_address_a;
            state.add_liquidity_token_addr2 = data[pair_index].token_address_b;
            state.add_liquidity_token_name1 = data[pair_index].token_name_a;
            state.add_liquidity_token_name2 = data[pair_index].token_name_b;
            state.add_liquidity_token_symbol1 = data[pair_index].token_symbol_a;
            state.add_liquidity_token_symbol2 = data[pair_index].token_symbol_b;
            state.add_liquidity_token_decimal1 = data[pair_index].token_decimals_a;
            state.add_liquidity_token_decimal2 = data[pair_index].token_decimals_b;
            state.add_liquidity_token_fee1 = (data[pair_index].token_fee_a / 100);
            state.add_liquidity_token_fee2 = (data[pair_index].token_fee_b / 100);
            //balance1 = Number(balance1).toFixed(data[pair_index].token_decimals_a);
            //balance2 = Number(balance2).toFixed(data[pair_index].token_decimals_b);
            state.add_liquidity_token_calc_balance1 = balance1;
            state.add_liquidity_token_calc_balance2 = balance2;
            balance1 = Number(balance1).toFixed(state.add_liquidity_token_decimal1);
            balance2 = Number(balance2).toFixed(state.add_liquidity_token_decimal2);
            state.add_liquidity_token_balance1 = nFormatter(balance1);
            state.add_liquidity_token_balance2 = nFormatter(balance2);
            state.add_liquidity_station = data[pair_index].station_address;
            state.add_liquidity_station_type = data[pair_index].station_type;
        },
        async change_remove_liquidity_pair(state) {
            let data = state.full_data_list
            let new_liquidity_pair = state.remove_liquidity_station;
            let pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === new_liquidity_pair.toLowerCase());
            
            // Remove Liquidity New Pairt
            state.remove_liquidity_station = data[pair_index].station_address;
            state.remove_liquidity_token_addr1 = data[pair_index].token_address_a;
            state.remove_liquidity_token_addr2 = data[pair_index].token_address_b;
            state.remove_liquidity_token_name1 = data[pair_index].token_name_a;
            state.remove_liquidity_token_name2 = data[pair_index].token_name_b;
            state.remove_liquidity_token_symbol1 = data[pair_index].token_symbol_a;
            state.remove_liquidity_token_symbol2 = data[pair_index].token_symbol_b;
            state.remove_liquidity_token_decimal1 = data[pair_index].token_decimals_a;
            state.remove_liquidity_token_decimal2 = data[pair_index].token_decimals_b;
            let balance1 = ethers.utils.formatUnits(data[pair_index].token_balance_a, data[pair_index].token_decimals_a);
            let balance2 = ethers.utils.formatUnits(data[pair_index].token_balance_b, data[pair_index].token_decimals_b);
            state.remove_liquidity_token_calc_balance1 = balance1;
            state.remove_liquidity_token_balance1 = nFormatter(balance1);
            state.remove_liquidity_token_balance2 = nFormatter(balance2);
        },
        async add_new_import_token(state) {
            state.search_import_list.push({
                "id":state.search_import_list.length + 1,
                "token_address": state.import_new_address,
                "token_name": state.import_new_name, 
                "token_symbol": state.import_new_symbol,
                "token_decimal": state.import_new_decimal,
            })
        },
        async add_new_import_token_selected(state,newToken) {
            let token_idx = state.new_pool_selected_token;
            if (token_idx == 1) {
                state.new_pool_token_addr1 = newToken.token_address;
                state.new_pool_token_name1 = newToken.token_name;
                state.new_pool_token_symbol1 = newToken.token_symbol;
                state.new_pool_token_decimal1 = newToken.token_decimal;
            } else {
                state.new_pool_token_addr2 = newToken.token_address;
                state.new_pool_token_name2 = newToken.token_name;
                state.new_pool_token_symbol2 = newToken.token_symbol;
                state.new_pool_token_decimal2 = newToken.token_decimal;
            }
        },
        async change_new_pot_station(state) {
            let data = state.full_data_list
            let new_pot_pair = state.new_pot_station;
            let pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === new_pot_pair.toLowerCase());
            
            state.new_pot_token_addr1 = data[pair_index].token_address_a;
            state.new_pot_token_addr2 = data[pair_index].token_address_b;
            state.new_pot_token_name1 = data[pair_index].token_name_a;
            state.new_pot_token_name2 = data[pair_index].token_name_b;
            state.new_pot_token_symbol1 = data[pair_index].token_symbol_a;
            state.new_pot_token_symbol2 = data[pair_index].token_symbol_b;
            state.new_pot_token_fee1 = (data[pair_index].token_fee_a / 100);
            state.new_pot_token_fee2 = (data[pair_index].token_fee_b / 100);
        },
        async change_pot_stake_station(state) {
            let data = state.full_data_list
            let new_stake = state.stake_proof_of_trade_station;
            
            let pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === new_stake.toLowerCase());
                
            state.stake_proof_of_trade_token_name1 = data[pair_index].token_name_a;
            state.stake_proof_of_trade_token_name2 = data[pair_index].token_name_b;
            state.stake_proof_of_trade_token_addr1 = data[pair_index].token_address_a;
            state.stake_proof_of_trade_token_addr2 = data[pair_index].token_address_b;
            state.stake_proof_of_trade_token_symbol1 = data[pair_index].token_symbol_a;
            state.stake_proof_of_trade_token_symbol2 = data[pair_index].token_symbol_b;
            state.stake_proof_of_trade_token_fee1 = (data[pair_index].token_fee_a / 100);
            state.stake_proof_of_trade_token_fee2 = (data[pair_index].token_fee_b / 100);
            state.stake_proof_of_trade_pot_station = data[pair_index].pot_station_address; 
            state.stake_proof_of_trade_pot_swd_balance = ethers.utils.formatUnits(data[pair_index].pot_swd_balance, 18);
        },
        async change_pot_unstake_station(state) {
            let data = state.full_data_list
            let new_unstake = state.unstake_proof_of_trade_station;
            let pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === new_unstake.toLowerCase());
                
            state.unstake_proof_of_trade_token_name1 = data[pair_index].token_name_a;
            state.unstake_proof_of_trade_token_name2 = data[pair_index].token_name_b;
            state.unstake_proof_of_trade_token_addr1 = data[pair_index].token_address_a;
            state.unstake_proof_of_trade_token_addr2 = data[pair_index].token_address_b;
            state.unstake_proof_of_trade_token_symbol1 = data[pair_index].token_symbol_a;
            state.unstake_proof_of_trade_token_symbol2 = data[pair_index].token_symbol_b;
            state.unstake_proof_of_trade_pot_station = data[pair_index].pot_station_address; 
            state.unstake_proof_of_trade_pot_swd_balance = ethers.utils.formatUnits(data[pair_index].pot_swd_balance, 18);
        },
        async change_pot_get_reward_station(state) {
            let data = state.full_data_list
            let get_reward_station = state.get_reward_proof_of_trade_station;
            let pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === get_reward_station.toLowerCase());
                
            state.get_reward_proof_of_trade_token_name1 = data[pair_index].token_name_a;
            state.get_reward_proof_of_trade_token_name2 = data[pair_index].token_name_b;
            state.get_reward_proof_of_trade_token_addr1 = data[pair_index].token_address_a;
            state.get_reward_proof_of_trade_token_addr2 = data[pair_index].token_address_b;
            state.get_reward_proof_of_trade_token_symbol1 = data[pair_index].token_symbol_a;
            state.get_reward_proof_of_trade_token_symbol2 = data[pair_index].token_symbol_b;
            state.get_reward_proof_of_trade_pot_station = data[pair_index].pot_station_address; 
            state.get_reward_proof_of_trade_pot_swd_balance = ethers.utils.formatUnits(data[pair_index].pot_swd_balance, 18);
        },
        async update_proof_of_trade_addr_after_create(state){
            var data = state.full_data_list
            var new_pot_pair = state.new_pot_station;
            var pair_index = data.findIndex(
                pair => pair.station_address.toLowerCase() === new_pot_pair.toLowerCase());

            if (data[pair_index].pot_station_address == process.env.VUE_APP_ZERO_ADDR) {
                // for some reason goerli need two data update
                await core.clean_and_update_data();
                // search again 
                pair_index = data.findIndex(
                    pair => pair.station_address.toLowerCase() === new_pot_pair.toLowerCase());
                // write to db
                state.create_new_pot_addr = data[pair_index].pot_station_address;
            }
            // if everything ok
            state.create_new_pot_addr = data[pair_index].pot_station_address;
        },
        async drop_confirm_vars(state){
            state.lp_amount = "";
            state.temp_price1 = "";
            state.temp_price2 = "";
            state.wrapped_side = "";
            state.tx_confirm1 = false;
            state.tx_confirm2 = false;
            state.start_to_fifty1 = false;
            state.start_to_fifty2 = false;
            state.fifty_to_one_hundred1 = false;
            state.fifty_to_one_hundred2 = false;
            // addr
            state.create_new_pot_addr = "";
            state.create_new_pair_addr = "";
            // hashes
            state.swap_token_hash = "";
            state.wrap_or_unwrap_hash = "";
            state.token_approve_hash1 = "";
            state.token_approve_hash2 = "";
            state.create_new_pot_hash = "";
            state.create_new_pair_hash = "";
            state.add_liquidity_hash = "";
            state.remove_liquidity_hash = "";
            state.deposit_pot_hash = "";
            state.withdraw_pot_hash = "";
            state.withdraw_pot_reward_hash = "";
            state.deposit_super_pool_hash = "";
            state.withdraw_super_pool_hash = "";
            // errors
            state.error_swap_token = false;
            state.error_wrap_or_unwrap = false;
            state.error_token_approve1 = false;
            state.error_token_approve2 = false;
            state.error_new_pot_sign_tx = false;
            state.error_new_pair_sign_tx = false;
            state.add_liquidity_sign_tx = false;
            state.remove_liquidity_sign_tx = false;
            state.error_sign_get_reward = false;
            state.error_sign_pot_deposit = false;
            state.error_sign_pot_withdraw = false;
            state.error_lock_super_pool = false;
            state.error_unlock_super_pool_with_reward = false;
            state.error_unlock_super_pool_without_reward = false;
        },
    },    
    actions: {
        prepare_data({commit}) {
            commit('prepare_data');
        },   
        load_data({commit}) {
            commit('load_exchange_data');
        },   
        clean_exchange_data({commit}) {
            commit('clean_exchange_data');
        },   
        change_button_status({commit}) {
            commit('change_button_status');
        },   
        set_new_block({commit}, block) {
            commit('set_new_block', {new_block: block.new_block});
        },
        change_token({commit}, newToken) {
            commit('change_token', {
                token_name: newToken.token_name,
                token_symbol: newToken.token_symbol,
                token_address: newToken.token_address,
                token_decimal: newToken.token_decimal
              });
        },
        add_new_import_token_selected({commit}, newToken) {
            commit('add_new_import_token_selected', {
                token_name: newToken.token_name,
                token_symbol: newToken.token_symbol,
                token_address: newToken.token_address,
                token_decimal: newToken.token_decimal
              });
        },
        switch_prices({commit}) {
            commit('switch_prices');
        },
        add_new_import_token({commit}) {
            commit('add_new_import_token');
        }, 
        change_new_pot_station({commit}) {
            commit('change_new_pot_station');
        }, 
        change_pot_stake_station({commit}) {
            commit('change_pot_stake_station');
        },
        change_pot_unstake_station({commit}) {
            commit('change_pot_unstake_station');
        },
        change_add_liquidity_pair({commit}) {
            commit('change_add_liquidity_pair');
        },
        change_remove_liquidity_pair({commit}) {
            commit('change_remove_liquidity_pair');
        }, 
        change_pot_get_reward_station({commit}) {
            commit('change_pot_get_reward_station');
        }, 
        update_proof_of_trade_addr_after_create({commit}) {
            commit('update_proof_of_trade_addr_after_create');
        }, 
        drop_confirm_vars({commit}) {
            commit('drop_confirm_vars');
        },
    },
})

export default store;