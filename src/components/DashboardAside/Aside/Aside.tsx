import { Wrapper } from "./Aside.styles";
import AsideItem from "../AsideItem/AsideItem"

//data
import {asideItems} from "@/data/data"


const SideBar = () => {
  return (
    <Wrapper>
      <div className="con">
        <h1 className="title">Snaarp</h1>
        {asideItems.map((item, index) => (
          <AsideItem key={index}  {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default SideBar;
