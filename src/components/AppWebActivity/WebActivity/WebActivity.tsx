// WebActivity.tsx
import { useState, useMemo, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HiGlobeAlt, HiOutlineChevronDown } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaFirefox, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


import type { IconType } from "react-icons";

interface WebActivityItem {
  id: string;
  name: string;
  icon: "chrome" | "gmail" | "firefox" | "instagram" | "x" | "facebook";
  percentage: number;
  timeUsage: string;
  period: "Week" | "Month" | "Year";
}

interface IconConfig {
  icon: IconType | null;
  bg: string;
  color?: string;
}

const iconMap: Record<string, IconConfig> = {
  chrome: { icon: FcGoogle, bg: "white" },
  gmail: { icon: null, bg: "white" },
  firefox: { icon: FaFirefox, bg: "white", color: "#ff9500" },
  instagram: {
    icon: RiInstagramFill,
    bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  x: { icon: FaXTwitter, bg: "white", color: "#000" },
  facebook: { icon: FaFacebook, bg: "white", color: "#1877f2" },
};

const webActivityData: WebActivityItem[] = [
  {
    id: "1",
    name: "Chrome",
    icon: "chrome",
    percentage: 78,
    timeUsage: "5 hours 12 minutes",
    period: "Month",
  },
  {
    id: "2",
    name: "Gmail",
    icon: "gmail",
    percentage: 61,
    timeUsage: "2 hours 24 minutes",
    period: "Month",
  },
  {
    id: "3",
    name: "Firefox",
    icon: "firefox",
    percentage: 45,
    timeUsage: "40 minutes",
    period: "Week",
  },
  {
    id: "4",
    name: "Instagram",
    icon: "instagram",
    percentage: 78,
    timeUsage: "5 hours 6 minutes",
    period: "Month",
  },
  {
    id: "5",
    name: "x.com",
    icon: "x",
    percentage: 59,
    timeUsage: "1 hours 8 minutes",
    period: "Year",
  },
  {
    id: "6",
    name: "Facebook",
    icon: "facebook",
    percentage: 61,
    timeUsage: "3 hours 1 minute",
    period: "Month",
  },
];

const monthOptions = ["Month", "Week", "Year"];

// ---- Self-contained dropdown (no Chakra Menu, no document listeners) ----
interface SimpleDropdownProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const SimpleDropdown = ({ value, options, onChange }: SimpleDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      containerRef.current &&
      containerRef.current.contains(e.relatedTarget as Node)
    ) {
      return; // focus moved to something still inside the dropdown, keep it open
    }
    setIsOpen(false);
  };

  return (
    <Box
      position="relative"
      ref={containerRef}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <Flex
        as="button"
        onClick={() => setIsOpen((prev) => !prev)}
        align="center"
        gap="2"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        color="gray.600"
        bg="white"
        px="3"
        py="1.5"
        fontSize="sm"
        cursor="pointer"
        _hover={{ bg: "gray.50" }}
      >
        {value} <HiOutlineChevronDown />
      </Flex>

      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 6px)"
          right="0"
          bg="white"
          borderRadius="md"
          boxShadow="0 8px 24px rgba(0,0,0,0.12)"
          border="1px solid"
          borderColor="gray.100"
          minW="120px"
          py="1"
          zIndex="10"
        >
          {options.map((opt) => {
            const isActive = value === opt;
            return (
              <Box
                key={opt}
                tabIndex={0}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                px="3"
                py="2"
                fontSize="sm"
                cursor="pointer"
                bg={isActive ? "#f0efff" : "transparent"}
                color={isActive ? "#6c63ff" : "gray.700"}
                fontWeight={isActive ? "semibold" : "normal"}
                _hover={{ bg: isActive ? "#f0efff" : "gray.50" }}
              >
                {opt}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

// ---- Gmail icon (react-icons has no dedicated Gmail glyph) ----
const GmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      fill="#EA4335"
      d="M5.5 6.5v11a2 2 0 002 2h1V9.6l3.5 2.7 3.5-2.7v9.9h1a2 2 0 002-2v-11L12 12z"
    />
    <path fill="#4285F4" d="M18.5 6.5v11a2 2 0 01-2 2v-9.9l2-1.6z" />
    <path fill="#34A853" d="M5.5 6.5l2 1.6v9.9a2 2 0 01-2-2z" />
    <path
      fill="#C5221F"
      d="M18.5 6.5a1.8 1.8 0 00-2.9-1.4L12 8.2 8.4 5.1a1.8 1.8 0 00-2.9 1.4L12 12z"
    />
  </svg>
);

// ---- Main component ----
const WebActivity = () => {
  const [range, setRange] = useState("Month");

  const filteredData = useMemo(
    () => webActivityData.filter((item) => item.period === range),
    [range],
  );

  return (
    <Box bg="white" borderRadius="lg" p="5" w="100%">
      <Flex justify="space-between" align="center" mb="1">
        <Flex align="center" gap="2">
          <Box bg="gray.100" p="2" borderRadius="md">
            <HiGlobeAlt size={16} />
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            Web Activity
          </Text>
        </Flex>

        <SimpleDropdown
          value={range}
          options={monthOptions}
          onChange={setRange}
        />
      </Flex>

      <Text fontSize="sm" color="gray.500" mb="4">
        View your comprehensive organizational web report
      </Text>

      <Flex direction="column" gap="0">
        {filteredData.map((item, index) => {
          const config = iconMap[item.icon];
          const Icon = config.icon;
          const isLast = index === filteredData.length - 1;

          return (
            <Flex
              key={item.id}
              align="center"
              gap="3"
              py="2"
              borderBottom={isLast ? "none" : "1.9px solid"}
              borderColor="gray.300"
            >
              <Flex
                align="center"
                justify="center"
                w="26px"
                h="26px"
                flexShrink="0"
              >
                {item.icon === "gmail" ? (
                  <GmailIcon />
                ) : Icon ? (
                  <Icon size={20} color={config.color} />
                ) : null}
              </Flex>

              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.700"
                minW="60px"
                flexShrink="0"
              >
                {item.name}
              </Text>

              <Box
                flex="1"
                h="6px"
                bg="gray.100"
                borderRadius="full"
                overflow="hidden"
                mx="1"
              >
                <Box
                  h="100%"
                  w={`${item.percentage}%`}
                  bg="#22c55e"
                  borderRadius="full"
                />
              </Box>

              <Text
                fontSize="sm"
                color="gray.500"
                minW="32px"
                textAlign="right"
                flexShrink="0"
              >
                {item.percentage}%
              </Text>

              <Text
                fontSize="sm"
                color="gray.500"
                minW="110px"
                textAlign="right"
                flexShrink="0"
              >
                {item.timeUsage}
              </Text>
            </Flex>
          );
        })}

        {filteredData.length === 0 && (
          <Flex justify="center" py="6">
            <Text fontSize="sm" color="gray.400">
              No activity data for this period.
            </Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default WebActivity;
