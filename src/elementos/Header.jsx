import React from 'react';
import logo from '../imagenes/logoMarvel.jpg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {

  return ( 
    <ContenedorHeader>
      <DivImg>
        <NavLink to="/"><img src={logo} alt="" width="130"/></NavLink>
      </DivImg>
      <Nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/characters">Personajes</NavLink>
      </Nav>
    </ContenedorHeader>
   );
}
const ContenedorHeader = styled.header`
background-color: rgba(0, 0, 0, 0.4);
box-shadow: 1px 1px 5px #000;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column;
}
`;

const Nav = styled.nav`
margin: 1rem;
a { 
  text-decoration: none;
  color: #ffff;
  margin: 1rem;
  font-size:20px;
}
a:hover { 
  color: #19168;
}
a.active { 
  border-bottom: 2px solid #ffff;
  padding-bottom: 3px;
}
`;
const DivImg = styled.div`
margin: 1rem
`;
export default Header;