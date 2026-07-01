import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1.5px solid #5b6be1;
  border-radius: 8px;
  color: #5b6be1;
  padding: .5em 1.5em;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  .storage-upgrade-btn:hover {
    background: #f0f1fd;
  }
`;