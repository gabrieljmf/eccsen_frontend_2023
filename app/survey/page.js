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
    //   const [selectedActivities, setSelectedActivities] = useState([]);

    return (
        <Container maxW="container.xl" p={5} bg="white">

            <Flex
                bg="white"
                p={4}
                justifyContent="space-between"
                alignItems="center"
                borderBottomWidth={1}
                borderColor="gray.200"
            >
                <Box>
                    <Link href="/browse-opportunities" _hover={{ textDecoration: "none" }} color="black">
                        <Text fontSize="xl" fontWeight="bold">Browse Opportunities</Text>
                    </Link>
                </Box>
                <Box>
                    <Link href="/dashboard" _hover={{ textDecoration: "none" }} color="black">
                        <Text fontSize="xl" fontWeight="bold">Dashboard</Text>
                    </Link>
                </Box>
            </Flex>
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
                <VStack
                    w={{ base: 'full', md: '80%' }}
                    p={5}
                    spacing={5}
                    color="black"
                    bg="white"
                >
                    <Heading mb={4} color="black">Activities</Heading>
                    <Text mb={8} color="black">
                        What would you like to do? Choose some Activities that you are interested in so that we can show you opportunities that match.
                    </Text>
                    <CheckboxGroup colorScheme="red">
                        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                            {activitiesData.map((activity, index) => (
                                <GridItem key={index}>
                                    <Accordion allowToggle defaultIndex={[0]}>
                                        <AccordionItem border="none">
                                            <AccordionButton _expanded={{ bg: 'gray.100', borderRadius: 'md' }}>
                                                <Box flex="1" textAlign="left">
                                                    {activity.category}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4} bg="white">
                                                <Stack pl={6} mt={1} spacing={1}>
                                                    {activity.details.map((detail) => (
                                                        <Checkbox key={detail} value={detail} colorScheme="red">
                                                            {detail}
                                                        </Checkbox>
                                                    ))}
                                                </Stack>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </GridItem>
                            ))}
                        </Grid>
                    </CheckboxGroup>
                    <Button alignSelf="flex-end" mt={4} colorScheme="red" size="lg">
                        Update
                    </Button>
                </VStack>
            </Flex>
        </Container>
    );
};

export default ActivitiesPage;
