import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Heading,
  VStack,
  HStack,
  Box,
  Center,
  Select,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";

const Recommendations = () => {
  return (
    <>
      <VStack bgGradient="linear(to-l, #c2e8fc, #ebf8ff)">
        <Text fontSize="4xl" color="black" mt={10}>
          Recommended For You:
        </Text>
        <SimpleGrid m={10} spacing={4} columns={3} justifyItems="center">
          <Card>
            <CardHeader>
              <Heading size="md">Grant Administrator</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="xs">
                Better Days Foundation is a non-governmental organization, whose
                vision is to empower vulnerable individuals through acts of
                love, compassion, and generosity, regardless of religion, race,
                ethnicity, or gender. We serve locally and focus on tackling
                root causes of poverty to create sustainable and lasting change
                in the lives of those we serve. Are you a creative and
                innovative thinker with customer and analytical service skills?
                If yes, come volunteer with us! As a Grant Administrator , you
                will ensure that BD Foundation’s grant-making and related
                processes, documents, procedures and implementation are executed
                professionally, efficiently, on schedule, and in a manner
                consistent with best practices.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md">Canva Graphic Designer</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="xs">
                Do you have a passion for design, technology, and education? The
                STEM Montessori Academy of Canada is looking for a creative
                volunteer for the Canva Graphic Designer position. Working
                closely with the Marketing Team and the Social Media
                Coordinator, you will take the lead on developing STEM Canada’s
                online presence (infographics, brochures, etc.), help spread
                awareness of STEM, and share information on our programs and
                initiatives. This is a remote position within Canada.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md">Case Manager</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="xs">
                The Case Manager plays a key role in advocacy efforts. This
                individual identifies advocates to work on Human Rights cases
                and reaches out to them with brief descriptions of cases. The
                Case Manager will also be in charge of matching advocates to
                cases according to their skills and availability and informing
                advocates of protocols when working with vulnerable populations.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </SimpleGrid>
      </VStack>
      <VStack bg={"#ffffff"}>
        <Box m={10}>
          <Center></Center>
          <Box>
            <Text fontSize="5xl" color="black" as="b">
              Use the VolunteerConnector to
            </Text>
          </Box>
          <Center>
            <Box>
              <Text fontSize="5xl" color="#0098d9" as="b">
                volunteer with friends
              </Text>
            </Box>
          </Center>
        </Box>
        <HStack>
          <FormControl mx={10} mb={10}>
            <FormLabel color="black" as="b">
              I'm Interested In:
            </FormLabel>
            <Select
              variant="outline"
              color="black"
              placeholder="Choose causes..."
              minW={"300px"}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <FormControl mx={10} mb={10}>
            <FormLabel color="black" as="b">
              And I would like to do:
            </FormLabel>
            <Select
              variant="outline"
              color="black"
              placeholder="Choose activities..."
              minW={"300px"}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </HStack>
        <Flex w="80%" h="100vh" m={10}>
          <Box w="20%" bg="#cccccc">
            <Text color="black">Filter</Text>
          </Box>
          <Box w="80%" bg="#7a7a7a">
            <Text color="black">Items</Text>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default Recommendations;
