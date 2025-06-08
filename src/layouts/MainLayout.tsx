import Navbar from "@/components/ui/navbar.tsx";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Flex w={"full"} justify={"center"} px={3}>
                <Box maxW={"1100px"} w={"full"}>
                    <Outlet />
                </Box>
            </Flex>
        </>
    );
};

export default MainLayout;
