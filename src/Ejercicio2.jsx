import { useState } from "react";

export default function Ejercicio1() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    birthdate: "",
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,  
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Ejercicio 1: Formulario y lista desplegable</h2>
      <form>
        <div>
          <label>Ingrese su usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ingrese nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ingrese su culpleaños:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
      </form>
      <p> su usuario es {formData.username}, su nombe es {formData.name} y su fecha de nacimiento es {formData.birthdate}</p>
    </div> 
  );
}
