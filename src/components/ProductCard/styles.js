import styled from "styled-components";

export const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: rgb(var(--grey-0));
  border: 2px solid rgb(var(--grey-20));
  border-radius: 5px;
  min-width: 18rem;
  height: 350px;
  transition: all 0.3s;
  animation: fadeIn 0.2s ease-in;

  &:hover {
    transform: scale(1.02);
    border-color: rgb(var(--grey-600));
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;

  img {
    height: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  background-color: #ffffff;

  h2,
  p,
  small {
    margin: 0;
  }

  h2 {
    color: rgb(var(--grey-600));
    font-size: 1.2rem;
    font-weight: 700;
  }

  small {
    color: rgb(var(--grey-50));
    font-size: 0.75rem;
    font-weight: 400;
  }

  p {
    color: rgb(var(--color-primary));
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
