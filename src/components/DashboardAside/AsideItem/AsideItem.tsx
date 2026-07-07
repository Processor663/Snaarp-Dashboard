import { NavLink } from "react-router-dom";
//styles
import { Wrapper } from "./AsideItem.styles";

//types
import type { AsideItemProps } from "@/data/data";

const AsideItem = ({ label, icon: Icon, path }: AsideItemProps) => {
  return path ? (
    <NavLink to={path}>
      {({ isActive }) => (
        <Wrapper
          style={{
            background: isActive ? "var( --accent-light)" : "transparent",
            borderRadius: isActive?  "5px" : "",
            padding: isActive? "0.5rem 0  0.5rem  0.5rem" : "",
          }}
        >
          <Icon
            size={20}
            style={{
              color: isActive ? "var( --chart-blue)" : "",
            }}
          />
          <span
            className="aside-item-content"
            style={{
              color: isActive ? "var( --chart-blue)" : "",
              fontWeight: isActive ? "bold" : "",
            }}
          >
            {label}
          </span>
        </Wrapper>
      )}
    </NavLink>
  ) : (
    <Wrapper>
      <Icon size={20} />
      <span className="aside-item-content">{label}</span>
    </Wrapper>
  );
};

export default AsideItem;
