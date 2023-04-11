const ItemShop = (props) => {
    const añadirCarrito = () => {
      //Añadir el objeto al state (Array)
      const producto = {
        nombre: props.nombre,
        precio: props.precio,
        descripcion: props.descripcion,
        id: props.carrito.length,
      };
  
      //Es pensar en js
      // props.carrito.push(producto);
  
      //Pensar en react
      props.modificarCarrito([...props.carrito, producto]);
    };
  
    return (
      <div className="flex flex-col gap-3 items-center p-2 border border-gray-200 rounded-md">
        <h2 className="font-bold text-2xl">{props.nombre}</h2>
        <p>
          <span className="font-bold ">Precio</span> : ${props.precio}
        </p>
        <p>
          <span className="font-bold ">Descripcion: </span>
          {props.descripcion}
        </p>
        <button
          onClick={añadirCarrito}
          className="bg-black text-white border border-black p-2 rounded-full hover:bg-white hover:border-black hover:text-black"
        >
          Añadir al carrito
        </button>
      </div>
    );
  };
export default ItemShop  