import MainButton from "../Button";
import { CartFooterContainer } from "./styles";

export default function CartFooter({ cartProductList, setCartProductList }) {
  function getCartTotalPrice() {
    const totalPrice = cartProductList.reduce((previousProd, currentProd) => {
      return previousProd + currentProd.price * currentProd.quantity;
    }, 0);
    return totalPrice.toFixed(2);
  }

  function removeAllCartProducts() {
    setCartProductList([]);
  }

  const cartTotalPrice = getCartTotalPrice();

  return (
    <CartFooterContainer>
      <div>
        <p>Total</p>
        <p>R$ {cartTotalPrice}</p>
      </div>
      <MainButton
        btnType="remove"
        btnSize="default"
        onClick={() => removeAllCartProducts()}
      >
        Remover todos
      </MainButton>
    </CartFooterContainer>
  );
}
