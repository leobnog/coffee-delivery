import styled from "styled-components";

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