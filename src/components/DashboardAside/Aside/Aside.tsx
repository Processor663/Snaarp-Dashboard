import { Wrapper } from "./Aside.styles";
import AsideItem from "../AsideItem/AsideItem"

//image
import avatar from "@/assets/360_F_362501638_FimxwTbbGUoRtjaypXDPGAyYCFvfvYy0.webp"

//data
import { asideItemData, asideBottomItems } from "@/data/data";


const SideBar = () => {
  return (
    <Wrapper>
      <div className="aside-container">
        <h1 className="title">Snaarp</h1>
        {asideItemData.map((item, index) => (
          <AsideItem key={index} {...item} />
        ))}
      </div>
      <div className="aside-bottom">
        {asideBottomItems.map((item, index) => (
          <AsideItem key={index} {...item} />
        ))}
        <div className="user">
          <img src={avatar} alt="avatar" />
          <div className="avatar-content">
            <p>Chidinma Snaarp</p>
            <small>aim.lawso@example.com</small>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SideBar;
