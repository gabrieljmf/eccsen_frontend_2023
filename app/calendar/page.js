import React from "react";
import { Box, Flex, Text, Button, Select } from "@chakra-ui/react";

const mockEvents = [
  {
    organization: "Tech Corp",
    title: "Tech Conference 2023",
    startDate: "2023-11-01T09:00:00",
    endDate: "2023-11-01T17:00:00",
  },
  {
    organization: "Health & Wellness Inc.",
    title: "Wellness Workshop",
    startDate: "2023-11-03T10:00:00",
    endDate: "2023-11-03T11:00:00",
  },
  {
    organization: "Eco Solutions",
    title: "Sustainable Living Expo",
    startDate: "2023-11-05T09:00:00",
    endDate: "2023-11-05T18:00:00",
  },
  {
    organization: "Artists United",
    title: "Art Fair",
    startDate: "2023-11-10T10:00:00",
    endDate: "2023-11-10T20:00:00",
  },
  {
    organization: "Global Education Forum",
    title: "Education for Everyone Conference",
    startDate: "2023-11-15T09:00:00",
    endDate: "2023-11-15T17:00:00",
  },
  {
    organization: "Sports Club",
    title: "Charity Marathon",
    startDate: "2023-11-20T06:00:00",
    endDate: "2023-11-20T11:00:00",
  },
  {
    organization: "Music Lovers Society",
    title: "Winter Music Concert",
    startDate: "2023-11-25T19:00:00",
    endDate: "2023-11-25T22:00:00",
  },
  {
    organization: "Music Lovers Society",
    title: "Winter Music Concert",
    startDate: "2023-11-25T19:00:00",
    endDate: "2023-11-25T22:00:00",
  },
  {
    organization: "Music Lovers Society",
    title: "Winter Music Concert",
    startDate: "2023-11-25T19:00:00",
    endDate: "2023-11-25T22:00:00",
  },
  {
    organization: "Music Lovers Society",
    title: "Winter Music Concert",
    startDate: "2023-11-25T19:00:00",
    endDate: "2023-11-25T22:00:00",
  },
  {
    organization: "New Year Events Co.",
    title: "New Year's Eve Party",
    startDate: "2023-11-31T20:00:00",
    endDate: "2024-01-01T02:00:00",
  },
];

const Page = () => {
  let currentFilter = "";

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // Note: January is 0, December is 11

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDay =
    firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

  const isSameDay = (dayDate, eventDate) => {
    return dayDate.toDateString() === eventDate.toDateString();
  };

  const getFormattedMonthYear = (year, month) => {
    const date = new Date(year, month);
    const formatter = new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
    });
    return formatter.format(date);
  };

  const handleFilterChange = (e) => {
    currentFilter = e.target.value;
    // You might need to force the component to update here
  };

  const handleClearFilter = () => {
    currentFilter = "";
    // Force update the component if necessary
  };

  const renderTopSection = () => {
    return (
      <Flex justifyContent="space-between" mb={4} alignItems="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          p={2}
          border="1px"
          borderColor="teal"
          borderRadius="md"
        >
          Manage Your Events
        </Text>
        <Button colorScheme="teal">Create Event</Button>
      </Flex>
    );
  };

  const renderDateFilterSection = () => {
    return (
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          p={2}
          border="1px"
          borderColor="teal"
          borderRadius="md"
        >
          {getFormattedMonthYear(year, month)}
        </Text>
        <Flex>
          <Select placeholder="Filter by organization">
            {Array.from(
              new Set(mockEvents.map((event) => event.organization))
            ).map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </Select>
          <Button ml={2}>Clear Filter</Button>
        </Flex>
      </Flex>
    );
  };

  const generateWeekDays = () => {
    return weekDays.map((day, index) => (
      <Flex
        key={index}
        flexGrow={1}
        flexBasis="14.28%"
        border="1px"
        borderColor="gray.300" // Updated border color
        bg="white" // Background color
        p={2}
        align="center"
        justify="center"
      >
        <Text fontWeight="bold">{day}</Text>
      </Flex>
    ));
  };

  const generateDays = () => {
    let days = [];

    // Fill in the blanks for days before the first of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(
        <Flex
          flex="1"
          key={`b-${i}`}
          border="1px"
          borderColor="gray.200"
          p={2}
          align="center"
          justify="center"
        />
      );
    }

    // Fill in each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day);
      days.push(
        <Flex
          key={day}
          flex="1"
          border="1px"
          borderColor="gray.200"
          p={2}
          direction="column"
          position="relative"
        >
          <Text
            position="absolute"
            top="1"
            right="2"
            fontSize="sm"
            fontWeight="bold"
          >
            {day}
          </Text>
          {mockEvents
            .filter((event) => isSameDay(dayDate, new Date(event.startDate)))
            .map((event, index) => (
              <Box
                key={index}
                className="event"
                p={2}
                mt={5}
                borderRadius={4}
                bg="gray.100"
                textAlign="center"
              >
                <Text>{event.title}</Text>
                <Text fontSize="sm">
                  {formatEventDuration(event.startDate, event.endDate)}
                </Text>
              </Box>
            ))}
        </Flex>
      );
    }

    // Fill in the remaining cells with days from the next month
    const nextMonthDaysNeeded = (7 - (days.length % 7)) % 7;
    for (let nextDay = 1; nextDay <= nextMonthDaysNeeded; nextDay++) {
      days.push(
        <Flex
          key={`n-${nextDay}`}
          flex="1"
          border="1px"
          borderColor="gray.200"
          p={2}
          align="center"
          justify="center"
        >
          <Text
            position="absolute"
            top="2"
            right="2"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            p={2}
          >
            {nextDay}
          </Text>
        </Flex>
      );
    }

    // Group days into weeks
    let weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(
        <Flex key={i} wrap="wrap" bg="white">
          {days.slice(i, i + 7).map((dayComponent, index) => (
            <Flex
              key={index}
              flexGrow={1}
              flexBasis="14.28%"
              minHeight="130px"
              border="1px"
              borderColor="gray.300"
              p={2}
              position="relative"
            >
              {dayComponent}
            </Flex>
          ))}
        </Flex>
      );
    }

    return weeks;
  };

  // Function to format the event duration
  function formatEventDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return `${start.getHours()}:${start
      .getMinutes()
      .toString()
      .padStart(2, "0")} - ${end.getHours()}:${end
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <Box maxWidth="1400px" m="auto" p={10} bg="white" borderRadius="lg">
      {renderTopSection()}
      {renderDateFilterSection()}
      <Box borderRadius="lg" border="1px" borderColor="gray.200" p={0}>
        {" "}
        {/* Increased padding */}
        <Flex wrap="wrap">{generateWeekDays()}</Flex>
        {generateDays()}
      </Box>
    </Box>
  );
};
export default Page;
