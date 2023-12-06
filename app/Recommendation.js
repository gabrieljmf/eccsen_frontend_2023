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
  Link,
} from "@chakra-ui/react";

const Recommendations = () => {
  const cardData = [
    {
      id: 1,
      title: "Volunteer Marketing",
      content:
        "The Canadian Network for International Surgery (CNIS) is looking for motivated students or a individual to assist with marketing of email send outs, updating Annual Report and various other marketing initiatives. The CNIS is engaged in capacity building projects throughout the world, and is mainly focussed on Africa. The marketing person will work closely with the CNIS administrative team to market surgical training models, educational materials, and other events.",
    },
    {
      id: 2,
      title: "Peer Volunteer",
      content:
        "The Canadian Network for International Surgery (CNIS) is looking for motivated students or a individual to assist with marketing of email send outs, updating Annual Report and various other marketing initiatives. The CNIS is engaged in capacity building projects throughout the world, and is mainly focussed on Africa. The marketing person will work closely with the CNIS administrative team to market surgical training models, educational materials, and other events.",
    },
    {
      id: 3,
      title: "Volunteer Ambassador",
      content:
        "PICS Intercultural Youth Service Corps (IYSCorps) and Intercultural Youth Microgrant Service Corps (IYMSCorps) program is looking for passionate youth all across B.C. between the ages of 15-29 years who are excited to give back to their communities, learn valuable skills, gain hands-on experience and build a better Canada. Our program brings together a diverse group of motivated youth to become active community ambassadors.",
    },
    {
      id: 4,
      title: "Event Operations Coordinator",
      content:
        "Come be a part of a well-oiled crew at VAFF. Event Operations Coordinators work closely with the Event Operations Director to plan and execute events throughout the festival year. The position focuses mainly on event operations execution, and also includes day-of event front of house operations as required. The position focuses on logistics and the behind-the-scenes aspects of event operations throughout the year (project / campaign based).",
    },
    {
      id: 5,
      title: "Co-Volunteer Manager",
      content:
        "Come join a team that provides opportunities for community volunteering, for creating a community amongst strangers, and for motivating people to do their best in a supportive and inclusive environment.",
    },
    {
      id: 6,
      title: "Business Development Manager",
      content:
        "Working closely with VAFF Marketing teams by calling out to prospects who match our target audience, gathering information about their needs to ensure that the solution offering is a good fit, and securing appointments for follow-up. Generating leads by multiple methods including cold-calls, emails, website inquiries, social media efforts and appointment scheduling Participate in team meeting(s)",
    },
    {
      id: 7,
      title: "Media Relations Specialist",
      content:
        "OVERVIEW: Writing for and schmoozing with the media DETAILS: Writing media releases, supporting events, and coordinating with Media partners at events. Maintaining relationships with Media partners and Media contacts. Pitching content to Media partners and Media contacts. An interest in multicultural media campaign. Assisting with coordinating media interviews with filmmakers, VIP guests, panelists.",
    },
    {
      id: 8,
      title: "Graphic Designer",
      content:
        "OVERVIEW: Graphic Designer will use their artistic abilities to communicate ideas and solve problems while staying within VAFF’s brand guidelines. Working with the Project Executive/Marketing Director, to create collateral materials for VAFF’s annual festival or MAMM or VAFF Industry Program or other campaign projects.",
    },
  ];

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
              Use BCharity to
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
        <Flex w="80%" h="100vh" m={10} justifyContent={"Center"}>
          <Box id="opportunities" w="80%">
            <SimpleGrid m={4} columns={2} spacing={4}>
              {cardData.map((card) => (
                <Link key={card.id} href="/opportunity">
                  <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                    <Text fontSize="xl" color="black">
                      {card.title}
                    </Text>
                    <Text fontSize="sm" color="black">
                      {card.content}
                    </Text>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default Recommendations;
