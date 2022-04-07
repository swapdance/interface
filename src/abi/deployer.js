const deployerABI = [{"name": "NewOwner", "inputs": [{"name": "old_owner", "type": "address", "indexed": true}, {"name": "new_owner", "type": "address", "indexed": true}], "anonymous": false, "type": "event"}, {"stateMutability": "nonpayable", "type": "constructor", "inputs": [{"name": "_swd_token", "type": "address"}, {"name": "_super_pool", "type": "address"}, {"name": "_pot_station", "type": "address"}, {"name": "_station", "type": "address"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "register_new_pool", "inputs": [{"name": "_token_a", "type": "address"}, {"name": "_token_b", "type": "address"}, {"name": "_token_fees_a", "type": "uint256"}, {"name": "_token_fees_b", "type": "uint256"}, {"name": "_station_type", "type": "uint256"}], "outputs": [{"name": "", "type": "bool"}]}, {"stateMutability": "nonpayable", "type": "function", "name": "register_new_pot", "inputs": [{"name": "_station", "type": "address"}], "outputs": [{"name": "", "type": "bool"}]}, {"stateMutability": "nonpayable", "type": "function", "name": "register_deployer", "inputs": [], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "remove_token_pair", "inputs": [{"name": "_token_a", "type": "address"}, {"name": "_token_b", "type": "address"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "add_approved_tokens", "inputs": [{"name": "_new_token", "type": "address"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "remove_approved_tokens", "inputs": [{"name": "_new_token", "type": "address"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "lock_super_pool", "inputs": [{"name": "_lock", "type": "uint256"}, {"name": "_expiry", "type": "uint256"}], "outputs": [{"name": "", "type": "bool"}]}, {"stateMutability": "nonpayable", "type": "function", "name": "update_owner", "inputs": [{"name": "_new_owner", "type": "address"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "lock_station", "inputs": [{"name": "_station", "type": "address"}, {"name": "_lock", "type": "uint256"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "unstake_station", "inputs": [{"name": "_station", "type": "address"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "update_token_fees", "inputs": [{"name": "_station", "type": "address"}, {"name": "_token_fees_a", "type": "uint256"}, {"name": "_token_fees_b", "type": "uint256"}], "outputs": []}, {"stateMutability": "nonpayable", "type": "function", "name": "update_station_fees", "inputs": [{"name": "_station", "type": "address"}, {"name": "_station_fees", "type": "uint256"}], "outputs": []}, {"stateMutability": "view", "type": "function", "name": "get_pair", "inputs": [{"name": "_token_a", "type": "address"}, {"name": "_token_b", "type": "address"}], "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "address"}]}, {"stateMutability": "view", "type": "function", "name": "get_pair_info", "inputs": [{"name": "_pair_id", "type": "uint256"}], "outputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"}, {"name": "", "type": "address"}, {"name": "", "type": "address"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}]}, {"stateMutability": "view", "type": "function", "name": "get_data_block", "inputs": [{"name": "_break", "type": "uint256"}, {"name": "_position", "type": "uint256"}], "outputs": [{"name": "", "type": "address[50]"}, {"name": "", "type": "address[50]"}, {"name": "", "type": "address[50]"}, {"name": "", "type": "address[50]"}, {"name": "", "type": "bytes32[50]"}, {"name": "", "type": "bytes32[50]"}, {"name": "", "type": "bytes32[50]"}, {"name": "", "type": "uint256[50]"}, {"name": "", "type": "uint256[50]"}, {"name": "", "type": "uint256[50]"}]}, {"stateMutability": "view", "type": "function", "name": "owner", "inputs": [], "outputs": [{"name": "", "type": "address"}]}, {"stateMutability": "view", "type": "function", "name": "exchange_count", "inputs": [], "outputs": [{"name": "", "type": "uint256"}]}, {"stateMutability": "view", "type": "function", "name": "approved_tokens", "inputs": [{"name": "arg0", "type": "address"}], "outputs": [{"name": "", "type": "bool"}]}, {"stateMutability": "view", "type": "function", "name": "approved_for_reward", "inputs": [{"name": "arg0", "type": "address"}], "outputs": [{"name": "", "type": "bool"}]}, {"stateMutability": "view", "type": "function", "name": "pot_station_list", "inputs": [{"name": "arg0", "type": "address"}], "outputs": [{"name": "", "type": "address"}]}, {"stateMutability": "view", "type": "function", "name": "exchange_info", "inputs": [{"name": "arg0", "type": "uint256"}], "outputs": [{"name": "", "type": "uint256"}]}, {"stateMutability": "view", "type": "function", "name": "exchange_pairs_list", "inputs": [{"name": "arg0", "type": "uint256"}], "outputs": [{"name": "", "type": "address"}]}]

export default deployerABI;