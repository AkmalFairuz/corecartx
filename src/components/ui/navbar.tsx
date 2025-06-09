import { Box, Flex, Heading, Input, InputGroup, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const title = useBreakpointValue({base: "CC", md: "CoreCart"});
    return (
        <>
            <Flex
                justify={"center"}
                w={"full"}
                borderBottomWidth={"1px"}
                borderBottomColor={"gray.700"}
                position={"fixed"}
                zIndex={1000}
                h={"70px"}
                bg={"black"}
            >
                <Flex maxW={"1100px"} w={"full"} align={"center"} px={4}>
                    <Heading
                        cursor={"pointer"}
                        size={"4xl"}
                        mr={3}
                        onClick={() => navigate("/")}
                    >
                        {title}
                    </Heading>
                    <Flex
                        flex={"auto"}
                        justify={"end"}
                        h={"full"}
                        w={"full"}
                        align={"center"}
                        gap={3}
                    >
                        <NavSearch />
                        {/*<Button onClick={() => navigate("/login")}>*/}
                        {/*    Login*/}
                        {/*</Button>*/}
                        {/*<Button*/}
                        {/*    onClick={() => navigate("/register")}*/}
                        {/*    variant={"outline"}*/}
                        {/*>*/}
                        {/*    Register*/}
                        {/*</Button>*/}
                        <Text
                            fontSize={"2xl"}
                            onClick={() => navigate("/cart")}
                        >
                            <FaShoppingCart />
                        </Text>
                        <Text
                            fontSize={"2xl"}
                            ml={2}
                            onClick={() => navigate("/profile")}
                        >
                            <FaUserCircle />
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Box h={"70px"} />
        </>
    );
};

const NavSearch = () => {
    const navigate = useNavigate();
    return (
        <InputGroup w={"full"} endElement={<Box onClick={() => navigate("/search")}><FaSearch /></Box>} mx={3}>
            <Input placeholder={"Search product"} />
        </InputGroup>
    );
};

export default Navbar;
