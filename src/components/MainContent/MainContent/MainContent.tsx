import { Wrapper } from "./MainContent.styles";

import TopSearch from "@/components/TopSearch/TopSearch";
import CloudNetwork from "@/components/CloudNetwork/CloudNetwork/CloudNetwork";

const MainContent = () => {
  return (
    <Wrapper>
      <TopSearch />
      <CloudNetwork />
    </Wrapper>
  );
};

export default MainContent;
