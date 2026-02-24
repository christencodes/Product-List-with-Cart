import removeIcon from "/src/assets/Images/icon-remove-item.svg";

export default function ShoppingCart(items) {
  // items can be an array of items from the parent element?
  function Total(items) {
    return items.reduce((a, b) => a + b);
  }
  return (
    <div className="max-w-[384px] max-h-135.5 bg-white flex flex-col p-6 gap-6">
      <h2 className="text-preset-2 text-(--red-guide)">{`Your Cart (0)`}</h2>
      <div className="cartItems">
        {/* Cart Item Template Component */}
        <div className="cartItem w-full">
          <h2 className="text-preset-4-bold text-(--rose-900)">
            Classic Tiramisu
          </h2>
          <div className="itemCountAndPrice flex gap-30 justify-between">
            <div className="flex gap-6 ">
              <h2 className="count text-(--red-guide)">1x</h2>
              <p>@ $5.50</p>
              <p>$5.50</p>
            </div>
            <div className="h-5 w-5 border-(--rose-400) border rounded-full flex items-center justify-center">
              <img className="w-3 h-3 m-0 p-0 " src={removeIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Order Total</p>
      </div>
    </div>
  );
}
