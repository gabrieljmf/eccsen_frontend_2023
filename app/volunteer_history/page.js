const mockVolunteerHistory = [
  {
    organization: "Green Earth",
    title: "Park Cleanup Volunteer",
    appliedDate: "2023-04-22T10:00:00"
  },
  {
    organization: "Animal Welfare Society",
    title: "Animal Shelter Helper",
    appliedDate: "2023-05-15T09:00:00"
  },
  {
    organization: "Community Food Bank",
    title: "Food Sorting Volunteer",
    appliedDate: "2023-06-10T13:00:00"
  },
  {
    organization: "Health Care for All",
    title: "Health Fair Support",
    appliedDate: "2023-07-05T08:30:00"
  },
  {
    organization: "Local Library",
    title: "Reading Program Assistant",
    appliedDate: "2023-08-20T11:00:00"
  },
  {
    organization: "Youth Sports League",
    title: "Youth Soccer Coach",
    appliedDate: "2023-09-12T14:00:00"
  },
  {
    organization: "Senior Center",
    title: "Event Organizer",
    appliedDate: "2023-10-03T15:00:00"
  },
  {
    organization: "Beach Cleanup Group",
    title: "Beach Cleanup Crew",
    appliedDate: "2023-11-22T09:00:00"
  },
  {
    organization: "Neighborhood Watch",
    title: "Safety Volunteer",
    appliedDate: "2023-12-15T17:00:00"
  }
];


import React from 'react';
import { Box, Button, Input, Table, Thead, Tbody, Tr, Th, Td, Text, Stack, Flex } from '@chakra-ui/react';
import { Header } from "../components/header";


const VolunteerHistoryPage = () => {
  return (
    <div>
    <Header />
    <Box p={5}>
      <Box border="1px" bg="white" borderColor="gray.300" borderRadius="md" p={3} mb={4}>
        <Text fontSize="2xl">Volunteer History</Text>

      </Box>

      <Flex mb={4} justifyContent="space-between" flexWrap="wrap">
        <Stack direction="row" spacing={4}>
          <Input placeholder="Search by title or organization" bg="white" minWidth="500px"/>
          <Input type="date" bg="white"/>
          <Input type="date" bg="white"/>
        </Stack>
        
        <Stack direction="row" spacing={4} >
        <Button colorScheme="blue" width="400px" whiteSpace="nowrap" >Browse More Opportunities</Button>

        </Stack>
      </Flex>

      <Table variant="simple" bg="white">
        <Thead>
          <Tr>
            <Th>Organization</Th>
            <Th>Title</Th>
            <Th>Date Applied</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockVolunteerHistory.map((entry, index) => (
            <Tr key={index}>
              <Td>{entry.organization}</Td>
              <Td>{entry.title}</Td>
              <Td>{new Date(entry.appliedDate).toLocaleDateString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
    </div>
  );
};

export default VolunteerHistoryPage;
