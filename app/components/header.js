import { Link, Button, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Spacer, Box } from "@chakra-ui/react";
export const Header = () => {
  return (
    <Flex padding={8} bg={"white"}>
      <Spacer />
      <Image
        src="https://ecssen.ca/wp-content/uploads/2022/12/Your-paragraph-text-3.png"
        top={0}
        right={0}
        pointerEvents="none"
        alt="eccsen-logo"
      />
      <Spacer />
      <Box m={3}>
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Box>
    </Flex>
  );
};
