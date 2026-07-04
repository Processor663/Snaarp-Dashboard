import type { IconType } from "react-icons";
import { Wrapper } from "./DeviceManageMiddle.styles";


//Types
type DeviceManageMiddleProps = {
  Icon_one: IconType;
  Icon_two: IconType;
  IconText_one: string;
  IconText_two: string;
  Text_one:string;
  Text_two:string;
  power?: boolean
};


const DeviceManageMiddle = ({
  Icon_one,
  Icon_two,
  IconText_one,
  IconText_two,
  Text_one,
  Text_two,
  power
}: DeviceManageMiddleProps) => {

  

 return (
   <>
     <Wrapper>
       <div>
         <div className="icon-middle-container">
           <span className="icon">
             <Icon_one size={15} color={power ? "#1bd621" : ""} />
           </span>
           <span>{IconText_one}</span>
         </div>
         <h6 className="bold">{Text_one}</h6>
       </div>
       <div>
         <div className="icon-middle-container">
           <span className="icon">
             <Icon_two size={15} color={power ? "#e34948" : ""} />
           </span>
           <span>{IconText_two}</span>
         </div>
         <h6 className="bold">{Text_two}</h6>
       </div>
     </Wrapper>
   </>
 );
};

export default DeviceManageMiddle;
