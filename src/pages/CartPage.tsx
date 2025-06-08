import type { CartItem } from "@/models/CartItem.ts";
import formatRupiah from "@/utils/formatRupiah.ts";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const CartPage = () => {
    return (
        <>
            <Box h={"30px"} />
            <Heading size={"3xl"}>Your Cart</Heading>
            <Box h={"30px"} />

            <VStack gap={4}>
                <CartItemComponent
                    item={{
                        productName: "Intel Core i9-9900K",
                        quantity: 1,
                        price: 100000,
                        imageUrl:
                            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4CQSw-gW8OclxNnldyb2Y-lwIROhThiXKZmx958fjkAij1ALVyhVdQrwfOp--88V04bGOCWS7Eb_cG3PUk1_3Z0LR5Qpg0yJD108ATq85bCNzZpYCOvFyIg",
                    }}
                />

                <CartItemComponent
                    item={{
                        productName: "Intel Core i9-9900K",
                        quantity: 1,
                        price: 100000,
                        imageUrl:
                            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4CQSw-gW8OclxNnldyb2Y-lwIROhThiXKZmx958fjkAij1ALVyhVdQrwfOp--88V04bGOCWS7Eb_cG3PUk1_3Z0LR5Qpg0yJD108ATq85bCNzZpYCOvFyIg",
                    }}
                />
            </VStack>

            <Flex
                justify={"center"}
                position={"fixed"}
                bottom={10}
                left={0}
                w={"full"}
                p={4}
            >
                <Flex
                    w={"full"}
                    maxW={"1000px"}
                    bg={"black"}
                    borderWidth={"1px"}
                    borderColor={"gray.800"}
                    px={4}
                    py={3}
                    rounded={"lg"}
                    align={"center"}
                >
                    <Flex direction={"column"}>
                        <Text>Total:</Text>
                        <Heading size={"3xl"}>{formatRupiah(100000)}</Heading>
                    </Flex>
                    <Box flex={"auto"} />
                    <Button size={"xl"}>
                        <FaBagShopping />
                        Proceed to Checkout
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

const CartItemComponent = ({ item }: { item: CartItem }) => {
    return (
        <Checkbox.Root w={"full"}>
            <Checkbox.HiddenInput />
            <Checkbox.Control>
                <Checkbox.Indicator />
            </Checkbox.Control>
            <Flex w={"full"} align={"center"}>
                <Image
                    mr={4}
                    rounded={"lg"}
                    aspectRatio={1}
                    h={"100px"}
                    src={item.imageUrl}
                ></Image>
                <Flex direction={"column"}>
                    <Text fontSize={"xl"} fontWeight={"bold"} mb={0.5}>
                        {item.productName}
                    </Text>
                    <Text mb={1}>{formatRupiah(item.price)}</Text>
                    <HStack>
                        <InputGroup
                            w={"100px"}
                            startElement={<FaMinus />}
                            endElement={<FaPlus />}
                        >
                            <Input
                                size={"sm"}
                                textAlign={"center"}
                                value={item.quantity}
                            />
                        </InputGroup>
                        <Button size={"sm"} variant={"outline"}>
                            <FaTrash />
                        </Button>
                    </HStack>
                </Flex>
            </Flex>
        </Checkbox.Root>
    );
};

export default CartPage;
