import { Box, Flex, Button } from '@chakra-ui/react';

export function Navbar() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="gray.800"
      zIndex="1000"
      px={6}
      py={3}
      boxShadow="md"
    >
      <Flex gap={4} justify="center">
        <Button as="a" href="#home" variant="ghost" colorScheme="teal">
          Início
        </Button>
        <Button as="a" href="#projects" variant="ghost" colorScheme="teal">
          Projetos
        </Button>
        <Button as="a" href="#certificates" variant="ghost" colorScheme="teal">
          Certificados
        </Button>
      </Flex>
    </Box>
  );
}
