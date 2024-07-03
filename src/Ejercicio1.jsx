import { useState } from "react";

export default function Ejercicio1() {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    metodo: "",
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () =>{
    if(formData.metodo === "contado/Efectivo")
      (20 * formData) / 100
    if(formData.metodo === "transferencia bancaria")
      (15 * formData) / 100
    if(formData.metodo === "tarjeta de debito")
      (5 * formData) / 100
    if(formData.metodo === "tarjeta de credito")
      window.alert("usted no tiene descuentos")
  }

  return (
    <div>
      <h2>Ejercicio 1: Formulario y lista desplegable</h2>
      <form onSbumit={handleSubmit}>
        <div>
          <label>Ingrese su porducto a comprar:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingrese el precio del producto:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingrese el metodo de pago:</label>
          <select>
            <option value="">Metodos de pago</option>
            <option value="contado/Efectivo">Contado/Efectivo</option>
            <option value="transferencia bancaria">
              Transferencia bancaria
            </option>
            <option value="tarjeta de debito">Tarjeta de debito</option>
            <option value="tarjeta de credito">Tarjeta de credito</option>
          </select>
        </div>
      </form>
      <button onClick={handleSubmit}>Comprar</button>
      <p onClick={handleSubmit}>Articulo al comprar {formData.nombre} y su precio con el descuento es {formData.precio}</p>
    </div> 
  );
}
