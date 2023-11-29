import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Heading,
  VStack,
  HStack,
  Box,
  Center,
  Select,
  FormControl,
  FormLabel,
  Flex,
  Grid,
  Button,
} from "@chakra-ui/react";

const Opportunity = () => {
  return (
    <>
      <Grid
        templateAreas={`'info main'`}
        gridTemplateColumns={"20% 55%"}
        h="100vh"
        bg="white"
        mx="auto"
        justifyContent={"Center"}
      >
        <Box area={"info"} m={5}>
          <Button colorScheme="blue" w="full" py="8">
            <Text fontSize="2xl">Apply Now</Text>
          </Button>
        </Box>
        <Box area={"main"} m={5}>
          <Box p={7} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Text fontSize="4xl" color="black" as="b">
              Volunteer Marketing
            </Text>
            <Text fontSize="md" color="black" mt={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nulla felis, feugiat eu nisl et, euismod auctor massa. Aliquam et
              scelerisque mauris. Etiam dignissim, eros sed varius ultrices,
              enim dui consequat quam, et pharetra ante mauris non elit.
              Praesent volutpat cursus aliquam. Curabitur nisi metus, tincidunt
              vel faucibus vitae, interdum ac urna. Nunc mauris risus, pulvinar
              sed ultricies id, auctor quis est. In tellus orci, molestie in
              pretium eu, egestas bibendum metus. Nam non tellus nunc. Cras
              gravida consectetur porta. Donec sit amet ultrices turpis.
              Phasellus fermentum aliquam vulputate. Suspendisse potenti. Ut
              ultrices diam nibh, ac commodo odio viverra quis. Nam aliquam
              dolor eu mattis suscipit. Maecenas interdum sapien nec molestie
              suscipit. Morbi eu nibh odio. Proin gravida, elit sit amet
              efficitur dictum, lacus enim auctor urna, nec dictum felis turpis
              non nunc. Cras neque felis, varius sit amet nulla id, rutrum
              pulvinar orci. Aliquam dignissim eget mauris id pharetra. Maecenas
              lectus mauris, feugiat non ipsum aliquet, viverra euismod sapien.
              Nulla lobortis ipsum massa, a vestibulum purus dictum eget.
              Maecenas et lacus sem. Suspendisse at viverra augue. Etiam laoreet
              vitae leo et finibus. Curabitur sit amet massa sem. Pellentesque
              quis pharetra libero, ac gravida odio. Nunc euismod mollis purus
              id hendrerit. Proin sed leo sit amet est iaculis vulputate. Nunc
              mattis eget lectus quis luctus. Suspendisse at lectus nibh.
              Suspendisse eu molestie ligula. Duis posuere mi a dui tempus
              ornare. Vestibulum suscipit placerat justo, eu hendrerit mi
              placerat nec. Etiam tincidunt orci nec cursus euismod. Ut a dolor
              massa. Fusce eu elit risus. Nunc non mauris non libero semper
              pulvinar. Proin enim est, faucibus non felis sed, sodales accumsan
              lorem.
            </Text>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Opportunity;
