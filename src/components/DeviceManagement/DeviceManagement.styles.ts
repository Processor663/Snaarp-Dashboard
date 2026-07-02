import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  grid-auto-rows: auto;

    & > div {
        background-color: white;
        height: 10vh;
    }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;