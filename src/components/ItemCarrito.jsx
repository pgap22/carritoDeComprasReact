const ItemCarrito = ({ nombre, precio, id, carrito, modificarCarrito }) => {
  const borrarItem = () => {
    //id=2
    const carritoActualizado = carrito.filter((item) => item.id !== id);

    modificarCarrito(carritoActualizado);
  };

  return (
    <div className="flex justify-between">
      <div>
        <p className="font-bold">{nombre}</p>
        <p>Precio: {precio}</p>
        <p>Id: {id}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={borrarItem}
          className="bg-black flex items-center justify-center rounded-md text-white p-4"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
