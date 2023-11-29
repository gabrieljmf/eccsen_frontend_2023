import {
  Heading,
  Center,
  VStack,
  HStack,
  Button,
  Input,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import EmailSubmitCard from "../components/emailSubmit";
import OAuthCard from "../components/oAuthCard";

// async function getUsers() {
//   const res = await fetch("https://localhost:3000/api/databases/users");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

const SignUp = async () => {
  // const users = await getUsers();
  return (
    <Box padding={8} bg="grey">
      <Center paddingBottom={12}>
        <Heading as="h1">
          <b>Log in</b> or <b>Sign up</b> to the Eccsen Volunteer Connector
        </Heading>
      </Center>
      <Center>
        <HStack>
          <EmailSubmitCard />
          <OAuthCard />
        </HStack>
      </Center>
      {/* {users.map((user) => (
        <Box key={user.id}>
          <Text>{user.username}</Text>
          <Text>{user.password}</Text>
        </Box>
      ))} */}
    </Box>
  );
};

export default SignUp;
