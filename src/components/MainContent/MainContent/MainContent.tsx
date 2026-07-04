import { Wrapper } from "./MainContent.styles";

import TopSearch from "@/components/TopSearch/TopSearch";
import CloudNetwork from "@/components/CloudNetwork/CloudNetwork/CloudNetwork";
import DeviceManagement from "@/components/DeviceManagement/DeviceManagement/DeviceManagement";
import ProductivityReport from "@/components/ProductivityReport/ProductivityReport/ProductivityReport";

const MainContent = () => {
  return (
    <Wrapper>
      <TopSearch />
      <CloudNetwork />
      <DeviceManagement />
      <ProductivityReport />
    </Wrapper>
  );
};

export default MainContent;
