const ProductItem = ({ product }) => {
  const { name, description, tiempo } = product
  return (
    <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-3xl shadow-xl shadow-gray-400/20">
    <div className="p-6 ">
      <h1 className="text-2xl font-medium text-gray-700 pb-2">{name}</h1>
      <p className="text text-gray-500 leading-6">• {description}</p>
      <p className="text text-gray-500 leading-6">• {tiempo} Horas</p>
    </div>
    </div>
  );
}

export default ProductItem;