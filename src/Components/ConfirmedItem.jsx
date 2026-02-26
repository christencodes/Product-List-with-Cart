import ShoppingItemData from "/src/assets/data.json";

export default function ConfirmedItem({
  name,
  price,
  number = 0,
  quantity = 0,
}) {
  return (
    <div className="cartItem w-full flex  gap-2   ">
      <div className="itemCountAndPrice w-full flex justify-between border-b border-b-(--rose-500)/50 pb-4 pt-3 ">
        <div className="flex flex-row gap-3 items-center">
          <img
            className="w-12 h-12 rounded-sm"
            src={`src/${ShoppingItemData[number].image.thumbnail.slice(1)}`}
            alt=""
          />
          <div className="flex flex-col gap-2 ">
            <h2 className="text-preset-4-bold text-(--rose-900)">{name}</h2>
            <div className="flex gap-2 items-center justify-start">
              <h2 className="count text-(--red-guide) text-preset-4-bold">{`${quantity}x`}</h2>
              <p>{`@ $${price}`}</p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <p className="text-preset-3 text-(--rose-900)">{`$${Number(price * quantity).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
}
