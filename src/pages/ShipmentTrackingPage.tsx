import { Box, Flex, HStack, Text, Timeline } from "@chakra-ui/react";
import { FaArrowLeft, FaCopy } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";

const ShipmentTrackingPage = () => {
    return (
        <>
            <Box h={"30px"} />

            <Flex
                fontSize={"3xl"}
                fontWeight={"bold"}
                mb={3}
                alignItems={"center"}
                gap={4}
            >
                <FaArrowLeft />
                Shipment Tracking
            </Flex>

            <Text mb={3}>
                Track the status of your package in real-time. You can see the
                current location and estimated delivery time.
            </Text>

            <Flex
                rounded={"lg"}
                p={4}
                borderWidth={"1px"}
                borderColor={"gray.800"}
                mb={6}
            >
                <Flex direction={"column"} flex={"auto"} maxW={"270px"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Tracking ID
                    </Text>
                    <HStack color={"gray.300"}>
                        <Text fontSize={"2xl"}>#NATH1X4567P90</Text>
                        <Box cursor={"pointer"}>
                            <FaCopy />
                        </Box>
                    </HStack>

                    <Text color={"gray.400"} fontSize={"sm"}>
                        Copy this tracking ID to share with customer support if
                        needed.
                    </Text>
                </Flex>
                <Flex direction={"column"} ml={6} flex={"auto"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Shipping Address
                    </Text>
                    <Flex
                        direction={"column"}
                        color={"gray.300"}
                        fontSize={"xs"}
                    >
                        <Text>Akmal's House</Text>
                        <Text>41th North Kapuk Raya 2nd Street</Text>
                        <Text>Panjaringan, North Jakarta</Text>
                        <Text>Jakarta, Indonesia</Text>
                        <Text>+62 821 0000 0001</Text>
                    </Flex>
                </Flex>

                <Flex direction={"column"} ml={6} flex={"auto"} maxW={"250px"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Estimated Delivery
                    </Text>
                    <Text fontSize={"2xl"} color={"gray.300"}>
                        17/06/2025
                    </Text>
                    <Text color={"gray.400"} fontSize={"sm"}>
                        Based on current shipping speed and distance.
                    </Text>
                </Flex>
                <Flex direction={"column"} ml={6} flex={"auto"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Status
                    </Text>
                    <Text fontSize={"2xl"} color={"green.500"}>
                        In Transit
                    </Text>
                </Flex>
            </Flex>

            <Timeline.Root maxW="400px">
                <Timeline.Item>
                    <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator>
                            <LuPackage />
                        </Timeline.Indicator>
                    </Timeline.Connector>
                    <Timeline.Content>
                        <Timeline.Title>
                            The package has been picked up
                        </Timeline.Title>
                        <Timeline.Description>
                            13/06/2025, 2:00 PM
                        </Timeline.Description>
                        <Text color={"gray.400"} fontSize={"sm"}>
                            Batam, Riau Islands
                        </Text>
                    </Timeline.Content>
                </Timeline.Item>

                <Timeline.Item>
                    <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator>
                            <LuPackage />
                        </Timeline.Indicator>
                    </Timeline.Connector>
                    <Timeline.Content>
                        <Timeline.Title>
                            The package is in transit
                        </Timeline.Title>
                        <Timeline.Description>
                            14/06/2025, 10:00 AM
                        </Timeline.Description>
                        <Text color={"gray.400"} fontSize={"sm"}>
                            Medan, North Sumatra
                        </Text>
                    </Timeline.Content>
                </Timeline.Item>

                <Timeline.Item>
                    <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator>
                            <LuPackage />
                        </Timeline.Indicator>
                    </Timeline.Connector>
                    <Timeline.Content>
                        <Timeline.Title>
                            The package is in transit
                        </Timeline.Title>
                        <Timeline.Description>
                            15/06/2025, 8:00 AM
                        </Timeline.Description>
                        <Text color={"gray.400"} fontSize={"sm"}>
                            Jakarta, DKI Jakarta
                        </Text>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline.Root>
        </>
    );
};

export default ShipmentTrackingPage;
