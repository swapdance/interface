import store from "../store";
const { BigNumber, ethers } = require('ethers');
import { nFormatter, ENumber } from "../helpers/numbers";

// const apiKey = "ObHtGvvyBacPF3BiW9A3bEpe3dP0lZao";
// const zero_addr = "0x0000000000000000000000000000000000000000";
// const dance_addr = "0x2Ab153842545D4FfEE22C08d4F8E56041493CC83";
// const super_addr = "0x57F562212faf9F424aCa9FfDaccC2C2140d09702";
// const router_addr = "0xD8c6adEF35F3fAbE2440006cf18E780DCf4E9CC2";
// const station_addr = "0x1cc9425F1B13e6CA31eC9eD1112822a79FDA67e8";
// const deployer_addr = "0x4A9B5982Fa8945958A8aD76DfC46934d7ACa45F9";

var dance_addr;
var super_addr;
var router_addr;
var station_addr;
var deployer_addr;
var etherscan_link;
const zero_addr = process.env.VUE_APP_ZERO_ADDR;
const apiKey = process.env.VUE_APP_ALCHEMY_API_KEY;

import WETHABI from "../abi/weth";
import PoTABI from "../abi/proof";
import superABI from "../abi/super";
import tokenABI from "../abi/token";
import routerABI from "../abi/router";
import stationABI from "../abi/station";
import deployerABI from "../abi/deployer";

// Read Only
var signer;
var chain_id;
var provider;
var is_signer;
var load_data_contract;
var load_price_data_contract;

export default {
    async connect_network(){
        
        if (typeof window.ethereum !== 'undefined') {
            chain_id = await window.ethereum.request({ method: 'eth_chainId' }).then(chain_id => {
                // here bar == true
                return chain_id;
            });

            console.log('ethereum is available', Number(chain_id));

            provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            signer = provider.getSigner();

            await signer.getAddress().then((result) => {
                console.log(result);
                is_signer = true; // set true if signer is active
            }).catch((error) => {
                console.log(error);
                is_signer = false; // set false if signer is inactive
            });
            
            if (Number(chain_id) == 1){
                console.log("Set eth mainnet contracts from env");
                dance_addr = process.env.VUE_APP_MAINNET_DANCE_ADDR;
                super_addr = process.env.VUE_APP_MAINNET_SUPER_ADDR;
                router_addr = process.env.VUE_APP_MAINNET_ROUTER_ADDR;
                station_addr = process.env.VUE_APP_MAINNET_STATION_ADDR;
                deployer_addr = process.env.VUE_APP_MAINNET_DEPLOYER_ADDR;
                etherscan_link = process.env.VUE_APP_MAINNET_ETHERSCAN;
                // set store
                store.state.dance_token = dance_addr;
                store.state.router_addr = router_addr;
                store.state.super_station = super_addr;
                store.state.etherscan_link = etherscan_link;
                store.state.current_network_name = "Ethereum";
                // set network coin
                store.state.network_coin_name = "Ethereum";
                store.state.network_coin_symbol = "ETH";
                store.state.network_coin_decimal = 18;
                store.state.network_coin_wrapped_addr = process.env.VUE_APP_MAINNET_ETH_WRAPPED_ADDR;
                store.state.network_coin_wrapped_name = "Wrapped Ether";
                store.state.network_coin_wrapped_symbol = "WETH";


            } else if (Number(chain_id) == 4){
                console.log("Set eth rinkeby contracts from env");
                dance_addr = process.env.VUE_APP_RINKEBY_DANCE_ADDR;
                super_addr = process.env.VUE_APP_RINKEBY_SUPER_ADDR;
                router_addr = process.env.VUE_APP_RINKEBY_ROUTER_ADDR;
                station_addr = process.env.VUE_APP_RINKEBY_STATION_ADDR;
                deployer_addr = process.env.VUE_APP_RINKEBY_DEPLOYER_ADDR;
                etherscan_link = process.env.VUE_APP_RINKEBY_ETHERSCAN;
                // set store
                store.state.dance_token = dance_addr;
                store.state.router_addr = router_addr;
                store.state.super_station = super_addr;
                store.state.etherscan_link = etherscan_link;
                store.state.current_network_name = "Rinkeby";
                // set network coin
                store.state.network_coin_name = "Ethereum";
                store.state.network_coin_symbol = "ETH";
                store.state.network_coin_decimal = 18;
                store.state.network_coin_wrapped_addr = process.env.VUE_APP_RINKEBY_ETH_WRAPPED_ADDR;
                store.state.network_coin_wrapped_name = "Wrapped Ether";
                store.state.network_coin_wrapped_symbol = "WETH";

            } else if (Number(chain_id) == 5){
                console.log("Set eth goerli contracts from env");
                dance_addr = process.env.VUE_APP_GOERLI_DANCE_ADDR;
                super_addr = process.env.VUE_APP_GOERLI_SUPER_ADDR;
                router_addr = process.env.VUE_APP_GOERLI_ROUTER_ADDR;
                station_addr = process.env.VUE_APP_GOERLI_STATION_ADDR;
                deployer_addr = process.env.VUE_APP_GOERLI_DEPLOYER_ADDR;
                etherscan_link = process.env.VUE_APP_GOERLI_ETHERSCAN;
                // set store
                store.state.dance_token = dance_addr;
                store.state.router_addr = router_addr;
                store.state.super_station = super_addr;
                store.state.etherscan_link = etherscan_link;
                store.state.current_network_name = "Goerli";
                // set network coin
                store.state.network_coin_name = "Ethereum";
                store.state.network_coin_symbol = "ETH";
                store.state.network_coin_decimal = 18;
                store.state.network_coin_wrapped_addr = process.env.VUE_APP_GOERLI_ETH_WRAPPED_ADDR;
                store.state.network_coin_wrapped_name = "Wrapped Ether";
                store.state.network_coin_wrapped_symbol = "WETH";
            }
        } else {
            is_signer = false;
            console.log('network is not available, set connect...');
            // to do, edit vars to mainnet after launch
            provider = new ethers.providers.AlchemyProvider("rinkeby", apiKey);
            dance_addr = process.env.VUE_APP_RINKEBY_DANCE_ADDR;
            super_addr = process.env.VUE_APP_RINKEBY_SUPER_ADDR;
            router_addr = process.env.VUE_APP_RINKEBY_ROUTER_ADDR;
            station_addr = process.env.VUE_APP_RINKEBY_STATION_ADDR;
            deployer_addr = process.env.VUE_APP_RINKEBY_DEPLOYER_ADDR;
            etherscan_link = process.env.VUE_APP_RINKEBY_ETHERSCAN;
            // set store
            store.state.dance_token = dance_addr;
            store.state.super_station = super_addr;
            store.state.etherscan_link = etherscan_link;
            store.state.current_network_name = "Rinkeby";
            // set network coin
            store.state.network_coin_name = "Ethereum";
            store.state.network_coin_symbol = "ETH";
            store.state.network_coin_decimal = 18;
            store.state.network_coin_wrapped_addr = process.env.VUE_APP_RINKEBY_ETH_WRAPPED_ADDR;
            store.state.network_coin_wrapped_name = "Wrapped Ether";
            store.state.network_coin_wrapped_symbol = "WETH";
        }
        load_data_contract = new ethers.Contract(deployer_addr, deployerABI, provider);
        load_price_data_contract = new ethers.Contract(router_addr, routerABI, provider);
    },
    async check_network_data(){
        // token name
        // total pairs
        // total supply
        const total_pairs = await load_data_contract.exchange_count();
        const dance_contract = new ethers.Contract(dance_addr, tokenABI, provider);
        const token_name = await dance_contract.name();
        const token_symbol = await dance_contract.symbol();
        const total_supply_balance = await dance_contract.totalSupply();
        const unit_balance = ethers.utils.formatUnits(total_supply_balance, 18);
        const dance_balance = nFormatter(Number(unit_balance).toFixed(7));
        

        return {
            total_pairs: total_pairs,
            dance_balance: dance_balance,
            token_name: token_name + ' (' + token_symbol + ')',
        };

    },
    async switch_network(network_id){
        try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: network_id }],
            });
            return 1;
          } catch (switchError) {
              console.log("switchError", switchError)
              return 0;
          }
    },
    async exchange_count() {
        const exchange_count = await load_data_contract.exchange_count();
        return {exchange_count: exchange_count};
    },
    async update_block() {
        provider.on("block", (blockNum)=> {
            console.log(blockNum+ ": " +new Date(Date.now()));
            //let gasPrice = await provider.getGasPrice();
            // ADD gas price
            store.dispatch('set_new_block', {new_block: blockNum});
        })
        // listen network

        provider.on("network", (newNetwork, oldNetwork) => {
            // if new network, need we some dispatch at start?
            console.log("New Network", newNetwork)
            if (oldNetwork) {
                window.location.reload();
            }
        });
    },
    async get_pair_info(pair_id) {
        const pair_info = await load_data_contract.get_pair_info(pair_id);
        return {pair_info: pair_info};
    },
    async get_data_block(start) {
        const data_block = await load_data_contract.get_data_block(0, start);
        return {data_block: data_block};
    },
    async get_price(station_addr, token_in, amount_in, decimal1, decimal2) {
        const big_amount2 = ethers.utils.parseUnits(ENumber(amount_in).toString(), decimal1);
        const big_amount = BigNumber.from(big_amount2);
        const get_big_price = await load_price_data_contract.get_amount_out(station_addr, token_in, big_amount.toString());
        const get_price = ethers.utils.formatUnits(get_big_price, decimal2);
        return {get_price: get_price};
    },
    async get_amounts(station_addr, token_in, amount_in, decimal1, decimal2) {
        // use parse e num before process big amount

        var get_price;
        var continue_checking = false;
        
        const big_amount = ethers.utils.parseUnits((amount_in).toFixed(decimal1).toString(), decimal1);
        
        const get_amounts_list = await load_price_data_contract.get_amounts_out(
            station_addr, token_in, big_amount).catch((error) => {
            console.log(error);
            continue_checking = true
        });
        
        if (continue_checking == true) {
            return {
                get_price: 0, 
                station_list: [], 
                token_in_list: [], 
                amount_in_list: [], 
                amount_out_list: []
            };
        } else {
            store.state.multi_swap_token = get_amounts_list;
            let amounts_list = get_amounts_list[3]; //prices
            let station_list = get_amounts_list[0];
            let token_in_list = get_amounts_list[1];
            let amount_in_list = get_amounts_list[2];
            
            let temp_amount;
            let temp_station_list = [];
            let temp_token_in_list = [];
            let temp_amount_in_list = [];
            let temp_amount_out_list = [];

            for (let i = 0; i < station_list.length; i++) {
                if(station_list[i] != zero_addr) {
                    temp_station_list.push(station_list[i]);
                } else {
                    break;
                }
            }

            for (let i = 0; i < token_in_list.length; i++) {
                if(token_in_list[i] != zero_addr) {
                    temp_token_in_list.push(token_in_list[i]);
                } else {
                    break;
                }
            }

            for (let i = 0; i < amount_in_list.length; i++) {
                if(amount_in_list[i].toString() != 0 || i == temp_token_in_list.length - 1) {
                    temp_amount_in_list.push(amount_in_list[i]);
                } else {
                    break;
                }
            }

            for (let i = 0; i < amounts_list.length; i++) {
                if(amounts_list[i].toString() != 0 || i == temp_token_in_list.length - 1) {
                    temp_amount_out_list.push(amounts_list[i]);
                } else {
                    break;
                }
            }

            for (let i = 0; i < amounts_list.length; i++) {
                if(amounts_list[i].toString() != 0 || i == temp_token_in_list.length - 1) {
                    temp_amount = amounts_list[i];
                } else {
                    break;
                }
            }

            if (temp_amount == undefined) {

                console.log("not enough liquidity");

                get_price = 0;

            } else {
                get_price = ethers.utils.formatUnits(ENumber(temp_amount), decimal2);
            }
            return {
                get_price: get_price, 
                station_list: temp_station_list, 
                token_in_list: temp_token_in_list, 
                amount_in_list: temp_amount_in_list, 
                amount_out_list: temp_amount_out_list
            };
        }
    },
    async connect_wallet() {

        const user_address = await signer.getAddress();
        const user_balance = await signer.getBalance();
        const user_network = (await provider.getNetwork()).chainId;

        is_signer = true;
        return {user_address: user_address, user_balance: user_balance, user_network: user_network};

    },
    async get_liquidity_user_balance(token1, token2, decimal1, decimal2) {

        var user_address;
        var token_balance;
        var token_balance2;
        var user_token_balance;
        var user_token_balance2;
        
        const token_contract = new ethers.Contract(token1, tokenABI, provider);
        const token_contract2 = new ethers.Contract(token2, tokenABI, provider);

        if (is_signer == true) {
            user_address = await signer.getAddress();
            token_balance = await token_contract.balanceOf(user_address);
            token_balance2 = await token_contract2.balanceOf(user_address);
            user_token_balance = ethers.utils.formatUnits(ENumber(token_balance), decimal1);
            user_token_balance2 = ethers.utils.formatUnits(ENumber(token_balance2), decimal2);
        } else {
            user_token_balance = 0;
            user_token_balance2 = 0;
        }
        return {
            user_token_balance: user_token_balance,
            user_token_balance2: user_token_balance2,
        };
    },
    async get_coin_and_wrapped_user_balance(token1, decimal1) {
        var network_coin_balance;
        var wrapped_token_balance;

        if (is_signer == true) {
            const user_address = await signer.getAddress();
            const user_coin_balance = await signer.getBalance();
            const wrapped_contract = new ethers.Contract(token1, WETHABI, provider);
            const wrapped_balance = await wrapped_contract.balanceOf(user_address);
            wrapped_token_balance = ethers.utils.formatUnits(wrapped_balance, decimal1);
            network_coin_balance = ethers.utils.formatUnits(user_coin_balance, decimal1);
            return {
                user_network_coin_balance: ENumber(Number(network_coin_balance)),
                user_wrapped_coin_balance: ENumber(Number(wrapped_token_balance)),
            }
        } else {
            return {
                user_network_coin_balance: "0.0",
                user_wrapped_coin_balance: "0.0",
            }
        }
    },
    async get_balance(token1, decimal1, token2, decimal2) {
        if (is_signer == true) {
            
            var contract1;
            var contract2;
            var user_address;
            var token_balance1;
            var token_balance2;
            var user_coin_balance;
            var format_coin_balance;
            var format_token_balance1;
            var format_token_balance2;

            let network_coin_symbol = store.state.network_coin_symbol;
            let network_wrapped_addr = store.state.network_coin_wrapped_addr;
            let interface_token_symbol1 = store.state.interface_token_symbol1;
            let interface_token_symbol2 = store.state.interface_token_symbol2;

            if (token1 == network_wrapped_addr && interface_token_symbol1 == network_coin_symbol){
                user_address = await signer.getAddress();
                user_coin_balance = await signer.getBalance();
                contract2 = new ethers.Contract(token2, tokenABI, provider);
                token_balance2 = await contract2.balanceOf(user_address);
                format_coin_balance = ethers.utils.formatUnits(user_coin_balance, decimal1);
                format_token_balance2 = ethers.utils.formatUnits(token_balance2, decimal2);
                store.state.interface_token_balance1 = ENumber(Number(format_coin_balance));
                store.state.interface_token_balance2 = ENumber(Number(format_token_balance2));
            } else if (token2 == network_wrapped_addr && interface_token_symbol2 == network_coin_symbol) {
                user_address = await signer.getAddress();
                user_coin_balance = await signer.getBalance();
                contract1 = new ethers.Contract(token1, tokenABI, provider);
                token_balance1 = await contract1.balanceOf(user_address);
                format_coin_balance = ethers.utils.formatUnits(user_coin_balance, decimal2);
                format_token_balance1 = ethers.utils.formatUnits(token_balance1, decimal1);
                store.state.interface_token_balance1 = ENumber(Number(format_token_balance1));
                store.state.interface_token_balance2 = ENumber(Number(format_coin_balance));
            } else {
                user_address = await signer.getAddress();
                contract1 = new ethers.Contract(token1, tokenABI, provider);
                contract2 = new ethers.Contract(token2, tokenABI, provider);
                token_balance1 = await contract1.balanceOf(user_address);
                token_balance2 = await contract2.balanceOf(user_address);
                format_token_balance1 = ethers.utils.formatUnits(token_balance1, decimal1);
                format_token_balance2 = ethers.utils.formatUnits(token_balance2, decimal2);
                store.state.interface_token_balance1 = ENumber(Number(format_token_balance1));
                store.state.interface_token_balance2 = ENumber(Number(format_token_balance2));
            }
        } else {
            store.state.interface_token_balance1 = "0.0";
            store.state.interface_token_balance2 = "0.0";
        }
    },
    async get_add_liquidity(token1, token2, station_addr, station_type, amount_in, balance1, balance2, decimal1, decimal2) {
        // Get Total sup and user balance to calc share percent
        var user_share;
        var user_address;
        var user_balance;
        var token_balance;
        var token_balance2;
        var user_token_balance;
        var user_token_balance2;
        const token_contract = new ethers.Contract(token1, tokenABI, provider);
        const token_contract2 = new ethers.Contract(token2, tokenABI, provider);
        const exchange_addr = new ethers.Contract(station_addr, tokenABI, provider);
        const exchange_balance = await exchange_addr.totalSupply();

        if (is_signer == true) {
            user_address = await signer.getAddress();
            user_balance = await exchange_addr.balanceOf(user_address);
            token_balance = await token_contract.balanceOf(user_address);
            token_balance2 = await token_contract2.balanceOf(user_address);
            user_token_balance = ethers.utils.formatUnits(ENumber(token_balance), decimal1);
            user_token_balance2 = ethers.utils.formatUnits(ENumber(token_balance2), decimal2);
            user_share = ((((Number(exchange_balance) + 
                Number(user_balance)) / Number(exchange_balance)) * 100) - 100);
        } else {
            user_share = "0.0";
            user_token_balance = "0.0";
            user_token_balance2 = "0.0";
        }
        
        // Math
        let amount_in1;
        let amount_in2;

        if (station_type == 1) {
            amount_in2 = amount_in * balance2 / balance1;
        } else {
            amount_in2 = amount_in;
        }

        if (decimal1 > decimal2) {
            amount_in1 = Number(amount_in).toFixed(decimal2);
            amount_in2 = Number(amount_in2).toFixed(decimal2);
        } else if (decimal2 > decimal1) {
            amount_in1 = Number(amount_in).toFixed(decimal1);
            amount_in2 = Number(amount_in2).toFixed(decimal1);
        } else {
            amount_in1 = Number(amount_in).toFixed(decimal1);
            amount_in2 = Number(amount_in2).toFixed(decimal2);
        }
        
        amount_in1 = ethers.utils.parseUnits(amount_in1.toString(), decimal1);
        amount_in2 = ethers.utils.parseUnits(amount_in2.toString(), decimal2);
        
        const get_liquidity_vars = await load_price_data_contract.calc_add_liquidity(
            station_addr, 
            amount_in1.toString(), 
            amount_in2.toString()
        );
        const clear_amount1 = get_liquidity_vars[0];
        const clear_amount2 = get_liquidity_vars[1];
        let a = BigNumber.from(ENumber(clear_amount1));
        let b = BigNumber.from(ENumber(clear_amount2));
        let slippage_settings = store.state.settings_slippage_liq * 100;
        let a_slip = a.mul(slippage_settings).div(10000);
        let b_slip = b.mul(slippage_settings).div(10000);
        const clear_amount_slippage1 = a.sub(a_slip);
        const clear_amount_slippage2 = b.sub(b_slip);
        const add_amount1 = ethers.utils.formatUnits(get_liquidity_vars[0], decimal1);
        const add_amount2 = ethers.utils.formatUnits(get_liquidity_vars[1], decimal2);
        const lp_received = ethers.utils.formatUnits(get_liquidity_vars[2], 18);
        const super_pool_liquidity = get_liquidity_vars[3];

        return {
            user_share: user_share,
            add_amount1: add_amount1, 
            add_amount2: add_amount2, 
            lp_received: lp_received, 
            user_token_balance: user_token_balance,
            user_token_balance2: user_token_balance2,
            super_pool_liquidity: super_pool_liquidity,
            clear_amount1: clear_amount1,
            clear_amount2: clear_amount2,
            clear_amount_slippage1: clear_amount_slippage1,
            clear_amount_slippage2: clear_amount_slippage2,
        };
    },
    async get_remove_liquidity(station_addr, amount_in, decimal1, decimal2) {
        // Get Total sup and user balance to calc share percent        
        var user_share;
        var user_address;
        var user_balance;
        var units_balance;

        const exchange_addr = new ethers.Contract(station_addr, tokenABI, provider);
        const exchange_balance = await exchange_addr.totalSupply();
        if (is_signer == true) {
            user_address = await signer.getAddress();
            user_balance = await exchange_addr.balanceOf(user_address);
            units_balance = ethers.utils.formatUnits(user_balance, 18);
            user_share = ((((Number(exchange_balance) + 
                Number(user_balance)) / Number(exchange_balance)) * 100) - 100);
        } else {
            user_share = "0.0";
            units_balance = "0.0";
        }

        let amount_lp;
        amount_lp = ethers.utils.parseUnits(ENumber(amount_in).toString(), 18);
        const get_liquidity_vars = await load_price_data_contract.calc_remove_liquidity(station_addr, amount_lp.toString());
        const remove_amount1 = ethers.utils.formatUnits(get_liquidity_vars[0], decimal1);
        const remove_amount2 = ethers.utils.formatUnits(get_liquidity_vars[1], decimal2);
        const super_pool_lp = ethers.utils.formatUnits(get_liquidity_vars[2], 18); 

        const clear_amount1 = get_liquidity_vars[0];
        const clear_amount2 = get_liquidity_vars[1];
        let a = BigNumber.from(clear_amount1);
        let b = BigNumber.from(clear_amount2);
        let slippage_settings = store.state.settings_slippage_liq * 100;
        let a_slip = a.mul(slippage_settings).div(10000);
        let b_slip = b.mul(slippage_settings).div(10000);
        const amount_slippage1 = a.sub(a_slip);
        const amount_slippage2 = b.sub(b_slip);
        
        return {
            user_share: user_share,
            user_balance: units_balance,
            super_pool_lp: super_pool_lp,
            remove_amount1: remove_amount1, 
            remove_amount2: remove_amount2, 
            amount_slippage1: amount_slippage1,
            amount_slippage2: amount_slippage2,
        };
    },
    async connect_proof_of_trade(pot_address, station) {
        var user_address;
        var token_balance;
        var actual_reward;
        var my_staked_share;
        var total_user_reward;
        var user_round_reward;
        var user_token_balance;
        var actual_user_reward;
        var user_round_reward_at_time;

        const pot_contract = new ethers.Contract(pot_address, PoTABI, provider);
        const total_deposited = await pot_contract.total_deposited_tokens();
        const total_withdrawn = await pot_contract.total_withdrawn_reward();
        const total_deposited_tokens = ethers.utils.formatUnits(total_deposited, 18);
        const total_withdrawn_reward = ethers.utils.formatUnits(total_withdrawn, 18);

        if (is_signer == true) {
            user_address = await signer.getAddress();
            const token_contract = new ethers.Contract(station, tokenABI, provider);
            token_balance = await token_contract.balanceOf(user_address);
            user_token_balance = ethers.utils.formatUnits(token_balance, 18);
            actual_user_reward = await pot_contract.actual_reward(user_address);
            user_round_reward_at_time = await pot_contract.user_round_reward(user_address);
            actual_reward = ethers.utils.formatUnits(actual_user_reward, 18);
            user_round_reward = ethers.utils.formatUnits(user_round_reward_at_time, 18);
            let call_stake_share = await pot_contract.balances(user_address);
            my_staked_share = ethers.utils.formatUnits(call_stake_share, 18);
            total_user_reward = Number(actual_reward) - Number(user_round_reward);
        } else {
            actual_reward = "0.0";
            my_staked_share = "0.0";
            user_round_reward = "0.0";
            total_user_reward = "0.0";
            user_token_balance = "0.0";
        }

        return {
            total_deposited_tokens: total_deposited_tokens, 
            total_withdrawn_reward: total_withdrawn_reward, 
            actual_reward: actual_reward, 
            my_staked_share: my_staked_share,
            user_round_reward: user_round_reward,
            total_user_reward: total_user_reward,
            user_token_balance: user_token_balance,
        };
    },
    async connect_proof_of_trade_unstake(pot_address) {
        
        var user_address;
        var actual_reward;
        var my_staked_share;
        var user_round_reward;
        var actual_user_reward;
        var user_round_reward_at_time;

        const pot_contract = new ethers.Contract(pot_address, PoTABI, provider);
        const total_deposited = await pot_contract.total_deposited_tokens();
        const total_deposited_tokens = ethers.utils.formatUnits(total_deposited, 18);
        
        if (is_signer == true) {
            user_address = await signer.getAddress();
            actual_user_reward = await pot_contract.actual_reward(user_address);
            user_round_reward_at_time = await pot_contract.user_round_reward(user_address);
            let call_stake_share = await pot_contract.balances(user_address);
            my_staked_share = ethers.utils.formatUnits(call_stake_share, 18);
            actual_reward = ethers.utils.formatUnits(actual_user_reward, 18);
            user_round_reward = ethers.utils.formatUnits(user_round_reward_at_time, 18);
        } else {
            actual_reward = "0.0";
            my_staked_share = "0.0";
            user_round_reward = "0.0";
        }
        return {
            actual_reward: actual_reward, 
            my_staked_share: my_staked_share,
            user_round_reward: user_round_reward,
            total_deposited_tokens: total_deposited_tokens, 
        };
    },
    async connect_proof_of_trade_get_reward(pot_address) {

        var actual_reward;
        var user_round_reward;

        if (is_signer == true) {
            const user_address = await signer.getAddress();
            const pot_contract = new ethers.Contract(pot_address, PoTABI, provider);
            const actual_user_reward = await pot_contract.actual_reward(user_address);
            const user_round_reward_at_time = await pot_contract.user_round_reward(user_address);
            user_round_reward = ethers.utils.formatUnits(user_round_reward_at_time, 18);
            actual_reward = ethers.utils.formatUnits(actual_user_reward, 18);

        } else {
            actual_reward = "0.0";
            user_round_reward = "0.0";
        }
        return {
            actual_reward: actual_reward, 
            user_round_reward: user_round_reward,
        };
    },
    async connect_super_pool() {

        var dance_user_balance; // actual wallet user balance
        var user_dance_balance; // amount locked in super pool
        var user_balance; // (units) amount locked in super pool
        var actual_user_balance; // (units) actual wallet user balance
        //
        const super_contract = new ethers.Contract(super_addr, superABI, provider);
        const dance_contract = new ethers.Contract(dance_addr, tokenABI, provider);
        const actual_dance_balance = await dance_contract.balanceOf(super_addr);
        const dance_balance = ethers.utils.formatUnits(actual_dance_balance, 18);
        //
        const lock_status = await super_contract.lock();
        const burn_rate = await super_contract.burn_percent();
        const tokens_count = await super_contract.tokens_count();
        // set lock status for reward list
        store.state.super_status_for_reward_list = lock_status;
        //
        if (is_signer == true) {
            const user_address = await signer.getAddress();
            dance_user_balance = await dance_contract.balanceOf(user_address);
            user_dance_balance = await super_contract.balances(user_address);
            // get balance with token request
            user_balance = ethers.utils.formatUnits(user_dance_balance, 18);
            actual_user_balance = ethers.utils.formatUnits(dance_user_balance, 18);
        } else {
            user_balance = "0.0";
            actual_user_balance = "0.0";
        }
        return {
            burn_rate: burn_rate,
            lock_status: lock_status,
            tokens_count: tokens_count,
            dance_balance: dance_balance, 
            user_dance_balance: user_balance,
            actual_user_balance: actual_user_balance,
        };
    },
    async connect_reward_list() {
        const reward_list = store.state.search_reward_list;
        for (let i = 0; i < reward_list.length; i++) {
            let exchange_addr = reward_list[i].pair_station;
            let station_contract = new ethers.Contract(exchange_addr, tokenABI, provider);
            let super_balance = await station_contract.balanceOf(super_addr);
            let lp_balance = ethers.utils.formatUnits(super_balance, 18);
            reward_list[i].balance = lp_balance;
        }

    },
    async connect_reward_list_check_estimate_reward(amount, pair){
        var super_contract;
        const big_amount = ethers.utils.parseUnits(ENumber(amount).toString(), 18);
        if (is_signer == true) {
            super_contract = new ethers.Contract(super_addr, superABI, signer);
        } else {
            super_contract = new ethers.Contract(super_addr, superABI, provider);
        }
        const check_reward = await super_contract.check_estimate_reward(big_amount.toString(), pair);

        const normal_balance = ethers.utils.formatUnits(check_reward, 18);
        return normal_balance
    },
    async get_new_token_data(token) {
        if (ethers.utils.isAddress(token)) {
            let token_addr = ethers.utils.getAddress(token);
            const token_contract = new ethers.Contract(token_addr,tokenABI,provider);
            const token_name = await token_contract.name();
            const token_symbol = await token_contract.symbol();
            const token_decimals = await token_contract.decimals();
            return {token_name: token_name, token_symbol: token_symbol, token_decimals: token_decimals};
        } else {
            return {token_name: "", token_symbol: "", token_decimals: ""};
        }
    },
    async check_pair_exist(token1, token2) {
        const pair_info = await load_data_contract.get_pair(token1, token2);
        
        if (pair_info[1] != zero_addr){
            store.state.pair_exist = true;
        } else {
            store.state.pair_exist = false;
        }

        return {pair_id: Number(pair_info[0]), pair_addr: pair_info[1]};
    },
    async convert_eth_to_weth(token, type, amount) {
        console.log("token", token)
        const wrapped_contract = new ethers.Contract(token, WETHABI, signer);
        const big_amount = ethers.utils.parseUnits(ENumber(amount).toString(), 18);

        if (type == 1) {
            // wrap ETH to WETH
            const wrap = await wrapped_contract.deposit({value: big_amount.toString()}).catch((error) => {
                console.log(error);
                store.state.error_wrap_or_unwrap = true;
            });
            if (store.state.error_wrap_or_unwrap == false) {
                store.state.tx_confirm1 = true;
                store.state.wrap_or_unwrap_hash = wrap.hash;
                await wrap.wait();
                store.state.tx_confirm2 = true;
                return {wrap_unwrap: wrap.hash};
            }

        } else if (type == 2) {
            // unwrap WETH to ETH
            const unwrap = await wrapped_contract.withdraw(big_amount.toString()).catch((error) => {
                console.log(error);
                store.state.error_wrap_or_unwrap = true;
            });
            if (store.state.error_wrap_or_unwrap == false) {
                store.state.tx_confirm1 = true;
                store.state.wrap_or_unwrap_hash = unwrap.hash;
                await unwrap.wait();
                store.state.tx_confirm2 = true;
                return {wrap_unwrap: unwrap.hash};
            }
        }
    },
    async swap_single_token(token_in, station_addr, amount_in, amount_out, expiry){
        const big_amount_in = BigNumber.from(amount_in);
        const big_amount_out = BigNumber.from(amount_out);
        let slippage_settings = store.state.settings_slippage_swap * 100;
        let amount_out_slip = big_amount_out.mul(slippage_settings).div(10000);
        const big_min_amount_out = big_amount_out.sub(amount_out_slip);
        
        let swap_contract = new ethers.Contract(station_addr, stationABI, signer);
        const swap_tokens = await swap_contract.swap_tokens(
            big_amount_in.toString(), 
            big_min_amount_out.toString(), 
            token_in, expiry
        ).catch((error) => {
            console.log(error);
            store.state.error_swap_token = true;
        });
        if (store.state.error_swap_token == false) {
            store.state.tx_confirm1 = true;
            store.state.swap_token_hash = swap_tokens.hash;
            await swap_tokens.wait();
            store.state.tx_confirm2 = true;
            return {swap_tokens_hash: swap_tokens.hash};
        }
    },
    async swap_multi_tokens(expiry, main_token_out, stations_path, tokens_in_path, amounts_in_path, amounts_out_path){
        // swap
        const router_contract = new ethers.Contract(router_addr, routerABI, signer);
        var big_amounts_in = [];
        var big_amounts_out = [];
        for (let i = 0; i < amounts_in_path.length; i++) {
            let amount = amounts_in_path[i];
            let big_amount_in = BigNumber.from(ENumber(amount).toString());
            big_amounts_in.push(ENumber(big_amount_in).toString());
            // amount out
            let amount_out = amounts_out_path[i];
            let big_amount_out = BigNumber.from(ENumber(amount_out).toString());
            big_amounts_out.push(ENumber(big_amount_out).toString());
        }
        
        const swap_tokens = await router_contract.direct_routing(
            expiry, main_token_out.toString(), 
            stations_path, tokens_in_path, 
            big_amounts_in, big_amounts_out
        ).catch((error) => {
            console.log(error);
            store.state.error_swap_token = true;
        });
        if (store.state.error_swap_token == false) {
            store.state.tx_confirm1 = true;
            store.state.swap_token_hash = swap_tokens.hash;
            await swap_tokens.wait();
            store.state.tx_confirm2 = true;
            return {swap_tokens_hash: swap_tokens.hash};
        }
    },
    async swap_multi_tokens_with_network_coin(expiry, main_token_out, stations_path, tokens_in_path, amounts_in_path, amounts_out_path){
        // swap
        const router_contract = new ethers.Contract(router_addr, routerABI, signer);
        var big_amounts_in = [];
        var big_amounts_out = [];
        let amount_in = amounts_in_path[0];
        for (let i = 0; i < amounts_in_path.length; i++) {
            let amount = amounts_in_path[i];
            let big_amount_in = BigNumber.from(ENumber(amount).toString());
            big_amounts_in.push(ENumber(big_amount_in).toString());
            // amount out
            let amount_out = amounts_out_path[i];
            let big_amount_out = BigNumber.from(ENumber(amount_out).toString());
            big_amounts_out.push(ENumber(big_amount_out).toString());
        }
        const swap_tokens = await router_contract.direct_routing(
            expiry, main_token_out, 
            stations_path, tokens_in_path, 
            big_amounts_in, big_amounts_out, {value: amount_in.toString()}
        ).catch((error) => {
            console.log(error);
            store.state.error_swap_token = true;
        });
        if (store.state.error_swap_token == false) {
            store.state.tx_confirm1 = true;
            store.state.swap_token_hash = swap_tokens.hash;
            await swap_tokens.wait();
            store.state.tx_confirm2 = true;
            return {swap_tokens_hash: swap_tokens.hash};
        }
    },
    async create_new_pair(token1, token2, fee1, fee2, stataion_type, expiry) {
        console.log("data", station_addr, token1, token2, fee1, fee2, stataion_type, expiry)
        let create_contract = new ethers.Contract(station_addr, stationABI, signer);
        const create_pair = await create_contract.initialize(token1, token2, fee1, fee2, stataion_type, expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_new_pair_sign_tx = true;
        });
        if (store.state.error_new_pair_sign_tx == false) {
            store.state.tx_confirm1 = true;
            store.state.create_new_pair_hash = create_pair.hash;

            let new_addr = await create_pair.wait().then((result) => {
                let new_pair_address = "0x"+result.logs[0].topics[1].slice(26);
                return new_pair_address;
            });
            store.state.tx_confirm2 = true;
            store.state.create_new_pair_addr = new_addr;
            return {hash_tx: create_pair.hash, new_pair_address: new_addr};
        }
    },
    async add_liquidity(liquidity_addr, token_amount_a, amount_a_min, token_amount_b, amount_b_min, expiry) {
        
        let liquidity_contract = new ethers.Contract(liquidity_addr, stationABI, signer);
        let amount1 = BigNumber.from(ENumber(token_amount_a).toString());
        let amount_min1 = BigNumber.from(ENumber(amount_a_min).toString());
        let amount2 = BigNumber.from(ENumber(token_amount_b).toString());
        let amount_min2 = BigNumber.from(ENumber(amount_b_min).toString());
        const add_liquidity = await liquidity_contract.add_liquidity(amount1, amount_min1, amount2, amount_min2, expiry)
        .catch((error) => {
            console.log(error);
            store.state.add_liquidity_sign_tx = true;
        });
        if (store.state.add_liquidity_sign_tx == false) {
            store.state.tx_confirm1 = true;
            store.state.add_liquidity_hash = add_liquidity.hash;
            await add_liquidity.wait();
            store.state.tx_confirm2 = true;
            return {add_liquidity: add_liquidity.hash};
        }
    },
    async remove_liquidity(liquidity_addr, lp_amount, amount_out_min1, amount_out_min2, expiry) {
        
        let liquidity_contract = new ethers.Contract(liquidity_addr, stationABI, signer);
        let amount_lp = BigNumber.from(ENumber(lp_amount).toString());
        let amount_min1 = BigNumber.from(ENumber(amount_out_min1).toString());
        let amount_min2 = BigNumber.from(ENumber(amount_out_min2).toString());
        
        const remove_liquidity = await liquidity_contract.remove_liquidity(amount_lp, amount_min1, amount_min2, expiry)
        .catch((error) => {
            console.log(error);
            store.state.remove_liquidity_sign_tx = true;
        });
        if (store.state.remove_liquidity_sign_tx == false) {
            store.state.tx_confirm1 = true;
            store.state.remove_liquidity_hash = remove_liquidity.hash;
            await remove_liquidity.wait();
            store.state.tx_confirm2 = true;
            return {remove_liquidity: remove_liquidity.hash};
        }
    },
    async create_new_pot_station(pair_addr, expiry){
        
        let create_contract = new ethers.Contract(station_addr, stationABI, signer);
        const create_new_pot = await create_contract.initialize_pot_station(pair_addr, expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_new_pot_sign_tx = true;
        });
        if (store.state.error_new_pot_sign_tx == false) {
            store.state.tx_confirm1 = true;
            store.state.create_new_pot_hash = create_new_pot.hash;
            
            await create_new_pot.wait();
            store.state.tx_confirm2 = true;
            
            return {create_new_pot_hash: create_new_pot.hash};
        }
    },
    async stake_proof_of_trade(pot_addr, stake_amount, expiry) {
        let amount = BigNumber.from(ENumber(stake_amount).toString());
        let stake_contract = new ethers.Contract(pot_addr,PoTABI,signer);
        const staking = await stake_contract.stake(amount, expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_sign_pot_deposit = true;
        });
        if (store.state.error_sign_pot_deposit == false) {
            store.state.tx_confirm1 = true;
            store.state.deposit_pot_hash = staking.hash;
            await staking.wait();
            store.state.tx_confirm2 = true;
            return {staking: staking.hash};
        }
    },
    async unstake_proof_of_trade(pot_addr, expiry) {
        let unstake_contract = new ethers.Contract(pot_addr,PoTABI,signer);
        const unstaking = await unstake_contract.unstake(expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_sign_pot_withdraw = true;
        });
        if (store.state.error_sign_pot_withdraw == false) {
            store.state.tx_confirm1 = true;
            store.state.withdraw_pot_hash = unstaking.hash;
            await unstaking.wait();
            store.state.tx_confirm2 = true;
            return {unstaking: unstaking.hash};
        }
    },
    async get_reward_proof_of_trade(pot_addr, expiry) {
        let reward_contract = new ethers.Contract(pot_addr,PoTABI,signer);
        const get_reward = await reward_contract.get_reward(expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_sign_get_reward = true;
        });
        if (store.state.error_sign_get_reward == false) {
            store.state.tx_confirm1 = true;
            store.state.withdraw_pot_reward_hash = get_reward.hash;
            await get_reward.wait();
            store.state.tx_confirm2 = true;
            return {get_reward: get_reward.hash};
        }
    },
    async super_pool_deposit(amount, expiry) {
        let super_contract = new ethers.Contract(super_addr,superABI,signer);
        let amount1 = BigNumber.from(ENumber(amount).toString());
        const deposit_and_lock_dance = await super_contract.deposit(amount1, expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_lock_super_pool = true;
        });
        if (store.state.error_lock_super_pool == false) {
            store.state.tx_confirm1 = true;
            store.state.deposit_super_pool_hash = deposit_and_lock_dance.hash;
            await deposit_and_lock_dance.wait();
            store.state.tx_confirm2 = true;
            return {lock_hash: deposit_and_lock_dance.hash};
        }
    },
    async super_pool_unstake_without_reward(expiry) {
        let super_contract = new ethers.Contract(super_addr,superABI,signer);
        const withdraw_without_reward = await super_contract.withdraw_without_reward(expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_unlock_super_pool_without_reward = true;
        });
        if (store.state.error_unlock_super_pool_without_reward == false) {
            store.state.tx_confirm1 = true;
            store.state.withdraw_super_pool_hash = withdraw_without_reward.hash;
            await withdraw_without_reward.wait();
            store.state.tx_confirm2 = true;
            return {unlock_without_reward_hash: withdraw_without_reward.hash};
        }
    },
    async super_pool_unstake_with_reward(token_map, expiry) {
        let super_contract = new ethers.Contract(super_addr,superABI,signer);
        const withdraw_with_reward = await super_contract.get_reward_and_withdraw(token_map, expiry)
        .catch((error) => {
            console.log(error);
            store.state.error_unlock_super_pool_with_reward = true;
        });
        if (store.state.error_unlock_super_pool_with_reward == false) {
            store.state.tx_confirm1 = true;
            store.state.withdraw_super_pool_hash = withdraw_with_reward.hash;
            await withdraw_with_reward.wait();
            store.state.tx_confirm2 = true;
            return {unlock_with_reward_hash: withdraw_with_reward.hash};
        }
    },
    async token_approve(token_addr, pair_addr, amount){
        let amount1 = BigNumber.from(ENumber(amount).toString());
        
        let token_contract = new ethers.Contract(token_addr,tokenABI,signer);
        const approve = await token_contract.approve(pair_addr, amount1.toString())
        .catch((error) => {
            console.log(error);
            store.state.error_token_approve1 = true;
        });
        if (store.state.error_token_approve1 == false) {
            store.state.start_to_fifty1 = true;
            store.state.token_approve_hash1 = approve.hash;
            await approve.wait();
            store.state.fifty_to_one_hundred1 = true;
            return {hash_tx: approve.hash};
        } 
    },
    async token_approve2(token_addr, pair_addr, amount){
        let amount1 = BigNumber.from(ENumber(amount).toString());
        let token_contract = new ethers.Contract(token_addr,tokenABI,signer);
        const approve = await token_contract.approve(pair_addr, amount1.toString())
        .catch((error) => {
            console.log(error);
            store.state.error_token_approve2 = true;
        });
        if (store.state.error_token_approve2 == false) {
            store.state.start_to_fifty2 = true;
            store.state.token_approve_hash2 = approve.hash;
            await approve.wait();
            store.state.fifty_to_one_hundred2 = true;
            return {hash_tx: approve.hash};
        }
    },
    async get_approved_tokens(token_addr1, token_addr2){
        let deployer_contract = new ethers.Contract(deployer_addr,deployerABI,provider);
        const check_token1 = await deployer_contract.approved_tokens(0, token_addr1);
        const check_token2 = await deployer_contract.approved_tokens(0, token_addr2);
        var result;
        if (check_token1 == true && check_token2 == true) {
            result = true;
        } else if (check_token1 == false && check_token2 == false) {
            result = false;
        } else {
            result = true;
        }
        return {result: result};
    },
    async clean_and_update_data() {
        
        store.dispatch("clean_exchange_data");

        var data;
        var count;

        count = (await this.exchange_count()).exchange_count;
        // load block data 30 tokens at once
        for (let i = 1; count >= i; i+=30) {
            data = (await this.get_data_block(i)).data_block;
            store.state.data_list = data;
            store.dispatch("load_data");
        }
        store.dispatch("prepare_data");
    }
}