import { Wrapper } from "./UpgradePlanButton.styles";

//Icons
import { IoFlashOutline } from "react-icons/io5";


type UpgradePlanButtonProps = {
  blue?: string;
}; 


const UpgradePlanButton = ({blue}:UpgradePlanButtonProps) => {
  return (
    <Wrapper $blue={blue}>
      <IoFlashOutline size={20} />
      <span className="storage-upgrade-btn">Upgrade Plan</span>
    </Wrapper>
  );
};

export default UpgradePlanButton;
