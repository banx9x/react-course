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
import { colors } from '../../lib/colors';
import { useMutation, useQueryClient } from 'react-query';

const TodoItem = ({ todo }) => {
  const client = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteTodo } = useMutation(
    () => {
      return fetch(
        `https://jsonserver-fhn2.onrender.com/api/todos/${todo.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then((res) => res.json());
    },
    {
      onSuccess: () => {
        client.invalidateQueries('todos');
      },
      onError: (error) => {
        alert('Lỗi xóa todo', String(error.message));
      },
    },
  );

  const { isLoading: isUpdating, mutate: updateTodo } = useMutation(
    () => {
      return fetch(
        `https://jsonserver-fhn2.onrender.com/api/todos/${todo.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: todo.title,
            completed: !todo.completed,
          }),
        },
      ).then((res) => res.json());
    },
    {
      onSuccess: () => {
        client.invalidateQueries('todos');
      },
      onError: (error) => {
        alert('Lỗi xóa todo', String(error.message));
      },
    },
  );

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
        disabled={isUpdating}
        onChange={updateTodo}
      />
      <Text>{todo.title}</Text>

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
              title='Choose color'>
              {colorOptions}
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <IconButton
          icon={<CloseIcon />}
          disabled={isDeleting}
          onClick={deleteTodo}
        />
      </Flex>
    </Flex>
  );
};

export default TodoItem;