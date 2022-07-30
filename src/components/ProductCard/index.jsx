import MainButton from "../Button";
import { ProductContainer, ProductImage, ProductInfo } from "./styles";
import { toast } from "react-toastify";

export default function ProductCard({
  id,
  name,
  category,
  price,
  img,
  setCartProductList,
  productList,
  cartProductList,
}) {
  function handleClick(id) {
    const productOnCart = cartProductList.find((product) => product.id === id);
    if (productOnCart) {
      productOnCart.quantity++;
      setCartProductList((previousList) => {
        const cartWithoutChangedProd = previousList.filter(
          (product) => product.id !== id
        );

        return [...cartWithoutChangedProd, productOnCart];
      });
      return;
    }
    const productToAdd = productList.find((product) => product.id === id);
    productToAdd.quantity = 1;
    setCartProductList((previousList) => [...previousList, productToAdd]);
  }

  function notifyItemAdded(name) {
    toast.success(`${name} adicionado ao carrinho!`);
  }

  return (
    <ProductContainer>
      <ProductImage>
        <img src={img} alt={`Imagem de um(a) ${name}`}></img>
      </ProductImage>
      <ProductInfo>
        <h2>{name}</h2>
        <small>{category}</small>
        <p>{`R$ ${Number(price).toFixed(2)}`}</p>
        <MainButton
          btnType="default"
          btnSize="medium"
          onClick={() => {
            notifyItemAdded(name);
            handleClick(id);
          }}
        >
          Adicionar
        </MainButton>
      </ProductInfo>
    </ProductContainer>
  );
}
