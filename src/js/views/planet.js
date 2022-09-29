import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
 
  useEffect(() => {
    if (params.theid) {
      actions.verInfoPlanet(params.theid);
    }
  }, [params.theid]);
console.log(store.infoPlanet)
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="card mt-3 col-4 mx-1 cardStyle shadow-lg border border-5 border-warning">
      <img src={"https://starwars-visualguide.com/assets/img/planets/"+params?.theid +".jpg"}className="card-img-top"
      alt="..." />
       <div className="card-body">
          <h5 className="card-title">{store.infoPlanet?.name}</h5>
          <p className="card-text">
            <ul>
                <li>Climate: {store.infoPlanet?.climate}</li>
                <li>Gravity: {store.infoPlanet?.gravity}</li>
                <li>Orbital Period: {store.infoPlanet?.orbital_period}</li>
                <li>Population: {store.infoPlanet?.population}</li>
            </ul>
          </p>
          </div>
      </div>
    </div>
  );
};