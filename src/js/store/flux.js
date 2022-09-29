const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      planets: [],
      infoCharacter: [],
      infoPlanet:[],
      favoritos:[]
    },
    actions: {
      // Use getActions to call a function within a fuction
      
      addFav:(item) => {
        let aux = getStore().favoritos
        aux.push(item)
        setStore({favoritos: aux})
      },
      removeFav:(index) => {
        let aux = getStore().favoritos
        let x = aux.filter((element, i)=> i != index)
        setStore({favoritos: x})
      },

      verInfoCharacter: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((resp) => resp.json())
          .then((resp) => setStore({infoCharacter: resp.result.properties}))
          .catch((err) => console.error(err));
      },
      verInfoPlanet: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((resp) => resp.json())
          .then((resp) => setStore({infoPlanet: resp.result.properties}))
          .catch((err) => console.error(err));
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((resp) => setStore({characters: resp.results}))
          .catch((err) => console.error(err));

        fetch("https://www.swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((resp) => setStore({planets: resp.results}))
          .catch((err) => console.error(err));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
