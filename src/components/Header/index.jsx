import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { HeaderContainer } from "./styles";

export default function Header({
  productList,
  setFilteredProductList,
  setfilterSearch,
}) {
  return (
    <HeaderContainer>
      <Logo />
      <InputSearch
        productList={productList}
        setFilteredProductList={setFilteredProductList}
        setfilterSearch={setfilterSearch}
      />
    </HeaderContainer>
  );
}
