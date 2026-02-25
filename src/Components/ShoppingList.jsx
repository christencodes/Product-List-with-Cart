import ShoppingItem from "./ShoppingItem";
import ShoppingItemData from "/src/assets/data.json";

export default function ShoppingList({ addToCart }) {
  const shoppingData = ShoppingItemData;

  return (
    <div className="shoppingList grid grid-cols-[1fr_1fr_1fr]  gap-x-6 gap-y-8 ">
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
          />
        );
      })}
    </div>
  );
}
