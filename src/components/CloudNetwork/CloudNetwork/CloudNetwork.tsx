import { Accordion, Span } from "@chakra-ui/react";

//Styles
import { Wrapper } from "./CloudNetwork.styles";
//Components
import UsersCard from "@/components/AreaChart/AreaChart";
import StorageCard from "@/components/PieChart/PieChart";
import ActiveUsersMap from "@/components/ActiveUsers/ActiveUsers";

//Data
import { usersSparklineData } from "@/data/data";
import { countryData } from "@/data/data";

//Icons
import { CiGlobe } from "react-icons/ci";
import { TiGroupOutline } from "react-icons/ti";
import { LiaUserSolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";
import { PiUploadLight } from "react-icons/pi";
import FileSharingBarChart from "@/components/FileSharingChart/FileSharingChart";
import { AiOutlineUser } from "react-icons/ai";

//Progress bar
import { Box, Flex, Text, Progress } from "@chakra-ui/react";



const ChakraAccordion = () => {
  const iconMap = {
    users: LiaUserSolid,
    groups: GrGroup,
    uploads: PiUploadLight,
    departments: TiGroupOutline,
  };

  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      <Accordion.Item value="Cloud-network" border="none" p="0" m="0" mt="2">
        <Accordion.ItemTrigger bg="var(--bg-card)" mb="2" p="2">
          <Span bg={"var(--bg-page)"} p={"1"} borderRadius={"5px"}>
            <CiGlobe />
          </Span>
          <Span flex="1" p="0" m="0" fontWeight={"bold"}>
            Cloud Network
          </Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Wrapper>
              <div className="item-1">
                {Object.entries(usersSparklineData).map(([key, stat]) => {
                  const Icon = iconMap[key as keyof typeof iconMap];

                  return (
                    <div className="sub-item-1" key={key}>
                      <UsersCard icon={<Icon size={15} />} {...stat} />
                    </div>
                  );
                })}
              </div>
              <div className="item-2">
                <StorageCard />
              </div>
              <div className="item-3">
                <FileSharingBarChart />
              </div>
              <div className="item-4">
                <div className="desc-container">
                  <div className="desc">
                    <span className="user-desc-icon">
                      <AiOutlineUser size={20} />
                    </span>
                    <h6>Active Users</h6>
                  </div>
                  <div className="dropdown">drop</div>
                </div>
                <div className="user-active-container">
                  <div className="map">
                    <ActiveUsersMap />
                  </div>
                  <div className="progress">
                    <Flex direction="column" gap={1.5} maxW="27.5rem" h="100%">
                      {countryData.map((country) => (
                        <Flex
                          key={country.code}
                          align="center"
                          gap={3}
                          border="1px solid"
                          borderColor="gray.200"
                          borderRadius="lg"
                          px={3}
                          py={1.5}
                          flex="1"
                          minH={0}
                        >
                          <Box flexShrink={0}>
                            <span
                              className={`fi fi-${country.code}`}
                              style={{
                                width: 26,
                                height: 18,
                                borderRadius: 3,
                                display: "inline-block",
                                backgroundSize: "cover",
                              }}
                            />
                          </Box>

                          <Flex direction="column" gap={0.5} flex="1" minW={0}>
                            <Text
                              fontSize="xs"
                              color="gray.600"
                              fontWeight="medium"
                            >
                              {country.name}
                            </Text>

                            <Flex align="center" gap={2}>
                              <Progress.Root
                                value={country.percentage}
                                size="xs"
                                flex="1"
                                borderRadius="full"
                              >
                                <Progress.Track
                                  bg="gray.200"
                                  borderRadius="full"
                                >
                                  <Progress.Range bg="#3EA845" />
                                </Progress.Track>
                              </Progress.Root>
                              <Text
                                fontSize="xs"
                                color="gray.500"
                                fontWeight="medium"
                                minW="28px"
                              >
                                {country.percentage}%
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      ))}
                    </Flex>
                  </div>
                </div>
              </div>
            </Wrapper>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ChakraAccordion;
