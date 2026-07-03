import styled from "styled-components";



export const Wrapper = styled.div`
 display:grid;
 grid-template-columns: repeat(3, 1fr);
  background-color: var(--bg-card);
  margin-top: 0.5em;
  border-radius: 10px;
  font-size: 0.65rem;
  /* border-top: 8px solid var(--bg-page); */
  /* text-align: center; */
  

  .bottom-wrapper {
    border-right: 2px solid var(--bg-page);
    padding: 0.5em;
    
  }

  .bottom-wrapper:last-child {
    border-right: none;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    /* height: 100%; */
    gap: 0.5rem;
  }

  .icon-bottom-wrapper {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
  }
`;