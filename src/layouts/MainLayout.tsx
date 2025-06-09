import Navbar from "@/components/ui/navbar.tsx";
import { Box, Flex } from "@chakra-ui/react";
import {Outlet, ScrollRestoration} from "react-router";

const MainLayout = () => {
    return (
        <>
            <ScrollRestoration/>
        <Box w={"full"} minH={"100vh"}>
            <Navbar />
            <Flex w={"full"} justify={"center"} px={3}>
                <Box maxW={"1100px"} w={"full"} mb={"10px"}>
                    <Outlet />
                </Box>
            </Flex>
        </Box>
        </>
    );
};

export default MainLayout;
