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
  function deleteFromCart(number) {
    // Delete the element
    setShoppingcartItems((prevItems) => {
      const itemThere = prevItems.find((item) => item.number === number);

      if (itemThere) return prevItems.filter((item) => item.number !== number);
    });
  }

  function subtractFromCart(name, price, number) {
    //! YOU LEFT OFF HERE!
    console.log("subtracting from cart");
    setShoppingcartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.number === number && item.quantity === 0) {
          return;
        }
        if (item.number === number) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  }

  function addToCart(name, price, number) {
    console.log("adding to cart");
    setShoppingcartItems((prevItems) => {
      const itemThere = prevItems.find((item) => item.number === number);

      if (itemThere) {
        return prevItems.map((item) => {
          if (item.number === number) {
            console.log("adding item");
            return { ...item, quantity: item.quantity + 1 };
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

    console.log(shoppingCartItems);
  }

  return (
    <div className="shopping-area flex gap-10 h-full max-w-306.5 max-h-296.25">
      <ShoppingList
        addToCart={addToCart}
        shoppingCartItems={shoppingCartItems}
        subtractFromCart={subtractFromCart}
      ></ShoppingList>
      <ShoppingCart
        shoppingCartItems={shoppingCartItems}
        deleteFromCart={deleteFromCart}
      ></ShoppingCart>
      {children}
    </div>
  );
}
