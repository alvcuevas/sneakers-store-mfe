import { useState } from 'react'
import {
  ChakraProvider,
  theme,
  Icon,
  Tag,
  Button,
  Box,
  Text,
  IconButton,
  Image,
  Link,
} from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useSneakerStore } from 'homepage/store'

export default function Cart() {
  const [showCart, setShowCart] = useState<boolean>(false)
  const { cart, removeSneakerFromCart } = useSneakerStore()

  return (
    <ChakraProvider theme={theme}>
      <Button
        variant='ghost'
        onClick={() => setShowCart(!showCart)}
        _hover={{ background: 'transparent' }}
      >
        <Icon as={FiShoppingCart} h={7} w={7} />
        <Tag
          borderRadius='3xl'
          backgroundColor='teal'
          color='white'
          marginTop={2}
        >
          {cart.length}
        </Tag>
      </Button>
      <Box
        sx={{
          height: '100%',
          width: '425px',
          position: 'absolute',
          top: '0',
          right: '-425px',
          transition: 'all 0.4s',
          backgroundColor: '#F1F0F0',
          zIndex: '100',
          transform: showCart ? 'translateX(-425px)' : 'none',
          boxShadow: '2px 2px 20px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 30px',
          }}
        >
          <Text fontSize='2xl'>Mi Carrito</Text>
          <IconButton
            aria-label='Close shopping cart'
            icon={<AiOutlineClose />}
            onClick={() => setShowCart(!showCart)}
            sx={{ background: 'transparent' }}
            _hover={{ background: 'transparent' }}
          />
        </Box>
        <Box sx={{ padding: '15px 30px' }}>
          {!!cart.length &&
            cart.map((sneaker: any) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  }}
                >
                  <Box>
                    <Image
                      boxSize='100px'
                      objectFit='cover'
                      src={sneaker.image}
                      alt='Sneaker image'
                    />
                  </Box>
                  <Box minWidth='140px' width='min-content'>
                    <Text fontSize='md'>{sneaker.model}</Text>
                    <Text fontSize='sm'>Talla: 42</Text>
                    <Text fontSize='sm'>Cantidad: 1</Text>
                  </Box>
                  <Box>
                    <Text fontSize='md'>{sneaker.price} €</Text>
                    <Link
                      color='teal.500'
                      href='#'
                      onClick={() => removeSneakerFromCart(sneaker)}
                    >
                      Eliminar
                    </Link>
                  </Box>
                </Box>
              )
            })}
          {!!cart.length && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                borderTop: '1px solid black',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 3,
                }}
              >
                <Box>
                  {' '}
                  <Text fontSize='md'>Total</Text>
                </Box>
                <Box>
                  {' '}
                  <Text fontSize='md'>
                    {cart.reduce(
                      (acc: number, sneaker: any) => acc + sneaker.price,
                      0
                    )}
                    ,00 €
                  </Text>
                </Box>
              </Box>
              <Button
                colorScheme='teal'
                size='lg'
                sx={{ textTransform: 'camelcase', marginTop: 6, width: '100%' }}
              >
                Finalizar compra
              </Button>
            </Box>
          )}
          {!cart.length && <p>No hay ningún producto añadido en tu carrito.</p>}
        </Box>
      </Box>
    </ChakraProvider>
  )
}
