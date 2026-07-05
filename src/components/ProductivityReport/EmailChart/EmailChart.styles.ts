import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em 1em 0;
  .chart-card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .chart-icon {
    background-color: var(--bg-page);
    border-radius: 8px;
    padding: 0.3rem .5rem;
  }

  .chart-title {
    font-weight: bold;
  }
`;