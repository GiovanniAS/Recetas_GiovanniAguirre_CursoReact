import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([
    {
        name: 'Receta 1',
        description: 'ingrediente1, ingrediente 2, ingrediente 3',
        tiempo: 3
    }
  ]);

  const addProduct = (product) =>{
    setProducts([...products,product]);
    
  };

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return(
  <>
    <div className="mx-auto flex justify-center p-4">
      <h1> Mis Recetas ({productCount} productos)</h1>
    </div>
    
    <ProductForm onSubmit={addProduct}/>
    <ul className={"flex gap-4 py-4"}>
      {products.map((product) => (
        <li>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  </>
  );
};

export default ProductList;
