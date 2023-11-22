import { Button, Heading, VStack } from "@chakra-ui/react";
const OAuthCard = ({ rest }) => {
  return (
    <VStack {...rest} alignContent={"space-between"}>
      <Heading as="h2">or with one of these</Heading>
      <Button>Sign in with Google</Button>
      <Button>Sign in with Facebook</Button>
    </VStack>
  );
};

export default OAuthCard;
