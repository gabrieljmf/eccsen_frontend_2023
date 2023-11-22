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

const SignUp = () => {
  return (
    <Box padding={8}>
      <Center paddingBottom={12}>
        <Heading as="h1">
          <b>Log in</b> or <b>Sign up</b> to the Eccsen Volunteer Connector
        </Heading>
      </Center>
      <HStack>
        <EmailSubmitCard />
        <OAuthCard />
      </HStack>
    </Box>
  );
};

export default SignUp;
