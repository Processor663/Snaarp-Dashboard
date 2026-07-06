import { Outlet } from "react-router-dom";

//Styles
import { Wrapper } from "./DashboardLayout.styles";

//Component
import SideBar from "../DashboardAside/Aside/Aside";

const DashboardLayout = () => {
  return (
    <>
      <Wrapper>
        <SideBar />

        <Outlet />
      </Wrapper>
    </>
  );
};

export default DashboardLayout;
