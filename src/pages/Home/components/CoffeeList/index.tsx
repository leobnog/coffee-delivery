import { CoffeeCard } from "./CofeeCard";
import { CoffeeListContainer, List } from "./styles";

export function CoffeeList() {
  return (
    <>
      <CoffeeListContainer>
        <span>Nossos cafés</span>
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
