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
import { MdAddShoppingCart } from 'react-icons/md'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

export default function ProductList() {
  const [likedSneakerId, setLikedSneakerId] = React.useState<number>(0)
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
              <Stack mt='6' spacing='2'>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Heading size='md'>{sneaker.brand}</Heading>
                  <Button
                    variant='ghost'
                    sx={{
                      '&:hover': { background: 'transparent' },
                    }}
                    onClick={() => setLikedSneakerId(sneaker.id)}
                  >
                    <Icon
                      as={likedSneakerId === sneaker.id ? FaRegHeart : FaHeart}
                      w={5}
                      h={5}
                      color='red.500'
                    />
                  </Button>
                </Box>
                <Text fontSize='lg'>{sneaker.model}</Text>
                <Badge
                  variant='outline'
                  colorScheme='teal'
                  width='90px'
                  padding='6px'
                  fontSize='lg'
                  display='flex'
                  justifyContent='center'
                >
                  {sneaker.price},00 €
                </Badge>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf='center' alignItems='center'>
              <Button
                variant='solid'
                colorScheme={isSneakerOnCart(sneaker) ? 'gray' : 'teal'}
                pointerEvents={isSneakerOnCart(sneaker) ? 'none' : 'auto'}
                onClick={() => addSneakerToCart(sneaker)}
                leftIcon={<MdAddShoppingCart />}
              >
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </ChakraProvider>
  )
}
