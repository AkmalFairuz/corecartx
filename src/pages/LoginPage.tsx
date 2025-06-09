import XLink from "@/components/ui/xlink.tsx";
import { Button, Field, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Heading size={"3xl"}>Login</Heading>

            <Text mt={4} mb={3}>
                Don't have an account yet?{" "}
                <XLink href={"/register"}>Register</XLink>
            </Text>

            <Field.Root>
                <Field.Label>Email Address</Field.Label>
                <Input placeholder={"Enter your email address"} />
            </Field.Root>

            <Field.Root mt={4}>
                <Field.Label>Password</Field.Label>
                <Input type={"password"} placeholder={"Enter your password"} />
            </Field.Root>

            <Flex justify={"end"} mt={2} fontSize={"sm"}>
                <XLink href={"/reset-password"}>Forgot password?</XLink>
            </Flex>

            <Button mt={2} onClick={() => navigate("/")}>Login</Button>
        </>
    );
};

export default LoginPage;
