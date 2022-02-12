import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import error from '../imagenes/404.jpg';

const Error = () => {
  return ( 
    <ContainHome>
      <h1>Error 404</h1>
			<p>La pagina que buscas no existe o fue cambiada de lugar.</p>
      <nav>
        <NavLink to="/">Inicio</NavLink>
      </nav>
      <img src={error} alt="" />   
    </ContainHome>
   );
}
const ContainHome = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
 
img{
  width: 30%;
  @media (max-width: 768px) {
    width: 80%;
  }
}
 h1, p{
  text-align: center;
  color: #fff;
 }
 p{
   font-size: 20px;
 }
 nav{
   text-align: center;
   margin: 1.5rem;
 }
 a{
   text-decoration: none;
   color: #fff;
   background-color: #d19e1a;
   padding: 1rem;
   border-radius:5px;
   font-size:20px;
 }
 a:hover{
  color: #fff;
  background-color: #ccad5d;
  font-weight:500;
}
`;
export default Error;