import React, {useState} from 'react';
import styled from 'styled-components';

const EditCharacter = ({character, changeEditIfo, editInfoCharacters}) => {
  const [newName, changeName] = useState(character.name);
  const [newDescription, changeDescription] = useState([character.description])

  const handleSubmit = (e) => {
    e.preventDefault();
    editInfoCharacters(character.id, newName, newDescription);
    changeEditIfo(false);
  }

  return ( 
    <Form onSubmit={handleSubmit}>
     <input 
      type="text" 
      value={newName} 
      onChange={(e) => changeName(e.target.value)}
     />
     <textarea 
       cols="35" 
       rows="8" 
       value={newDescription} 
       onChange={(e) => changeDescription(e.target.value)}
     >
     </textarea>	
     <button type="submit" >
			  Actualizar
			</button> 
     </Form> 
   );
}
const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

  input{
    display: block;
    width: 95%;
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
  textarea{
    font-weight: 400;
    color: #212529;
    font-size: 0.9rem;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    resize: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 95%;
    margin: 0.5rem 0;
  }
  button{
   color: #fff;
   background-color: #32a81b;
   padding: 0.4rem;
   border:none;
   border-radius:5px;
   font-size:17px;
   margin:0.5rem 0;
  }
  button:hover{
    cursor:pointer;
    background-color: #67a65b;
 }

`;


export default EditCharacter;