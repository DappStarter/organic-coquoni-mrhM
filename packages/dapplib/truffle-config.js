require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note misery until install kiwi olympic genre'; 
let testAccounts = [
"0x029dcf48b002b5b11b4e21e8a4c03f8e512b66f76d2ad54b1b17517a04746c27",
"0xdd9c89a68e572b974ed47c9f1992211450d58f51f34326fc789e0dd28397dbe9",
"0x4e5d363e936a339cdd60786808a7e9a14a08670261b9c8fc2894a5280c0aad34",
"0x3701295b734a9591be83d73ce2b3b192aa4dacf5e66eb887d741d9add5c2baef",
"0x649e9ec5afdd3b24690a3bab61c0eee64a6e87c78ef6c4b9a958e46ebb73d4a9",
"0x8feb7029ebddebc4c8022f020c87842080af66355d1bb456f3016b10181771d2",
"0x8c17fa399dbb63ec2e2d81cdbd9c7564889b65ca8645c078229a7ed88f3b9732",
"0x9b69f010ce7ec6d648936fb58867adda723a597b16a39de5e7af27f152e29a74",
"0x461325e96c7ab1381e7efcca366613849eecf12d84f6d7fed3a728b14eda02cf",
"0x65d69cc4392310d5e9f73971d635c4754ce63288e749e31e18eae6b1dc5b3599"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

