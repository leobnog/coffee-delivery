import styled, { css } from "styled-components";

export type IconItemVariant =
  | "cart"
  | "package"
  | "timer"
  | "coffee";
interface IconItemProps {
  variant: IconItemVariant;
}
const iconItemVariants = {
  cart: 'ColorBrandYellowDark',
  secondary: "blue",
  success: "green",
  danger: "red",
  neutral: "gray",
};
export const IntroContainer = styled.div`
  height: 34rem;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 5.875rem;

  & > img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: solid;
  gap: 12px;
`;

// export const Item = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 12px;
//   height: 32px;
//   margin-bottom: 20px;

//   div:first-of-type {
//     justify-content: center;
//     align-items: center;
//     padding: 8px;
//     width: 32px;
//     height: 32px;
//     background: #c47f17;
//     border-radius: 50%;
//     margin: 0;
//     margin-bottom: 0px;
//   }

//   span {
//     font-family: "Roboto";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 130%;
//     color: #574f4d;
//   }
// `;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin-right: 0px;
  padding: 0;
  max-width: 588px;

  span:first-of-type {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: #272221;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  display: inline-block;
  column-count: 2;
  justify-content: space-between;
  padding-bottom: 6.75rem;
`;

// export const IconItem = styled.div<IconItemProps>`
//    ${(props) => {
//     return css`
//       background-color: ${props.theme.ColorBrandYellowDark};
//     `;
//   }}
// `;