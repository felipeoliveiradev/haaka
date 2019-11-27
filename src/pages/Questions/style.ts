import { pxToRem } from "helper";
import styled from "styled-components";
import { ITheme } from "styles/themes/type";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    ${(props: ITheme) => props.theme.normal.primary},
    ${(props: ITheme) => props.theme.normal.secound}
  );
  z-index: 1;
  align-items: center;
  font-size: ${pxToRem(50)};
  justify-content: center;
  flex: 1;
  flex-direction: column;
  header {
    font-size: ${pxToRem(20)};
    color: #d8d8d8;
    line-height: ${pxToRem(26)};
    font-weight: 400;
    text-align: left;
    margin: ${pxToRem(48)} auto auto ${pxToRem(110.5)};
    font-weight: 300;

    &:after {
      content: "";
      display: block;
      width: ${pxToRem(24)};
      height: ${pxToRem(1)};
      margin-left: -${pxToRem(39)};
      background: ${(props: ITheme) => props.theme.normal.green};
      margin-top: -${pxToRem(14)};
    }
  }
  .questions {
    position: relative;
    .topo {
      font-size: ${pxToRem(20)};
      color: #d8d8d8;
      line-height: ${pxToRem(26)};
      font-weight: 400;
      position: absolute;
      top: ${pxToRem(65)};
      left: auto;
      text-align: center;
      width: 100%;
    }
    .bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: ${pxToRem(1200)};
        max-height: ${pxToRem(800)};
      }
      form {
        position: absolute;
        display: flex;
        justify-content: space-around;
        flex: 1;
        max-width: ${pxToRem(500)};
        width: 100%;
        margin-left: auto;
        margin-left: ${pxToRem(100)};
        label {
          font-size: ${pxToRem(18)};
          font-weight: 300;
          color: #fafafa;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          align-items: center;
          [type="radio"]:checked + label,
          [type="radio"]:not(:checked) + label {
            background: transparent;
          }
        }
        button {
          background: transparent;
          border: none;
          width: ${pxToRem(80)};
          outline: none;
          border: ${pxToRem(1)} solid #fff;
          border-radius: ${pxToRem(10)};
          color: #fff;
        }
      }
    }
  }
`;
