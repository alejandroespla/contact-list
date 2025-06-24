import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";


export const Home = () => {

  const { store, dispatch } = useGlobalReducer()


  const postAgendas = async () => {
    await fetch("https://playground.4geeks.com/contact/agendas/Alex", {  //añadir contacto POST
      method: "POST",
      body: JSON.stringify(
        {
          "slug": "Alex",
          "id": 15
        }
      ),
      headers: { "Content-type": "application/json" }
    });

  };

  const getContacts = async () => {

    let result = await fetch("https://playground.4geeks.com/contact/agendas/Alex/contacts");
    let data = await result.json();
    dispatch({
      type: 'set-contacts',
      payload: data.contacts
    })

  };


  useEffect(() => {
    getContacts();
  }, []);



  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end my-5">
        <Link to="/addnewcontact">
          <button type="button" className="btn btn-success">
            Add new contact
          </button>
        </Link>
      </div>
      {store.contacts.map((item, index) => { //map recibe la lista del array y el resultado de cada item de la lista
        return (
          <ContactCard key={index} full_name={item.name} address={item.address} phone={item.phone} email={item.email} />
        )
      }
      )}

    </div>

  );
};