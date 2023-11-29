import { Link, Button, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Spacer, Box } from "@chakra-ui/react";
export const Header = () => {
  return (
    <Flex padding={0} bg={"white"}>
      <Spacer />
      <Image
        src="https://ecssen.ca/wp-content/uploads/2022/12/Your-paragraph-text-3.png"
        top={0}
        right={0}
        pointerEvents="none"
        alt="eccsen-logo"
      />
      <Spacer />
      <Box mt={85} mr={5}>
      <Link href="/" p={1}>
          <Button>Home</Button>
        </Link>
        <Link href="/profile" p={1}>
          <Button>Profile</Button>
        </Link>
        <Link href="/survey" p={1}>
          <Button>Survey</Button>
        </Link>
        <Link href="/calendar" p={1}>
          <Button>Calendar</Button>
        </Link>
        <Link href="/volunteer_history" p={1}>
          <Button>Volunteer History</Button>
        </Link>
        <Link href="/signup" p={1}>
          <Button>Sign Up</Button>
        </Link>
      </Box>
    </Flex>
  );
};
