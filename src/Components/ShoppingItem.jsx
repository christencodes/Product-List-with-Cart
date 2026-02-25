import shoppingCartImg from "/src/assets/Images/icon-add-to-cart.svg";

export default function ShoppingItem({
  image,
  name,
  category,
  price,
  num,
  addToCart,
}) {
  return (
    <div className="shoppingItem flex flex-col  max-w-62.5 max-h-86.75 gap-8">
      <div className="item-image-container  relative ">
        <img className="max-w-full rounded-lg " src={image} alt="" />
        <button
          onClick={() => addToCart(name, price, num)}
          className="addCartButton absolute flex gap-3 rounded-full max-w-44 border-2 border-(--rose-400) right-1/6 bottom-[-10%] bg-(--rose-50) text-(--rose-900) text-preset-4-bold px-6 py-3 cursor-pointer"
        >
          <img src={shoppingCartImg} alt="" />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-col items-start justify-between text-white">
        <p className="category text-(--rose-500) text-preset-4">{category}</p>
        <h2 className="name text-(--rose-900) text-preset-3">{name}</h2>
        <p className="price text-(--red-guide) text-preset-3">{price}</p>
      </div>
    </div>
  );
}
