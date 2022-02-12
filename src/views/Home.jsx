import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return ( 
    <ContainHome>
      <h1>Descubre los personajes del mundo de marvel</h1>
      <nav>
        <NavLink to="/characters">Personajes</NavLink>
      </nav>
      <ContainerVideo> 
        <iframe 
          className='responsive-iframe'
          src="https://www.youtube.com/embed/Al3PsYCIcBs" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </ContainerVideo>   
    </ContainHome>
   );
}
const ContainHome = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

 h1{
  text-align: center;
  color: #fff;
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
const ContainerVideo = styled.div`
position: relative;
width: 70%;
overflow: hidden;
padding-top: 56.25%; /* 16:9 Aspect Ratio */
@media (max-width: 768px) {
  width: 100%;
}
 iframe{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 60%;
  border: none;
    @media (max-width: 768px) {
      height: 100%;
    }
 }
`;

export default Home;