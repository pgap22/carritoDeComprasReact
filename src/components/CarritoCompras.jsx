import ItemCarrito from "./ItemCarrito";

const CarritoCompras = ({ carrito, modificarCarrito }) => {
  return (
    <div className="absolute max-h-[400px] overflow-auto  bottom-0 right-0 border border-gray-200  shadow-lg">
      <div className="sticky top-0 bg-white p-4">
        <h2 className="text-4xl font-bold">Mi Carrito De Compras</h2>
        <p className="font-bold">Precio Total: ???</p>
      </div>
      <div className="p-4 flex flex-col gap-6">
        {carrito.map((item) => (
          <ItemCarrito
            key={item.id}
            {...item}
            id={item.id}
            carrito={carrito}
            modificarCarrito={modificarCarrito}
          />
        ))}
      </div>
    </div>
  );
};

export default CarritoCompras;
