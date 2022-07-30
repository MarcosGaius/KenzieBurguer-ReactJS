import { LogoWrapper } from "./styles";
import logo from "./logo.svg";

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={logo} alt="Logo da Hamburgueria da Kenzie" />
    </LogoWrapper>
  );
}
