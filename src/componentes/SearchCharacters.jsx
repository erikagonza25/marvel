import React, {useState} from 'react';
import styled from 'styled-components';

const SearchCharacters = ({setCharacters, charactersFilter}) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
    filter(e.target.value);
  }

  const filter=(finishedSearch)=>{
    var resultSearch=charactersFilter.filter((elemento) => {
      if(elemento.name.toString().toLowerCase().includes(finishedSearch.toLowerCase())){
        return elemento;
      }
    });
    setCharacters(resultSearch);
  }

  return ( 
    <ContainSearch>
      <label className="input">
        <input className="input__field" 
          type="text" 
          placeholder=" " 
          value={search}
          onChange={handleChange}
        />
        <span className="input__label">Búsqueda por Nombre</span>
      </label>
    </ContainSearch>
   );
}
const ContainSearch = styled.div`
  display:flex;
  justify-content: center;

  label{
    color:#fff;
    font-size:20px;
    background-color: #000000ba;
    border-radius: 5px 0;
  }
  input{
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;

export default SearchCharacters;