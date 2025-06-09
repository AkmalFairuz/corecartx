import {
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Image,
    Input,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import {
    FaAddressBook,
    FaEdit,
    FaHistory,
    FaKey,
    FaSave,
    FaTrash,
    FaUser,
} from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";

const ProfilePage = () => {
    return (
        <>
            <Box h={"30px"} />
            <Flex direction={{base: "column", md: "row"}} w={"full"} gap={6}>
                <Box
                    alignSelf={"flex-start"}
                    w={{base: "full", md: "300px"}}
                    borderWidth={"1px"}
                    borderColor={"gray.800"}
                    rounded={"lg"}
                    p={4}
                >
                    <ProfileItemEntry name={"Main Profile"} icon={<FaUser />} />
                    <ProfileItemEntry
                        name={"Order History"}
                        icon={<FaHistory />}
                    />
                    <ProfileItemEntry
                        name={"Shipping Address"}
                        icon={<FaAddressBook />}
                    />
                    <ProfileItemEntry
                        name={"Appearance"}
                        icon={<FaDisplay />}
                    />
                    <ProfileItemEntry
                        name={"Change Password"}
                        icon={<FaKey />}
                    />
                </Box>
                <Box flex={"auto"}>
                    <Heading size={"3xl"} mb={3}>
                        Main Profile
                    </Heading>
                    <Field.Root>
                        <Field.Label>Full Name</Field.Label>
                        <Input value={"John Doe"} />
                    </Field.Root>
                    <Field.Root mt={2}>
                        <Field.Label>Email Address</Field.Label>
                        <Input value={"johndoe@gmail.com"} />
                    </Field.Root>
                    <Field.Root mt={2}>
                        <Field.Label>Phone Number</Field.Label>
                        <Input value={"+62 895 1111 2222"} />
                    </Field.Root>
                    <Flex w={"full"} justify={"end"} mt={3}>
                        <Button>
                            <FaSave />
                            Save Changes
                        </Button>
                    </Flex>
                </Box>

                <Box w={{base: "full", md: "210px"}} mx={"auto"}>
                    <Image
                        p={3}
                        src={
                            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnPHNgBYL10NwHTWLkDmUV_QuLYwHqkfEPcwzp1mKbZHlwqwFxx3XuWu-V2lLdzRkPGNksFV-EEWEkS3laC2aZ9KWqY6knuAfDMIZz9ck5"
                        }
                        rounded={"full"}
                        aspectRatio={1}
                        w={{base: "250px", md: "full"}}
                        mb={3}
                        mx={"auto"}
                    />
                    <Button w={"full"} size={"sm"}>
                        <FaEdit /> Change Profile Picture
                    </Button>
                    <Button size={"sm"} w={"full"} variant={"outline"} mt={3}>
                        <FaTrash /> Delete Profile Picture
                    </Button>
                </Box>
            </Flex>
        </>
    );
};

const ProfileItemEntry = ({
    name,
    icon,
}: {
    name: string;
    icon: ReactNode;
}) => {
    return (
        <Flex
            align={"center"}
            gap={3}
            px={3}
            py={2}
            _hover={{ bg: "gray.950" }}
            rounded={"md"}
            cursor={"pointer"}
        >
            {icon}
            <Box>{name}</Box>
        </Flex>
    );
};

export default ProfilePage;
