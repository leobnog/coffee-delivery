import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 2rem 0;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  height: 2.375rem;

  div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    height: 38px;
    background: ${(props) => props.theme.ColorBrandPurpleLight};
    border-radius: 6px;
    color: ${(props) => props.theme.ColorBrandPurpleDark};
  }
  
  div:last-of-type {
    margin-left: -1.375rem;
    margin-top: -2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme.ColorBrandYellowDark};
    border-radius: 1000px;

    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 130%;
      text-align: center;
      letter-spacing: -0.06em;
      color: ${props => props.theme.ColorBaseWhite};
    }
  }
`;

export const CartContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 2.25rem;
  height: 100%;
  border-radius: 6px;
  background: ${(props) => props.theme.ColorBrandYellowLight};
`;
