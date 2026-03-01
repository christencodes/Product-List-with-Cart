import CartItem from "./CartItem";
import emptyCartImage from "/src/assets/Images/illustration-empty-cart.svg";
import CarbonNeutralIcon from "/src/assets/Images/icon-carbon-neutral.svg";

export default function ShoppingCart({
  shoppingCartItems,
  deleteFromCart,
  orderConfirmStatus,
}) {
  // items can be an array of items from the parent element?
  const filteredItems = shoppingCartItems.filter((item) => item.quantity > 0);

  return (
    <div className="flex flex-col lg:gap-6 lg:min-w-[385px] h-fit basis-91.25 shrink md:gap-6 bg-white md:p-6 p-6 gap-6 rounded-xl">
      <h2 className="text-preset-2 text-(--red-guide)">{`Your Cart (${shoppingCartItems.length})`}</h2>

      {filteredItems.length < 1 ? (
        <div className="w-84 flex flex-col justify-center items-center self-center">
          <img className="" src={emptyCartImage} alt="" />
          <p className="text-preset-4-bold text-(--rose-500)">
            Your added items will appear here
          </p>
        </div>
      ) : undefined}

      <div className="cartItems">
        {/* Cart Item Template Component */}
        {filteredItems.map((item) => (
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

      {shoppingCartItems.length > 0 ? (
        <div className="w-full rounded-lg bg-(--rose-50) h-13 flex items-center justify-center gap-2 ">
          <img className="w-5 h-5" src={CarbonNeutralIcon} alt="" />
          <p className="text-(--rose-900)">
            This is a <span className="text-preset-4-bold">carbon-neutral</span>{" "}
            delivery
          </p>
        </div>
      ) : undefined}

      <button
        onClick={() => orderConfirmStatus()}
        className="w-full h-13 rounded-full bg-(--red-guide) text-(--rose-50) cursor-pointer hover:bg-[#9f3207] transition duration-300"
      >
        Confirm Order
      </button>
    </div>
  );
}
