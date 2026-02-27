import ShoppingItem from "./ShoppingItem";
import ShoppingItemData from "/src/assets/data.json";

export default function ShoppingList({
  addToCart,
  shoppingCartItems,
  subtractFromCart,
}) {
  const shoppingData = ShoppingItemData;

  return (
    <div className="shoppingList lg:grid lg:grid-cols-[1fr_1fr_1fr]  lg:gap-x-5 lg:gap-y-8  md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-x-6 md:gap-y-8  flex flex-col justify-center items-center">
      {shoppingData.map((item, index) => {
        return (
          <ShoppingItem
            image={`src/${item.image.desktop.slice(1)}`}
            name={item.name}
            category={item.category}
            price={item.price.toFixed(2)}
            num={index}
            key={index}
            addToCart={addToCart}
            shoppingCartItems={shoppingCartItems}
            subtractFromCart={subtractFromCart}
          />
        );
      })}
    </div>
  );
}
