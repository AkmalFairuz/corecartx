import { Card, HStack, Image, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import formatRupiah from "@/utils/formatRupiah.ts";
import type { Product } from "@/models/Product.ts";

const ProductPreview = ({ product }: { product: Product }) => {
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
            <Card.Title>
                <Image
                    src={
                        product.imageUrl
                    }
                    aspectRatio={1}
                ></Image>
            </Card.Title>
            <Card.Body px={2} py={1}>
                <Text>{product.name}</Text>
                <Text fontWeight={"bold"} fontSize={"lg"}>
                    {formatRupiah(product.price)}
                </Text>
                <HStack fontSize={"sm"} color={"gray.400"} py={0.5} gap={1}>
                    <Text color={"yellow.600"}>
                        <FaStar />
                    </Text>
                    <Text>{product.rating}</Text>
                    <BsDot />
                    <Text> {product.sold}+ sold</Text>
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};

export default ProductPreview;
