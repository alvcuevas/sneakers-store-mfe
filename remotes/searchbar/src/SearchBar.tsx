import { useState } from 'react'
import {
  ChakraProvider,
  theme,
  Input,
  Text,
  Box,
  Button,
  Tag,
  InputLeftElement,
  InputGroup,
  Badge,
} from '@chakra-ui/react'
import { useSneakerStore } from 'homepage/store'
import { SearchIcon } from '@chakra-ui/icons'

export default function SearchBar() {
  const {
    searchText,
    setSearchText,
    price,
    setPrice,
    color,
    setColor,
    clearFilters,
  } = useSneakerStore()

  const hasFiltersActive = !!price || !!color

  return (
    <ChakraProvider theme={theme}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input
          borderRadius={50}
          placeholder='Busca tu zapatilla favorita'
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>
      <Box display='flex' alignItems='center' gap='5' mt='5'>
        <Text fontSize='md'>Color</Text>
        <Button
          variant='ghost'
          onClick={() => setColor('Brown')}
          background={color === 'Brown' ? 'teal.100' : ''}
          _hover={{
            background: color === 'Brown' ? 'teal.100' : 'transparent',
          }}
        >
          <Tag borderRadius='3xl' backgroundColor='orange.800'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Red')}
          background={color === 'Red' ? 'teal.100' : ''}
          _hover={{
            background: color === 'Red' ? 'teal.100' : 'transparent',
          }}
        >
          <Tag borderRadius='3xl' backgroundColor='red.500'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Blue')}
          background={color === 'Blue' ? 'teal.100' : ''}
          _hover={{ background: color === 'Blue' ? 'teal.100' : 'transparent' }}
        >
          <Tag borderRadius='3xl' backgroundColor='blue.500'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Green')}
          background={color === 'Green' ? 'teal.100' : ''}
          _hover={{
            background: color === 'Green' ? 'teal.100' : 'transparent',
          }}
        >
          <Tag borderRadius='3xl' backgroundColor='green.300'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('White')}
          background={color === 'White' ? 'teal.100' : ''}
          _hover={{
            background: color === 'White' ? 'teal.100' : 'transparent',
          }}
        >
          <Tag borderRadius='3xl' backgroundColor='gray.100'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Black')}
          background={color === 'Black' ? 'teal.100' : ''}
          _hover={{
            background: color === 'Black' ? 'teal.100' : 'transparent',
          }}
        >
          <Tag borderRadius='3xl' backgroundColor='blackAlpha.900'></Tag>
        </Button>
      </Box>
      <Box display='flex' alignItems='center' gap='10' mt='5'>
        <Text fontSize='md'>Precio</Text>
        <Box display='flex' gap='10'>
          <Box>
            <Button
              colorScheme='teal'
              variant='ghost'
              background={price === 'Cheaper' ? 'teal.100' : ''}
              onClick={() => setPrice('Cheaper')}
              _hover={{ background: price === 'Cheaper' ? 'teal.100' : '' }}
            >
              &#60; 100€
            </Button>
          </Box>
          <Box>
            <Button
              colorScheme='teal'
              variant='ghost'
              background={price === 'Medium' ? 'teal.100' : ''}
              onClick={() => setPrice('Medium')}
              _hover={{ background: price === 'Medium' ? 'teal.100' : '' }}
            >
              100€ - 150€
            </Button>
          </Box>
          <Box>
            <Button
              colorScheme='teal'
              variant='ghost'
              background={price === 'Expensive' ? 'teal.100' : ''}
              onClick={() => setPrice('Expensive')}
              _hover={{ background: price === 'Expensive' ? 'teal.100' : '' }}
            >
              150€ - 250€
            </Button>
          </Box>
          {hasFiltersActive && (
            <Box display='flex' alignItems='center' cursor='pointer'>
              <Text colorScheme='teal' as='u' onClick={() => clearFilters()}>
                limpiar filtros
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  )
}
