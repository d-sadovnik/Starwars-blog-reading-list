import "../../styles/home.css";
import { Card } from "../component/card";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="bg-secondary">
      <div className="container-fluid bg-dark">
        <h1>Characters</h1>
        <div className="overflow-auto row flex-nowrap">
          {store.characters.map((singlename, index) => {
            return (
              <Card
                key={index}
                name={singlename.name}
                type="characters"
                id={singlename.uid}
              />
            );
          })}
        </div>
      </div>
      ,
      <div className="container-fluid bg-dark">
        <h1>Planets</h1>
        <div className="overflow-auto row flex-nowrap">
          {store.planets.map((singlename, index) => {
            return (
              <Card
                key={index}
                name={singlename.name}
                type="planets"
                id={singlename.uid}
              />
            );
          })}
        </div>
        ,
      </div>
    </div>
  );
};
