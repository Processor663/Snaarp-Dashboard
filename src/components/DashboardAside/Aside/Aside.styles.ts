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

  .aside-bottom {
    margin: 10rem 0;
  }

  .user {
    display: flex;
    align-items: center;
    padding-top: 0.3rem;
    border-top: 1px solid var(--text-muted);
  }

  .user img {
    border-radius: 100%;
    object-fit: cover;
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--accent-hover);
  }

  .user .avatar-content {
    margin-left: 0.3rem;
    line-height: 1rem;
  }
  .user .avatar-content p {
    color: var(--text-primary);
    font-weight: 500;
  }

  .user .avatar-content small {
    color: var(--text-secondary);
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
