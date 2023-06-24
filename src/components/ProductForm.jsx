const ProductForm = ({ onSubmit }) => {
  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const description = form[1].value;
    const tiempo = form[2].value;
    const product = { name, description, tiempo };
    onSubmit(product);
    form.reset();
  };

  return (
    <div className="mx-auto flex justify-center">
      <form className="flex" onSubmit={submit}>

      <div className="p-8">
        <input type="text" placeholder="Nombre de receta" />
      </div>

      <div className="p-8 h-1000">
        <input className="pr-10" type="text" placeholder="Ingr.(sepando por comas)" />
      </div>

      <div className="p-8">
        <input type="number" placeholder="tiempo (en horas)" />
      </div>

      <div className="p-8">
        <button type="submit">Agregar</button>
      </div>

    </form>
    </div>
    
  );
};

export default ProductForm;
