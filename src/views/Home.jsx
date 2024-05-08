import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import time from '../imagenes/time.png';

const Home = () => {
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return ( 
    <ContainHome>
      <h1>Descubre los personajes del mundo de marvel</h1>
      <nav>
        <NavLink to="/characters">Personajes</NavLink>
      </nav>
      {iframeLoading && (
        <ContainSpinner>
        <img src={time} alt="" />
        <div className="spinnerCenter flexDocumentSpinner mt-10" id="spinnerPage">
           <p>Procesando...</p>
           <div className="spinner"></div>
        </div>         
       </ContainSpinner>
      )}
      <ContainerVideo> 
        <iframe 
          className='responsive-iframe'
          src="https://www.youtube.com/embed/Al3PsYCIcBs" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          onLoad={handleIframeLoad}
          style={{ display: iframeLoading ? 'none' : 'block' }}
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

export default Home;