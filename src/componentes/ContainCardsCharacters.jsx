import React from 'react';
import Characters from './CardCharacter';
import styled from 'styled-components';
import time from '../imagenes/time.jpg';
import oops from '../imagenes/oops.png';

const ContainCharacters = ({characters, loading, setCharacters}) => {
  
  const editInfoCharacters= (id, newName, newDescription) => {
    setCharacters(characters.map((character) => {
      if(character.id === id){
          return {...character, name: newName, description: newDescription}         
      }
      return character;
    }))
  }
  return ( 
    <>
    <DivCharacters>
    {loading 
    ? 
      <>
         <ContainSpinner>
          <img src={time} alt="" />
          <div className="spinnerCenter flexDocumentSpinner mt-10" id="spinnerPage">
             <p>Procesando...</p>
             <div className="spinner"></div>
          </div>         
         </ContainSpinner>
         </> 
    : 
    null
    }   
    {characters.length > 0 ? characters.map(character => {
      return (     
        <Characters 
          key= {character.id} 
          character={character} 
          editInfoCharacters={editInfoCharacters}
        />     
      )
    })      
    : 
    <ContainNotResults>
          <img src={oops} alt="" />
          <p>El personaje buscado no existe, pruebe con otro.</p>
    </ContainNotResults>     
    }
    </DivCharacters>
    </>
    
   );
}
const DivCharacters = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
const ContainSpinner = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  img{
    margin-top: 2%;
    width: 30%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 53% 75%, 27% 100%, 27% 75%, 0% 75%);
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
const ContainNotResults = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin: 2rem 0;

  img{
    width : 40%;
    @media (max-width: 768px) {
      width : 100%;
    }
  }
  p{
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
`;


export default ContainCharacters;