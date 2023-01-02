import { Outlet } from "react-router-dom";
import { Header } from "../../components/Button/Headers";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
