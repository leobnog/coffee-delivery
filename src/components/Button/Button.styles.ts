import styled, { css } from "styled-components";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "neutral";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "blue",
  success: "green",
  danger: "red",
  neutral: "gray",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 5rem;
  height: 5rem;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}
`;
