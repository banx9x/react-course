import { Box, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const Header = ({ onSubmit }) => {
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
      onSubmit(text); // mutation.mutate
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
