import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Homepage from './Homepage'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <Homepage />
  </React.StrictMode>
)

export default {}
