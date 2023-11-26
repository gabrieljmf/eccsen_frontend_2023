import { Button, Heading, Input, Text, VStack } from "@chakra-ui/react";

const EmailSubmitCard = ({ rest }) => {
  return (
    <VStack {...rest}>
      <Heading as="h3" fontSize={24}>
        with your email
      </Heading>
      <Text fontStyle={"italic"} maxW={"550px"}>
        Enter your email below. Enter your email address below. We&apos;ll
        create an account for you if don&apos;t have one yet.
      </Text>
      <Input placeholder="Email" />
      <Text>By signing in you agree to our privacy policy.</Text>
      <Button>Next --&gt;</Button>
    </VStack>
  );
};

export default EmailSubmitCard;
