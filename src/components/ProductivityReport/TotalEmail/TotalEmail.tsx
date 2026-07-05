// TotalEmail.tsx
import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Menu,
  Portal,
  Button,
} from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import { PiChartBar } from "react-icons/pi";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { AiOutlineLineChart } from "react-icons/ai";

const monthlyEmailData = [
  { month: "JAN", sent: 120, received: 200, unsent: 10, total: 330 },
  { month: "FEB", sent: 140, received: 220, unsent: 12, total: 372 },
  { month: "MARCH", sent: 130, received: 210, unsent: 8, total: 348 },
  { month: "APR", sent: 160, received: 240, unsent: 15, total: 415 },
  { month: "MAY", sent: 300, received: 480, unsent: 20, total: 800 },
  { month: "JUN", sent: 340, received: 520, unsent: 18, total: 878 },
  { month: "JUL", sent: 583, received: 932, unsent: 32, total: 1747 },
  { month: "AUG", sent: 1600, received: 2900, unsent: 60, total: 4560 },
  { month: "SEP", sent: 1750, received: 3100, unsent: 55, total: 4905 },
  { month: "OCT", sent: 1900, received: 3300, unsent: 70, total: 5270 },
  { month: "NOV", sent: 1850, received: 3200, unsent: 65, total: 5115 },
  { month: "DEC", sent: 2000, received: 3400, unsent: 80, total: 5480 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;

  return (
    <Box bg="white" boxShadow="lg" borderRadius="md" p="3" minW="150px">
      <Flex justify="space-between" mb="1">
        <Text fontSize="sm" color="gray.500">
          Sent
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {data.sent}
        </Text>
      </Flex>
      <Flex justify="space-between" mb="1">
        <Text fontSize="sm" color="gray.500">
          Received
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {data.received}
        </Text>
      </Flex>
      <Flex justify="space-between" mb="2">
        <Text fontSize="sm" color="gray.500">
          Unsent
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {data.unsent}
        </Text>
      </Flex>
      <Box bg="#6c63ff" borderRadius="md" px="2" py="1">
        <Flex justify="space-between">
          <Text fontSize="sm" color="white">
            Total
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="white">
            {data.total}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const TotalEmail = () => {
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  const [range, setRange] = useState("Month");

  return (
    <Box bg="white" borderRadius="lg" p="5" w="100%">
      <Flex justify="space-between" align="center" mb="6">
        <Flex align="center" gap="2">
          <Box bg="gray.100" p="2" borderRadius="md">
            <LuMail size={16} />
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            Total Email
          </Text>
        </Flex>

        <Flex align="center" gap="2">
          <IconButton
            aria-label="Bar chart view"
            size="sm"
            variant={chartType === "bar" ? "solid" : "outline"}
            colorPalette={chartType === "bar" ? "#f00c08" : "gray"}
            onClick={() => setChartType("bar")}
            border="1px solid"
            borderColor={"var(--text-secondary)"}
            // color="var(--text-primary)"
            bg={chartType === "bar" ? "#6c63ff" : "transparent"}
            color={chartType === "bar" ? "white" : "gray.500"}
            _hover={{
              bg: "#6c63ff",
              color: "#fff",
            }}
          >
            <PiChartBar />
          </IconButton>
          <IconButton
            aria-label="Line chart view"
            size="sm"
            variant={chartType === "line" ? "solid" : "outline"}
            colorPalette={chartType === "line" ? "#789fcd" : "gray"}
            onClick={() => setChartType("line")}
            border="1px solid"
            borderColor={"var(--text-secondary)"}
            // color="#6c63ff"
            bg={chartType === "bar" ? "transparent" : "#6c63ff"}
            color={chartType === "bar" ? "gray.500" : "white"}
            _hover={{
              bg: "#6c63ff",
              color: "#fff",
            }}
          >
            <AiOutlineLineChart />
          </IconButton>

          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                size="sm"
                variant="outline"
                border="1px solid"
                borderColor={"var(--text-secondary)"}
                color="var(--text-secondary)"
                bg={"transparent"}
                padding={"0 .6rem 0 .6rem"}
                _hover={{
                  bg: "#6c63ff",
                  color: "#fff",
                }}
              >
                {range} <HiOutlineChevronDown />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content
                  bg="white"
                  borderRadius="12px"
                  border="1px solid"
                  borderColor="gray.100"
                  boxShadow="0 8px 24px rgba(0, 0, 0, 0.1)"
                  py="2"
                  px="1.5"
                  minW="130px"
                  zIndex="popover"
                  color="#000"
                >
                  {["Week", "Month", "Year"].map((r) => (
                    <Menu.Item
                      key={r}
                      value={r}
                      onClick={() => setRange(r)}
                      bg={"#f0efff"}
                      color={"#6c63ff"}
                      fontWeight={"semibold"}
                      fontSize="sm"
                      borderRadius="8px"
                      px="3"
                      py="2"
                      mb="1"
                      cursor="pointer"
                      transition="background 0.12s ease"
                      _last={{ mb: 0 }}
                    >
                      {r}
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
      </Flex>

      <Box h="380px" w="100%">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart
              data={monthlyEmailData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
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
                tick={{ fontSize: 12, fill: "#9ca3af" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                domain={[0, 7000]}
                ticks={[0, 1000, 3000, 5000, 7000]}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f5f5ff" }}
              />

              <Bar
                dataKey="total"
                fill="#6c63ff"
                radius={[4, 4, 0, 0]}
                maxBarSize={28}
              />
            </BarChart>
          ) : (
            <AreaChart
              data={monthlyEmailData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="totalEmailGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#6c63ff" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#6c63ff" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />

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
                domain={[0, 7000]}
                ticks={[0, 1000, 3000, 5000, 7000]}
              />

              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="total"
                stroke="#6c63ff"
                strokeWidth={2}
                fill="url(#totalEmailGradient)"
                dot={false}
                activeDot={{
                  r: 5,
                  fill: "#6c63ff",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default TotalEmail;
