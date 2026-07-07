// FileSharing.tsx
import { useState, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

interface LayeredBarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: FileSharingDataPoint;
}

const MAX_VALUE = 100;

const LayeredBarShape = (props: LayeredBarShapeProps) => {
  const { x = 0, y = 0, width = 0, height = 0, payload } = props;
  if (!payload) return null;

  const fullBarPixelHeight = height / (payload.public / MAX_VALUE || 1);

  const barWidth = width * 0.55;
  const gap = width * 0.12;

  const publicHeight = (payload.public / MAX_VALUE) * fullBarPixelHeight;
  const linkHeight = (payload.anyoneWithLink / MAX_VALUE) * fullBarPixelHeight;
  const orgHeight = (payload.withinOrg / MAX_VALUE) * fullBarPixelHeight;

  const baseY = y + height;

  return (
    <g>
      <rect
        x={x}
        y={baseY - publicHeight}
        width={barWidth}
        height={publicHeight}
        rx={5}
        ry={5}
        fill="#3730d9"
      />
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
      px="3"
      py="2"
      minW="150px"
      boxShadow="0 8px 20px rgba(0,0,0,0.2)"
    >
      <Text fontWeight="bold" fontSize="xs" mb="1.5" letterSpacing="wide">
        {data.month}
      </Text>
      <Flex direction="column" gap="1">
        <Flex align="center" gap="2">
          <Box w="8px" h="8px" borderRadius="2px" bg="#3730d9" flexShrink="0" />
          <Text fontSize="xs">Public: {data.public}</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Box w="8px" h="8px" borderRadius="2px" bg="#4f5fe0" flexShrink="0" />
          <Text fontSize="xs">Anyone with link: {data.anyoneWithLink}</Text>
        </Flex>
        <Flex align="center" gap="2">
          <Box w="8px" h="8px" borderRadius="2px" bg="#7c88ea" flexShrink="0" />
          <Text fontSize="xs">Within Organisation: {data.withinOrg}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const toggleBtnStyle = (isActive: boolean): React.CSSProperties => ({
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${isActive ? "#6c63ff" : "#e2e8f0"}`,
  background: isActive ? "#eef0ff" : "transparent",
  color: isActive ? "#6c63ff" : "#718096",
  borderRadius: "6px",
  cursor: "pointer",
  flexShrink: 0,
});

const FileSharing = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [range, setRange] = useState("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      return;
    }
    setIsDropdownOpen(false);
  };

  return (
    <Box
      bg="white"
      borderRadius="lg"
      p={{ base: "3", md: "4" }}
      w="100%"
      maxW="100%"
      overflow="hidden"
    >
      <Flex
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
        gap="2"
        w="100%"
      >
        <Flex align="center" gap="2">
          <Box bg="gray.100" p="1.5" borderRadius="md" flexShrink="0">
            <HiOutlineDocumentText size={16} />
          </Box>
          <Text fontWeight="bold" fontSize="md">
            File Sharing
          </Text>
        </Flex>

        <Flex
          align="center"
          gap="2"
          w={{ base: "100%", sm: "auto" }}
          justify={{ base: "space-between", sm: "flex-end" }}
        >
          <Flex gap="2">
            <button
              style={toggleBtnStyle(chartType === "bar")}
              onClick={() => setChartType("bar")}
            >
              <BsBarChartFill size={13} />
            </button>
            <button
              style={toggleBtnStyle(chartType === "line")}
              onClick={() => setChartType("line")}
            >
              <AiOutlineLineChart size={13} />
            </button>
          </Flex>

          <Box
            position="relative"
            ref={dropdownRef}
            onBlur={handleBlur}
            tabIndex={-1}
          >
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                color: "#718096",
                background: "white",
                padding: "6px 10px",
                fontSize: "12px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {range} <HiOutlineChevronDown />
            </button>

            {isDropdownOpen && (
              <Box
                position="absolute"
                top="calc(100% + 4px)"
                right="0"
                bg="white"
                borderRadius="md"
                boxShadow="0 8px 24px rgba(0,0,0,0.12)"
                border="1px solid"
                borderColor="gray.100"
                minW="100px"
                zIndex="20"
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
                      px="2"
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
        </Flex>
      </Flex>

      <Text fontSize="xs" color="gray.500" mt="1">
        Keep track of files and how they're shared
      </Text>

      {/* This scroll wrapper is the only place allowed to overflow — the
          outer card clips it via overflow="hidden" above, so extra chart
          width can never push the rest of the page/layout sideways. */}
      <Box
        overflowX="auto"
        mt="2"
        mx={{ base: "-3", md: "-4" }}
        px={{ base: "3", md: "4" }}
      >
        <Box
          h={{ base: "200px", sm: "240px", md: "300px" }}
          minW={{ base: "100%", md: "100%" }}
          w="100%"
        >
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart
                data={fileSharingData}
                margin={{ top: 5, right: 0, left: -25, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  width={28}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar dataKey="public" shape={<LayeredBarShape />} />
              </BarChart>
            ) : (
              <LineChart
                data={fileSharingData}
                margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  width={28}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="public"
                  stroke="#3730d9"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="anyoneWithLink"
                  stroke="#4f5fe0"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="withinOrg"
                  stroke="#7c88ea"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </Box>
      </Box>

      <Flex justify="center" gap="3" wrap="wrap" mt="2">
        {legendItems.map((item) => (
          <Flex key={item.label} align="center" gap="1">
            <Box
              w="12px"
              h="12px"
              borderRadius="1px"
              bg={item.color}
              flexShrink="0"
            />
            <Text fontSize="xs" color="gray.700">
              {item.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default FileSharing;
