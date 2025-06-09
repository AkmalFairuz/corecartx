import { Button, Center, Heading, PinInput, Text } from "@chakra-ui/react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router";

const RegisterVerificationPage = () => {
    const navigate = useNavigate();
    return <>
        <Heading size={"3xl"} mb={2}>Email Verification</Heading>
        <Text color={"gray.400"} mb={4}>
            We've sent a verification code to john@gmail.com.
        </Text>
        <Center mb={4}>
            <PinInput.Root size={"xl"}>
                <PinInput.HiddenInput />
                <PinInput.Control>
                    <PinInput.Input index={0} />
                    <PinInput.Input index={1} />
                    <PinInput.Input index={2} />
                    <PinInput.Input index={3} />
                    <PinInput.Input index={4} />
                    <PinInput.Input index={5} />
                </PinInput.Control>
            </PinInput.Root>
        </Center>
        <Button mb={2} onClick={() => navigate("/login")}>
            Continue
        </Button>
        <Button variant={"outline"} onClick={() => navigate("/register")}>
            <BiChevronLeft/>
            Back to Register
        </Button>
    </>
}

export default RegisterVerificationPage;
