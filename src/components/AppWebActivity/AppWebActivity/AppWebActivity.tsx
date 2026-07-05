//Styles
import { Wrapper } from "./AppWebActivity.styles";

//Components
import AppActivityReport from "../AppActivityReport/AppActivityReport";
import WebActivity from "../WebActivity/WebActivity";

const AppWebActivity = () => {
  return (
    <>
      <Wrapper>
        <AppActivityReport />
        <WebActivity />
      </Wrapper>
    </>
  );
};

export default AppWebActivity;
