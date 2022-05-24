/** @format */
import { Stack, Box } from "@chakra-ui/react";
import { Button, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";

// This is a demo file for ChakraUI and Tailwindcss working together

function Tailchakra() {
  return (
    <>
      <button className="bg-blue-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
      <div className="inline-flex">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
      <Stack direction="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py={12}
          bgImage="url('https://bit.ly/2Z4KKcF')"
          bgPosition="center"
          bgRepeat="no-repeat"
          mb={2}
        >
          <ButtonGroup gap="4">
            <Button colorScheme="whiteAlpha">WhiteAlpha</Button>
            <Button colorScheme="blackAlpha">BlackAlpha</Button>
          </ButtonGroup>
        </Box>

        <Wrap spacing={4}>
          <WrapItem>
            <Button colorScheme="gray">Gray</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="red">Red</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="orange">Orange</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="yellow">Yellow</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="green">Green</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="teal">Teal</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="blue">Blue</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="cyan">Cyan</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="purple">Purple</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="pink">Pink</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="linkedin">Linkedin</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="facebook">Facebook</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="messenger">Messenger</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="whatsapp">Whatsapp</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="twitter">Twitter</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="telegram">Telegram</Button>
          </WrapItem>
        </Wrap>
      </Stack>
    </>
  );
}

export default Tailchakra;
