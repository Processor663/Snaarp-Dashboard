//Rechart
import { PieChart, Pie, Cell } from "recharts";

//Chakra
import { Box, Flex, Text, Grid } from "@chakra-ui/react";

//Icons
import { LuLayoutGrid } from "react-icons/lu";
import { HiExclamation } from "react-icons/hi";
import { IoFlashOutline } from "react-icons/io5";

//React
import { useRef, useEffect, useState } from "react";

//Data
import { storageData } from "@/data/data";
import { legendItems } from "@/data/data";

const usedPercentage = 80;

const StorageCard = () => {
  return (
    <Box bg="white" borderRadius="lg" p={{ base: "2.5", md: "3" }} w="100%">
      <Flex align="center" gap="2" mb={{ base: "2", md: "3" }}>
        <Box bg="gray.100" p="1.5" borderRadius="md">
          <LuLayoutGrid size={13} />
        </Box>
        <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
          Storage
        </Text>
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "3", md: "4", lg: "5" }}
        align={{ base: "center", lg: "flex-start" }}
      >
        {/* Donut chart */}
        <Box
          position="relative"
          w={{ base: "110px", sm: "130px", md: "150px" }}
          h={{ base: "110px", sm: "130px", md: "150px" }}
          flexShrink="0"
        >
          <ResponsiveDonut />
        </Box>

        {/* Right side: note + legend + button */}
        <Flex direction="column" flex="1" w="100%" gap={{ base: "2", md: "3" }}>
          <Box
            bg="white"
            border="1px solid"
            borderColor="#f5a623"
            borderLeft="3px solid"
            borderLeftColor="#f5a623"
            borderRight="3px solid"
            borderRightColor="#f5a623"
            borderRadius="md"
            p="2"
            boxShadow="0 2px 6px rgba(245, 166, 35, 0.12)"
          >
            <Flex align="center" gap="1.5" mb="0.5">
              <Flex
                align="center"
                justify="center"
                w="15px"
                h="15px"
                borderRadius="full"
                bg="#f5a623"
                flexShrink="0"
              >
                <HiExclamation size={10} color="white" />
              </Flex>
              <Text fontWeight="bold" color="#a020f0" fontSize="xs">
                Note
              </Text>
            </Flex>
            <Text fontSize="xs" color="gray.700" fontWeight="medium">
              You've almost reached your limit
            </Text>
            <Text fontSize="xs" color="gray.500" mt="0.5">
              You have used {usedPercentage}% of your available storage. Upgrade
              plan to access more space.
            </Text>
          </Box>

          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
            gap="2"
          >
            {legendItems.map((item) => (
              <Flex key={item.name} align="center" gap="1.5">
                <Box
                  w="11px"
                  h="11px"
                  borderRadius="3px"
                  bg={item.color}
                  flexShrink="0"
                />
                <Text fontSize="xs" color="gray.700">
                  {item.name}
                </Text>
              </Flex>
            ))}
          </Grid>

          <Flex justify={{ base: "center", lg: "flex-end" }} mt="1">
            <Flex
              as="button"
              align="center"
              gap="1.5"
              border="1px solid"
              borderColor="#6c63ff"
              borderRadius="md"
              color="#6c63ff"
              fontWeight="medium"
              fontSize="xs"
              px="3.5"
              py="1.5"
              cursor="pointer"
              w={{ base: "100%", lg: "auto" }}
              justify="center"
              _hover={{ bg: "#f5f5ff" }}
            >
              <IoFlashOutline size={13} />
              Upgrade Plan
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const ResponsiveDonut = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(150);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setSize(width);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const innerRadius = size * 0.32;
  const outerRadius = size * 0.43;
  const ringSize = size * 0.59;

  return (
    <Box ref={containerRef} position="relative" w="100%" h="100%">
      <PieChart width={size} height={size}>
        <Pie
          data={storageData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={90}
          endAngle={-270}
          paddingAngle={2}
          stroke="none"
        >
          {storageData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Dashed inner ring */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={`${ringSize}px`}
        h={`${ringSize}px`}
        borderRadius="full"
        border="2px dashed"
        borderColor="#6c63ff"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "sm", md: "md" }}
          color="gray.800"
          lineHeight="1.2"
        >
          {usedPercentage}%
          <Text
            as="span"
            display="block"
            fontSize="2xs"
            fontWeight="normal"
            color="gray.500"
          >
            Used
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default StorageCard;
