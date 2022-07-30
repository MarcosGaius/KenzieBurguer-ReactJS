import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 2px solid rgb(var(--grey-20));
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s;
  width: 100%;

  &:focus-within {
    border: 2px solid rgb(var(--grey-600));
  }

  input {
    display: flex;
    flex-grow: 1;
    border: 0;
    outline: 0;
    color: rgb(var(--grey-50));
    width: 100%;
  }

  @media screen and (min-width: 875px) {
    width: unset;

    input {
      flex-grow: 0;
    }
  }
`;
