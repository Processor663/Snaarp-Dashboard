import { Wrapper } from "./UpgradePlanButton.styles";

//Icons
import { IoFlashOutline } from "react-icons/io5";


type UpgradePlanButtonProps = {
  blue?: boolean;
}; 


const UpgradePlanButton = ({blue}:UpgradePlanButtonProps) => {
  return (
    <Wrapper blue={blue}>
      <IoFlashOutline size={20} />
      <button className="storage-upgrade-btn">Upgrade Plan</button>
    </Wrapper>
  );
};

export default UpgradePlanButton;
