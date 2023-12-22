import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => {
    const filterByStatus = state.todos.items.filter((todo) => {
      if (state.todos.filters.status === 'Active') {
        return !todo.completed;
      } else if (state.todos.filters.status === 'Completed') {
        return todo.completed;
      } else {
        return true;
      }
    });

    const filterByColor = filterByStatus.filter((todo) => {
      if (state.todos.filters.colors.length == 0) {
        return true;
      }

      return state.todos.filters.colors.includes(todo.color);
    });

    return filterByColor;
  });

  const items = todos.map((item) => (
    <TodoItem
      key={item.id}
      todo={item}
    />
  ));

  return (
    <Flex
      flexDirection={'column'}
      minHeight={'298px'}
      mt={2}
      p={2}
      gap={2}
      border={'1px'}
      borderColor={'blackAlpha.200'}
      rounded={'md'}>
      {items}
    </Flex>
  );
};

export default TodoList;
