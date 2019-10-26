import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  background-color: #20232a;
`;

const Label = styled.p`
  font-size: 30px;
  color: #8cd881;
  padding-left: 10vh;
  font-weight: bold;
  font-family: 'Rubik', 'Roboto', 'sans-serif';
`;

export const NavBar: React.FC = () => {
  return (
    <Root>
      <Label>Foodtips</Label>
    </Root>
  );
};
