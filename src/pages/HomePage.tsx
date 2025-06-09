import ProductPreview from "@/components/product/ProductPreview.tsx";
import { Box, Center, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { dummyProducts } from "@/models/Product.ts";

const HomePage = () => {
    return (
        <>
            <Box h={"20px"} />
            <Box w={"full"} px={5}></Box>
            <Box w={"full"} px={5}>
                <HomeCarousel />
            </Box>

            <Box h={"40px"} />

            <ProductGroup1 />
        </>
    );
};

const ProductGroup1 = () => {
    return (
        <>
            <Flex align={"center"} gap={3} mb={3}>
                <Heading size={"2xl"}>Intel CPUs</Heading>
                <FaChevronRight />
            </Flex>

            <SimpleGrid
                gap={3}
                columns={{ base: 2, sm: 3, lg: 4, xl: 5 }}
                overflowX={"auto"}
            >
                {dummyProducts.map((p, i) =>
                    <ProductPreview
                        key={i}
                        product={p}
                    />
                )}
            </SimpleGrid>
        </>
    );
};

const HomeCarousel = () => {
    return (
        <Slider
            dots={true}
            speed={500}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            dotsClass={"slick-dots-dark"}
        >
            <Box p={3}>
                <Center h={"300px"} bg={"blue.800"} rounded={"lg"}>
                    <Heading>Ads #1</Heading>
                </Center>
            </Box>
            <Box p={3}>
                <Center h={"300px"} bg={"green.800"} rounded={"lg"}>
                    <Heading>Ads #2</Heading>
                </Center>
            </Box>
        </Slider>
    );
};

export default HomePage;
