import { Card, HStack, Image, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductPreview = ({ title }: { title: string }) => {
    const navigate = useNavigate();
    return (
        <Card.Root
            overflow={"hidden"}
            p={0}
            w={"full"}
            bg={"black"}
            _hover={{ bg: "gray.950", borderColor: "gray.950" }}
            cursor={"pointer"}
            userSelect={"none"}
            onClick={() => navigate("/product/1")}
        >
            <Image
                src={"https://picsum.photos/300/300"}
                aspectRatio={1}
                maxW={"150px"}
            ></Image>
            <Card.Body px={2} py={1}>
                <Text>{title}</Text>
                <Text fontWeight={"bold"}>Rp100.000</Text>
                <HStack fontSize={"sm"} color={"gray.400"} py={0.5} gap={1}>
                    <Text color={"yellow.600"}>
                        <FaStar />
                    </Text>
                    <Text>4.5</Text>
                    <BsDot />
                    <Text> 100+ sold</Text>
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};

export default ProductPreview;
