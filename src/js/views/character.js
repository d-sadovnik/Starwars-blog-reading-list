import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Character = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
 
  useEffect(() => {
    if (params.theid) {
      actions.verInfoCharacter(params.theid);
    }
  }, [params.theid]);
console.log(store.infoCharacter)
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="card mt-3 col-4 mx-1 cardStyle shadow-lg border border-5 border-warning">
      <img src={"https://starwars-visualguide.com/assets/img/characters/"+params?.theid +".jpg"}
      className="card-img-top"
      alt="..." />
       <div className="card-body">
          <h5 className="card-title">{store.infoCharacter?.name}</h5>
          <p className="card-text">
            <ul>
                <li>Gender: {store.infoCharacter?.gender}</li>
                <li>Skin Color: {store.infoCharacter?.skin_color}</li>
                <li>Birthdate: {store.infoCharacter?.birth_year}</li>
                <li>Eye Color: {store.infoCharacter?.eye_color}</li>
            </ul>
          </p>
          </div>
      </div>
    </div>
  );
};
