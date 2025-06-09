import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <Flex minH={"100vh"} justify={"center"} pt={"120px"} w={"full"} px={3}>
            <Flex maxW={"500px"} w={"full"} direction={"column"}>
                <Outlet />
            </Flex>
        </Flex>
    );
};

export default AuthLayout;
