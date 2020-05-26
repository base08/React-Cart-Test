import React from "react";
import "./App.css";
import Counter from "./Counter";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Azeite Galo", price: 4.49, qty: 2 },
  { id: 2, name: "Broa de Avintes", price: 1.39, qty: 1 },
  { id: 3, name: "Chouriço Picante", price: 3.24, qty: 3 },
];

function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
