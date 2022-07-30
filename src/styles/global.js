import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  :root {
    --color-primary: 39, 174, 96;
    --color-primary-50: 147, 215, 175;
    --grey-0: 245, 245, 245;
    --grey-20: 224, 224, 224;
    --grey-50: 130, 130, 130;
    --grey-600: 51, 51, 51;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ::-webkit-scrollbar{
	width: 10px;
  }

  ::-webkit-scrollbar-track-piece{
    background-color: #FFF;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #CBCBCB;
    outline: 2px solid #FFF;
    outline-offset: -2px;
    border: .1px solid #B7B7B7;
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: #909090;
  }
`;
