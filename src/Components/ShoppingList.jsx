import ShoppingItem from "./ShoppingItem";
import ShoppingItemData from "/src/assets/data.json";

export default function ShoppingList({
  addToCart,
  shoppingCartItems,
  subtractFromCart,
}) {
  const shoppingData = ShoppingItemData;

  return (
    <>
      <div className="h-full w-full flex flex-col p-6 lg:gap-6">
        <div>
          <h1 className="text-preset-1 ">Dessert</h1>
        </div>
        <div className="shoppingList flex flex-col items-center justify-center  md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-x-6 lg:gap-x-3 ">
          {shoppingData.map((item, index) => {
            return (
              <ShoppingItem
                image={`./public/${item.image.desktop.slice(1)}`}
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
      </div>
    </>
  );
}
