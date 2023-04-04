const { ModuleFederationPlugin } = require('webpack').container
const deps = require('./package.json').dependencies

module.exports = () => ({
  devServer: {
    port: 5000,
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
          name: 'homepage',
          filename: 'homepage.js',
          remotes: {
            searchbar: 'searchbar@http://localhost:5001/searchbar.js',
            productlist: 'productlist@http://localhost:5002/productlist.js',
            cart: 'cart@http://localhost:5003/cart.js',
          },
          exposes: {
            './store': './src/useSneakerStore',
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
