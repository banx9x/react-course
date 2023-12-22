import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Square,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { colors } from '../../lib/colors';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onToggle = (e) => {
    dispatch({ type: 'todos/toggle', payload: { id: todo.id } });
  };

  const onSelect = (color) => {
    dispatch({
      type: 'todos/changeColor',
      payload: { id: todo.id, color },
    });
  };

  const colorOptions = colors.map((color) => (
    <MenuItemOption
      key={color.id}
      value={color}>
      <Flex
        gap={2}
        alignItems={'center'}>
        <Square
          size={4}
          backgroundColor={color.value}
        />{' '}
        {color.label}
      </Flex>
    </MenuItemOption>
  ));

  return (
    <Flex
      alignItems={'center'}
      border={'1px'}
      borderColor={'blackAlpha.200'}
      rounded={'md'}
      py={1}
      px={2}>
      <Checkbox
        defaultChecked={todo.completed}
        mr={2}
        onChange={onToggle}
      />
      <Text>{todo.text}</Text>

      <Flex
        ml={'auto'}
        alignItems={'center'}
        gap={2}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}>
            <Flex
              gap={2}
              alignItems={'center'}>
              <Square
                size={4}
                backgroundColor={todo.color?.value}
              />{' '}
              {todo.color?.label}
            </Flex>
          </MenuButton>
          <MenuList
            minWidth={32}
            width={32}>
            <MenuOptionGroup
              value={todo.color}
              title='Choose color'
              onChange={onSelect}>
              {colorOptions}
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <IconButton icon={<CloseIcon />} />
      </Flex>
    </Flex>
  );
};

export default TodoItem;
