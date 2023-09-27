import { useState } from "react";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ErrorMessage } from "@hookform/error-message";

type AccountInfo = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type ProfileInfo = {
    country: string;
    street: string;
    city: string;
    state: string;
    zip: string;
};

type SocialInfo = {
    website: string;
    about: string;
};

type ExampleFormValues = {
    account: AccountInfo;
    profile: ProfileInfo;
    social: SocialInfo;
};

const exampleForm = z.object({
    account: z.object({
        firstName: z
            .string({
                required_error: "Username is required",
            })
            .min(2, "First name must be at least 2 characters"),
        lastName: z
            .string({
                required_error: "Password is required",
            })
            .min(2, "Last name must be at least 2 characters"),
        email: z
            .string({
                required_error: "Email is required",
            })
            .email({ message: "Invalid email address" }),
        password: z
            .string({
                required_error: "Password is required",
            })
            .min(6, "Password must be at least 6 characters")
            .refine((password) => {
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
                    password
                );
                const hasDigit = /[0-9]/.test(password);

                return (
                    hasUpperCase && hasLowerCase && hasSpecialChar && hasDigit
                );
            }, "Password must contain at least on upper case, one lower case, one special and one digit character"),
    }),
    profile: z.object({}),
    social: z.object({}),
});

const Registration = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const {
        register,
        formState: { errors },
    } = useFormContext<ExampleFormValues>();

    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                User Registration
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                        First name
                    </FormLabel>
                    <Input
                        {...register("account.firstName")}
                        isInvalid={!!errors.account?.firstName}
                        id="first-name"
                        placeholder="First name"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="account.firstName"
                        render={(data) => (
                            <Text fontSize={"md"} color={"red.400"} mt={1}>
                                {data.message}
                            </Text>
                        )}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                        Last name
                    </FormLabel>
                    <Input
                        {...register("account.lastName")}
                        isInvalid={!!errors.account?.lastName}
                        id="last-name"
                        placeholder="First name"
                    />
                    <ErrorMessage
                        errors={errors}
                        name="account.lastName"
                        render={(data) => (
                            <Text fontSize={"md"} color={"red.400"} mt={1}>
                                {data.message}
                            </Text>
                        )}
                    />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                    Email address
                </FormLabel>
                <Input
                    {...register("account.email")}
                    isInvalid={!!errors.account?.email}
                    id="email"
                    type="email"
                />
                {errors.account?.email ? (
                    <ErrorMessage
                        errors={errors}
                        name="account.email"
                        render={(data) => (
                            <Text fontSize={"md"} color={"red.400"} mt={1}>
                                {data.message}
                            </Text>
                        )}
                    />
                ) : (
                    <FormHelperText>
                        We&apos;ll never share your email.
                    </FormHelperText>
                )}
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
                    Password
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        {...register("account.password")}
                        isInvalid={!!errors.account?.password}
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <ErrorMessage
                    errors={errors}
                    name="account.password"
                    render={(data) => (
                        <Text fontSize={"md"} color={"red.400"} mt={1}>
                            {data.message}
                        </Text>
                    )}
                />
            </FormControl>
        </>
    );
};

const Profile = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<ExampleFormValues>();

    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                User Details
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                >
                    Country / Region
                </FormLabel>
                <Select
                    id="country"
                    autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("profile.country")}
                >
                    <option value={"United States"}>United States</option>
                    <option value={"Canada"}>Canada</option>
                    <option value={"Mexico"}>Mexico</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    Street address
                </FormLabel>
                <Input
                    type="text"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("profile.street")}
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    City
                </FormLabel>
                <Input
                    type="text"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("profile.city")}
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    State / Province
                </FormLabel>
                <Input
                    type="text"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("profile.state")}
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: "gray.50",
                    }}
                    mt="2%"
                >
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    {...register("profile.zip")}
                />
            </FormControl>
        </>
    );
};

const Social = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<ExampleFormValues>();

    return (
        <>
            <Heading w="100%" textAlign={"center"} fontWeight="normal">
                Social Handles
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: "gray.50",
                        }}
                    >
                        Website
                    </FormLabel>
                    <InputGroup size="sm">
                        <InputLeftAddon
                            bg="gray.50"
                            _dark={{
                                bg: "gray.800",
                            }}
                            color="gray.500"
                            rounded="md"
                        >
                            http://
                        </InputLeftAddon>
                        <Input
                            type="tel"
                            placeholder="www.example.com"
                            focusBorderColor="brand.400"
                            rounded="md"
                            {...register("social.website")}
                        />
                    </InputGroup>
                </FormControl>

                <FormControl id="email" mt={1}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: "gray.50",
                        }}
                    >
                        About
                    </FormLabel>
                    <Textarea
                        placeholder="you@example.com"
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: "sm",
                        }}
                        {...register("social.about")}
                    />
                    <FormHelperText>
                        Brief description for your profile. URLs are
                        hyperlinked.
                    </FormHelperText>
                </FormControl>
            </SimpleGrid>
        </>
    );
};

export default function Example() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);

    const methods = useForm<ExampleFormValues>({
        resolver: zodResolver(exampleForm),
        mode: "onBlur",
    });

    return (
        <>
            <Box maxWidth={800} m={"20px auto"}>
                <Heading textAlign={"center"}>React Hook Form Example</Heading>
            </Box>

            <FormProvider {...methods}>
                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                >
                    <Progress
                        hasStripe
                        value={progress}
                        mb="5%"
                        mx="5%"
                        isAnimated
                    ></Progress>
                    {step === 1 ? (
                        <Registration />
                    ) : step === 2 ? (
                        <Profile />
                    ) : (
                        <Social />
                    )}
                    <ButtonGroup mt="5%" w="100%">
                        <Flex w="100%" justifyContent="space-between">
                            <Flex>
                                <Button
                                    onClick={() => {
                                        setStep(step - 1);
                                        setProgress(progress - 33.33);
                                    }}
                                    isDisabled={step === 1}
                                    colorScheme="teal"
                                    variant="solid"
                                    w="7rem"
                                    mr="5%"
                                >
                                    Back
                                </Button>
                                <Button
                                    w="7rem"
                                    isDisabled={
                                        Object.keys(methods.formState.errors)
                                            .length !== 0 || step === 3
                                    }
                                    onClick={() => {
                                        setStep(step + 1);
                                        if (step === 3) {
                                            setProgress(100);
                                        } else {
                                            setProgress(progress + 33.33);
                                        }
                                    }}
                                    colorScheme="teal"
                                    variant="outline"
                                >
                                    Next
                                </Button>
                            </Flex>
                            {step === 3 ? (
                                <Button
                                    w="7rem"
                                    colorScheme="red"
                                    variant="solid"
                                    onClick={(e) => {
                                        console.log("LoL");

                                        methods.handleSubmit((data) => {
                                            console.log(data);
                                            toast({
                                                title: "Submitted",
                                                description: JSON.stringify(
                                                    data,
                                                    undefined,
                                                    2
                                                ),
                                                status: "success",
                                                duration: 3000,
                                                isClosable: true,
                                            });
                                        })(e);
                                    }}
                                >
                                    Submit
                                </Button>
                            ) : null}
                        </Flex>
                    </ButtonGroup>
                </Box>
            </FormProvider>
        </>
    );
}
