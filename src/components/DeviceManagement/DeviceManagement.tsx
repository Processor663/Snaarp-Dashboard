import { Accordion, Span } from "@chakra-ui/react";

//Icons
import { PiDevicesLight } from "react-icons/pi";

//components
import UpgradePlanButton from "../UpgradePlanButton/UpgradePlanButton";
import UsersCard  from "@/components/AreaChart/AreaChart";


//styles
import { Wrapper } from "./DeviceManagement.styles";

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
          <UpgradePlanButton blue />
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Wrapper>
              <div className="device-desc-1">
                <UsersCard/>
              </div>
              <div className="device-desc-2">2</div>
              <div className="device-desc-3">3</div>
              <div className="device-desc-4">4</div>
            </Wrapper>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ChakraAccordion;
