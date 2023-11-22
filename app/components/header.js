"use client";

import { Link, Button, Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Spacer, Box } from "@chakra-ui/react";
export const Header = () => {
  return (
    <Flex>
      <Image
        src="/assets/logo.png"
        position="absolute"
        top={0}
        right={0}
        width="55%"
        pointerEvents="none"
        alt="eccsen-logo"
      />
      Eccsen Career School
      <Spacer />
      <Box m={3}>
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </Box>
    </Flex>
  );
};
