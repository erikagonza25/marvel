import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EditCharacter from './EditCharacter';

const Characters = ({character ,editInfoCharacters}) => {
  const [editInfo, changeEditIfo] = useState(false);
  return ( 
    <>
        <div className="flip-container" key={character.id}>
          <CardCharacters className="card">
            <div className="front" >
              <Img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} width={200}/>
              <small>{character.name}</small>   
            </div>
            <div className="back"> 
              {editInfo ? 
                <EditCharacter character={character} changeEditIfo={changeEditIfo} editInfoCharacters={editInfoCharacters}/>
                :
                <>
                <h2>{character.name}</h2>
                <p>{character.description > '' ? character.description : 'No character description'}</p>
                <h4>{character.modified}</h4>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="editCharacter"
                  onClick={() => changeEditIfo(!editInfo)}
                />
                </> 
              }              
            </div>   
          </CardCharacters>
        </div>         
    </>
   );
}
const CardCharacters = styled.div`
display: flex;
flex-direction: column;
border: 1px solid rgba(0,0,0,.125);
border-radius: 0.25rem;
width: 100%;
height: 300px;
transition: transform 1s;
transform-style: preserve-3d;
`;
const Img = styled.img`
width: 100%;
height: 300px;
border-radius: 0.25rem;
`;
export default Characters;