import React from 'react';
import { StyledHeader } from './styles';

const Header = ({ tagline }) => (
  <>
    <StyledHeader>
      <h1>Mercado</h1>
    </StyledHeader>
    <h3>
      <span>{tagline}</span>
    </h3>
  </>
)

export default Header;