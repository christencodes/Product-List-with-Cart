import CartItem from "./CartItem";
import ConfirmedItem from "./ConfirmedItem";
import OrderConfirmCheck from "/src/assets/Images/icon-order-confirmed.svg";
import ShoppingItemData from "/src/assets/data.json";

export default function OrderConfirm({
  shoppingCartItems,
  orderConfirmStatus,
}) {
  // Derived State - shoppingCartItems info
  return (
    <div className="absolute right-1/4 top-1/5 h-fit w-148 bg-white rounded-xl flex flex-col gap-8 p-10 z-11">
      <div className="flex flex-col gap-6">
        <img className="w-12 h-12" src={OrderConfirmCheck} alt="" />
        <div className="flex flex-col gap-3">
          <h2 className="text-preset-1">Order Confirmed</h2>
          <p className="text-preset-4-semibold text-(--rose-500)">
            We hope you enjoy your food!
          </p>
        </div>
      </div>
      <div className="bg-(--rose-50) h-fit rounded-xl  px-6">
        {shoppingCartItems.length !== 0 ? (
          <div>
            {shoppingCartItems.map((item) => (
              <ConfirmedItem
                name={item.name}
                price={item.price}
                number={item.number}
                quantity={item.quantity}
                key={item.number}
              />
            ))}
          </div>
        ) : undefined}
        <div className="py-6 flex items-center justify-between">
          <h3 className="text-preset-4 text-(--rose-900)">Order Total</h3>
          <p className="text-preset-2 text-(--rose-900)">
            {`$${shoppingCartItems
              .reduce((a, b) => a + b.quantity * b.price, 0)
              .toFixed(2)}`}
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={orderConfirmStatus}
          className="w-full h-14 bg-(--red-guide) rounded-full text-white cursor-pointer"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
