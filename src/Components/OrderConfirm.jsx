import CartItem from "./CartItem";
import OrderConfirmCheck from "/src/assets/Images/icon-order-confirmed.svg";
import ShoppingItemData from "/src/assets/data.json";

export default function OrderConfirm({ shoppingCartItems }) {
  // Derived State - shoppingCartItems info
  return (
    <div className="absolute right-1/4 top-1/5 h-171.25 w-148 bg-white rounded-xl flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-6">
        <img className="w-12 h-12" src={OrderConfirmCheck} alt="" />
        <div>
          <h2 className="text-preset-1">Order Confirmed</h2>
          <p className="text-preset-4-semibold text-(--rose-500)">
            We hope you enjoy your food!
          </p>
        </div>
      </div>
      <div className="bg-(--rose-50)">
        {shoppingCartItems.length !== 0 ? (
          <div>
            {shoppingCartItems.map((item) => (
              <CartItem
                name={item.name}
                price={item.price}
                number={item.number}
                quantity={item.quantity}
                key={item.number}
              />
            ))}
          </div>
        ) : undefined}
      </div>
      <div>
        <button className="w-full h-14 bg-(--red-guide) rounded-full text-white">
          Start New Order
        </button>
      </div>
    </div>
  );
}
