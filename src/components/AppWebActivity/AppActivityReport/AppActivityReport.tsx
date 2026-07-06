// AppActivityReport.tsx
import { useState, useMemo, useRef } from "react";
import { Box, Flex, Text, Table } from "@chakra-ui/react";
import { TbApps } from "react-icons/tb";
import {
  HiOutlineChevronDown,
  HiChevronUp,
  HiChevronDown,
} from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { SiOpera } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { TiArrowUnsorted } from "react-icons/ti";


interface AppActivity {
  id: string;
  app: string;
  icon: "chrome" | "youtube" | "teams" | "whatsapp" | "opera" | "instagram";
  totalUsers: number;
  totalHours: string;
  totalMinutes: number; // for sorting
  date: string; // ISO-ish string for display
  dateValue: number; // timestamp for sorting
  organization: string;
  period: "Week" | "Month" | "Year";
}

type SortKey = "totalUsers" | "totalHours" | "date";
type SortDirection = "asc" | "desc" | null;

const appIconMap = {
  chrome: { icon: FcGoogle, bg: "white" },
  youtube: { icon: FaYoutube, bg: "#ff0000" },
  teams: { icon: PiMicrosoftTeamsLogoFill, bg: "#5059c9" },
  whatsapp: { icon: FaWhatsapp, bg: "#25d366" },
  opera: { icon: SiOpera, bg: "#ff1b2d" },
  instagram: {
    icon: RiInstagramFill,
    bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
};

const appActivityData: AppActivity[] = [
  {
    id: "1",
    app: "Google Chrome",
    icon: "chrome",
    totalUsers: 34,
    totalHours: "3 hours 12 minutes",
    totalMinutes: 192,
    date: "2024-06-26 15:33:49",
    dateValue: new Date("2024-06-26T15:33:49").getTime(),
    organization: "MSBM, Lagos",
    period: "Month",
  },
  {
    id: "2",
    app: "YouTube",
    icon: "youtube",
    totalUsers: 12,
    totalHours: "2 hours 8 minutes",
    totalMinutes: 128,
    date: "2024-05-26 12:45:41",
    dateValue: new Date("2024-05-26T12:45:41").getTime(),
    organization: "MSBM, London",
    period: "Week",
  },
  {
    id: "3",
    app: "Microsoft Teams",
    icon: "teams",
    totalUsers: 16,
    totalHours: "6 hours 45 minutes",
    totalMinutes: 405,
    date: "2024-05-21 16:28:21",
    dateValue: new Date("2024-05-21T16:28:21").getTime(),
    organization: "MSBM, Dubai",
    period: "Year",
  },
  {
    id: "4",
    app: "WhatsApp",
    icon: "whatsapp",
    totalUsers: 49,
    totalHours: "1 hour 30 minutes",
    totalMinutes: 90,
    date: "2024-06-26 15:33:49",
    dateValue: new Date("2024-06-26T15:33:49").getTime(),
    organization: "MSBM, Lagos",
    period: "Month",
  },
  {
    id: "5",
    app: "Opera Mini",
    icon: "opera",
    totalUsers: 3,
    totalHours: "9 hours 10 minutes",
    totalMinutes: 550,
    date: "2024-05-21 16:28:21",
    dateValue: new Date("2024-05-21T16:28:21").getTime(),
    organization: "MSBM, Dubai",
    period: "Year",
  },
  {
    id: "6",
    app: "Instagram",
    icon: "instagram",
    totalUsers: 22,
    totalHours: "45 minutes",
    totalMinutes: 45,
    date: "2024-05-26 12:45:41",
    dateValue: new Date("2024-05-26T12:45:41").getTime(),
    organization: "MSBM, London",
    period: "Month",
  },
];

const organizations = [
  "All Organization",
  "MSBM, Lagos",
  "MSBM, London",
  "MSBM, Dubai",
];
const monthOptions = ["All Time", "Month", "Week", "Year"];

const SortableHeader = ({
  label,
  sortKey,
  activeSortKey,
  sortDirection,
  onSort,
}: {
  label: string;
  sortKey: SortKey;
  activeSortKey: SortKey | null;
  sortDirection: SortDirection;
  onSort: (key: SortKey) => void;
}) => {
  const isActive = activeSortKey === sortKey;
  return (
    <Flex
      align="center"
      gap="1"
      cursor="pointer"
      onClick={() => onSort(sortKey)}
      userSelect="none"
    >
      {isActive && sortDirection === "asc" ? (
        <HiChevronUp size={12} color="#6c63ff" />
      ) : isActive && sortDirection === "desc" ? (
        <HiChevronDown size={12} color="#6c63ff" />
      ) : (
        <TiArrowUnsorted size={12} color="#9ca3af" />
      )}
      <Text
        fontWeight="semibold"
        fontSize="xs"
        color={isActive ? "#6c63ff" : "gray.700"}
      >
        {label}
      </Text>
    </Flex>
  );
};

// ---- Self-contained dropdown (no Chakra Menu, no document listeners) ----
const FilterDropdown = ({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (val: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      containerRef.current &&
      containerRef.current.contains(e.relatedTarget as Node)
    ) {
      return;
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
        gap="1.5"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        color="gray.600"
        bg="white"
        px="2"
        py="1"
        fontSize="xs"
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
          minW="140px"
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
                py="1.5"
                fontSize="xs"
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

const AppActivityReport = () => {
  const [selectedOrg, setSelectedOrg] = useState("All Organization");
  const [selectedRange, setSelectedRange] = useState("All Time");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortKey(null);
      setSortDirection(null);
    }
  };

  const sortedData = useMemo(() => {
    let result = [...appActivityData];

    if (selectedOrg !== "All Organization") {
      result = result.filter((item) => item.organization === selectedOrg);
    }

    if (selectedRange !== "All Time") {
      result = result.filter((item) => item.period === selectedRange);
    }

    if (sortKey && sortDirection) {
      result.sort((a, b) => {
        let valA: number;
        let valB: number;
        if (sortKey === "totalUsers") {
          valA = a.totalUsers;
          valB = b.totalUsers;
        } else if (sortKey === "totalHours") {
          valA = a.totalMinutes;
          valB = b.totalMinutes;
        } else {
          valA = a.dateValue;
          valB = b.dateValue;
        }
        return sortDirection === "asc" ? valA - valB : valB - valA;
      });
    }

    return result;
  }, [selectedOrg, selectedRange, sortKey, sortDirection]);

  return (
    <Box bg="white" borderRadius="lg" p="4" w="100%" h="100%">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap="2"
        mb="3"
      >
        <Box>
          <Flex align="center" gap="2">
            <Box bg="gray.100" p="1.5" borderRadius="md">
              <TbApps size={14} />
            </Box>
            <Text fontWeight="bold" fontSize="md">
              App Activity Report
            </Text>
          </Flex>
          <Text fontSize="xs" color="gray.500" mt="0.5" ml="1">
            View your comprehensive organizational app report
          </Text>
        </Box>

        <Flex gap="2">
          <FilterDropdown
            value={selectedOrg}
            options={organizations}
            onChange={setSelectedOrg}
          />
          <FilterDropdown
            value={selectedRange}
            options={monthOptions}
            onChange={setSelectedRange}
          />
        </Flex>
      </Flex>

      <Box overflowX="auto">
        <Table.Root minW="550px" variant="outline" size="sm">
          <Table.Header>
            <Table.Row bg="gray.100">
              <Table.ColumnHeader py="2" px="3" border="none">
                <Flex align="center" gap="1">
                  <TiArrowUnsorted size={12} color="#9ca3af" />
                  <Text fontWeight="semibold" fontSize="xs" color="gray.700">
                    Application
                  </Text>
                </Flex>
              </Table.ColumnHeader>
              <Table.ColumnHeader py="2" px="2" border="none">
                <SortableHeader
                  label="Total Users"
                  sortKey="totalUsers"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader py="2" px="2" border="none">
                <SortableHeader
                  label="Total Number of Hours"
                  sortKey="totalHours"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader py="2" px="2" border="none">
                <SortableHeader
                  label="Date"
                  sortKey="date"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {sortedData.map((item, index) => {
              const app = appIconMap[item.icon];
              const AppIcon = app.icon;
              return (
                <Table.Row
                  key={item.id}
                  bg={index % 2 === 0 ? "white" : "gray.50"}
                >
                  <Table.Cell py="2" px="3" border="none" >
                    <Flex align="center" gap="2">
                      <Flex
                        align="center"
                        justify="center"
                        w="22px"
                        h="22px"
                        borderRadius="6px"
                        bg={app.bg}
                        flexShrink="0"
                        
                      >
                        <AppIcon
                          size={12}
                          color={item.icon === "chrome" ? undefined : "white"}
                        />
                      </Flex>
                      <Text fontSize="xs" fontWeight="medium" color="gray.800">
                        {item.app}
                      </Text>
                    </Flex>
                  </Table.Cell>
                  <Table.Cell py="2" px="2" border="none">
                    <Text fontSize="xs" color="gray.600">
                      {item.totalUsers}
                    </Text>
                  </Table.Cell>
                  <Table.Cell py="2" px="2" border="none">
                    <Text fontSize="xs" color="gray.600">
                      {item.totalHours}
                    </Text>
                  </Table.Cell>
                  <Table.Cell py="2" px="2" border="none">
                    <Text fontSize="xs" color="gray.600">
                      {item.date}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              );
            })}

            {sortedData.length === 0 && (
              <Table.Row>
                <Table.Cell colSpan={4} py="6" border="none">
                  <Flex justify="center">
                    <Text fontSize="xs" color="gray.400">
                      No app activity found for this filter.
                    </Text>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};

export default AppActivityReport;
