import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} textAlign="center">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>Welcome to Your Blank Canvas</Heading>
          <Text fontSize="lg">Start creating your amazing application here.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;