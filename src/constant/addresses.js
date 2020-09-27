module.exports = {
  genesis: "0x0000000000000000000000000000000000000000",
  core: {
    index: "0x2971AdFa57b20E5a416aE5a708A8655A9c74f723",
    list: "0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb",
    account: "0x939Daad09fC4A9B8f8A9352A485DAb2df4F4B3F8",
    connector: "0xD6A602C01a023B98Ecfb29Df02FBA380d3B21E0c",
    events: "0x2af7ea6Cb911035f3eb1ED895Cb6692C39ecbA97",
    instapool: "0x06cb7c24990cbe6b9f99982f975f9147c000fec6",
    dydx_flash: "0xf5b16af97B5CBa4Babe786238FF6016daE6bb890",
  },
  connectors: {
    basic: "0x6a31c5982C5Bc5533432913cf06a66b6D3333a95",
    auth: "0xd1aff9f2acf800c876c409100d6f39aea93fc3d9",
    authority: "0xd1aff9f2acf800c876c409100d6f39aea93fc3d9", // same address as of "auth" to not break things with upgrade
    compound: "0x07F81230d73a78f63F0c2A3403AD281b067d28F8",
    maker: "0x6c4E4D4aB22cAB08b8498a3A232D92609e8b2d62",
    maker_old: "0xac02030d8a8F49eD04b2f52C394D3F901A10F8A9",
    instapool: "0xCeF5f3c402d4fef76A038e89a4357176963e1464",
    oasis: "0xE554c84c030bd5e850cDbd17f6583818b8dE5b1F",
    kyber: "0x7043FC2E21865c091EEaE37C38E3d82BcCDF5D5C",
    curve: "0xC74902Ad45C8223da10EfdCfF2DeD12184e9D9b5",
    curve_susd: "0xC74902Ad45C8223da10EfdCfF2DeD12184e9D9b5",
    curve_sbtc: "0xe3bC928D9DAA89A0f08Cf77b227B7080B9a5105d",
    curve_y: "0x861a2250FcDBe57041289623561D5D79585DF5dc",
    oneInch: "0x1Ed5b56aeDA6fc45d40CBE1fe1EE4DFbE7A10c16",
    dydx: "0x6AF6C791c869DfA65f8A2fa042fA47D1535Bef25",
    aave: "0x3fd79E82CCAc22A1c1b504e8a04bec133CB3f282",
    migrate: "0xcb5cbc3f397e0024fac67cf6dd465e02ca91c215",
    compoundImport: "0xc2954213923DdF0A6E5F5eCFD2375AC25440960b",
    uniswap: "0x62EbfF47B2Ba3e47796efaE7C51676762dC961c0",
    comp: "0xB4a04F1C194bEed64FCE27843B5b3079339cdaD4",
    staking: "0xe5b66b785bd6b6708BB814482180C136Ddbcd687",
    chi: "0xb86437e80709015d05354c35e54b7c8b11a58687",
    curve_claim: "0xF5e14d35706971B6AaD7A67B1A8E9a1EF7870Be9",
    curve_gauge: "0xAf615b36Db171fD5A369A0060b9bCB88fFf0190d",
    gelato: "0x37A7009d424951dd5D5F155fA588D9a03C455163",
    dydx_flash: "0xE5a7bdd3336245142Ad3a153838ecFB490A5e044",
    swerve: "0x8b302dc8a97a63eb468715b8c30f7003b86e9f01",
    curve_three: "0x1568a9D336A7aC051DCC4bdcc4A0B09299DE5Daf",
    instapool_v2: "0x3150e5A805577366816A1ddc7330c6Ea17070c05",
  },
  read: {
    core: "0x621AD080ad3B839e7b19e040C77F05213AB71524",
    erc20: "0x6d9c624844e61280c19fd7ef588d79a6de893d64",
    compound: "0x43a041ee9ac82f4e375a67f67685b750c0c7c9af",
    maker: "0x0A7008B38E7015F8C36A49eEbc32513ECA8801E5",
    oasis: "0xa3d13105397F3b13Dd47cd1f90a50F95A60cdd56",
    kyber: "0x8240b601d9B565e2BefaA3DA82Cc984E76cB3499",
    curve: "0x734c90119A0012eF744e3a0ee74691b4f05A2D7e",
    curve_susd: "0x734c90119A0012eF744e3a0ee74691b4f05A2D7e",
    curve_sbtc: "0xc8ff9e290e65972a1b3fc67e1ab7451088a74752",
    curve_y: "0xaf122FB1C70b913AF467a9D924890f92c109bfc3",
    oneInch: "0x40c71a20938ff932bea18f674e73be670ea47ccf",
    dydx: "0xcb704D9505Fbbf61478F06741C75F34eA84Ec85C",
    aave: "0xe04Cd009fF68628BC663058dDAA7E5Bf7979BEaF",
    uniswap: "0x492e5f3f01d20513fc0d53ca0215b6499faec8a0",
    curve_claim: "0xc501F3c50DabB377c4afe5C0cD44BF7173b0F833",
    chainlink: "0xF72Ee0Cc52C119F00B19c35a4d4ee2f445573D3e",
    curve_gauge: "0x3Dfb98C045d4f4Be168bBE60ba2eb0A3ccf8fBC3",
    swerve: "0x51432D11431cE6280FF8CFC61C280b3B27E67B28",
    curve_three: "0x65c20364071C5dd21081fd1e0D9DbC72C8a87CC0",
    instapool_v2: "0x9aa3381559db86c7970be7d5a7e10ca3d297f3b7",
  },
};
