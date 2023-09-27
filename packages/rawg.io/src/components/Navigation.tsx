import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Square,
    Text,
    useBoolean,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { menu } from "../config/menu";
import { NavigationItemType } from "../lib/types";
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

type NavigationItemProps = {
    item: NavigationItemType;
};

const DEFAULT_ITEM_SHOW = 3;

const NavigationItem = ({ item }: NavigationItemProps) => {
    const [show, setShow] = useBoolean(false);

    const shouldCollapse =
        item.children && item.children.length > DEFAULT_ITEM_SHOW;

    const subItems =
        shouldCollapse && !show
            ? item.children?.slice(0, DEFAULT_ITEM_SHOW)
            : item.children;

    if (subItems) {
        return (
            <Box mb={4} mt={2}>
                <Box
                    display={"block"}
                    as={NavLink}
                    to={item.href}
                    fontSize={{ lg: "24px" }}
                    lineHeight={{ lg: "28px" }}
                    fontWeight={700}
                    mb={4}
                >
                    {item.label}
                </Box>

                <Flex direction={"column"} gap={2}>
                    {subItems.map((item) => (
                        <Flex key={item.href} as={NavLink} to={item.href}>
                            <Square
                                size={8}
                                rounded={"lg"}
                                _light={{
                                    bg: "blackAlpha.200",
                                }}
                                _dark={{
                                    bg: "whiteAlpha.200",
                                }}
                                _groupHover={{
                                    _light: {
                                        bg: "blackAlpha.300",
                                    },
                                    _dark: {
                                        bg: "whiteAlpha.300",
                                    },
                                }}
                                mr={2}
                            >
                                {item.icon && typeof item.icon === "string" ? (
                                    <Image src={item.icon} alt="" />
                                ) : (
                                    <Icon as={item.icon} />
                                )}
                            </Square>

                            {item.label}
                        </Flex>
                    ))}

                    {shouldCollapse && (
                        <Box role="group">
                            <Button
                                variant={"text"}
                                width={"full"}
                                justifyContent={"flex-start"}
                                onClick={setShow.toggle}
                                leftIcon={
                                    <Square
                                        size={8}
                                        rounded={"lg"}
                                        _light={{
                                            bg: "blackAlpha.200",
                                        }}
                                        _dark={{
                                            bg: "whiteAlpha.200",
                                        }}
                                        _groupHover={{
                                            _light: {
                                                bg: "blackAlpha.300",
                                            },
                                            _dark: {
                                                bg: "whiteAlpha.300",
                                            },
                                        }}
                                    >
                                        {show ? (
                                            <ArrowUpIcon />
                                        ) : (
                                            <ArrowDownIcon />
                                        )}
                                    </Square>
                                }
                                px={0}
                            >
                                {show ? (
                                    <Text>Hide</Text>
                                ) : (
                                    <Text>Show all</Text>
                                )}
                            </Button>
                        </Box>
                    )}
                </Flex>
            </Box>
        );
    } else {
        return (
            <Box
                as={NavLink}
                to={item.href}
                fontSize={{
                    base: "20px",
                    lg: "24px",
                }}
                lineHeight={{
                    base: "24px",
                    lg: "28px",
                }}
                fontWeight={700}
                mb={4}
                mt={2}
            >
                {item.label}
            </Box>
        );
    }
};

const Navigation = () => {
    return (
        <Flex as={"nav"} flexDirection={"column"}>
            {menu.map((item) => (
                <NavigationItem key={item.href} item={item} />
            ))}
        </Flex>
    );
};

export default Navigation;
