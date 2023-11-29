"use client";

import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

let causes = [
  "Advocacy and Law",
  "Agriculture, Horticulture, Gardening",
  "Animal Services",
  "Anti-Racism",
];

const CauseCard = ({ content }) => {
  return (
    <HStack>
      <Box>{content}</Box> <Radio alignSelf={"right"} value={content}></Radio>
    </HStack>
  );
};

const AddCauses = () => {
  const [value, setValue] = useState("");
  return (
    <Grid m={5} templateColumns="repeat(3, 1fr)" bg={"gray"}>
      <GridItem colSpan={3}>
        <Heading as="h2">Causes</Heading>
      </GridItem>
      <RadioGroup onChange={setValue} value={value}>
        {causes.map((cause) => (
          <GridItem
            borderColor={"white"}
            borderWidth={1}
            margin={2}
            padding={3}
            key={cause}
            colSpan={"1fr"}
          >
            <CauseCard content={cause}></CauseCard>
          </GridItem>
        ))}
      </RadioGroup>
    </Grid>
  );
};

export default AddCauses;
