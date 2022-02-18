import React, { useState, useEffect } from 'react';
import ContainCardsCharacters from '../componentes/ContainCardsCharacters';
import SearchCharacters from '../componentes/SearchCharacters';

const Characters = () => {
  let offset = 0;
  let limit = 20;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [charactersFilter, setcharactersFilter] = useState([]);

  const initialUrl =
  `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=69c94a7d44fad4464d0be684734ccab0&hash=3915caffddec3bbdbc8fabbce3bf70e4`;

  const fetchCharacters = (url) => {
    url = url + `&offset=${offset}&limit=${limit}`
    offset += 20;
    const newCharacters = [];
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          data.data.results.forEach((c) => newCharacters.push(c));
          setCharacters(oldCharacters => [...oldCharacters, ...newCharacters]);
          setcharactersFilter(oldCharacters => [...oldCharacters, ...newCharacters]);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
  };

  const handleScroll = (e) =>{
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
      fetchCharacters(initialUrl);
    }
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
    window.addEventListener('scroll', handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
        <SearchCharacters
          charactersFilter={charactersFilter}
          setCharacters={setCharacters}
        />
        <ContainCardsCharacters characters={characters} loading={loading} setCharacters={setCharacters}/>
    </>
  );
};

export default Characters;