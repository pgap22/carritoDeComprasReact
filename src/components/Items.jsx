import ItemShop from "./ItemShop";

const Items = ({carrito, modificarCarrito}) => {
  return (
    <div className="grid grid-cols-3 m-4 gap-4">
      <ItemShop
        carrito={carrito}
        modificarCarrito={modificarCarrito}
        nombre="Audifonos"
        precio={1}
        descripcion={"Son audifonos sony"}
      />
      <ItemShop
        carrito={carrito}
        modificarCarrito={modificarCarrito}
        nombre="Mouse"
        precio={0.58}
        descripcion={"Mousepad no es un mouse"}
      />
      <ItemShop
        carrito={carrito}
        modificarCarrito={modificarCarrito}
        nombre="PC GAMER"
        precio={1000}
        descripcion={"Intel celeron, gt-250 1gb ram PSU 100W"}
      />
    </div>
  );
};

export default Items;
