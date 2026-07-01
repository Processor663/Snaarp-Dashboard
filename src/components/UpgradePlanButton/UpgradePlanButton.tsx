import { Wrapper } from "./UpgradePlanButton.styles";

//Icons
import { IoFlashOutline } from "react-icons/io5";

const UpgradePlanButton = () => {
  return (
    <Wrapper>
      <IoFlashOutline size={20} />
      <button className="storage-upgrade-btn">Upgrade Plan</button>
    </Wrapper>
  );
};

export default UpgradePlanButton;
