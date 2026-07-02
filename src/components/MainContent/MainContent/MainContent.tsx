import { Wrapper } from "./MainContent.styles";

import TopSearch from "@/components/TopSearch/TopSearch";
import CloudNetwork from "@/components/CloudNetwork/CloudNetwork/CloudNetwork";
import DeviceManagement from "@/components/DeviceManagement/DeviceManagement";


const MainContent = () => {
  return (
    <Wrapper>
      <TopSearch />
      <CloudNetwork />
      <DeviceManagement />
    </Wrapper>
  );
};

export default MainContent;
