import { Accordion, Span } from "@chakra-ui/react";

//Icons
import { PiDevicesLight } from "react-icons/pi";
import { TiGroupOutline } from "react-icons/ti";
import { LiaUserSolid } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";
import { PiUploadLight } from "react-icons/pi";

//components
import UpgradePlanButton from "../../UpgradePlanButton/UpgradePlanButton";
import UsersCard from "@/components/AreaChart/AreaChart";
import DeviceManageMiddle from "../DeviceManageMiddle/DeviceManageMiddle";

//Data
import { deviceStats } from "@/data/data";
// import { countryData } from "@/data/data";

//styles
import { Wrapper } from "./DeviceManagement.styles";
import DeviceManageBottom from "../DeviceManageBottom/DeviceManageBottom";

const ChakraAccordion = () => {

  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      <Accordion.Item
        value="device-management"
        border="none"
        p="0"
        m="0"
        mt="0"
      >
        <Accordion.ItemTrigger bg="var(--bg-card)" mt="5" mb="2" p="2">
          <Span bg={"var(--bg-page)"} p={"1"} borderRadius={"5px"}>
            <PiDevicesLight size={15} />
          </Span>
          <Span flex="1" p="0" m="0" fontWeight={"bold"}>
            Device Management Dashboard
          </Span>
          <UpgradePlanButton blue={"true"} />
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Wrapper>          
              <div className="device-desc-1">
                <div className="first-second-container">
                  <UsersCard
                    icon={<LiaUserSolid size={15} />}
                    {...deviceStats.users}
                  /> 
                 <DeviceManageMiddle /> 
                </div>
                 <DeviceManageBottom />
              </div>
              <div className="device-desc-2">
                <div className="first-second-container">
                  <UsersCard
                    icon={<LiaUserSolid size={15} />}
                    {...deviceStats.users}
                  />
                  <DeviceManageMiddle />
                </div>
                <DeviceManageBottom />
              </div>
              <div className="device-desc-3">
                <div className="first-second-container">
                  <UsersCard
                    icon={<LiaUserSolid size={15} />}
                    {...deviceStats.users}
                  />
                  <DeviceManageMiddle />
                </div>
                <DeviceManageBottom />
              </div>
              <div className="device-desc-4">
                <div className="user-card-1">
                  <UsersCard
                    icon={<LiaUserSolid size={15} />}
                    {...deviceStats.users}
                  />
                </div>
                <div className="user-card-2">
                  <UsersCard
                    icon={<LiaUserSolid size={15} />}
                    {...deviceStats.users}
                  />
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
