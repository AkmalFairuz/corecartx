import XLink from "@/components/ui/xlink.tsx";
import { Button, Field, Heading, Input, Text } from "@chakra-ui/react";

const ResetPassword = () => {
    return (
        <>
            <Heading size={"3xl"}>Reset Password</Heading>

            <Text mt={4} mb={3}>
                Remember your password? <XLink href={"/login"}>Login</XLink>
            </Text>

            <Field.Root>
                <Field.Label>Email Address</Field.Label>
                <Input
                    placeholder={
                        "Enter your email address that you used to register"
                    }
                />
            </Field.Root>

            <Button mt={4}>Send Reset Password Email</Button>
        </>
    );
};

export default ResetPassword;
