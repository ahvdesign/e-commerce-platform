import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemName,
  ItemPrice,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {quantity} x ${price.toFixed(2)}
        </ItemPrice>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
