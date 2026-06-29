import { Wrapper } from "./AsideItem.styles";
// import { MdWindow } from "react-icons/md";

//types
import type { AsideItemProps } from "@/data/data";

const AsideItem = ({label, icon}:AsideItemProps) => {
    const Icon = icon
  return (
    <Wrapper>
      {<Icon size={20}/>}
      <span className="aside-item-content">{label}</span>
    </Wrapper>
  );
};

export default AsideItem;
