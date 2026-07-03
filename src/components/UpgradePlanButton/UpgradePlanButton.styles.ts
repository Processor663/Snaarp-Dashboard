import styled from "styled-components";

type UpgradePlanButtonProps = {
  $blue?: string;
};

export const Wrapper = styled.div<UpgradePlanButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ $blue }) => ($blue ? "blue" : "transparent")};
  color: ${({ $blue }) => ($blue ? "#fff" : "#5b6be1")};
  border: 1.5px solid #5b6be1;
  border-radius: 8px;
  padding: 0.5em 1.5em;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ $blue }) => ($blue ? "transparent" : "#041597")};
    color: ${({ $blue }) => ($blue ? "#3546c3" : "#fff")};
  }

  @media screen and (max-width:480px) {
    display: none;
  }
`;
