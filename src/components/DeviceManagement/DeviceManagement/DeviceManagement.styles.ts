import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  grid-auto-rows: auto;
  /* overflow-x: auto; */
  background-color: red;

  .first-second-container {
    background-color: var(--bg-card);
    border-radius: 10px;
  }

  .device-desc-4 .user-card-1,
  .device-desc-4 .user-card-2 {
    background-color: var(--bg-card);
    border-radius: 10px;
  }

  .device-desc-4 .user-card-2 {
    margin-top: .5em;
    background-color: var(--bg-card);
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;