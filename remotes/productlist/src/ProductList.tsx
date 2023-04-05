import * as React from 'react'
import {
  ChakraProvider,
  Text,
  Image,
  Card,
  Heading,
  Divider,
  CardFooter,
  theme,
  Button,
  CardBody,
  Stack,
  SimpleGrid,
  Box,
  Icon,
  IconButton,
  Badge,
} from '@chakra-ui/react'
import { useSneakerStore } from 'homepage/store'
import { MdAddShoppingCart, MdCheck } from 'react-icons/md'

export default function ProductList() {
  const { sneakers, filteredSneakers, addSneakerToCart, isSneakerOnCart } =
    useSneakerStore()
  const sneakersList = !!filteredSneakers.length ? filteredSneakers : sneakers

  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid columns={3} spacingX={10} spacingY={10} marginY={5}>
        {sneakersList.map((sneaker: any, i: number) => (
          <Card maxW='sm' key={`${sneaker.model}-${sneaker.id}`}>
            <CardBody>
              <Image
                src={sneaker.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                height={260}
              />
              <Stack mt='6' spacing='1'>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Heading size='sm'>{sneaker.brand}</Heading>
                </Box>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box>
                    <Text fontSize='sm'>{sneaker.model}</Text>
                    <Text colorScheme='teal' fontSize='sm'>
                      {sneaker.price},00 €
                    </Text>
                  </Box>
                  <Button
                    variant='ghost'
                    sx={{
                      '&:hover': { background: 'transparent' },
                      paddingBottom: '10px',
                    }}
                    pointerEvents={isSneakerOnCart(sneaker) ? 'none' : 'auto'}
                    onClick={() => addSneakerToCart(sneaker)}
                  >
                    <Icon
                      as={
                        isSneakerOnCart(sneaker) ? MdCheck : MdAddShoppingCart
                      }
                      w={8}
                      h={8}
                      color='teal'
                    />
                  </Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </ChakraProvider>
  )
}
