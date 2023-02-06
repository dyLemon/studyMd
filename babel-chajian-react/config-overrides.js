/*react-app-rewired的config-overrides.js */
const { useBabelRc, override } = require('customize-cra')

// eslint-disable-next-line react-hooks/rules-of-hooks
const config = override(useBabelRc())

module.exports = config

