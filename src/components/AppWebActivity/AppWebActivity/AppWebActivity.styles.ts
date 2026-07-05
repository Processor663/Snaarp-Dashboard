import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  margin: 1rem 0 4rem;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
