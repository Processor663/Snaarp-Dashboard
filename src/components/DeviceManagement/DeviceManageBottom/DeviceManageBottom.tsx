import type { IconType } from "react-icons";
import { Wrapper } from "./DeviceManageBottom.styles";

// type const Icon: Record<key, string>

type DeviceManageBottomProps = {
  blue?: boolean;
  Icon_one: IconType;
  Icon_two: IconType;
  Icon_three: IconType;

  IconText_one: string;
  IconText_two: string;
  IconText_three: string;

  Total_one: string;
  Total_two: string;
  Total_three: string;

  TotalName: string;
};

const DeviceManageBottom = ({
  Icon_one,
  Icon_two,
  Icon_three,
  IconText_one,
  IconText_two,
  IconText_three,
  Total_one,
  Total_two,
  Total_three,
  TotalName,
  blue,
}: DeviceManageBottomProps) => (
  <Wrapper>
    <div className="bottom-wrapper">
      <div className="icon-wrapper">
        <span>
          <Icon_one size={15} style={{ color: blue ? "#0598c9" : "" }} />
        </span>
        <span>{IconText_one}</span>
      </div>
      <div className="icon-bottom-wrapper">
        <span>{Total_one}</span>
        <span>{TotalName}</span>
      </div>
    </div>
    <div className="bottom-wrapper">
      <div className="icon-wrapper">
        <span>
          <Icon_two size={15} />
        </span>
        <span>{IconText_two}</span>
      </div>
      <div className="icon-bottom-wrapper">
        <span>{Total_two}</span>
        <span>{TotalName}</span>
      </div>
    </div>

   { TotalName && ( <div className="bottom-wrapper">
      <div className="icon-wrapper">
        <span>
          <Icon_three size={15} />
        </span>
        <span>{IconText_three}</span>
      </div>
      <div className="icon-bottom-wrapper">
        <span>{Total_three}</span>
        <span>{TotalName}</span>
      </div>
    </div>)}
  </Wrapper>
);

export default DeviceManageBottom;
