import * as React from 'react'
import { ChakraProvider, Box, theme } from '@chakra-ui/react'

import SearchBar from 'searchbar/SearchBar'
import ProductList from 'productlist/ProductList'
import Cart from 'cart/Cart'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import './styles.css'

export default function Homepage() {
  return (
    <ChakraProvider theme={theme}>
      <Box display='flex' justifyContent='flex-end'>
        <ColorModeSwitcher />
      </Box>
      <Box display='flex' justifyContent='center'>
        <Box display='flex' justifyContent='center' columnGap={10}>
          <Box display='flex' flexDirection='column' rowGap={1}>
            <SearchBar />
            <ProductList />
          </Box>
          <Box paddingTop={2}>
            <Cart />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
