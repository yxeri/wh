import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'active';

const StyledMenu = styled.nav`
  display: grid;
  background-color: black;
  color: whitesmoke;
  
  a {
    font-size: 1.5em;
  }
  
  ul {
    display: flex;
    grid-gap: 2em;
    list-style: none;
    padding: .4em;
    margin: 0;
    
    li {
    }
  }
  
  .active {
    text-decoration: underline;
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newSale"
          >
            New sale
          </NavLink>
        </li>
      </ul>
    </StyledMenu>
  );
}
