import styled from "styled-components";

export const Wrapper = styled.div`
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 1rem;

  & > div {
    background-color: var(--bg-card);
  }
`;
