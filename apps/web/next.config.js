const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    'ui',
    'tetris-game',
    'snake-game',
    'tic-tac-toe',
    '2048-game',
  ]
}
