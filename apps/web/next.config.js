const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    'ui',
    'tetris-game',
    'snake-game',
    'tic-tac-toe',
    '2048-game',
  ],

  webpack(config, options) {
    // const fileLoaderRule = config.module.rules.find((rule) =>
    //   rule.test?.test?.('.svg')
    // );

    // config.module.rules.push(
    //   {
    //     ...fileLoaderRule,
    //     test: /\.svg$/i,
    //     resourceQuery: /url/,
    //   },
    //   {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     resourceQuery: { not: /url/ },
    //     use: ['@svgr/webpack'],
    //   }
    // );

    // fileLoaderRule.exclude = /\.svg$/i;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'portfolio',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './welcome': './pages/index.tsx',
          './2048': './pages/2048-game.tsx',
          './snake': './pages/snake.tsx',
          './tetris': './pages/tetris.tsx',
          './tic-tac-toe': './pages/tick-tack-toe.tsx',
        },
      })
    );

    return config;
  },
};
