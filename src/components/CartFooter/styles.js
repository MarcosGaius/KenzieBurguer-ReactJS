import styled from "styled-components";

export const CartFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  border-top: 2px solid rgb(var(--grey-20));
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    p {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }

    p:nth-child(1) {
      color: rgb(var(--grey-600));
    }

    p:nth-child(2) {
      color: rgb(var(--grey-50));
    }
  }

  button {
    width: 100%;
    height: 60px;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;
