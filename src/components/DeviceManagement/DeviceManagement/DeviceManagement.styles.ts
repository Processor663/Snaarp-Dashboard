import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  grid-auto-rows: auto;
  /* overflow-x: auto; */
  /* background-color: red; */

  .desc-flex-column {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .first-second-container {
    background-color: var(--bg-card);
    border-radius: 10px;
    padding-bottom: .5rem;
  }

  .device-desc-4 .user-card-1,
  .device-desc-4 .user-card-2 {
    background-color: var(--bg-card);
    border-radius: 10px;
  }

  .device-desc-4 .user-card-2 {
    background-color: var(--bg-card);
    border-radius: 10px;
    margin-top: .2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;