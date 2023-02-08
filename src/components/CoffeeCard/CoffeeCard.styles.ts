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

  & > img {
    margin-top: -20px;
    margin-bottom: 12px;
  }

  & > img:first-child {
    width: 7.5rem;
    height: 7.5rem;
  }

  & > span:first-of-type {
    /* Title/Title S */

    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    /* identical to box height, or 26px */

    display: flex;
    align-items: flex-end;
    text-align: center;

    /* Base/Subtitle */

    color: #403937;
    margin-bottom: 0.5rem;
  }

  & > span:last-of-type {
    /* Text/Regular S */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */

    text-align: center;

    /* Base/Label */

    color: #8d8686;
    margin: 0 20px 33px;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;
`;

export const PriceContainer = styled.div`
  /* price */
  span:first-child {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: right;
    color: #574f4d;
  }
  span:last-child {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    text-align: right;
    color: #574f4d;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  div:first-of-type {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 72px;
    height: 38px;

    /* Base/Button */

    background: #e6e5e5;
    border-radius: 6px;

    span {
      /* Text/Regular M */

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      /* identical to box height, or 21px */
      width: 14px;
      height: 14px;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;

      /* Base/Title */

      color: #272221;
      &:first-of-type:hover,&:last-of-type:hover {
        cursor: pointer;
        font-size: x-large;
        padding-bottom: 20px;
      }      
    }
  }
  div:last-of-type {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 38px;
    height: 38px;

    /* Brand/Purple Dark */

    background: #4b2995;
    border-radius: 6px;
    img {
      width: 22px;
      height: 22px;
    }
  }
  div:last-of-type:hover{
    background: #8047F8;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  span:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    height: 21px;
    /* Brand/Yellow Light */
    background: #f1e9c9;
    border-radius: 100px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    /* identical to box height, or 13px */

    text-transform: uppercase;

    /* Brand / Yellow Dark */

    color: #c47f17;
    margin-bottom: 1rem;
  }
`;
