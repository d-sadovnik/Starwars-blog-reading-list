import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-2 m-2 cardStyle">
      <img
        src={`https://starwars-visualguide.com/assets/img/${
          props.type === "planets" ? "planets" : "characters"
        }/${props.id}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body ">
        <h5 className="card-title">{props.name}</h5>
        <div className="container d-flex ">
          <div className="float-start">
            <Link
              to={
                props.type === "planets"
                  ? `/planets/${props.id}`
                  : `/characters/${props.id}`
              }
            >
             <button type="button" className="btn-lg btn-warning">Details</button>
            </Link>
          </div>
          <div className="float-end">
            <button onClick={()=> actions.addFav({id: props.id, name: props.name})} className="btn-lg btn-warning mx-5">
              <i className="bi bi-suit-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
