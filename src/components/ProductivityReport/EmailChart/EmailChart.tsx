// EmailChart.tsx
import { PieChart, Pie, Cell } from "recharts";
import { Box, Flex, Text } from "@chakra-ui/react";
import { LuMail } from "react-icons/lu";
import { Wrapper } from "./EmailChart.styles";

const emailData = [
  { name: "Sent", value: 45, color: "#f5a623" },
  { name: "Received", value: 40, color: "#6c63ff" },
  { name: "Unsent", value: 15, color: "#e2e2e2" },
];

const totalEmailsSent = "5,421";

const EmailChart = () => {
  return (
    <Wrapper>
      <div className="chart-card">
        <div className="chart-card-header">
          <span className="chart-icon">
            <LuMail size={16} />
          </span>
          <span className="chart-title">Email Chart</span>
        </div>

        <Box position="relative" w="220px" h="220px" mx="auto" mt="4">
          <PieChart width={220} height={220}>
            <Pie
              data={emailData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              stroke="none"
            >
              {emailData.map((entry, index) => (
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
            w="130px"
            h="130px"
            borderRadius="full"
            border="3px dashed"
            borderColor="#6c63ff"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontWeight="bold" textAlign="center" fontSize="md">
              Emails
              <br />
              Chart
            </Text>
          </Box>
        </Box>

        <Flex justify="center" gap="5" mt="6" wrap="wrap">
          {emailData.map((item) => (
            <Flex key={item.name} align="center" gap="2">
              <Box w="14px" h="14px" borderRadius="4px" bg={item.color} />
              <Text fontSize="sm" color="gray.600">
                {item.name}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Box textAlign="center" mt="6">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="gray.500"
            letterSpacing="wide"
          >
            TOTAL EMAILS SENT
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mt="1">
            {totalEmailsSent}
          </Text>
        </Box>
      </div>
    </Wrapper>
  );
};

export default EmailChart;
