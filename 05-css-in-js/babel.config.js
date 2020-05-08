module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['emotion'],
  env: {
    production: {
      plugins: ['emotion'],
    },
    development: {
      plugins: [['emotion', { sourceMap: true }]],
    },
  },
}
