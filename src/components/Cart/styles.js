import styled from "styled-components";

export const CartContainer = styled.div`
  position: static;
  top: 1.8rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(var(--grey-0));
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: fit-content;

  @media screen and (min-width: 875px) {
    position: sticky;
    width: 365px;
  }

  h2 {
    display: flex;
    padding: 1rem;
    margin: 0;
    background-color: rgb(var(--color-primary));
    color: #ffffff;
    border-radius: 5px 5px 0 0;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const CartProductsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 160px;
  max-height: 300px;
  overflow: auto;
  margin: 0;
  padding: 1.2rem 0.8rem;
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;

  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: rgb(var(--grey-600));
  }

  small {
    font-size: 0.8rem;
    font-weight: 400;
    color: rgb(var(--grey-50));
  }
`;
