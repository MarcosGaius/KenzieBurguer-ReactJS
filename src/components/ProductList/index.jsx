import ProductCard from "../ProductCard";
import { NothingFoundContainer, ProductCardList } from "./styles";

export default function ProductList({
  productList,
  filterSearch,
  filteredProductList,
  setCartProductList,
  cartProductList,
}) {
  const shouldFilter = filterSearch !== "";
  const filterResultsExists = filteredProductList.length > 0;

  if (shouldFilter === false) {
    return (
      <ProductCardList>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            setCartProductList={setCartProductList}
            productList={productList}
            cartProductList={cartProductList}
          />
        ))}
      </ProductCardList>
    );
  }

  if (filterResultsExists) {
    return (
      <ProductCardList>
        {filteredProductList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            setCartProductList={setCartProductList}
            productList={productList}
            cartProductList={cartProductList}
          />
        ))}
      </ProductCardList>
    );
  }

  return (
    <ProductCardList>
      <NothingFoundContainer>
        <h2>Nada encontrado 😅</h2>
        <p>Tente procurar por outro produto.</p>
      </NothingFoundContainer>
    </ProductCardList>
  );
}
