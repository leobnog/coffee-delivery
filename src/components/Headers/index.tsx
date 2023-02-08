import {
  CartContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Cart.svg";
import Local from "../../assets/Local.svg";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={Logo} />
      </HeaderLeft>
      <HeaderRight>
        <div>
          <img src={Local} />
          <span>Porto Alegre, RS</span>
        </div>
        <CartContainer>
          <img src={Cart} />
        </CartContainer>
        <div>
          <span>3</span>
        </div>
      </HeaderRight>
    </HeaderContainer>
  );
}
