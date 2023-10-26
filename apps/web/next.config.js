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
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: 'portfolio',
        filename: 'static/chunks/remoteEntry.js',
        exposes: ['./public-path.js'],
      })
    );

    return config;
  },
};
