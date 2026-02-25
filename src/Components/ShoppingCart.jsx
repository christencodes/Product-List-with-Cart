import CartItem from "./CartItem";
import emptyCartImage from "/src/assets/Images/illustration-empty-cart.svg";

export default function ShoppingCart({ shoppingCartItems, deleteFromCart }) {
  // items can be an array of items from the parent element?

  return (
    <div className="w-[384px] h-fit bg-white flex flex-col p-6 gap-6">
      <h2 className="text-preset-2 text-(--red-guide)">{`Your Cart (${shoppingCartItems.length})`}</h2>

      {shoppingCartItems.length < 1 ? (
        <div className="w-84 flex flex-col justify-center items-center">
          <img className="" src={emptyCartImage} alt="" />
          <p className="text-preset-4-bold text-(--rose-500)">
            Your added items will appear here
          </p>
        </div>
      ) : undefined}

      <div className="cartItems">
        {/* Cart Item Template Component */}
        {shoppingCartItems.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            number={item.number}
            quantity={item.quantity}
            key={item.number}
            deletefromCart={deleteFromCart}
          />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-preset-4 text-(--rose-900)">Order Total</p>
        <p className="text-preset-2 text-(--rose-900)">
          {`$${shoppingCartItems
            .reduce((a, b) => a + b.price * b.quantity, 0)
            .toFixed(2)}`}
        </p>
      </div>
    </div>
  );
}
