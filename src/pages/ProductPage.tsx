import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    List,
    Text,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

const imageURL =
    "https://m.media-amazon.com/images/I/51Ekrj4Mj8L._AC_SX466_.jpg";

const ProductPage = () => {
    return (
        <>
            <Box h={"30px"} />
            <Flex flex={"auto"}>
                <Image
                    h={"300px"}
                    src={imageURL}
                    aspectRatio={1}
                    rounded={"sm"}
                />
                <Flex direction={"column"} ml={4} flex={"auto"}>
                    <Heading size={"2xl"}>
                        Intel Core i9-9900K Processor
                    </Heading>

                    <HStack mb={2} color={"gray.400"}>
                        <Text color={"yellow.600"}>
                            <FaStar />
                        </Text>
                        <Text>4.5</Text>
                        <BsDot />
                        <Text>83 ratings</Text>
                        <BsDot />
                        <Text> 100+ sold</Text>
                    </HStack>

                    <Heading size={"3xl"} mt={2} mb={2}>
                        Rp1.000.000
                    </Heading>

                    <ProductSpecifications />

                    <ProductAbout />
                </Flex>
                <Flex
                    direction={"column"}
                    alignSelf={"start"}
                    ml={4}
                    w={"300px"}
                    rounded={"lg"}
                    p={3}
                    borderWidth={"1px"}
                    borderColor={"gray.800"}
                    gap={2}
                >
                    <Heading size={"md"}>Specify Your Order</Heading>
                    <HStack>
                        Quantity:
                        <InputGroup
                            w={"full"}
                            startElement={<FaMinus />}
                            endElement={<FaPlus />}
                        >
                            <Input size={"sm"} textAlign={"center"} value={1} />
                        </InputGroup>
                    </HStack>
                    <Flex align={"center"} justify={"space-between"}>
                        <Text>Subtotal:</Text>
                        <Text fontSize={"xl"}>Rp1.000.000</Text>
                    </Flex>
                    <Button w={"full"}>Add to Cart</Button>
                    <Button w={"full"} variant={"outline"}>
                        Buy Now
                    </Button>
                    <Flex align={"center"} justify={"center"} fontSize={"xs"}>
                        <Flex align={"center"} gap={1} cursor={"pointer"}>
                            <FaStar />
                            Wishlist
                        </Flex>
                        <BsDot />
                        <Flex align={"center"} gap={1} cursor={"pointer"}>
                            <FaStar />
                            Share
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

const ProductSpecifications = () => {
    return (
        <>
            <Heading size={"md"} my={1}>
                Specifications
            </Heading>
            <Box w={"full"} h={"1px"} bg={"gray.800"} />
            <Flex
                w={"full"}
                direction={"column"}
                mt={2}
                gap={1}
                fontSize={"xs"}
                color={"gray.400"}
            >
                <Flex w={"full"}>
                    <Text w={"200px"} fontWeight={"bold"}>
                        CPU Manufacturer
                    </Text>
                    <Text>INTEL</Text>
                </Flex>
                <Flex w={"full"}>
                    <Text w={"200px"} fontWeight={"bold"}>
                        CPU Model
                    </Text>
                    <Text>Core i9</Text>
                </Flex>
                <Flex w={"full"}>
                    <Text w={"200px"} fontWeight={"bold"}>
                        CPU Speed
                    </Text>
                    <Text>3.6 GHz</Text>
                </Flex>
                <Flex w={"full"}>
                    <Text w={"200px"} fontWeight={"bold"}>
                        CPU Cores
                    </Text>
                    <Text>8 Cores</Text>
                </Flex>
            </Flex>
        </>
    );
};

const ProductAbout = () => {
    return (
        <>
            <Heading size={"md"} my={1}>
                About This Item
            </Heading>
            <Box w={"full"} h={"1px"} bg={"gray.800"} />
            <Flex
                w={"full"}
                direction={"column"}
                mt={2}
                gap={1}
                fontSize={"xs"}
                color={"gray.400"}
            >
                <List.Root ml={4}>
                    <List.Item>
                        Game without compromise. Play harder and work smarter
                        with Intel Core 14th Gen processors
                    </List.Item>
                    <List.Item>
                        24 cores (8 P-cores + 16 E-cores) and 32 threads.
                        Discrete graphics required
                    </List.Item>
                    <List.Item>
                        Leading max clock speed of up to 6.0 GHz gives you
                        smoother game play, higher frame rates, and rapid
                        responsiveness
                    </List.Item>
                    <List.Item>
                        Compatible with Intel 600-series (with potential BIOS
                        update) or 700-series chipset-based motherboards
                    </List.Item>
                    <List.Item>
                        DDR4 and DDR5 platform support cuts your load times and
                        gives you the space to run the most demanding games
                    </List.Item>
                </List.Root>
            </Flex>
        </>
    );
};

export default ProductPage;
