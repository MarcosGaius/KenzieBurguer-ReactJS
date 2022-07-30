import CartFooter from "../CartFooter";
import CartProductCard from "../CartProductCard";
import { CartContainer, CartProductsWrapper, EmptyCartMessage } from "./styles";

export default function Cart({ cartProductList, setCartProductList }) {
  const isCartEmpty = cartProductList.length === 0;

  return (
    <CartContainer>
      <h2>Carrinho de Compras</h2>
      {isCartEmpty ? (
        <EmptyCartMessage>
          <p>Sua sacola está vazia</p>
          <small>Adicione itens</small>
        </EmptyCartMessage>
      ) : (
        <>
          <CartProductsWrapper>
            {cartProductList.map((prod) => (
              <CartProductCard
                key={prod.id}
                img={prod.img}
                name={prod.name}
                category={prod.category}
                quantity={prod.quantity}
                id={prod.id}
                cartProductList={cartProductList}
                setCartProductList={setCartProductList}
              />
            ))}
          </CartProductsWrapper>
          <CartFooter
            cartProductList={cartProductList}
            setCartProductList={setCartProductList}
          />
        </>
      )}
    </CartContainer>
  );
}
