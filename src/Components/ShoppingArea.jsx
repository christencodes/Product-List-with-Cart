import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";
import CartItem from "./CartItem";
import { useState } from "react";

export default function ShoppingArea({ children }) {
  const [shoppingCartItems, setShoppingcartItems] = useState([]);

  // Name of the item
  // Quantity
  // Price
  //The Total
  function addToCart(name, price, number) {
    setShoppingcartItems((prevItems) => {
      const itemThere = prevItems.find((item) => item.number === number);

      if (itemThere) {
        return prevItems.map((item) => {
          if (item.number === number) {
            return { ...item, quantity: (item.quantity += 1) };
          } else {
            return item;
          }
        });
      }

      return [
        ...prevItems,
        { name: name, price: price, number: number, quantity: 1 },
      ];
    });
  }

  return (
    <div className="shopping-area flex gap-4 h-full max-w-306.5 max-h-296.25">
      <ShoppingList addToCart={addToCart}></ShoppingList>
      <ShoppingCart shoppingCartItems={shoppingCartItems}></ShoppingCart>
      {children}
    </div>
  );
}
