import styled from "styled-components";

type TrendProps = {
  $trend: "up" | "down";
};

export const Wrapper = styled.div<TrendProps>`
  /* StatCard.css */
  .stat-card {
    padding: 1rem 0.4rem;
  }

  .stat-card-header {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    margin-bottom: 1rem;
  }

  .stat-icon {
    border-radius: 3px;
    margin-right: 0.5rem;
    background-color: var(--bg-page);
    padding: 0.2rem 0.3rem;
  }

  .stat-card-body {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8px;
  }

  .stat-card-info {
    display: flex;
    flex-direction: column;
    width: 58%;
    gap: 4px;
  }

  .stat-card-value {
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
  }

  .unit {
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 100;
  }

  .stat-card-change {
    display: flex;
    align-items: center;
    margin-left: 0.3rem;
    color: ${({ $trend }) => ($trend === "down" ? "#e34948" : "#1bd621")};
    font-size: 0.9rem;
  }

  .stat-card-change > span {
    margin-left: 0.3rem;
  }

  .stat-card-compare {
    margin-top: 1rem;
    font-size: 0.7rem;
  }

  .stat-card-chart {
    flex-shrink: 0;
    width: 42%;
    height: 4rem;
  }
`;
