import { Flex } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList = ({ data = [] }) => {
  const items = data.map((item) => (
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
