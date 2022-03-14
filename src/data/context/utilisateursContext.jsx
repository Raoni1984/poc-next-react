import React, { createContext, useState, useEffect } from 'react';

async function getStaticProps() {
  const API_URL = 'https://swapi.dev/api/people/';
  const reponseAPI = await fetch(API_URL).then((rep) => {
    return rep.json();
  });

  return reponseAPI;
}

const UtilisateursContext = createContext();

const UtilisateursContextProvider = ({ children }) => {
  const [Utilisateurs, setUtilisateurs] = useState(null);

  useEffect(() => {
    setUtilisateurs(getStaticProps());

    // const fetchUtilisateurs = () => {

    //   fetch('https://randomUtilisateur.me/api/')
    //     .then((response) => response.json())
    //     .then((result) => setUtilisateur(result.results[0]))
    //     .catch((error) => console.log('An error occured'));
    // };

    // fetchUtilisateurs();
  }, []);

  return (
    <UtilisateursContext.Provider value={Utilisateurs}>{children}</UtilisateursContext.Provider>
  );
};

export { UtilisateursContext, UtilisateursContextProvider };
