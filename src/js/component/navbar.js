import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favoritos)
  return (
    <nav className="navbar navbar-dark bg-dark mb-3 p-3">
      <Link to="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Bootstrap" width="180" height="90"/>
      </Link>
      <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btn-lg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu">
              {store.favoritos.map((element, i)=> {
                return(
                  <li>
                    {element.name}
                    <button onClick={()=>actions.removeFav(i)}>
                      x 
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
      </div>
    </nav>
  );
};
