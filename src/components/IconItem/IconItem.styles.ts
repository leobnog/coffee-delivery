import styled, { css } from "styled-components";

export type IconItemVariant = "shoppingCart" | "package" | "timer" | "coffee";

interface IconItemProps {
  variant: IconItemVariant;
}

const iconItemVariants = {
  shoppingCart: "#c47f17",
  package: "#574F4D",
  timer: "#DBAC2C",
  coffee: "#8047F8",
};

export const IconItemContainer = styled.div<IconItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  height: 32px;
  margin-bottom: 20px;

  div:first-of-type {
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 32px;
    height: 32px;
    ${(props) => {
      return css`
        background-color: ${iconItemVariants[props.variant]};
      `;
    }}
    border-radius: 50%;
    margin: 0;
    margin-bottom: 0px;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #574f4d;
  }
`;
