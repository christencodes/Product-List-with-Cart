import ShoppingList from "./Components/ShoppingList";
import ShoppingArea from "./Components/ShoppingArea";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="global-container h-full flex items-center justify-center ">
      <ShoppingArea>
        <ShoppingList></ShoppingList>
        <ShoppingCart></ShoppingCart>
      </ShoppingArea>
    </div>
  );
}

export default App;
