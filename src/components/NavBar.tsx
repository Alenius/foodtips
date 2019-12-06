import React from 'react';
import styled from 'styled-components';

import * as NetlifyIdentityWidget from 'netlify-identity-widget';

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

NetlifyIdentityWidget.init();

export const NavBar: React.FC = () => {
  return (
    <Root>
      <Label>Foodtips</Label>
      <div
        onClick={() => {
          console.log('click');
          NetlifyIdentityWidget.open();
        }}
      >
        Klicka här
      </div>
    </Root>
  );
};
