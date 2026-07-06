import { Wrapper } from "./TopSearch.styles";
import { CiSearch } from "react-icons/ci";
import { TfiBell } from "react-icons/tfi";
import { BsCopy } from "react-icons/bs";
import MobileDrawer from "../Drawer/Drawer";

const TopSearch = () => {
  return (
    <Wrapper>
      <MobileDrawer />
      <div className="search-container">
        <CiSearch className="icon-search" />
        <input type="text" placeholder="search for users, groups or settings" />
      </div>
      <div className="left-bar">
        <div className="first">
          <TfiBell />
        </div>
        <div className="second">
          <p>
            Agent Code: <span>0365o2j37742y3b38</span>
          </p>
          <BsCopy />
        </div>
      </div>
    </Wrapper>
  );
};

export default TopSearch;
