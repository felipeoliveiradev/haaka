import { pxToRem } from "helper";
import styled from "styled-components";
import { ITheme } from "styles/themes/type";

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(props: ITheme) => props.theme.normal.primary},
    ${(props: ITheme) => props.theme.normal.secound}
  );
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: ${pxToRem(500)};
  width: 100%;
  padding: ${pxToRem(10)};
  input {
    background: transparent;
    border: none;
    max-width: ${pxToRem(500)};
    width: 100%;
    border-bottom: ${pxToRem(2)} solid rgba(228, 228, 228, 0.1);
    font-size: ${pxToRem(14)};
    font-weight: 400;
    line-height: ${pxToRem(40)};
    outline: none;
    color: #BDBDBD;
    margin-bottom: ${pxToRem(20)};
    &::placeholder {
      font-size: ${pxToRem(14)};
      line-height: ${pxToRem(40)};
      font-weight: 400;
      color: #BDBDBD;
      padding-bottom: ${pxToRem(20)};
      background: transparent;
    }
    &:active{
      background: transparent;
    }
  }
  button{
    width:100%;
    height: ${pxToRem(42)};
    background-color: #43425D;
    text-align: center;
    vertical-align: middle;
    color: #FFFFFF;
    border:none;
    font-size:${pxToRem(15)};
    line-height: ${pxToRem(19)};
    font-weight: 300;
    outline:none;
    &:last-child{
      margin-top: ${pxToRem(10)};
    }
  }
`;
