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
  const { setSearchText, setPrice, setColor } = useSneakerStore()

  return (
    <ChakraProvider theme={theme}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<SearchIcon color='gray.300' />}
        />
        <Input
          borderRadius={50}
          placeholder='Find your favorite sneaker'
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>
      <Box display='flex' alignItems='center' gap='5' mt='5'>
        <Text fontSize='md'>Color</Text>
        <Button
          variant='ghost'
          onClick={() => setColor('Brown')}
          _hover={{ background: 'transparent' }}
        >
          <Tag borderRadius='3xl' backgroundColor='brown'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Blue')}
          _hover={{ background: 'transparent' }}
        >
          <Tag borderRadius='3xl' backgroundColor='blue.500'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Green')}
          _hover={{ background: 'transparent' }}
        >
          <Tag borderRadius='3xl' backgroundColor='green.300'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('White')}
          _hover={{ background: 'transparent' }}
        >
          <Tag borderRadius='3xl' backgroundColor='gray.100'></Tag>
        </Button>
        <Button
          variant='ghost'
          onClick={() => setColor('Gray')}
          _hover={{ background: 'transparent' }}
        >
          <Tag borderRadius='3xl' backgroundColor='blackAlpha.400'></Tag>
        </Button>
      </Box>
      <Box display='flex' alignItems='center' gap='10' mt='5'>
        <Text fontSize='md'>Price</Text>
        <Box display='flex' gap='10'>
          <Box>
            <Button
              colorScheme='teal'
              variant='ghost'
              onClick={() => setPrice('Cheaper')}
            >
              &#60; 100€
            </Button>
          </Box>
          <Box>
            <Button
              colorScheme='teal'
              variant='ghost'
              onClick={() => setPrice('Medium')}
            >
              100€ - 150€
            </Button>
          </Box>
          <Box>
            <Button
              colorScheme='teal'
              variant='ghost'
              onClick={() => setPrice('Expensive')}
            >
              150€ - 250€
            </Button>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
