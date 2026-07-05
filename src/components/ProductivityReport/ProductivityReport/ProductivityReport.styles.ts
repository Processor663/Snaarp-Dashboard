import styled from "styled-components";

export const Wrapper = styled.div`
  .item-1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  .sub-item-1 {
    background-color: var(--bg-card);
  }

  .item-2 {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .item-2 > div {
    background-color: var(--bg-card);
  }
  .item-2 .sub-item-1 {
    width: 30%;
    background-color: var(--bg-card);
  }

  .item-2 .sub-item-2 {
    flex: 1;
    background-color: var(--bg-card);
  }

  @media screen and (max-width: 768px) {
    .item-1 {
      grid-template-columns: 1fr 1fr;
    }

    .item-2 {
      flex-direction: column;
      
    }

    .item-2 .sub-item-1 {
      width: 100%;
    }

    
  }
  @media screen and (max-width: 480px) {
    .item-1 {
      grid-template-columns: 1fr;
    }
  }
`;
