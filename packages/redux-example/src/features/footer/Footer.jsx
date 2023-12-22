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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();
  const remainingTodos = useSelector(
    (state) => state.todos.items.filter((todo) => !todo.completed).length,
  );
  const filters = useSelector((state) => state.todos.filters);

  const onStatusChange = (status) => {
    dispatch({ type: 'todos/filterStatus', payload: { status } });
  };

  const onColorsChange = (colors) => {
    dispatch({ type: 'todos/filterColors', payload: { colors } });
  };

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
            {remainingTodos}
          </Text>{' '}
          remaining todos
        </Text>
      </Box>

      <Box>
        <FooterHeading>Filter by status</FooterHeading>

        <RadioGroup
          defaultValue='All'
          onChange={onStatusChange}>
          <Stack
            spacing={[1, 1]}
            direction={['column', 'column']}>
            {statusOptions}
          </Stack>
        </RadioGroup>
      </Box>

      <Box>
        <FooterHeading>Filter by color</FooterHeading>

        <CheckboxGroup
          defaultValue={filters.colors}
          onChange={onColorsChange}>
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
