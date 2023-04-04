import { useState } from "react"
import {
  ChakraProvider,
  theme,
  Icon,
  Tag,
  Button,
  Box,
  Divider,
  Text,
  IconButton,
} from "@chakra-ui/react"
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { useSneakerStore } from "homepage/store"

export default function Cart() {
  const [showCart, setShowCart] = useState<boolean>(false)
  const { cart } = useSneakerStore()

  return (
    <ChakraProvider theme={theme}>
      <Button
        variant="ghost"
        onClick={() => setShowCart(!showCart)}
        _hover={{ background: "transparent" }}
      >
        <Icon as={FiShoppingCart} h={7} w={7} />
        <Tag
          borderRadius="3xl"
          backgroundColor="teal"
          color="white"
          marginTop={2}
        >
          {cart.length}
        </Tag>
      </Button>
      <Box
        sx={{
          height: "100%",
          width: "425px",
          position: "absolute",
          top: "0",
          right: "-425px",
          transition: "all 0.4s",
          backgroundColor: "#F1F0F0",
          zIndex: "100",
          transform: showCart ? "translateX(-425px)" : "none",
          boxShadow: "2px 2px 20px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 30px",
          }}
        >
          <Text fontSize="2xl">Mi Carrito</Text>
          <IconButton
            aria-label="Close shopping cart"
            icon={<AiOutlineClose />}
            onClick={() => setShowCart(!showCart)}
          />
        </Box>
        <Box sx={{ padding: "0px 30px" }}>
          {!!cart.length &&
            cart.map((sneaker: any, index: number) => {
              return !!index ? (
                <>
                  <Divider />
                  <Text fontSize="md">{sneaker.model}</Text>
                </>
              ) : (
                <Text fontSize="md">{sneaker.model}</Text>
              )
            })}
          {!cart.length && <p>Tu carrito está vacío.</p>}
        </Box>
      </Box>
    </ChakraProvider>
  )
}
