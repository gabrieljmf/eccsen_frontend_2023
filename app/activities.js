import { useState } from 'react';
import React from 'react';
import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    Link,
    Button,
    Container,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Grid,
    GridItem,
    CheckboxGroup,
    Checkbox,
    Stack,
    Divider
} from '@chakra-ui/react';

const activitiesData = [
    {
        category: 'Accounting',
        details: ['Accounting', 'Auditing'],
    },
    {
        category: 'Caregiving',
        details: ['Animal Care', 'Beauty and Hair', 'Child Care', 'Companion/Visitor', 'Cooking', 'Fitness', 'Housekeeping', 'Mask Sewing', 'Medical Support', 'Personal Shopping'],
    },
    {
        category: 'Activism',
        details: ['Anti-Racist Advocate', 'Election Support', 'Letter Writing', 'Petition Signing', 'Protesting'],
    },
    {
        category: 'Construction, Transportation, Maintenance',
        details: ['Construction', 'Driving', 'Facility Management', 'Gardening', 'General Labour', 'Security', 'Skilled Trades', 'Traffic Control'],
    },
    {
        category: 'Design and Journalism',
        details: ['Graphic Design', 'Website Development', 'Writing'],
    },
    {
        category: 'Education, Language, and Art',
        details: ['Anti-Racist Educator', 'ESL Support or Instruction', 'Facilitation', 'Homework Helping', 'Instructor', 'Performing Music/Theatre', 'Photographing', 'Translation'],
    },
    {
        category: 'Environmental',
        details: ['Agriculture Advising', 'Disaster Relief', 'Environmental Advocate', 'Outdoor Coordinator'],
    },
    {
        category: 'Finance',
        details: ['Finance', 'Treasurer'],
    },
    {
        category: 'IT Systems and Support',
        details: ['IT Support'],
    },
    {
        category: 'Legal',
        details: ['Advocacy', 'Human Rights Advocacy', 'Legal Advising'],
    },
    {
        category: 'Marketing',
        details: ['Marketing', 'Public Speaking', 'Social Media'],
    },
    {
        category: 'Organizational Leadership',
        details: ['Board Member', 'Consultant or Advisor'],
    },
    {
        category: 'People Engagement',
        details: ['HR Support', 'Supervision', 'Volunteer Coordination'],
    },
    {
        category: 'PR, Fundraising, Events',
        details: ['Bartending', 'Casino', 'Event Help', 'Event Planning', 'Fundraising', 'Grant Writing'],
    },
    {
        category: 'Program Support',
        details: ['Arts and Crafts Coordinator', 'Camp Counselling', 'Committee Member', 'Community Outreach', 'Coordination', 'Docent', 'Exhibitor', 'Outing Assistant', 'Program Manager', 'Project Management', 'Sport Coach', 'Wayfinder'],
    },
    {
        category: 'Research',
        details: ['Data Analysis', 'Evaluation', 'Measurement', 'Research'],
    },
    {
        category: 'Sales',
        details: ['Customer Service'],
    },
    {
        category: 'Social Care',
        details: ['Counselling', 'Mediation', 'Mentoring', 'Peer Support', 'Settlement', 'Social Work', 'Telephone Counselling'],
    },
    // Add additional categories and details as needed
];


const ActivitiesPage = () => {
      const [selectedActivities, setSelectedActivities] = useState([]);

    // Function to handle selecting/deselecting all checkboxes in a category
    const handleSelectAll = (category, details) => {
        setSelectedActivities((prevSelected) => {
            const newSelected = { ...prevSelected };
            if (newSelected[category]?.length === details.length) {
                // All items are selected, so deselect all
                newSelected[category] = [];
            } else {
                // Not all items are selected, so select all
                newSelected[category] = details;
            }
            return newSelected;
        });
    };

    // Function to handle individual checkbox toggle
    const handleCheckboxChange = (category, detail) => {
        setSelectedActivities((prevSelected) => {
            const newSelected = { ...prevSelected };
            if (newSelected[category]?.includes(detail)) {
                newSelected[category] = newSelected[category].filter((item) => item !== detail);
            } else {
                newSelected[category] = [...(newSelected[category] || []), detail];
            }
            return newSelected;
        });
    };

    return (
        <Container maxW="container.xl" p={5} bg="white">
            <Flex direction={{ base: 'column', md: 'row' }}>
                {/* Sidebar */}
                <VStack
                    w="20%"
                    bg="gray.50"
                    p={5}
                    borderRightWidth={1}
                    borderColor="gray.20"
                    spacing={4}
                    align="stretch"
                    color="black"
                >
                    <Link p={2} _hover={{ bg: "gray.100" }} borderRadius="md">Home</Link>
                    <Link p={2} _hover={{ bg: "gray.100" }} borderRadius="md">Your Profile</Link>
                    <Divider borderColor="gray.300" />

                    <Link p={2} _hover={{ bg: "gray.100" }} borderRadius="md">Activities</Link>
                    <Link p={2} _hover={{ bg: "gray.100" }} borderRadius="md">Causes</Link>
                    <Link p={2} _hover={{ bg: "gray.100" }} borderRadius="md">Preferences</Link>
                    <Link p={2} _hover={{ bg: "gray.100" }} borderRadius="md">Organizations</Link>


                    {/* Add more sidebar items */}
                </VStack>

                {/* Main content */}
                <VStack w={{ base: 'full', md: '80%' }} p={5} spacing={5} color="black" bg="white">
      <Heading mb={4}>Activities</Heading>
      <Text mb={8}>
        What would you like to do? Choose some Activities that you are interested in so that we can show you opportunities that match.
      </Text>
      {activitiesData.map((category, index) => (
        <Accordion allowToggle key={index}>
          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {category.category}
              </Box>
              <Checkbox
                isChecked={selectedActivities[category.category]?.length === category.details.length}
                onChange={() => handleSelectAll(category.category, category.details)}
              />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Stack pl={6} mt={1} spacing={1}>
                {category.details.map((detail) => (
                  <Checkbox
                    key={detail}
                    isChecked={selectedActivities[category.category]?.includes(detail)}
                    onChange={() => handleCheckboxChange(category.category, detail)}
                  >
                    {detail}
                  </Checkbox>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
      <Button alignSelf="flex-end" mt={4} colorScheme="blue" size="lg">
        Update
      </Button>
    </VStack>
            </Flex>
        </Container>
    );
};

export default ActivitiesPage;
