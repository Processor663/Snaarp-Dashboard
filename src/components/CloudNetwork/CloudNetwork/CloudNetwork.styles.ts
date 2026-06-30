import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: .5rem;

  & > div {
    background-color: var(--bg-card);
  }

  & > div:nth-child(1) {
    background-color: var(--bg-page);
  }

  .item-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: .5rem;
    
  }

  .item-1 > div {
    background-color: var(--bg-card);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    .item-1 {
      grid-template-columns: 1fr;
    }
  }
`;
