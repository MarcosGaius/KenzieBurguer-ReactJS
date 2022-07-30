import styled from "styled-components";

export const ProductCardList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  width: 100%;
  height: fit-content;
  overflow: auto;

  @media screen and (min-width: 875px) {
    width: calc(100% - 365px);
    min-width: unset;
    flex-wrap: wrap;
    overflow: unset;
    padding: 0;
  }
`;

export const NothingFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: fadeIn 0.2s ease-in;

  h2 {
    margin: 0;
  }
`;
