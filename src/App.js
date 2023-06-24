import ProductList from "./components/ProductList";

const products=[
  {
      name: 'Product 1',
      description: 'Description 1',
      price: 1000
  },
  {
      name: 'Product 2',
      description: 'Description 2',
      price: 250
  },
  {
      name: 'Product 3',
      description: 'Description 3',
      price: 500
  },
];

function App() {
  return (
    <div className="h-screen w-screen">
      <ProductList products={products}/>
    </div>
  );
}

export default App;