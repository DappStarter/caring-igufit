require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index regret oven proud harvest pave army gas'; 
let testAccounts = [
"0x6cd51c6a87fc86172265cb4546cf280723fbd8ff18fbc2fdd7e45e993c5a43a4",
"0x39c8f986e71c7ec909575b046c67af5e0a7cc82000d97c777f77b69fb41f04d6",
"0xaac3d7808b15dd6bdc6f7b82568c409f15a9203b93c08116170660cb35dcd4a8",
"0x88ae15da51b90d2b2d1b50cf463c0848fd1d0c5928a4a3337c7c5126ffce34c8",
"0xe37b40477be6e944df450c3234ae74402c46290986c23969afeec82e3680b730",
"0xd908ee7300a332890491a966ca3db482bf3cc8e9327db09d116a0bdcb7847ff5",
"0xa3eaa657f64e939d4fdcb193fb1a23370ceac91411b000fa8b8cad95e1830110",
"0x18d7bc33bf0e93dc3f13245b58c704de0145c885f3de111020bc1206694bee15",
"0x6ec702fb97c2d791db59c84ce4870fb5ddc0a82a34ca36c270cd763be1fb28af",
"0xbe3d683f2009fb14610f21a1d25b5fad62dcb1db44eee2566f2d118cb642ea2f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
