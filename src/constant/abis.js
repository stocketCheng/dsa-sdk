module.exports = {
  core: {
    index: require("../abi/core/index.json"),
    list: require("../abi/core/list.json"),
    account: require("../abi/core/account.json"),
    connector: require("../abi/core/connector.json"),
    events: require("../abi/core/events.json"),
  },
  connectors: {
    basic: require("../abi/connectors/basic.json"),
    auth: require("../abi/connectors/auth.json"),
    authority: require("../abi/connectors/auth.json"), // same json file as of "auth" to not break things with upgrade
    compound: require("../abi/connectors/compound.json"),
    maker: require("../abi/connectors/maker.json"),
    maker_old: require("../abi/connectors/maker_old.json"),
    instapool: require("../abi/connectors/instapool.json"),
    oasis: require("../abi/connectors/oasis.json"),
    kyber: require("../abi/connectors/kyber.json"),
    curve: require("../abi/connectors/curve.json"),
    curve_susd: require("../abi/connectors/curve.json"),
    curve_sbtc: require("../abi/connectors/curve.json"),
    curve_y: require("../abi/connectors/curve.json"),
    oneInch: require("../abi/connectors/1inch.json"),
    dydx: require("../abi/connectors/dydx.json"),
    aave: require("../abi/connectors/aave.json"),
    migrate: require("../abi/connectors/migrate.json"),
    compoundImport: require("../abi/connectors/compoundImport.json"),
    uniswap: require("../abi/connectors/uniswap.json"),
    comp: require("../abi/connectors/comp.json"),
    staking: require("../abi/connectors/staking.json"),
    chi: require("../abi/connectors/chi.json"),
    curve_claim: require("../abi/connectors/curveClaim.json"),
    curve_gauge: require("../abi/connectors/curveGauge.json"),
    gelato: require("../abi/connectors/gelato.json"),
    dydx_flash: require("../abi/connectors/dydxFlashloan.json"),
    swerve: require("../abi/connectors/swerve.json"),
    curve_three: require("../abi/connectors/curve_3pool.json"),
    instapool_v2: require("../abi/connectors/instapool_v2.json"),
  },
  read: {
    core: require("../abi/read/core.json"),
    compound: require("../abi/read/compound.json"),
    maker: require("../abi/read/maker.json"),
    erc20: require("../abi/read/erc20.json"),
    oasis: require("../abi/read/oasis.json"),
    kyber: require("../abi/read/kyber.json"),
    curve: require("../abi/read/curve_susd.json"),
    curve_susd: require("../abi/read/curve_susd.json"),
    curve_sbtc: require("../abi/read/curve_sbtc.json"),
    curve_y: require("../abi/read/curve_y.json"),
    oneInch: require("../abi/read/1inch.json"),
    dydx: require("../abi/read/dydx.json"),
    aave: require("../abi/read/aave.json"),
    uniswap: require("../abi/read/uniswap.json"),
    curve_claim: require("../abi/read/curveClaim.json"),
    chainlink: require("../abi/read/chainlink.json"),
    curve_gauge: require("../abi/read/curveGauge.json"),
    swerve: require("../abi/read/swerve.json"),
    curve_three: require("../abi/read/curve_3pool.json"),
    instapool_v2: require("../abi/read/instapool_v2.json"),
  },
  basic: {
    erc20: require("../abi/basics/erc20.json"),
  },
  gnosisSafe: require("../abi/gnosis/gnosisSafe.json"),
};
