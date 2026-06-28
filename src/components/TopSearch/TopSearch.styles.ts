import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--bg-topbar);
  padding: 0.5em;

  .search-container {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-strong);
    padding: 0.5em 0.5em 0.5em 0;
    border-radius: 10px;
    width: 45%;
    /* background-color: red; */
  }

  .search-container .icon-search {
    width: fit-content !important;
    padding-left: 0.5em;
  }

  .search-container input {
    width: 100%;
    background-color: transparent;
    border: none;
    margin-left: 0.5em;
  }

  .search-container input::placeholder {
    font-size: 0.8rem;
  }

  .search-container input:focus {
    outline: none;
    box-shadow: none;
  }

  .left-bar {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    width: 50%;
  }

  .left-bar > div {
    margin-left: 0.3rem;
    align-self: baseline;
  }

  .left-bar .first {
    background-color: var(--bg-page);
    padding: 0.5em 0.8rem;
    border-radius: 5px;
  }

  .left-bar .second {
    display: flex;
    background-color: var(--bg-page);
    padding: 0.5em;
    border-radius: 5px;
  }

  .left-bar .second p {
    margin: 0 0.5em;
  }

  .left-bar .second p span {
    color: var(--accent-hover);
  }

  @media screen and (max-width: 1024px) {
    .left-bar .second p {
      display: none;
    }

    .search-container {
      flex: 1;
      /* background-color: blue; */
    }

    .left-bar {
      width: fit-content;
    }
  }

  @media screen and (max-width: 480px) {
    
  }
`;
