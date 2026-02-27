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
          className="group h-5 w-5 border-(--rose-400) border-2 rounded-full flex items-center justify-center hover:border-(--rose-900) cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
            className="fill-[#CAAFA7] group-hover:fill-(--rose-900)"
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
