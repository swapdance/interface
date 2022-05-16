# Swap.Dance Interface

An open source interface for Swap.Dance Proof of Trade AMM. Build on [VueJS](https://vuejs.org/)

Website: [Swap.Dance](https://swap.dance/)

Docs: [Swap.Dance Docs](https://docs.swap.dance/)

Twitter: [@SwapDance](https://twitter.com/SwapDance)

Reddit: [/r/DancerDD](https://www.reddit.com/r/DancerDD/)

Discord: [http://discord.gg/GSVZurABjd](http://discord.gg/GSVZurABjd)


## Project setup
```
npm install
```

### Env.local

Create env.local file. Edit VUE_APP_ALCHEMY_API_KEY and VUE_APP_GOERLI_ or VUE_APP_RINKEBY_ vars.

```
VUE_APP_MAINNET_ETHERSCAN = https://etherscan.io/
VUE_APP_GOERLI_ETHERSCAN = https://goerli.etherscan.io/
VUE_APP_RINKEBY_ETHERSCAN = https://rinkeby.etherscan.io/

VUE_APP_ALCHEMY_API_KEY = YOUR_KEY_HERE
VUE_APP_ZERO_ADDR = 0x0000000000000000000000000000000000000000

VUE_APP_MAINNET_DANCE_ADDR = 0x5b3fE75eC5eaAd2Ec0fFf91A305783f29B2E2C53
VUE_APP_MAINNET_SUPER_ADDR = 0x12AC7984bdffbd777dF43D7A58B69376C3EaD879
VUE_APP_MAINNET_ROUTER_ADDR = 0xF57bD6aC7d4F4d95CF80a7957729ABfC4590CEe7
VUE_APP_MAINNET_STATION_ADDR = 0x24635f9A99755BE4Ee83491c578785972f7203B0
VUE_APP_MAINNET_DEPLOYER_ADDR = 0x5c2Eec102d8d49f3A53664877B70C274Aa065c31
VUE_APP_MAINNET_ETH_WRAPPED_ADDR = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2


VUE_APP_GOERLI_DANCE_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_GOERLI_SUPER_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_GOERLI_ROUTER_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_GOERLI_STATION_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_GOERLI_DEPLOYER_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_GOERLI_ETH_WRAPPED_ADDR = 0x0000000000000000000000000000000000000000


VUE_APP_RINKEBY_DANCE_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_RINKEBY_SUPER_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_RINKEBY_ROUTER_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_RINKEBY_STATION_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_RINKEBY_DEPLOYER_ADDR = 0x0000000000000000000000000000000000000000
VUE_APP_RINKEBY_ETH_WRAPPED_ADDR = 0x0000000000000000000000000000000000000000
```

### Compiles and hot-reloads for development
```
npm run serve
```
