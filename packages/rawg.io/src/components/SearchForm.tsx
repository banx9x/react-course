import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Hide,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Kbd,
    useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const SearchForm = () => {
    const [isAboveMd] = useMediaQuery("(min-width: 768px)");
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const focusSearchInput = (e: KeyboardEvent) => {
            console.log(e);
            if (!searchInputRef.current) {
                return;
            }

            if (e.key === "Enter" && e.altKey) {
                searchInputRef.current.focus();
            }
        };

        if (isAboveMd)
            window.addEventListener("keypress", focusSearchInput, false);

        return () => {
            window.removeEventListener("keypress", focusSearchInput);
        };
    }, [isAboveMd]);

    return (
        <InputGroup
            borderRadius={24}
            height={"44px"}
            outline={"none"}
            transition={"all 0.3s linear"}
            _light={{ bg: "hsla(0,0%,0%,.06)" }}
            _dark={{
                backgroundColor: "hsla(0,0%,100%,.16)",
            }}
            _hover={{
                _light: {},
                _dark: {
                    bg: "#ffffff",
                    color: "#000000",
                },
            }}
            _focus={{
                _light: {
                    color: "#000000",
                },
                _dark: {
                    backgroundColor: "#ffffff",
                },
                boxShadow: "none",
                border: 0,
                animation: "none",
            }}
            _focusWithin={{
                _dark: {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                },
            }}
        >
            <InputLeftElement mt={"2px"}>
                <SearchIcon _dark={{ color: "inherit" }} />
            </InputLeftElement>
            <Input
                ref={searchInputRef}
                borderRadius={24}
                height={"44px"}
                bg={"transparent"}
                _hover={{
                    _dark: {
                        color: "#000000",
                    },
                }}
                _focus={{
                    _dark: {
                        boxShadow: "none",
                    },
                    color: "#000000",
                    border: 0,
                    outline: "none",
                }}
                border={0}
            />
            <Hide below="md">
                <InputRightElement w={32} color={"#999999"}>
                    <Box>
                        <Kbd>ALT</Kbd> + <Kbd>ENTER</Kbd>
                    </Box>
                </InputRightElement>
            </Hide>
        </InputGroup>
    );
};

export default SearchForm;
