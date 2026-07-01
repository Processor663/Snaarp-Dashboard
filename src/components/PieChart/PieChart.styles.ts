import styled from "styled-components";

export const Wrapper = styled.div`
  .storage-card {
    background: #fff;
    border-radius: 12px;
    border: 0.5px solid #e5e5e5;
    padding: 1.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    /* width: 750px; */
  }

  /* ── Left: Donut chart ── */
  .storage-chart-wrapper {
    width: 180px;
    height: 180px;
    position: relative;
    flex-shrink: 0;
  }

  .storage-chart-svg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .storage-chart-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
  }

  .storage-chart-center-value {
    font-size: 1.625rem;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1;
  }

  .storage-chart-center-label {
    font-size: 1rem;
  }

  /* ── Right side ── */
  .storage-right {
    flex: 1;
  }

  /* Note box */
  .storage-note {
    font-size: .8rem;
    border: 1px solid #e5e5e5;
    border-left: 4px solid #f0a500;
    border-right: 4px solid #f0a500;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
  }

  .storage-note-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
  }

  .storage-note-icon {
    background: #f0a500;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-size: 19px; */
    color: #fff;
    font-weight: 700;
    flex-shrink: 0;
  }

  .storage-note-title {
    color: #9b59b6;
    font-weight: 700;
    font-size: 1rem;
  }

  .storage-note-text-primary {
    margin: 0;
    color: #555;
  }

  .storage-note-text-secondary {
    color: #555;
    line-height: 1.6;
  }

  /* Legend */
  .storage-legend {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 8px;
    margin-bottom: 1.5rem;
  }

  .storage-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .storage-legend-swatch {
    width: .9rem;
    height: .9rem;
    border-radius: 3px;
    flex-shrink: 0;
  }

  .storage-legend-swatch--available {
    border: 1px solid #ccc;
  }

  .storage-legend-label {
    font-size: .7rem;
    color: #444;
  }

  .upgrade-button {
    display: flex;
    justify-content: flex-end;

  }


  @media screen and (max-width: 1024px) {
    /* .storage-button-row {
      justify-content: center;
    }

    .storage-upgrade-btn {
      justify-content: center;
    } */
  }

  @media screen and (max-width: 768px) {
    .storage-card {
      flex-direction: column;
    }

    /* .storage-upgrade-btn {
      width: 100%;
     
    } */
  }
`;
