import { Box, Button, Flex, Heading, Input, InputGroup, SimpleGrid } from "@chakra-ui/react";
import ProductPreview from "@/components/product/ProductPreview.tsx";
import { dummyProducts } from "@/models/Product.ts";

const SearchPage = () => {
    return <>
        <Box h={"30px"}/>
        <Flex w={"full"} gap={6} direction={{base: "column", md: "row"}}>
            <Box alignSelf={"start"} w={{base: "full", md: "300px"}} rounded={'md'} borderWidth={'1px'} borderColor={'gray.800'} px={4} py={3}>
                <Heading mb={1}>Search Options</Heading>
                <Box w={"full"} h={"1px"} bg={"gray.800"} mb={3}/>
                <Filters/>
            </Box>
            <Box w={"full"}>
                <Heading mb={4}>Search Result for "Intel":</Heading>
                <SimpleGrid columns={{base: 2, md: 4}} gap={3}>
                    {dummyProducts.map((p, i) =>
                        <ProductPreview
                            key={i}
                            product={p}
                        />
                    )}
                </SimpleGrid>
            </Box>
        </Flex>
    </>
}

const Filters = () => {
    return <>
        <Heading mb={1}>Price</Heading>
        <InputGroup startAddon={<>Rp</>} mb={3}>
            <Input placeholder={"Min. Price"}/>
        </InputGroup>
        <InputGroup startAddon={<>Rp</>} mb={3}>
            <Input placeholder={"Max. Price"}/>
        </InputGroup>

        <Heading mb={1}>Sort By</Heading>
        <SimpleGrid columns={2} gap={2}>
            <Button variant={"outline"}>Cheapest</Button>
            <Button variant={"outline"}>Expensive</Button>
            <Button variant={"outline"}>High Rating</Button>
        </SimpleGrid>
    </>
}

export default SearchPage;
