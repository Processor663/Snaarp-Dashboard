import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 0.5rem;

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
    gap: 0.5rem;
  }

  .item-1 > div {
    background-color: var(--bg-card);
  }

  .item-4 {
    padding: 1rem 1rem 2rem;
  }

  .item-4 .desc-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-4 .desc-container .desc {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .item-4 .desc-container .desc .user-desc-icon {
    background-color: var(--bg-page);
    border-radius: 5px;
    padding: 0.2rem 0.3rem;
  }
  .item-4 .desc-container .desc h6 {
    font-weight: bold;
  }

  .item-4 .user-active-container {
    display: flex;
    gap: 0.9rem;
    margin-top: 3vw;
    min-height: 20rem;
  }

  .item-4 .user-active-container > div {
    width: 50%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    .item-1 {
      grid-template-columns: 1fr 1fr;
    }

    .item-4 {
      padding: .5rem .5rem ;
    }

    .item-4 .user-active-container {
      gap: 1.5rem;
      flex-direction: column;
      height: auto;
    }

    .item-4 .user-active-container > div {
      width: 100%;
      height: 20rem;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;

    .item-1 {
      grid-template-columns: 1fr;
    }
  }
`;
