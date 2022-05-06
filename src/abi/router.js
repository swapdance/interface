const routerABI = [{"name": "ReceiveEth", "inputs": [{"name": "amount", "type": "uint256", "indexed": false}, {"name": "sender", "type": "address", "indexed": true}], "anonymous": false, "type": "event"}, {"stateMutability": "nonpayable", "type": "constructor", "inputs": [{"name": "_weth", "type": "address"}], "outputs": []}, {"stateMutability": "view", "type": "function", "name": "get_amount_out", "inputs": [{"name": "station", "type": "address"}, {"name": "token_in", "type": "address"}, {"name": "amount_in", "type": "uint256"}], "outputs": [{"name": "", "type": "uint256"}]}, {"stateMutability": "view", "type": "function", "name": "get_amounts_out", "inputs": [{"name": "stations", "type": "address[10]"}, {"name": "tokens_in", "type": "address[10]"}, {"name": "_amount_in", "type": "uint256"}], "outputs": [{"name": "", "type": "tuple", "components": [{"name": "station_array", "type": "address[10]"}, {"name": "tokens_in_array", "type": "address[10]"}, {"name": "amount_in_array", "type": "uint256[10]"}, {"name": "amount_out_array", "type": "uint256[10]"}]}]}, {"stateMutability": "view", "type": "function", "name": "calc_add_liquidity", "inputs": [{"name": "station", "type": "address"}, {"name": "token_amount_a", "type": "uint256"}, {"name": "token_amount_b", "type": "uint256"}], "outputs": [{"name": "", "type": "tuple", "components": [{"name": "amount_a", "type": "uint256"}, {"name": "amount_b", "type": "uint256"}, {"name": "liquidity", "type": "uint256"}, {"name": "super_pool_liquidity", "type": "uint256"}]}]}, {"stateMutability": "view", "type": "function", "name": "calc_remove_liquidity", "inputs": [{"name": "station", "type": "address"}, {"name": "pool_token_amount", "type": "uint256"}], "outputs": [{"name": "", "type": "tuple", "components": [{"name": "amount_out_a", "type": "uint256"}, {"name": "amount_out_b", "type": "uint256"}, {"name": "super_pool_liquidity", "type": "uint256"}]}]}, {"stateMutability": "payable", "type": "function", "name": "direct_routing", "inputs": [{"name": "expiry", "type": "uint256"}, {"name": "main_token_out", "type": "address"}, {"name": "stations_path", "type": "address[10]"}, {"name": "tokens_in_path", "type": "address[10]"}, {"name": "amounts_in_path", "type": "uint256[10]"}, {"name": "amounts_out_path", "type": "uint256[10]"}], "outputs": []}, {"stateMutability": "payable", "type": "fallback"}]

export default routerABI;