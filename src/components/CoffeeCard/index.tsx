import {
  ActionsContainer,
  BuyContainer,
  CoffeeCardContainer,
  PriceContainer,
  TagsContainer,
} from "./CoffeeCard.styles";
import CoffeeImg from "../../assets/Coffee.svg";
import ShoppingImg from "../../assets/ShoppingCartSimple.svg";
export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeImg} />
      {/* <span>TRADICIONAL</span> */}
      <TagsContainer>
        <span>Tradicional</span>
      </TagsContainer>
      <span>Expresso Tradicional</span>
      <span>O tradicional café feito com água quente e grãos moídos</span>
      <BuyContainer>
        <PriceContainer>
          <span>R$</span>
          <span>9,90</span>
        </PriceContainer>
        <ActionsContainer>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div>
            <img src={ShoppingImg} />
          </div>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
