import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  ItemPrice,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </ItemQuantity>
      <ItemPrice className="price">{price}</ItemPrice>
      <RemoveButton onClick={clearItemHandler}>&#10006;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
