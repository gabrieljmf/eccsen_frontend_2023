import React from "react";
import { Header } from "../components/header";
import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Button,
  Divider,
  Heading,
  Container,
  Stack,
  Spacer,
} from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
    <Header/>
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh">
        {/* Top Navigation */}
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

        {/* Main Content */}
        <Flex flex={1}>
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

          {/* Profile Section */}
          <VStack bg="gray.50" color="black" flex={1} p={5} spacing={5} align="stretch">
            <Heading size="lg">Your Profile</Heading>
            <Box borderWidth={1} p={5} borderRadius="md" bg="white">
              <ProfileSection title="Personal Information" description="Your name, location, and contact information." />
              <ProfileSection title="About You" description="Your short bio, pronouns, languages spoken, and qualifications." />
              <ProfileSection title="Your Skills" description="List your skills here." />
            </Box>

            <Heading size="small">Profile Settings</Heading>
            <Box borderWidth={1} p={5} borderRadius="md" bg="white">
              <ProfileSection title="Your Availability" description="You are able to volunteer at any time, and available for last minute requests." />
              <ProfileSection title="Profile Visibility" description="Your profile is visible to local organizations only." />
              <ProfileSection title="Communication Preferences" description="You will receive all e-mails from the VolunteerConnector." />
              <ProfileSection title="Current School or Institution" description="Do you belong to a school that keeps track of your Volunteer hours?" />
            </Box>
            {/* Add more sections as needed */}
          </VStack>
        </Flex>
      </Flex>
    </Container>
    </div>
  );
};

const ProfileSection = ({ title, description }) => (
  <Box py={2}>
    <Flex justify="space-between" align="center">
      <VStack align="start">
        <Text fontWeight="semibold">{title}</Text>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <Button size="sm">Edit</Button>
    </Flex>
    <Divider my={2} />
  </Box>
);

export default Dashboard;
