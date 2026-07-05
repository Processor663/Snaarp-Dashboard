// OnlineUsersTable.tsx
import { useState, useMemo } from "react";
import { Box, Flex, Text, Table, Menu, Portal, Button } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import {
  HiOutlineChevronDown,
  HiChevronUp,
  HiChevronDown,
} from "react-icons/hi2";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiInstagramFill } from "react-icons/ri";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiOpera } from "react-icons/si";
import { TiArrowUnsorted } from "react-icons/ti";


interface OnlineUser {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
  location: string;
  organization: string;
  device: "windows" | "mac" | "linux";
  activity: {
    label: string;
    icon: "chrome" | "instagram" | "teams" | "youtube" | "whatsapp" | "opera";
  };
  timeUsage: string;
  timeUsageMinutes: number; // for sorting numerically
}

type SortKey =
  | "name"
  | "location"
  | "organization"
  | "device"
  | "activity"
  | "timeUsage";
type SortDirection = "asc" | "desc" | null;

const deviceIconMap = {
  windows: { icon: FaWindows, color: "#00a4ef", label: "Windows" },
  mac: { icon: FaApple, color: "#555", label: "Mac" },
  linux: { icon: FaLinux, color: "#333", label: "Linux" },
};

const activityIconMap = {
  chrome: { icon: FcGoogle, bg: "white" },
  instagram: {
    icon: RiInstagramFill,
    bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  teams: { icon: PiMicrosoftTeamsLogoFill, bg: "#5059c9" },
  youtube: { icon: FaYoutube, bg: "#ff0000" },
  whatsapp: { icon: FaWhatsapp, bg: "#25d366" },
  opera: { icon: SiOpera, bg: "#ff1b2d" },
};

const onlineUsersData: OnlineUser[] = [
  {
    id: "1",
    name: "Annette Black",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
    location: "Ottawa, Canada",
    organization: "MSBM, Ottawa",
    device: "windows",
    activity: { label: "Google Chrome", icon: "chrome" },
    timeUsage: "3 hours 12 minutes",
    timeUsageMinutes: 192,
  },
  {
    id: "2",
    name: "Floyd Miles",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
    location: "Lagos, Nigeria",
    organization: "MSBM, Lagos",
    device: "windows",
    activity: { label: "Instagram", icon: "instagram" },
    timeUsage: "2 hours 8 minutes",
    timeUsageMinutes: 128,
  },
  {
    id: "3",
    name: "Ronald Richards",
    avatar: "https://i.pravatar.cc/150?img=13",
    online: false,
    location: "Dubai, UAE",
    organization: "MSBM, Dubai",
    device: "mac",
    activity: { label: "Microsoft Teams", icon: "teams" },
    timeUsage: "6 hours 45 minutes",
    timeUsageMinutes: 405,
  },
  {
    id: "4",
    name: "Guy Hawkins",
    avatar: "https://i.pravatar.cc/150?img=14",
    online: true,
    location: "London, UK",
    organization: "MSBM, London",
    device: "windows",
    activity: { label: "Instagram", icon: "instagram" },
    timeUsage: "1 hour 30 minutes",
    timeUsageMinutes: 90,
  },
  {
    id: "5",
    name: "Jane Cooper",
    avatar: "https://i.pravatar.cc/150?img=5",
    online: true,
    location: "Frankfurt, Germany",
    organization: "MSBM, Frankfurt",
    device: "mac",
    activity: { label: "Google Chrome", icon: "chrome" },
    timeUsage: "9 hours 10 minutes",
    timeUsageMinutes: 550,
  },
  {
    id: "6",
    name: "Leslie Alexander",
    avatar: "https://i.pravatar.cc/150?img=15",
    online: false,
    location: "Rome, Italy",
    organization: "MSBM, Rome",
    device: "windows",
    activity: { label: "YouTube", icon: "youtube" },
    timeUsage: "45 minutes",
    timeUsageMinutes: 45,
  },
  {
    id: "7",
    name: "Annette Black",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: false,
    location: "Calgary, Canada",
    organization: "MSBM, Calgary",
    device: "linux",
    activity: { label: "Opera Mini", icon: "opera" },
    timeUsage: "45 minutes",
    timeUsageMinutes: 45,
  },
  {
    id: "8",
    name: "Floyd Miles",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
    location: "Mumbai, India",
    organization: "MSBM, Mumbai",
    device: "mac",
    activity: { label: "WhatsApp", icon: "whatsapp" },
    timeUsage: "45 minutes",
    timeUsageMinutes: 45,
  },
  {
    id: "9",
    name: "Cody Fisher",
    avatar: "https://i.pravatar.cc/150?img=17",
    online: false,
    location: "Lagos, Nigeria",
    organization: "MSBM, Lagos",
    device: "windows",
    activity: { label: "Microsoft Teams", icon: "teams" },
    timeUsage: "45 minutes",
    timeUsageMinutes: 45,
  },
  {
    id: "10",
    name: "Dianne Russell",
    avatar: "https://i.pravatar.cc/150?img=25",
    online: true,
    location: "London, UK",
    organization: "MSBM, London",
    device: "linux",
    activity: { label: "YouTube", icon: "youtube" },
    timeUsage: "45 minutes",
    timeUsageMinutes: 45,
  },
];

const organizations = [
  "All Organization",
  ...Array.from(new Set(onlineUsersData.map((u) => u.organization))),
];

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
      gap="1.5"
      cursor="pointer"
      onClick={() => onSort(sortKey)}
      userSelect="none"
    >
      {isActive && sortDirection === "asc" ? (
        <HiChevronUp size={14} color="#6c63ff" />
      ) : isActive && sortDirection === "desc" ? (
        <HiChevronDown size={14} color="#6c63ff" />
      ) : (
        <TiArrowUnsorted size={14} color="#9ca3af" />
      )}
      <Text
        fontWeight="semibold"
        fontSize="sm"
        color={isActive ? "#6c63ff" : "gray.700"}
      >
        {label}
      </Text>
    </Flex>
  );
};

const OnlineUsersTable = () => {
  const [selectedOrg, setSelectedOrg] = useState("All Organization");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    } else if (sortDirection === "desc") {
      setSortKey(null);
      setSortDirection(null);
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let result = [...onlineUsersData];

    if (selectedOrg !== "All Organization") {
      result = result.filter((user) => user.organization === selectedOrg);
    }

    if (sortKey && sortDirection) {
      result.sort((a, b) => {
        let valA: string | number;
        let valB: string | number;

        switch (sortKey) {
          case "name":
            valA = a.name;
            valB = b.name;
            break;
          case "location":
            valA = a.location;
            valB = b.location;
            break;
          case "organization":
            valA = a.organization;
            valB = b.organization;
            break;
          case "device":
            valA = a.device;
            valB = b.device;
            break;
          case "activity":
            valA = a.activity.label;
            valB = b.activity.label;
            break;
          case "timeUsage":
            valA = a.timeUsageMinutes;
            valB = b.timeUsageMinutes;
            break;
        }

        if (typeof valA === "string" && typeof valB === "string") {
          return sortDirection === "asc"
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }
        return sortDirection === "asc"
          ? (valA as number) - (valB as number)
          : (valB as number) - (valA as number);
      });
    }

    return result;
  }, [selectedOrg, sortKey, sortDirection]);

  return (
    <Box bg="white" borderRadius="lg" p="5" w="100%">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
        gap="3"
        mb="5"
      >
        <Box>
          <Flex align="center" gap="2">
            <Box bg="gray.100" p="2" borderRadius="md">
              <FiUser size={16} />
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Online Users
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.500" mt="1" ml="1">
            View your comprehensive online users
          </Text>
        </Box>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button
              size="sm"
              variant="outline"
              border="1px solid"
              borderColor="gray.200"
              color="gray.600"
              bg="transparent"
              px="3"
            >
              {selectedOrg} <HiOutlineChevronDown />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                border="1px solid"
                borderColor="gray.100"
                minW="160px"
                py="1"
              >
                {organizations.map((org) => {
                  const isActive = selectedOrg === org;
                  return (
                    <Menu.Item
                      key={org}
                      value={org}
                      onClick={() => setSelectedOrg(org)}
                      px="3"
                      py="2"
                      fontSize="sm"
                      cursor="pointer"
                      bg={isActive ? "#f0efff" : "transparent"}
                      color={isActive ? "#6c63ff" : "gray.700"}
                      fontWeight={isActive ? "semibold" : "normal"}
                      _hover={{ bg: isActive ? "#f0efff" : "gray.50" }}
                    >
                      {org}
                    </Menu.Item>
                  );
                })}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>

      <Box overflowX="auto">
        <Table.Root minW="900px" variant="outline">
          <Table.Header>
            <Table.Row bg="gray.100">
              <Table.ColumnHeader py="3" px="4" border="none" />
              <Table.ColumnHeader py="3" px="2" border="none">
                <Text fontWeight="semibold" fontSize="sm" color="gray.700">
                  Name
                </Text>
              </Table.ColumnHeader>
              <Table.ColumnHeader py="3" px="2" border="none">
                <SortableHeader
                  label="Location"
                  sortKey="location"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader py="3" px="2" border="none">
                <SortableHeader
                  label="Organization"
                  sortKey="organization"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader py="3" px="2" border="none">
                <SortableHeader
                  label="Device"
                  sortKey="device"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader py="3" px="2" border="none">
                <SortableHeader
                  label="Current Activity"
                  sortKey="activity"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader py="3" px="2" border="none">
                <SortableHeader
                  label="Time Usage"
                  sortKey="timeUsage"
                  activeSortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredAndSortedData.map((user, index) => {
              const device = deviceIconMap[user.device];
              const activity = activityIconMap[user.activity.icon];
              const DeviceIcon = device.icon;
              const ActivityIcon = activity.icon;

              return (
                <Table.Row
                  key={`${user.id}-${index}`}
                  bg={index % 2 === 0 ? "white" : "gray.50"}
                >
                  <Table.Cell py="3" px="4" border="none">
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg={user.online ? "#22c55e" : "gray.300"}
                    />
                  </Table.Cell>

                  <Table.Cell py="3" px="2" border="none">
                    <Flex align="center" gap="3">
                      <Box
                        w="34px"
                        h="34px"
                        borderRadius="full"
                        overflow="hidden"
                        flexShrink="0"
                        bgImage={`url(${user.avatar})`}
                        bgSize="cover"
                        bgPos="center"
                      />
                      <Text fontSize="sm" fontWeight="medium" color="gray.800">
                        {user.name}
                      </Text>
                    </Flex>
                  </Table.Cell>

                  <Table.Cell py="3" px="2" border="none">
                    <Text fontSize="sm" color="gray.600">
                      {user.location}
                    </Text>
                  </Table.Cell>

                  <Table.Cell py="3" px="2" border="none">
                    <Text fontSize="sm" color="gray.600">
                      {user.organization}
                    </Text>
                  </Table.Cell>

                  <Table.Cell py="3" px="2" border="none">
                    <Flex align="center" gap="2">
                      <DeviceIcon size={16} color={device.color} />
                      <Text fontSize="sm" color="gray.600">
                        {device.label}
                      </Text>
                    </Flex>
                  </Table.Cell>

                  <Table.Cell py="3" px="2" border="none">
                    <Flex align="center" gap="2">
                      <Flex
                        align="center"
                        justify="center"
                        w="22px"
                        h="22px"
                        borderRadius="6px"
                        bg={activity.bg}
                        flexShrink="0"
                      >
                        <ActivityIcon
                          size={13}
                          color={
                            user.activity.icon === "chrome"
                              ? undefined
                              : "white"
                          }
                        />
                      </Flex>
                      <Text fontSize="sm" color="gray.600">
                        {user.activity.label}
                      </Text>
                    </Flex>
                  </Table.Cell>

                  <Table.Cell py="3" px="2" border="none">
                    <Text fontSize="sm" color="gray.600">
                      {user.timeUsage}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>

        {filteredAndSortedData.length === 0 && (
          <Flex justify="center" py="8">
            <Text fontSize="sm" color="gray.400">
              No users found for this organization.
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default OnlineUsersTable;
