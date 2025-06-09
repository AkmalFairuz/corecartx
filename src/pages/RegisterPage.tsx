import XLink from "@/components/ui/xlink.tsx";
import { Button, Field, Heading, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Heading size={"3xl"}>Register</Heading>

            <Text mt={4} mb={3}>
                Already have an account? <XLink href={"/login"}>Login</XLink>
            </Text>

            <Field.Root>
                <Field.Label>Email Address</Field.Label>
                <Input placeholder={"Enter your email address"} />
            </Field.Root>

            <Field.Root mt={4}>
                <Field.Label>Full Name</Field.Label>
                <Input placeholder={"Enter your full name"} />
            </Field.Root>

            <Field.Root mt={4}>
                <Field.Label>Password</Field.Label>
                <Input type={"password"} placeholder={"Enter your password"} />
            </Field.Root>

            <Field.Root mt={4}>
                <Field.Label>Confirm Password</Field.Label>
                <Input
                    type={"password"}
                    placeholder={"Re-enter your password"}
                />
            </Field.Root>

            <Button mt={4} onClick={() => navigate("/register-verification")}>Register</Button>
        </>
    );
};

export default RegisterPage;
