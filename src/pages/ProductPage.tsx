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
    Progress,
    Text,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router";

const imageURL =
    "https://m.media-amazon.com/images/I/51Ekrj4Mj8L._AC_SX466_.jpg";

const ProductPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box h={"30px"} />
            <Flex flex={"auto"} direction={{base: "column", md: "row"}} gap={4}>
                <Image
                    h={{base: "auto", md: "300px"}}
                    src={imageURL}
                    aspectRatio={1}
                    rounded={"sm"}
                    mb={{base: 4, md: 0}}
                />
                <Flex direction={"column"} flex={"auto"}>
                    <Heading size={"2xl"}>
                        Intel Core i9-9900K Processor
                    </Heading>

                    <HStack mb={2} color={"gray.400"}>
                        <Text color={"yellow.600"}>
                            <FaStar />
                        </Text>
                        <Text>4.5</Text>
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
                    w={{base: "full", md: "300px"}}
                    rounded={"lg"}
                    p={3}
                    borderWidth={"1px"}
                    borderColor={"gray.800"}
                    gap={2}
                >
                    <Heading size={"md"}>Specify Your Order</Heading>

                    <Flex
                        fontSize={"sm"}
                        align={"center"}
                        gap={1}
                        color={"gray.400"}
                    >
                        <FaLocationDot />
                        <Box>
                            Delivery to <strong>Jakarta</strong>.
                        </Box>
                    </Flex>
                    <Text fontSize={"xs"} color={"gray.400"}>
                        Shipping fee starts from <strong>Rp50.000</strong>.
                    </Text>
                    <Text mb={2} fontSize={"xs"} color={"gray.400"}>
                        Estimated delivery <strong>20/06/2025</strong>.
                    </Text>
                    <HStack mb={2}>
                        Quantity:
                        <InputGroup
                            w={"full"}
                            startElement={<FaMinus />}
                            endElement={<FaPlus />}
                        >
                            <Input size={"sm"} textAlign={"center"} value={1} />
                        </InputGroup>
                    </HStack>
                    <Flex mb={2} align={"center"} justify={"space-between"}>
                        <Text>Subtotal:</Text>
                        <Text fontSize={"lg"}>Rp1.000.000</Text>
                    </Flex>
                    <Button w={"full"} onClick={() => navigate("/cart")}>
                        Add to Cart
                    </Button>
                    <Button
                        w={"full"}
                        onClick={() => navigate("/checkout")}
                        variant={"outline"}
                    >
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

            <CustomerReviews />
        </>
    );
};

const CustomerReviews = () => {
    return (
        <>
            <Flex w={"full"} mt={8} gap={16} direction={{base: "column", md: "row"}}>
                <Box w={{base: "full", md: "300px"}}>
                    <Heading size={"2xl"} mb={2}>
                        Customer Reviews
                    </Heading>
                    <Flex align={"center"} gap={2} mb={2}>
                        <Text color={"yellow.600"}>
                            <FaStar />
                        </Text>
                        <Text>4.5</Text>
                        <Text> from 83 reviews</Text>
                    </Flex>

                    <Flex w={"full"} align={"center"} mb={1}>
                        <Text w={"90px"}>5-star</Text>
                        <Progress.Root value={80} w={"full"}>
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Flex>
                    <Flex w={"full"} align={"center"} mb={1}>
                        <Text w={"90px"}>4-star</Text>
                        <Progress.Root value={30} w={"full"}>
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Flex>
                    <Flex w={"full"} align={"center"} mb={1}>
                        <Text w={"90px"}>3-star</Text>
                        <Progress.Root value={5} w={"full"}>
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Flex>
                    <Flex w={"full"} align={"center"} mb={1}>
                        <Text w={"90px"}>2-star</Text>
                        <Progress.Root value={10} w={"full"}>
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Flex>
                    <Flex w={"full"} align={"center"} mb={1}>
                        <Text w={"90px"}>1-star</Text>
                        <Progress.Root value={20} w={"full"}>
                            <Progress.Track>
                                <Progress.Range />
                            </Progress.Track>
                        </Progress.Root>
                    </Flex>
                </Box>

                <Box flex={"auto"}>
                    <Heading size={"2xl"}>Recent Reviews</Heading>
                    <Box w={"full"} h={"1px"} bg={"gray.800"} mt={2} mb={4} />
                    <Flex direction={"column"} gap={3}>
                        <CustomerReview
                            name={"John Doe"}
                            star={4}
                            review={"Great product, very fast!"}
                        />
                        <CustomerReview
                            name={"Jane Smith"}
                            star={5}
                            review={
                                "Excellent performance, I can run all my games smoothly."
                            }
                        />
                        <CustomerReview
                            name={"Alice Johnson"}
                            star={2}
                            review={
                                "Good value for money, but could be better with more cores."
                            }
                        />
                        <CustomerReview
                            name={"Bob Brown"}
                            star={3}
                            review={
                                "Decent CPU, but I expected more from the latest generation."
                            }
                        />
                        <CustomerReview
                            name={"Charlie White"}
                            star={5}
                            review={
                                "Absolutely love it! The performance is top-notch."
                            }
                        />
                        <CustomerReview
                            name={"Diana Green"}
                            star={4}
                            review={
                                "Solid performance, but the price is a bit high."
                            }
                        />
                        <CustomerReview
                            name={"Ethan Blue"}
                            star={1}
                            review={
                                "Not worth the money, I had better experiences with previous models."
                            }
                        />
                        <CustomerReview
                            name={"Fiona Black"}
                            star={5}
                            review={
                                "Best CPU I've ever used! Highly recommend for gamers."
                            }
                        />
                    </Flex>
                </Box>
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

const CustomerReview = ({
    name,
    star,
    review,
}: {
    name: string;
    star: number;
    review: string;
}) => {
    return (
        <Flex w={"full"} mb={4} gap={2}>
            <Image
                src={"https://ui-avatars.com/api/?name=" + name}
                rounded={"full"}
                aspectRatio={1}
                h={"50px"}
                borderWidth={"1px"}
                borderColor={"gray.800"}
            />
            <Flex direction={"column"} flex={"auto"}>
                <HStack>
                    <Text fontWeight={"bold"}>{name}</Text>
                    <Flex gap={0.5} align={"center"}>
                        {Array.from({ length: star }, (_, i) => (
                            <Text color={"yellow.600"}>
                                <FaStar key={i} />
                            </Text>
                        ))}
                        {Array.from({ length: 5 - star }, (_, i) => (
                            <Text color={"gray.700"}>
                                <FaStar key={i} />
                            </Text>
                        ))}
                    </Flex>
                </HStack>
                <Text fontSize={"sm"} color={"gray.400"}>
                    {review}
                </Text>
                <Text fontSize={"xs"} color={"gray.500"}>
                    2 days ago
                </Text>
            </Flex>
        </Flex>
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
