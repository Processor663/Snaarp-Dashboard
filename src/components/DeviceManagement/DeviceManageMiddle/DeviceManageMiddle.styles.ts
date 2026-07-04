import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1.5px solid var(--bg-page);
  padding: 1em 0.5em 0;

  .icon-middle-container {
    display: flex;
    gap:.5rem;
    align-items: center;
  }
  
  .bold {
    font-size: 1rem;
    font-weight: 600;
    line-height: 2;
  }

  .icon {
    border-radius: 3px;
      /* margin-right: 0.5rem; */
      background-color: var(--bg-page);
      padding: 0.2rem 0.2rem;
  }
`;
