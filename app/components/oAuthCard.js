import { Button, Heading, VStack } from "@chakra-ui/react";
const OAuthCard = ({ rest }) => {
  return (
    <VStack {...rest}>
      <Heading as="h3" fontSize={24}>
        or with one of these
      </Heading>
      <Button>Sign in with Google</Button>
      <Button>Sign in with Facebook</Button>
    </VStack>
  );
};

export default OAuthCard;
