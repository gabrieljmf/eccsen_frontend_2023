import React from 'react';
import { Header } from "../components/header";
import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    Button,
    Container,
    Checkbox,
    Grid,
    GridItem,
} from '@chakra-ui/react';

const causesData = [
    { name: 'Advocacy and Law' },
    { name: 'Agriculture, Horticulture, Gardening' },
    { name: 'Animal Services' },
    { name: 'Anti-Racism' },
    { name: 'Arts and Culture' },
    { name: 'Children, Youth, Family' },
    { name: 'Community Development' },
    { name: 'Computers and IT' },
    { name: 'COVID-19' },
    { name: 'Disability Services' },
    { name: 'Disaster Relief' },
    { name: 'Diversity and Immigration' },
    { name: 'Elections' },
    { name: 'Employment and Career Mentorship' },
    { name: 'Environment' },
    { name: 'Food Security' },
    { name: 'Gender and Identity' },
    { name: 'Health and Wellness' },
    { name: 'Indigenous' },
    { name: 'International Development' },
    { name: 'LGBTQ+' },
    { name: 'Literacy, Libraries, Learning' },
    { name: 'Nonprofit Services' },
    { name: 'Older Adults' },
    { name: 'Poverty and Homelessness' },
    { name: 'Professional Associations' },
    { name: 'Refugee and Settlement' },
    { name: 'Seniors' },
    { name: 'Special Events and Festivals' },
    { name: 'Spirituality and Faith' },
    { name: 'Sports and Recreation' },
];

const CausesPage = () => {
    return (
        <div>
            <Header />
            <Container maxW="container.xl" p={5} bg="white">
                <Flex direction={{ base: 'column', md: 'row' }}>
                    <VStack w={{ base: 'full', md: '80%' }} p={5} spacing={5} color="black" bg="white">
                        <Heading mb={4}>Causes</Heading>
                        <Text mb={8}>
                            What causes are important to you? We will make recommendations based on the causes you follow.
                        </Text>
                        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                            {causesData.map((cause, index) => (
                                <GridItem key={index}>
                                    <Box borderWidth="1px" borderColor='gray.400' borderRadius="lg" p={3} boxShadow="sm">
                                        <Checkbox value={cause.name}>
                                            {cause.name}
                                        </Checkbox>
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>
                        <Button alignSelf="flex-end" mt={4} colorScheme="red" size="lg">
                            Update
                        </Button>
                    </VStack>
                </Flex>
            </Container>
        </div>
    );
};

export default CausesPage;
