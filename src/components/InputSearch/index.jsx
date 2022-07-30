import MainButton from "../Button";
import { InputGroup } from "./styles";

export default function InputSearch({
  productList,
  setFilteredProductList,
  setfilterSearch,
}) {
  function showProducts(event) {
    const inputValue = event.target.parentElement.firstChild.value;
    const treatedInputValue = inputValue.toLowerCase().trim();
    const filteredResult = productList.filter((product) => {
      return product.name.toLowerCase().trim().includes(treatedInputValue);
    });
    setFilteredProductList(filteredResult);
    setfilterSearch(inputValue);
  }

  return (
    <InputGroup>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            showProducts(event);
            return;
          }
          return;
        }}
      />
      <MainButton
        btnType="default"
        btnSize="medium"
        onClick={(event) => showProducts(event)}
      >
        Pesquisar
      </MainButton>
    </InputGroup>
  );
}
