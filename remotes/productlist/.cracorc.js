const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = () => ({
  devServer: {
    port: 5002,
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'productlist',
          filename: 'productlist.js',
          remotes: {
            homepage: 'homepage@http://localhost:5000/homepage.js',
          },
          exposes: {
            './ProductList': './src/ProductList',
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
          },
        }),
      ],
    },
  },
})
