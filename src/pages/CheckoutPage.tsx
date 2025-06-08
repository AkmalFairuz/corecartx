import type { CartItem } from "@/models/CartItem.ts";
import {
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Image,
    Input,
    SimpleGrid,
    Steps,
    Text,
} from "@chakra-ui/react";
import { type ReactNode, useEffect, useState } from "react";
import { BiQr, BiSupport } from "react-icons/bi";
import { FaCheck, FaCreditCard, FaInfoCircle } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
import { useNavigate } from "react-router";

const CheckoutPage = () => {
    const [step, setStep] = useState(0);
    return (
        <>
            <Box h={"30px"} />
            <Heading size={"3xl"} mb={8} textAlign={"center"}>
                Checkout
            </Heading>
            <Steps.Root
                defaultStep={0}
                count={steps.length}
                onStepChange={(s) => setStep(s.step)}
            >
                <Steps.List>
                    {steps.map((step, index) => (
                        <Steps.Item
                            key={index}
                            index={index}
                            title={step.title}
                        >
                            <Steps.Indicator />
                            <Box>
                                <Steps.Title>{step.title}</Steps.Title>
                                <Steps.Description>
                                    {step.description}
                                </Steps.Description>
                            </Box>
                            <Steps.Separator />
                        </Steps.Item>
                    ))}
                </Steps.List>

                {steps.map((step, index) => (
                    <Steps.Content key={index} index={index}>
                        {step.content}
                    </Steps.Content>
                ))}

                <Steps.CompletedContent>
                    <StepComplete />
                </Steps.CompletedContent>

                {step !== 4 && (
                    <Flex w={"full"} gap={4}>
                        <Steps.PrevTrigger flex={"auto"}>
                            <Button w={"full"} variant={"outline"}>
                                Back
                            </Button>
                        </Steps.PrevTrigger>
                        <Steps.NextTrigger flex={"auto"}>
                            <Button w={"full"}>Continue</Button>
                        </Steps.NextTrigger>
                    </Flex>
                )}
            </Steps.Root>
        </>
    );
};

const ShippingAddress = ({
    name,
    address,
    active = false,
    onClick,
}: {
    name: string;
    address: string[];
    active?: boolean;
    onClick?: () => void;
}) => {
    return (
        <Box
            px={4}
            py={3}
            borderWidth={"2px"}
            borderColor={active ? "gray.500" : "gray.800"}
            rounded={"lg"}
            _hover={{
                bg: "gray.900",
            }}
            cursor="pointer"
            onClick={onClick}
            bg={active ? "gray.800" : "transparent"}
        >
            <Text fontWeight={"bold"}>{name}</Text>
            {address.map((line, i) => {
                return <Text key={i}>{line}</Text>;
            })}
        </Box>
    );
};

interface IShippingAddress {
    id: number;
    name: string;
    address: string[];
}

const Step1 = () => {
    const [selectedAddress, setSelectedAddress] = useState<number | null>(null);

    const addresses: IShippingAddress[] = [
        {
            id: 1,
            name: "Akmal's House",
            address: [
                "41th North Kapuk Raya 2nd Street",
                "Panjaringan, North Jakarta",
                "Jakarta, Indonesia",
                "+62 821 0000 0001",
            ],
        },
        {
            id: 2,
            name: "Gab's House",
            address: [
                "15B Kemang Raya Street, RT 04 / RW 03",
                "Bangka, Mampang Prapatan, South Jakarta",
                "DKI Jakarta 12730",
                "Indonesia",
                "Phone: (+62) 821-0000-0001",
            ],
        },
    ];

    return (
        <Box w={"full"} pt={4}>
            <Heading size={"lg"} mb={4} textAlign={"center"}>
                Please enter your shipping address or select an existing one
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                {addresses.map((addr) => (
                    <ShippingAddress
                        key={addr.id}
                        name={addr.name}
                        address={addr.address}
                        active={selectedAddress === addr.id}
                        onClick={() => setSelectedAddress(addr.id)}
                    />
                ))}
            </SimpleGrid>

            <Heading size={"md"} mt={6} mb={4} textAlign={"center"}>
                Or add a new address
            </Heading>
            <Flex w={"full"} gap={6}>
                <Box flex={"auto"}>
                    <Field.Root>
                        <Field.Label>Address Name</Field.Label>
                        <Input placeholder={"Enter address name"} />
                    </Field.Root>
                    <Field.Root mt={3}>
                        <Field.Label>Country</Field.Label>
                        <Input placeholder={"Enter country name"} />
                    </Field.Root>
                    <Field.Root mt={3}>
                        <Field.Label>City</Field.Label>
                        <Input placeholder={"Enter city name"} />
                    </Field.Root>
                </Box>
                <Box flex={"auto"}>
                    <Field.Root>
                        <Field.Label>Phone Number</Field.Label>
                        <Input placeholder={"Enter phone number to contact"} />
                    </Field.Root>
                    <Field.Root mt={3}>
                        <Field.Label>State/Province</Field.Label>
                        <Input placeholder={"Enter state or province"} />
                    </Field.Root>
                    <Field.Root mt={3}>
                        <Field.Label>Postal Code</Field.Label>
                        <Input placeholder={"Enter postal code"} />
                    </Field.Root>
                </Box>
            </Flex>

            <Field.Root mt={3}>
                <Field.Label>Street Address</Field.Label>
                <Input placeholder={"Enter street address"} />
            </Field.Root>
        </Box>
    );
};

interface IPaymentMethod {
    id: number;
    name: string;
    icon: ReactNode;
    description: string;
}

const PaymentMethod = ({
    name,
    icon,
    description,
    active = false,
    onClick,
}: {
    name: string;
    icon: ReactNode;
    description: string;
    active?: boolean;
    onClick?: () => void;
}) => {
    return (
        <Box
            px={4}
            py={3}
            borderWidth={"2px"}
            borderColor={active ? "gray.500" : "gray.800"}
            rounded={"lg"}
            _hover={{
                bg: "gray.900",
            }}
            cursor="pointer"
            onClick={onClick}
            bg={active ? "gray.800" : "transparent"}
            display="flex"
            alignItems="center"
        >
            <Box mr={4} fontSize="2xl">
                {icon}
            </Box>
            <Box>
                <Text fontWeight={"bold"}>{name}</Text>
                <Text fontSize="sm" color="gray.400">
                    {description}
                </Text>
            </Box>
        </Box>
    );
};

const Step2 = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
        number | null
    >(null);

    const paymentMethods: IPaymentMethod[] = [
        {
            id: 1,
            name: "Credit/Debit Card",
            icon: <FaCreditCard />,
            description: "Visa, Mastercard, GPN",
        },
        {
            id: 2,
            name: "DANA",
            icon: (
                <Image
                    rounded={"md"}
                    src={
                        "https://play-lh.googleusercontent.com/pqoyI2JaPd3uOYt-5GzVqi82OvhBC9Jf-EPQqPDhCbyekdKZe5r-hOGlF4qE1ddWe3o=w256"
                    }
                    h={"30px"}
                />
            ),
            description: "Pay using DANA e-wallet",
        },
        {
            id: 3,
            name: "Bank Transfer",
            icon: <GiBank />,
            description: "Direct bank transfer",
        },
        {
            id: 4,
            name: "QRIS",
            icon: <BiQr />,
            description:
                "Pay using QRIS. Use your mobile banking app or QR code scanner to pay.",
        },
    ];

    return (
        <Box w={"full"} pt={4}>
            <Heading size={"lg"} mb={4} textAlign={"center"}>
                Select Payment Method
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                {paymentMethods.map((method) => (
                    <PaymentMethod
                        key={method.id}
                        name={method.name}
                        icon={method.icon}
                        description={method.description}
                        active={selectedPaymentMethod === method.id}
                        onClick={() => setSelectedPaymentMethod(method.id)}
                    />
                ))}
            </SimpleGrid>

            {selectedPaymentMethod === 1 && (
                <Box mt={6}>
                    <Heading size={"md"} mb={4}>
                        Card Details
                    </Heading>
                    <Field.Root>
                        <Field.Label>Card Number</Field.Label>
                        <Input placeholder={"Enter card number"} />
                    </Field.Root>
                    <Flex gap={4} mt={3}>
                        <Field.Root flex="1">
                            <Field.Label>Expiration Date</Field.Label>
                            <Input placeholder={"MM/YY"} />
                        </Field.Root>
                        <Field.Root flex="1">
                            <Field.Label>CVV</Field.Label>
                            <Input placeholder={"Enter CVV"} maxLength={3} />
                        </Field.Root>
                    </Flex>
                    <Field.Root mt={3}>
                        <Field.Label>Cardholder Name</Field.Label>
                        <Input placeholder={"Enter cardholder name"} />
                    </Field.Root>
                </Box>
            )}
        </Box>
    );
};

const formatRupiah = (amount: number) => {
    return `Rp ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Step3 = () => {
    const cartItems: CartItem[] = [
        {
            productName: "Intel Core i9-9900K Processor",
            quantity: 1,
            price: 1000000,
            imageUrl:
                "https://m.media-amazon.com/images/I/51Ekrj4Mj8L._AC_SX466_.jpg",
        },
    ];

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    const shipping = 50000;
    const tax = subtotal * 0.11;
    const total = subtotal + shipping + tax;

    return (
        <Box w={"full"} pt={4}>
            <Heading size={"lg"} mb={4} textAlign={"center"}>
                Review Your Order
            </Heading>

            <Box w={"full"}>
                <Box mb={6}>
                    <Heading size={"md"} mb={3}>
                        Items in Your Order
                    </Heading>
                    <Box
                        borderWidth={"1px"}
                        borderColor={"gray.800"}
                        rounded={"lg"}
                        overflow="hidden"
                    >
                        {cartItems.map((item, index) => (
                            <Box
                                key={index}
                                p={4}
                                display="flex"
                                alignItems="center"
                                borderBottomWidth={
                                    index < cartItems.length - 1 ? "1px" : "0"
                                }
                                borderColor="gray.800"
                            >
                                <Box
                                    width="60px"
                                    height="60px"
                                    bg="gray.700"
                                    rounded="md"
                                    mr={4}
                                    overflow="hidden"
                                    flexShrink={0}
                                >
                                    {item.imageUrl && (
                                        <Image
                                            src={item.imageUrl}
                                            objectFit="cover"
                                        />
                                    )}
                                </Box>
                                <Box flex="1">
                                    <Text fontWeight="bold">
                                        {item.productName}
                                    </Text>
                                    <Text color="gray.400">
                                        Qty: {item.quantity}
                                    </Text>
                                </Box>
                                <Box textAlign="right">
                                    <Text fontWeight="bold">
                                        {formatRupiah(item.price)}
                                    </Text>
                                    {item.quantity > 1 && (
                                        <Text color="gray.400" fontSize="sm">
                                            {formatRupiah(item.price)} each
                                        </Text>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    {/* Shipping Address */}
                    <Box>
                        <Heading size={"md"} mb={3}>
                            Shipping Address
                        </Heading>
                        <Box
                            p={4}
                            borderWidth={"1px"}
                            borderColor={"gray.800"}
                            rounded={"lg"}
                        >
                            <Text fontWeight="bold">Akmal's House</Text>
                            <Text>41th North Kapuk Raya 2nd Street</Text>
                            <Text>Panjaringan, North Jakarta</Text>
                            <Text>Jakarta, Indonesia</Text>
                            <Text>+62 821 0000 0001</Text>
                        </Box>
                    </Box>

                    {/* Payment Method */}
                    <Box>
                        <Heading size={"md"} mb={3}>
                            Payment Method
                        </Heading>
                        <Box
                            p={4}
                            borderWidth={"1px"}
                            borderColor={"gray.800"}
                            rounded={"lg"}
                            display="flex"
                            alignItems="center"
                        >
                            <Box mr={4} fontSize="2xl">
                                <BiQr />
                            </Box>
                            <Box>
                                <Text fontWeight="bold">QRIS</Text>
                                <Text color={"gray.400"}>
                                    Use your mobile banking or e-wallet app to
                                    scan the QR code and pay.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>

                {/* Order Summary */}
                <Box mt={6}>
                    <Heading size={"md"} mb={3}>
                        Order Summary
                    </Heading>
                    <Box
                        p={4}
                        borderWidth={"1px"}
                        borderColor={"gray.800"}
                        rounded={"lg"}
                    >
                        <Flex justify="space-between" mb={2}>
                            <Text>Subtotal</Text>
                            <Text>{formatRupiah(subtotal)}</Text>
                        </Flex>
                        <Flex justify="space-between" mb={2}>
                            <Text>Shipping</Text>
                            <Text>{formatRupiah(shipping)}</Text>
                        </Flex>
                        <Flex justify="space-between" mb={4}>
                            <Text>Tax (11%)</Text>
                            <Text>{formatRupiah(tax)}</Text>
                        </Flex>
                        <Flex
                            justify="space-between"
                            fontWeight="bold"
                            fontSize="lg"
                            pt={3}
                            borderTopWidth="1px"
                            borderColor="gray.800"
                        >
                            <Text>Total</Text>
                            <Text>{formatRupiah(total)}</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const Step4 = () => {
    const [remainingTime, setRemainingTime] = useState<number>(900);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box w={"full"} pt={4}>
            <Heading size={"lg"} mb={4} textAlign={"center"}>
                Complete Your Payment
            </Heading>

            <Box
                py={2}
                px={4}
                bg="gray.950"
                rounded="md"
                mb={6}
                maxW="600px"
                mx="auto"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    color={remainingTime < 120 ? "red.300" : "white"}
                    fontWeight="medium"
                >
                    Please complete payment within {minutes}:
                    {seconds.toString().padStart(2, "0")}
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} w={"full"} gap={6}>
                {/* QR Code Section */}
                <Box>
                    <Box
                        borderWidth="1px"
                        borderColor="gray.800"
                        rounded="lg"
                        p={6}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Heading size="md" mb={4}>
                            Scan QR Code
                        </Heading>

                        {/* QR Code Placeholder */}
                        <Box
                            width="240px"
                            height="240px"
                            bg="white"
                            p={4}
                            mb={4}
                            position="relative"
                            rounded="md"
                        >
                            <Image
                                src={
                                    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png"
                                }
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                fontSize="180px"
                                color="black"
                            />
                        </Box>

                        <Text
                            textAlign="center"
                            fontSize="sm"
                            color="gray.400"
                            mb={2}
                        >
                            1. Open your mobile banking or e-wallet app
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize="sm"
                            color="gray.400"
                            mb={2}
                        >
                            2. Select the QRIS/scan QR option
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize="sm"
                            color="gray.400"
                            mb={2}
                        >
                            3. Scan this QR code and confirm payment
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Box
                        borderWidth="1px"
                        borderColor="gray.800"
                        rounded="lg"
                        p={6}
                        mb={6}
                    >
                        <Heading size="md" mb={4}>
                            Payment Details
                        </Heading>

                        <Flex justify="space-between" mb={2}>
                            <Text color="gray.400">Order ID</Text>
                            <Text fontFamily="mono">ORD-2025060985721</Text>
                        </Flex>

                        <Flex justify="space-between" mb={2}>
                            <Text color="gray.400">Payment Method</Text>
                            <Text>QRIS</Text>
                        </Flex>

                        <Flex
                            justify="space-between"
                            fontSize="lg"
                            fontWeight="bold"
                            mt={4}
                            pt={4}
                            borderTopWidth="1px"
                            borderColor="gray.700"
                        >
                            <Text>Total Amount</Text>
                            <Text>{formatRupiah(1160000)}</Text>
                        </Flex>
                    </Box>

                    {/* Help Box */}
                    <Box
                        borderWidth="1px"
                        borderColor="gray.800"
                        rounded="lg"
                        p={6}
                    >
                        <Flex align="center" mb={4}>
                            <Box as="span" fontSize="xl" mr={2}>
                                <FaInfoCircle />
                            </Box>
                            Need Help?
                        </Flex>

                        <Text color="gray.400" mb={2}>
                            • If you have any issues with payment, please
                            contact our customer support.
                        </Text>
                        <Text color="gray.400" mb={2}>
                            • To proceed with payment, please ensure you have
                            sufficient balance in your account.
                        </Text>
                        <Text color="gray.400">
                            • If you have any questions, feel free to reach out
                            to us.
                        </Text>

                        <Button mt={3} variant={"outline"}>
                            <BiSupport />
                            Contact Support
                        </Button>
                    </Box>
                </Box>
            </SimpleGrid>

            {/* Payment Status */}
            <Box textAlign="center" mt={8} w={"full"}>
                <Text color="gray.400" mb={2}>
                    We will automatically redirect you once payment is confirmed
                </Text>
            </Box>
        </Box>
    );
};

const StepComplete = () => {
    const navigate = useNavigate();
    return (
        <Box w={"full"} pt={4} textAlign="center">
            <Heading size={"lg"} mb={4}>
                Payment Successful!
            </Heading>
            <Flex justify={"center"} mb={2}>
                <Text fontSize={"8xl"}>
                    <FaCheck />
                </Text>
            </Flex>
            <Text fontSize="xl" mb={2}>
                Thank you for your order!
            </Text>
            <Text color="gray.400">
                You will receive an email confirmation shortly. And we'll
                process your order as soon as possible.
            </Text>
            <Button mt={4} onClick={() => navigate("/shipment-tracking")}>
                Track Your Order Shipment
            </Button>
        </Box>
    );
};

const steps = [
    {
        title: "Shipping Address",
        content: <Step1 />,
        description: "Select shipping address",
    },
    {
        title: "Payment Method",
        content: <Step2 />,
        description: "Select payment method",
    },
    {
        title: "Review Order",
        content: <Step3 />,
        description: "Review your order details",
    },
    {
        title: "Payment",
        content: <Step4 />,
        description: "Pay for your order",
    },
];

export default CheckoutPage;
