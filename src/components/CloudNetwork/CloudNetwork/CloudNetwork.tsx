import { Accordion, Span } from "@chakra-ui/react";
//Styles
import { Wrapper } from "./CloudNetwork.styles";
//Components
import UsersCard from "@/components/AreaChart/AreaChart";
import StorageCard from "@/components/PieChart/PieChart";
import ActiveUsersMap from "@/components/ActiveUsers/ActiveUsers";

//Data
import { usersSparklineData } from "@/data/data";

//Icons
import { CiGlobe } from "react-icons/ci";
import { TiGroupOutline } from "react-icons/ti";
import { LiaUserSolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";
import { PiUploadLight } from "react-icons/pi";
import FileSharingBarChart from "@/components/FileSharingChart/FileSharingChart";

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
                    <div className="sub-item-1">
                      <UsersCard
                        key={key}
                        icon={<Icon size={15} />}
                        {...stat}
                      />
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
                    <span>icons</span>
                    <h6>Active Users</h6>
                  </div>
                  <div>dropdown</div>
                </div>
                <div className="user-active-container">
                  <div className="map">
                    <ActiveUsersMap />
                  </div>
                  <div className="progress">1</div>
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
