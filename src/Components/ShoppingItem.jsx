import shoppingCartImg from "/src/assets/Images/icon-add-to-cart.svg";
import decrementIcon from "/src/assets/Images/icon-decrement-quantity.svg";
import incrementIcon from "/src/assets/Images/icon-increment-quantity.svg";

export default function ShoppingItem({
  image,
  name,
  category,
  price,
  num,
  addToCart,
  shoppingCartItems,
  subtractFromCart,
}) {
  console.log(shoppingCartItems);
  const isThere = shoppingCartItems.find((item) => item.number === num);
  const amount = isThere
    ? shoppingCartItems.find((item) => item.number === num).quantity
    : 0;

  return (
    <div className="shoppingItem flex flex-col  max-w-62.5 max-h-86.75 gap-8">
      <div className="item-image-container  relative ">
        <img
          className={`max-w-full rounded-lg ${isThere ? "border-2" : "border-0"} `}
          src={image}
          alt=""
        />

        {amount ? (
          <button
            // onClick={() => addToCart(name, price, num)}
            className={
              "addCartButton absolute flex gap-10 items-center justify-center rounded-full max-w-44 bg-(--red-guide) border-2 border-(--rose-400) right-1/6 bottom-[-10%]  text-(--rose-900) text-preset-4-bold px-6 py-3 cursor-pointer"
            }
          >
            <div className="h-5 w-5 rounded-full border border-(--rose-50) flex flex-col justify-center items-center">
              <img
                onClick={() => subtractFromCart(name, price, num)}
                className="w-3 h-1.5 "
                src={decrementIcon}
                alt=""
              />
            </div>

            <p className="text-(--rose-50)">{amount}</p>
            <div
              onClick={() => addToCart(name, price, num)}
              className="h-5 w-5 rounded-full border border-(--rose-50) flex flex-col justify-center items-center"
            >
              <img className="w-3 " src={incrementIcon} alt="" />
            </div>
          </button>
        ) : (
          <button
            onClick={() => addToCart(name, price, num)}
            className={
              "addCartButton absolute flex gap-3 rounded-full min-w-44 max-h-12 border-2 border-(--rose-400) right-1/6 bottom-[-10%] bg-(--rose-50) text-(--rose-900) text-preset-4-bold px-6 py-3 cursor-pointer"
            }
          >
            <img src={shoppingCartImg} alt="" />
            Add to Cart
          </button>
        )}
      </div>

      <div className="flex flex-col items-start justify-between text-white">
        <p className="category text-(--rose-500) text-preset-4">{category}</p>
        <h2 className="name text-(--rose-900) text-preset-3">{name}</h2>
        <p className="price text-(--red-guide) text-preset-3">{price}</p>
      </div>
    </div>
  );
}
