import {
  IntroContainer,
  ItemRow,
  ItemsContainer,
  LeftContainer,
  TitleContainer,
} from "./styles";
import IntroImg from "../../assets/Intro.svg";
import { CoffeeList } from "./components/CoffeeList";
import { IconItem } from "../../components/IconItem";

export function Home() {
  return (
    <>
      <IntroContainer>
        <LeftContainer>
          <TitleContainer>
            <span>Encontre o café perfeito para qualquer hora do dia</span>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>
          <ItemsContainer>
            <IconItem variant="shoppingCart" label="Compra simples e segura" />
            <IconItem variant="timer" label="Entrega rápida e rastreada" />
            <IconItem variant="package" label="Embalagem mantém o café intacto" />
            <IconItem variant="coffee" label="O café chega fresquinho até você" />
          </ItemsContainer>
        </LeftContainer>
        <img src={IntroImg} />
      </IntroContainer>
      <CoffeeList />
    </>
  );
}
