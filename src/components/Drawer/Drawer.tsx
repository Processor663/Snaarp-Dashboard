import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";

//components
import AsideItem from "../DashboardAside/AsideItem/AsideItem";

//styles
import { Wrapper } from "./Drawer.styles";

//icons
import { FaBarsStaggered } from "react-icons/fa6";

//data
import { asideItemData } from "@/data/data";

const MobileDrawer = () => {
  return (
    <Wrapper>
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          <Button size="sm">
            <FaBarsStaggered />
          </Button>
        </Drawer.Trigger>

        <Portal>
          <Drawer.Backdrop />

          <Drawer.Positioner>
            <Drawer.Content bg="#fff" p="9">
              <Drawer.Body>
                {asideItemData.map((item, index) => (
                  <AsideItem key={index} {...item} />
                ))}
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" color="#000"/>
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Wrapper>
  );
};

export default MobileDrawer;
