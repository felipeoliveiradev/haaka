import { fonts, pxToRem } from "helper";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

${fonts("Nunito", "woff2")};

 #root{
   position: relative !important;
   width: 100%;
   display: flex;
  flex-direction: column;
 }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto;
    font-family: 'Nunito', sans-serif;
    scroll-behavior: smooth;
  }

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #BDBDBD;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  -webkit-text-size-adjust: ${pxToRem(14)};
  transition: background-color 5000s ease-in-out 0s;
}
`;
