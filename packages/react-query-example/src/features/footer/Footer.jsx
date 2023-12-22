import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';
import { colors } from '../../lib/colors';
import { status } from '../../lib/status';

const FooterHeading = ({ children }) => {
  return (
    <Text
      fontSize={'md'}
      fontWeight={'bold'}
      my={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const statusOptions = status.map((status) => (
    <Radio
      key={status}
      value={status}>
      {status}
    </Radio>
  ));

  const colorOptions = colors.map((color) => (
    <Checkbox
      key={color.id}
      value={color.value}>
      <Flex
        alignItems={'center'}
        gap={1}>
        <Square
          size={'4'}
          backgroundColor={color.value}
        />
        {color.label}
      </Flex>
    </Checkbox>
  ));

  return (
    <Flex gap={4}>
      <Box>
        <FooterHeading>Quick actions</FooterHeading>

        <Flex
          flexDirection={'column'}
          gap={2}>
          <Button>Mark all todo as completed</Button>
          <Button>Clear all completed</Button>
        </Flex>
      </Box>

      <Box>
        <FooterHeading>Remaining</FooterHeading>

        <Text textAlign={'center'}>
          <Text
            as='b'
            fontWeight={'bold'}>
            {1}
          </Text>{' '}
          remaining todos
        </Text>
      </Box>

      <Box>
        <FooterHeading>Filter by status</FooterHeading>

        <RadioGroup defaultValue='All'>
          <Stack
            spacing={[1, 1]}
            direction={['column', 'column']}>
            {statusOptions}
          </Stack>
        </RadioGroup>
      </Box>

      <Box>
        <FooterHeading>Filter by color</FooterHeading>

        <CheckboxGroup>
          <Stack
            spacing={[1, 1]}
            direction={['column', 'column']}>
            {colorOptions}
          </Stack>
        </CheckboxGroup>
      </Box>
    </Flex>
  );
};

export default Footer;
