import { Accordion, Span } from "@chakra-ui/react";

//Icons
import { PiDevicesLight } from "react-icons/pi";
import { LiaUserSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { GrAppleAppStore } from "react-icons/gr";
import { PiPlugsConnected } from "react-icons/pi";
import { PiPlugsLight } from "react-icons/pi";
import { IoPowerOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { IoLogoWindows } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { PiLinuxLogoLight } from "react-icons/pi";
import { PiBuildingsLight } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { TbUsersGroup } from "react-icons/tb";
// import { VscMailRead } from "react-icons/vsc";
import { HiOutlineMailOpen } from "react-icons/hi";

//components
import UpgradePlanButton from "@/components/UpgradePlanButton/UpgradePlanButton";
import UsersCard from "@/components/AreaChart/AreaChart";
import DeviceManageMiddle from "@/components/DeviceManagement/DeviceManageMiddle/DeviceManageMiddle";

//Data
import { deviceStats } from "@/data/data";
// import { countryData } from "@/data/data";

//styles
import { Wrapper } from "./DeviceManagement.styles";
import DeviceManageBottom from "@/components/DeviceManagement/DeviceManageBottom/DeviceManageBottom";

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
              <div className="device-desc-1 desc-flex-column">
                <div className="first-second-container">
                  <UsersCard
                    icon={<PiDevicesLight size={15} />}
                    {...deviceStats.numberOfDevices}
                  />
                  <DeviceManageMiddle
                    Icon_one={PiPlugsConnected}
                    Icon_two={PiPlugsLight}
                    IconText_one={"Plugged"}
                    IconText_two={"Unplugged"}
                    Text_one={"1,923"}
                    Text_two={"1,913"}
                  />
                </div>
                <DeviceManageBottom
                  blue
                  Icon_one={IoLogoWindows}
                  Icon_two={FaApple}
                  Icon_three={PiLinuxLogoLight}
                  IconText_one={"Windows"}
                  IconText_two={"Mac"}
                  IconText_three={"Linux"}
                  Total_one={"1,403"}
                  Total_two={"632"}
                  Total_three={"1,801"}
                  TotalName={"devices"}
                />
              </div>
              <div className="device-desc-2 desc-flex-column">
                <div className="first-second-container">
                  <UsersCard
                    icon={<LiaUserSolid size={15} />}
                    {...deviceStats.users}
                  />
                  <DeviceManageMiddle
                    Icon_one={IoPowerOutline}
                    Icon_two={IoPowerOutline}
                    IconText_one={"Active"}
                    IconText_two={"Offline"}
                    Text_one={"592"}
                    Text_two={"3,836"}
                    power={true}
                  />
                </div>
                <DeviceManageBottom
                  Icon_one={PiBuildingsLight}
                  Icon_two={TbUsersGroup}
                  Icon_three={GrGroup}
                  IconText_one={"Organisations"}
                  IconText_two={"Department"}
                  IconText_three={"Groups"}
                  Total_one={"1,403"}
                  Total_two={"632"}
                  Total_three={"1,801"}
                  TotalName={"users"}
                />
              </div>
              <div className="device-desc-3 desc-flex-column">
                <div className="first-second-container">
                  <UsersCard
                    icon={<TfiEmail size={15} />}
                    {...deviceStats.emails}
                  />
                  <DeviceManageMiddle
                    Icon_one={GoArrowUpRight}
                    Icon_two={GoArrowDownLeft}
                    IconText_one={"Sent"}
                    IconText_two={"Received"}
                    Text_one={"592"}
                    Text_two={"3,836"}
                  />
                </div>
                <DeviceManageBottom
                  Icon_one={HiOutlineMailOpen}
                  Icon_two={TfiEmail}
                  Icon_three={IoLogoWindows}
                  IconText_one={"Read"}
                  IconText_two={"Unread"}
                  IconText_three={""}
                  Total_one={"1,403"}
                  Total_two={"632"}
                  Total_three={""}
                  TotalName={""}
                />
              </div>
              <div className="device-desc-4 desc-flex-column">
                <div className="user-card-1">
                  <UsersCard
                    icon={<GrAppleAppStore size={15} />}
                    {...deviceStats.numberOfApps}
                  />
                </div>
                <div className="user-card-2">
                  <UsersCard
                    icon={<GrAppleAppStore size={15} />}
                    {...deviceStats.numberOfDownloads}
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
