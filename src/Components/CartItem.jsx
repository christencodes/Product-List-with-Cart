import removeIcon from "/src/assets/Images/icon-remove-item.svg";

export default function CartItem({
  name,
  price,
  number = 0,
  quantity = 0,
  deletefromCart,
}) {
  return (
    <div className="cartItem w-full flex flex-col gap-2 pt-4 pb-6 border-b-2 border-(--rose-50)">
      <h2 className="text-preset-4-bold text-(--rose-900)">{name}</h2>
      <div className="itemCountAndPrice flex gap-30 justify-between">
        <div className="flex gap-6 ">
          <h2 className="count text-(--red-guide)">{`${quantity}x`}</h2>
          <p>{`@ $${price}`}</p>
          <p>{`$${Number(price * quantity).toFixed(2)}`}</p>
        </div>
        <div
          onClick={() => deletefromCart(number)}
          className="h-5 w-5 border-(--rose-400) border rounded-full flex items-center justify-center"
        >
          <img
            className="w-3 h-3 m-0 p-0 cursor-pointer "
            src={removeIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
