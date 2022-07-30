import {
  CartCardButtonWrapper,
  CartCardImage,
  CartCardInfo,
  CartCardLi,
} from "./styles";
import { toast } from "react-toastify";

export default function CartProductCard({
  img,
  id,
  quantity,
  category,
  name,
  setCartProductList,
}) {
  function getInputValue(event) {
    const value = event.target.parentElement.children[1].value;
    return Number(value);
  }

  function handleCartRemove(id, productQuantity, quantityToRemove) {
    if (
      quantityToRemove === productQuantity ||
      quantityToRemove > productQuantity
    ) {
      setCartProductList((previousList) => {
        const newList = previousList.filter(
          (cartProduct) => cartProduct.id !== id
        );
        return newList;
      });
      return;
    }

    setCartProductList((previousList) => {
      const productIndex = previousList.findIndex(
        (product) => product.id === id
      );
      const newCartList = [...previousList];
      newCartList[productIndex].quantity -= quantityToRemove;

      return newCartList;
    });
  }

  function notifyRemoveFromCart(name, removeValue) {
    let string;

    if (removeValue > 1) {
      string = `${removeValue}x ${name} removidos do carrinho.`;
    } else {
      string = `${removeValue}x ${name} removido do carrinho.`;
    }

    toast.error(string, {
      icon: "🗑️",
    });
  }

  return (
    <CartCardLi>
      <CartCardImage>
        <img src={img} alt={name} />
      </CartCardImage>
      <CartCardInfo>
        <p>{name}</p>
        <small>{category}</small>
        <small>Quantidade: {quantity}</small>
      </CartCardInfo>
      <CartCardButtonWrapper>
        <button
          onClick={(event) => {
            const removeValue = getInputValue(event);
            notifyRemoveFromCart(name, removeValue);
            handleCartRemove(id, quantity, removeValue);
          }}
        >
          Remover
        </button>
        <input type="number" min="1" max={quantity} defaultValue="1" />
      </CartCardButtonWrapper>
    </CartCardLi>
  );
}
