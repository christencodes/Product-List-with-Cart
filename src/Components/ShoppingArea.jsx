import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";
import CartItem from "./CartItem";
import OrderConfirm from "./OrderConfirm";
import { useState } from "react";

export default function ShoppingArea({ children }) {
  const [shoppingCartItems, setShoppingcartItems] = useState([]);
  const [orderConfirmStatus, setOrderConfirmStatus] = useState(false);

  function changeOrderStatus() {
    console.log("this ran");
    setOrderConfirmStatus(!orderConfirmStatus);
  }

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
    const isThere = shoppingCartItems.find((item) => item.number === number);
    if (isThere)
      setShoppingcartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.number === number) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      );

    setShoppingcartItems((prevItems) => [
      ...prevItems.filter((item) => item.quantity !== 0),
    ]);
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
    <>
      <div
        className={
          orderConfirmStatus
            ? `absolute h-full w-full  bg-black/50 z-11`
            : undefined
        }
      ></div>
      <div className="lg:flex lg:flex-row md:flex md:flex-col md:gap-8 md:p-10 md:h-full sm:p-6  border-3 ">
        <ShoppingList
          addToCart={addToCart}
          shoppingCartItems={shoppingCartItems}
          subtractFromCart={subtractFromCart}
        ></ShoppingList>
        <ShoppingCart
          shoppingCartItems={shoppingCartItems}
          deleteFromCart={deleteFromCart}
          orderConfirmStatus={changeOrderStatus}
        ></ShoppingCart>
        {orderConfirmStatus ? (
          <OrderConfirm
            shoppingCartItems={shoppingCartItems}
            orderConfirmStatus={changeOrderStatus}
          />
        ) : undefined}

        {children}
      </div>
    </>
  );
}
