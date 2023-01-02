import { IntroContainer, ItemsContainer } from "./styles";
import IntroImg from "../../assets/Intro.svg";
import { CoffeeList } from "./components/CoffeeList";
export function Home() {
  return (
    <>
      <IntroContainer>
        <div>
          <span>Encontre o café perfeito para qualquer hora do dia</span>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <ItemsContainer>
            <div>
              <span>Compra simples e segura</span>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <span>Entrega rápida e rastreada</span>
              <span>O café chega fresquinho até você</span>
            </div>
          </ItemsContainer>
        </div>
        <img src={IntroImg} />
      </IntroContainer>
      <CoffeeList />
    </>
  );
}
