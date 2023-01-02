import styled from "styled-components";

export const IntroContainer = styled.div`
  height: 34rem;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;
  
  padding-top: 5.875rem;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 10rem;
    flex-grow: 1;
  }

  img {
    width: 29.75rem;
    height: 16rem;
  }

`;

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  display: flex;
  column-count: 2;
  justify-content: space-around;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
    
`;
