import {  useState } from "react";
import CarritoCompras from "./components/CarritoCompras";
import Items from "./components/Items";

const App = () => {
  const [carrito, modificarCarrito] = useState([]);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-6">Tienda E-Commerce</h1>

      {/* Primero aca vamos a poner nuestros productos */}
      <Items 
        carrito={carrito}
        modificarCarrito={modificarCarrito}
      />

      {/* Vamos a crear nuestro carrito */}
      <CarritoCompras 
        carrito={carrito} 
        modificarCarrito={modificarCarrito} />
    </div>
  );
};

export default App;
