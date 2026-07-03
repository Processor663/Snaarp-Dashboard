import styled from "styled-components";

export const Wrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    grid-auto-rows: auto;

    //////////this background color is for testing purposes only, remove it later
    background-color: white;


  & > div {
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;