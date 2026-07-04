import styled from "styled-components";



export const Wrapper = styled.div`
  display: flex;
  background-color: var(--bg-card);
  margin-top: 0.5em;
  border-radius: 10px;
  font-size: 0.65rem;
  text-align: center;


  .bottom-wrapper {
    flex: 1;
    border-right: 2px solid var(--bg-page);
    padding: 1em 0.5em;
  }

  .bottom-wrapper:last-child {
    border-right: none;
  }

  .icon-wrapper, .icon-bottom-wrapper {
   display: flex;
   justify-content: center;
   gap: .2rem;
   
  }

  .icon-bottom-wrapper {
    font-weight: bold;
  }
`;