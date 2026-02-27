import shoppingCartImg from "/src/assets/Images/icon-add-to-cart.svg";

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
  const isThere = shoppingCartItems.find((item) => item.number === num);
  const amount = isThere
    ? shoppingCartItems.find((item) => item.number === num).quantity
    : 0;

  return (
    <div className="shoppingItem relative lg:flex lg:flex-col lg:gap-4 lg:max-w-53.25 lg:w-full  md:gap-10 max-h-none">
      <div className="item-image-container  relative ">
        <img
          className={`max-w-full rounded-lg  ${isThere ? "border-4 border-(--red-guide)" : "border-0"} `}
          src={image}
          alt=""
        />

        {amount ? (
          <button
            // onClick={() => addToCart(name, price, num)}
            className={
              "addCartButton absolute flex  items-center justify-around rounded-full bg-(--red-guide) border-2 border-(--red-guide)  bottom-[-10%] max-w-42 w-full max-h-12 left-0 right-0 mx-auto  text-(--rose-900) text-preset-4-bold px-6 py-3 cursor-pointer"
            }
          >
            <div
              onClick={() => subtractFromCart(name, price, num)}
              className=" group h-5 w-5 rounded-full border border-(--rose-50) flex flex-col justify-center items-center hover:bg-(--rose-50)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
                className="fill-white group-hover:fill-(--red-guide)"
              >
                <path d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </div>

            <p className="text-(--rose-50)">{amount}</p>
            <div
              onClick={() => addToCart(name, price, num)}
              className=" group h-5 w-5 rounded-full border border-(--rose-50) flex flex-col justify-center items-center hover:bg-(--rose-50)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className="fill-white group-hover:fill-(--red-guide)"
              >
                <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
              </svg>
            </div>
          </button>
        ) : (
          <button
            onClick={() => addToCart(name, price, num)}
            className={
              "addCartButton absolute flex items-center justify-center gap-3 rounded-full max-w-42 w-full max-h-12 border-2 border-(--rose-400) left-0 right-0 mx-auto bottom-[-10%] bg-(--rose-50) text-(--rose-900) text-preset-4-bold px-6 py-3 cursor-pointer"
            }
          >
            <img src={shoppingCartImg} alt="" />
            Add to Cart
          </button>
        )}
      </div>

      <div className="flex flex-col items-start justify-between text-white lg:mt-0 md:mt-10">
        <p className="category text-(--rose-500) text-preset-4">{category}</p>
        <h2 className="name text-(--rose-900) text-preset-3 ">{name}</h2>
        <p className="price text-(--red-guide) text-preset-3">${price}</p>
      </div>
    </div>
  );
}
