import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container maxWidth={'4xl'}>
      <Flex
        minHeight={'100vh'}
        flexDirection={'column'}
        justifyContent={'center'}>
        <Box
          fontSize={'192px'}
          fontWeight={500}
          lineHeight={1}
          mb={8}>
          404
        </Box>

        <Box mb={8}>
          <Text>Whoops!</Text>
          <Text>We couldn't found that page</Text>
        </Box>

        <Button
          as={Link}
          to={'/'}
          _dark={{
            backgroundColor: 'white',
            color: 'black',
          }}
          width={72}>
          Main page
        </Button>
      </Flex>
    </Container>
  );
}
