import styled from "styled-components";


export const Wrapper = styled.div`
  width: 20%;
  padding: 1.5rem 1rem 0;
  background-color: var(--bg-sidebar);

  .title {
    font-weight: bold;
    font-family: var(--font-mono);
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;