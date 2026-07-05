import { Wrapper } from "./MainContent.styles";

import TopSearch from "@/components/TopSearch/TopSearch";
import CloudNetwork from "@/components/CloudNetwork/CloudNetwork/CloudNetwork";
import DeviceManagement from "@/components/DeviceManagement/DeviceManagement/DeviceManagement";
import ProductivityReport from "@/components/ProductivityReport/ProductivityReport/ProductivityReport";
import OnlineUsersTable from "@/components/OnlineUsers/OnlineUsers";

const MainContent = () => {
  return (
    <Wrapper>
      <TopSearch />
      <CloudNetwork />
      <DeviceManagement />
      <ProductivityReport />
      <OnlineUsersTable />
    </Wrapper>
  );
};

export default MainContent;
