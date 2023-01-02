import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  /* Base/Card */

  background: ${(props) => props.theme.ColorBaseCard};
  border-radius: 6px 36px;
  margin: 0;
  align-items: center;
  display: flex;
  flex-direction: column;

  img:first-child {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
`;
