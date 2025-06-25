import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const AddNewContact = () => {
  const { dispatch } = useGlobalReducer();  // desde aqui solo vamos a mandar info al store, no recibirla por eso solo se usa dispatch

  // Hook para navegar a otra ruta
  const navigate = useNavigate();

  // Estado local para controlar los inputs del formulario
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });


  const handleChange = (e) => {  // actualizar el estado  de los inputs cada vez que se escribe
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página recargue al hacer submit

    // Petición POST a la API para guardar el nuevo contacto
    const response = await fetch("https://playground.4geeks.com/contact/agendas/Alex/contacts", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" }
    });

    // Si la respuesta fue exitosa:
    if (response.ok) {
      const newContact = await response.json(); // Obtenemos el contacto que se guardó

      // Lo añadimos al store global
      dispatch({
        type: "add-contact",
        payload: newContact
      });

      // Navegamos de vuelta a la Home (donde se muestran los contactos)
      navigate("/");
    } else {
      alert("Error al guardar el contacto."); // En caso de fallo
    }
  };

  return (
    <div className="container mt-5">
      {/* El formulario envía sus datos mediante handleSubmit */}
      <form className="w-100" onSubmit={handleSubmit}>
        <h1 className="text-center m-5">Add New Contact</h1>

        {/* Campo: nombre */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            name="name" // clave del estado
            type="text"
            className="form-control"
            id="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange} // actualiza el estado
            required
          />
        </div>

        {/* Campo: email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo: teléfono */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo: dirección */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            name="address"
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón que envía el formulario */}
        <button type="submit" className="btn btn-primary mt-3 w-100">
          Save
        </button>

        {/* Enlace de vuelta a Home (por si el usuario no quiere guardar nada) */}
        <div className="text-center my-2">
          <Link to="/">or get back to contacts</Link>
        </div>
      </form>
    </div>
  );
};