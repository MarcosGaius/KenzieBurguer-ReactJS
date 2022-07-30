import styled from "styled-components";

export const CartCardLi = styled.li`
  display: flex;
  width: 100%;
  animation: fadeIn 0.2s ease-in;
`;

export const CartCardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: rgb(var(--grey-20));
  padding: 5px;

  img {
    height: 100%;
  }

  @media screen and (min-width: 875px) {
    width: 80px;
    height: 80px;
  }
`;

export const CartCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding: 0 8px;

  @media screen and (min-width: 875px) {
    padding: 10px;
  }

  p {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 5px;
    color: rgb(var(--grey-600));
  }

  small {
    font-size: 0.75rem;
    font-weight: 400;
    color: rgb(var(--grey-50));
  }
`;

export const CartCardButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  button {
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    color: #bdbdbd;
    transition: all 0.3s;
  }

  button:hover {
    color: rgb(var(--grey-600));
    text-decoration: underline;
  }

  input {
    width: 50%;
    border-radius: 5px;
    outline: 0;
    border: 0;
    padding: 5px;
    border: 2px solid rgb(var(--grey-20));
    transition: all 0.3s;
  }

  input:focus {
    border: 2px solid rgb(var(--grey-600));
  }
`;
