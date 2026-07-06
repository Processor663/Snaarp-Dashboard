import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";
//styles
import { Wrapper } from "./AsideItem.styles";

//types
import type { AsideItemProps } from "@/data/data";

const AsideItem = ({ label, icon ,path}: AsideItemProps) => {
  const Icon = icon;
  return (
    <Wrapper>
      {<Icon size={20} />}
      <NavLink to={path}>
        {({ isActive }) => (
          <Box
            px={4}
            py={2}
            rounded="md"
            bg={isActive ? "green.50" : "transparent"}
            color={isActive ? "green.600" : "gray.600"}
            fontWeight={isActive ? "bold" : "normal"}
            _hover={{ bg: "gray.100" }}
          >
            <span className="aside-item-content">{label}</span>
          </Box>
        )}
      </NavLink>
    </Wrapper>
  );
};

export default AsideItem;
