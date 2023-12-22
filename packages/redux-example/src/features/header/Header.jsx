import { Box, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (text.trim().length === 0) {
        return;
      }

      setText('');
      dispatch({ type: 'todos/add', payload: { text } });
    }
  };

  return (
    <Box as={'header'}>
      <Heading
        textAlign={'center'}
        my={10}>
        Redux Example
      </Heading>

      <Input
        type='text'
        placeholder='What do you want to do?'
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};
