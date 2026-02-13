import FilterableProductTable from "./components/FilterableProductTable";

// Data model (Dados ficcionais de uma API)
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  {category: "Meat", price: "$10", stocked: true, name: "Beef Steak"},
  {category: "Meat", price: "$4", stocked: false, name: "Turkey Leg"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

