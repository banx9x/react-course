import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Hide,
  Show,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SearchForm from '../components/SearchForm';

const Root = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isAboveLg] = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    if (isAboveLg && isOpen) {
      onClose();
    }
  }, [isAboveLg, isOpen, onClose]);

  return (
    <Grid
      templateAreas={{
        base: `"header"
                  "main"`,
        lg: `"header header"
                            "navigation main"`,
      }}
      templateRows={'auto 1fr'}
      templateColumns={{ base: '1fr', lg: '220px 1fr' }}
      minHeight={'100vh'}>
      <GridItem area={'header'}>
        <Box
          as={'header'}
          px={{ base: 4, lg: 8 }}
          py={{ base: 2, lg: 4 }}>
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Center height={'60px'}>
              <Box
                as={NavLink}
                fontSize={18}
                marginRight={'12px'}
                fontWeight={900}
                letterSpacing={5}
                textTransform={'uppercase'}>
                RAWG
              </Box>
            </Center>

            <Hide below='sm'>
              <Center
                height={'60px'}
                flex={'1'}>
                <Box
                  width={'full'}
                  pr={'12px'}>
                  <SearchForm />
                </Box>
              </Center>
            </Hide>

            <Center height={'60px'}>
              <Button
                variant={'ghost'}
                onClick={toggleColorMode}>
                {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              </Button>

              <Show below='lg'>
                <Button
                  variant={'ghost'}
                  onClick={onOpen}>
                  <HamburgerIcon />
                </Button>
              </Show>
            </Center>
          </Flex>

          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Box
                  fontSize={18}
                  marginRight={'12px'}
                  fontWeight={900}
                  letterSpacing={5}
                  textTransform={'uppercase'}>
                  RAWG
                </Box>
              </DrawerHeader>

              <DrawerBody>
                <Hide above='sm'>
                  <Box
                    width={'full'}
                    mb={4}>
                    <SearchForm />
                  </Box>
                </Hide>

                <Flex
                  as={'nav'}
                  flexDirection={'column'}>
                  <Navigation />
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </GridItem>

      <Hide below='lg'>
        <GridItem area={'navigation'}>
          <Box
            as={'aside'}
            pl={{ base: 4, lg: 8 }}
            pt={{ base: 4, lg: 8 }}>
            <Flex flexDirection={'column'}>
              <Navigation />
            </Flex>
          </Box>
        </GridItem>
      </Hide>

      <GridItem
        area={'main'}
        pl={5}
        pr={{ base: 4, lg: 8 }}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Root;
