import { CoffeeCard } from "../../../../components/CoffeeCard";
import { CoffeeListContainer, List } from "./styles";

export function CoffeeList() {
  return (
    <>
      <CoffeeListContainer>
        <span id="title">Nossos cafés</span>
        <List>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </List>
      </CoffeeListContainer>
    </>
  );
}
