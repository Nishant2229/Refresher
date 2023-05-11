import ExpenseItem from "./component/ExpenseItem";
import "./App.css";
import Product from "./component/Product";

function App() {
  const stuff = [
    {
      id: "1",
      pro: "something",
      price: 55,
      description: "I love this",
    },
    { 
      id: "2",
      pro: "something",
      price: 55,
      description: "dbdb",
    },
  ];

  return (
    <div className="App">
      <h1>Lets get started</h1>
      <ExpenseItem></ExpenseItem>
      <Product
        pro={stuff[0].pro}
        price={stuff[0].price}
        description={stuff[0].description}
      ></Product>
      <Product
        pro={stuff[1].pro}
        price={stuff[1].price}
        description={stuff[1].description}
      ></Product>
      {/* <Product
        pro={stuff[2].pro}
        price={stuff[2].price}
        description={stuff[2].description}
      ></Product> */}
    </div>
  );
}

export default App;
