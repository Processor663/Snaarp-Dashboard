import { Accordion, Span } from "@chakra-ui/react";

//Icons
import { TbReport } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";
import { PiUser } from "react-icons/pi";
import { PiCalendarDuotone } from "react-icons/pi";
import { BsGlobe } from "react-icons/bs";

//components
import UpgradePlanButton from "@/components/UpgradePlanButton/UpgradePlanButton";
import UsersCard from "@/components/AreaChart/AreaChart";

//Data
import { productivityReport } from "@/data/data";

//styles
import { Wrapper } from "./ProductivityReport.styles";
import EmailChart from "../EmailChart/EmailChart";
import TotalEmail from "../TotalEmail/TotalEmail";

const ProductivityReport = () => {
  const iconMap = {
    hoursProductivity: CiClock2,
    users: PiUser,
    webActivity: BsGlobe,
    daysActivity: PiCalendarDuotone,
  };

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
            <TbReport size={15} />
          </Span>
          <Span flex="1" p="0" m="0" fontWeight={"bold"}>
            Productivity Report
          </Span>
          <UpgradePlanButton blue={"true"} />
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Wrapper>
              <div className="item-1">
                {Object.entries(productivityReport).map(([key, stat]) => {
                  const Icon = iconMap[key as keyof typeof iconMap];
                  console.log(productivityReport);
                  return (
                    <div className="sub-item-1" key={key}>
                      <UsersCard icon={<Icon size={15} />} {...stat} />
                    </div>
                  );
                })}
              </div>
              <div className="item-2">
                <div className="sub-item-1">
                  <EmailChart />
                </div>
                <div className="sub-item-2">
                  <TotalEmail />
                </div>
              </div>
            </Wrapper>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ProductivityReport;
