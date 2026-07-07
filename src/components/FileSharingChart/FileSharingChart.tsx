// FileSharing.tsx
import { useState, useRef } from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HiOutlineDocumentText, HiOutlineChevronDown } from "react-icons/hi2";
import { BsBarChartFill } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";

interface FileSharingDataPoint {
  month: string;
  public: number;
  anyoneWithLink: number;
  withinOrg: number;
}

const fileSharingData: FileSharingDataPoint[] = [
  { month: "JAN", public: 47, anyoneWithLink: 30, withinOrg: 18 },
  { month: "FEB", public: 62, anyoneWithLink: 42, withinOrg: 20 },
  { month: "MAR", public: 48, anyoneWithLink: 32, withinOrg: 16 },
  { month: "APR", public: 40, anyoneWithLink: 28, withinOrg: 14 },
  { month: "MAY", public: 63, anyoneWithLink: 40, withinOrg: 18 },
  { month: "JUN", public: 80, anyoneWithLink: 55, withinOrg: 24 },
  { month: "JUL", public: 60, anyoneWithLink: 50, withinOrg: 22 },
  { month: "AUG", public: 45, anyoneWithLink: 30, withinOrg: 16 },
  { month: "SEP", public: 40, anyoneWithLink: 27, withinOrg: 14 },
  { month: "OCT", public: 46, anyoneWithLink: 30, withinOrg: 16 },
  { month: "NOV", public: 66, anyoneWithLink: 46, withinOrg: 20 },
  { month: "DEC", public: 45, anyoneWithLink: 32, withinOrg: 16 },
];

const legendItems = [
  { label: "Public", color: "#3730d9" },
  { label: "Anyone with link", color: "#4f5fe0" },
  { label: "Within Organisation", color: "#7c88ea" },
];

const monthOptions = ["Month", "Week", "Year"];

// Custom shape drawing 3 layered rounded bars per category, mimicking the
// depth/overlap effect in the screenshot (back = tallest/darkest,
// front = shortest/lightest, each offset slightly down-right).
const LayeredBarShape = (props: any) => {
  const { x, y, width, height, payload } = props;
  const barWidth = width * 0.55;
  const gap = width * 0.12;

  const maxVal = 100;
  const chartHeight = 300; // matches the <BarChart> height set below

  const publicHeight = (payload.public / maxVal) * chartHeight;
  const linkHeight = (payload.anyoneWithLink / maxVal) * chartHeight;
  const orgHeight = (payload.withinOrg / maxVal) * chartHeight;

  const baseY = y + height;

  return (
    <g>
      {/* Back bar: Public (tallest, darkest) */}
      <rect
        x={x}
        y={baseY - publicHeight}
        width={barWidth}
        height={publicHeight}
        rx={5}
        ry={5}
        fill="#3730d9"
      />
      {/* Middle bar: Anyone with link */}
      <rect
        x={x + gap}
        y={baseY - linkHeight}
        width={barWidth}
        height={linkHeight}
        rx={5}
        ry={5}
        fill="#4f5fe0"
        opacity={0.9}
      />
      {/* Front bar: Within Organisation (shortest, lightest) */}
      <rect
        x={x + gap * 2}
        y={baseY - orgHeight}
        width={barWidth}
        height={orgHeight}
        rx={5}
        ry={5}
        fill="#7c88ea"
        opacity={0.85}
      />
    </g>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: FileSharingDataPoint }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;

  return (
    <Box
      bg="gray.500"
      color="white"
      borderRadius="md"
      px="4"
      py="3"
      minW="150px"
      boxShadow="0 8px 20px rgba(0,0,0,0.2)"
    >
      <Text fontWeight="bold" fontSize="sm" mb="2" letterSpacing="wide">
        {data.month}
      </Text>
      <Flex align="center" gap="2">
        <Box w="10px" h="10px" borderRadius="3px" bg="#3730d9" />
        <Text fontSize="sm">Public: {data.public}</Text>
      </Flex>
    </Box>
  );
};

const FileSharing = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [range, setRange] = useState("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsDropdownOpen(false);
  };

  return (
    <Box bg="white" borderRadius="lg" p="5" w="100%">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        gap="3"
        mb="1"
      >
        <Flex align="center" gap="2">
          <Box bg="gray.100" p="2" borderRadius="md">
            <HiOutlineDocumentText size={18} />
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            File Sharing
          </Text>
        </Flex>

        <Flex align="center" gap="2">
          <IconButton
            aria-label="Bar chart view"
            size="sm"
            border="1px solid"
            borderColor={chartType === "bar" ? "#6c63ff" : "gray.200"}
            bg={chartType === "bar" ? "#eef0ff" : "transparent"}
            color={chartType === "bar" ? "#6c63ff" : "gray.500"}
            _hover={{ bg: "#eef0ff", color: "#6c63ff" }}
            onClick={() => setChartType("bar")}
          >
            <BsBarChartFill />
          </IconButton>
          <IconButton
            aria-label="Line chart view"
            size="sm"
            border="1px solid"
            borderColor={chartType === "line" ? "#6c63ff" : "gray.200"}
            bg={chartType === "line" ? "#eef0ff" : "transparent"}
            color={chartType === "line" ? "#6c63ff" : "gray.500"}
            _hover={{ bg: "#eef0ff", color: "#6c63ff" }}
            onClick={() => setChartType("line")}
          >
            <AiOutlineLineChart />
          </IconButton>

          <Box position="relative" ref={dropdownRef} onBlur={handleBlur} tabIndex={-1}>
            <Flex
              as="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
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
              {range} <HiOutlineChevronDown />
            </Flex>

            {isDropdownOpen && (
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
                {monthOptions.map((opt) => {
                  const isActive = range === opt;
                  return (
                    <Box
                      key={opt}
                      tabIndex={0}
                      onClick={() => {
                        setRange(opt);
                        setIsDropdownOpen(false);
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
        </Flex>
      </Flex>

      <Text fontSize="sm" color="gray.500" mb="4">
        Keep track of files and how they're shared
      </Text>

      <Box h="360px" w="100%">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={fileSharingData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar dataKey="public" shape={<LayeredBarShape />} />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Flex justify="center" gap="6" mt="4" wrap="wrap">
        {legendItems.map((item) => (
          <Flex key={item.label} align="center" gap="2">
            <Box w="14px" h="14px" borderRadius="1px" bg={item.color} />
            <Text fontSize="sm" color="gray.700">
              {item.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default FileSharing;