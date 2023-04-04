import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import ProductList from './ProductList'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>
)

export default {}
