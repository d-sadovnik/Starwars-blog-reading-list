import "../../styles/home.css";
import { Card } from "../component/card";
import React, {useEffect, useState} from "react";


export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const getCharacters = () => {
	  fetch("https://www.swapi.tech/api/people")
		.then((resp) => resp.json())
		.then((resp) => setCharacters(resp.results))
		.catch((err) => console.error(err));
	};
	const getPlanets = () => {
	  fetch("https://www.swapi.tech/api/planets")
		.then((resp) => resp.json())
		.then((resp) => setPlanets(resp.results))
		.catch((err) => console.error(err));
	};
	console.log(characters);
	useEffect(() => {
	  getCharacters();
	  getPlanets();
	}, []);

	return( 
	<div>
	<div className="container-fluid">
		<h1>Characters</h1>
		<div className="overflow-auto row flex-nowrap">
		{characters.map((singlename, index) => {
              return (
                <Card key={index} name={singlename.name} type="characters" id={singlename.uid}/>
              );
            })}
		</div>
	</div>,
	<div className="container-fluid">
	<h1>Planets</h1>
	<div className="overflow-auto row flex-nowrap">
	{planets.map((singlename, index) => {
              return (
                <Card key={index} name={singlename.name} type="planets" id={singlename.uid}/>
              );
            })}
	</div>,
</div>
</div>
	);
 };
