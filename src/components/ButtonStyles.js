import styled from "styled-components";

export const BaseGenericButton = styled.button`
  display: flex;
  justify-content: space-between;
  grid-column-gap: 15px;
  box-sizing: border-box;
  border: none;
  font-size: 1em;
  border-radius: 2px;

  :disabled {
    background: #bebebe;
  }
`;
