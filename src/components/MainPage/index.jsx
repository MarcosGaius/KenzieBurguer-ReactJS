import Cart from "../Cart";
import Header from "../Header";
import ProductList from "../ProductList";
import { MainContent } from "./styles";

export default function MainPage({
  productList,
  cartProductList,
  filterSearch,
  filteredProductList,
  setFilteredProductList,
  setfilterSearch,
  setCartProductList,
}) {
  return (
    <>
      <Header
        productList={productList}
        setFilteredProductList={setFilteredProductList}
        setfilterSearch={setfilterSearch}
      />
      <MainContent>
        {productList.length === 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "auto",
              background: "transparent",
              display: "block",
            }}
            width="150px"
            height="150px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#48e500"
              stroke-width="10"
              r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        ) : (
          <ProductList
            productList={productList}
            filterSearch={filterSearch}
            filteredProductList={filteredProductList}
            setCartProductList={setCartProductList}
            cartProductList={cartProductList}
          />
        )}
        <Cart
          cartProductList={cartProductList}
          setCartProductList={setCartProductList}
        />
      </MainContent>
    </>
  );
}
