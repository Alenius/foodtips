import React, { useContext } from 'react';
import styled from 'styled-components';

import * as NetlifyIdentityWidget from 'netlify-identity-widget';
import theme from 'theme';
import { Link } from 'react-router-dom';
import { FoodContext } from 'context/FoodProvider';

const Root = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${theme.primaryBackgroundColor};
`;

const NavWrapper = styled.div`
  height: 100%;
  padding-left: 5rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled(Link)`
  font-size: 30px;
  color: ${theme.lightgreen};
  font-weight: bold;
  font-family: 'Rubik', 'Roboto', 'sans-serif';
  text-decoration: none;
`;

const LoginButton = styled.div`
  background-color: ${theme.lightgreen};
  color: black;
  border-radius: 5px;
  padding: 1rem;

  :hover {
    cursor: pointer;
  }
`;

NetlifyIdentityWidget.init();

export const NavBar: React.FC = () => {
  const { state: ContextState } = useContext(FoodContext);

  return (
    <Root>
      <NavWrapper>
        <Label to='/' style={{}}>
          FoodTips
        </Label>
        {ContextState.loggedIn ? (
          <Link to='/'>Startsida</Link>
        ) : (
          <LoginButton
            onClick={() => {
              NetlifyIdentityWidget.open();
            }}
          >
            Log in with GitHub
          </LoginButton>
        )}
      </NavWrapper>
    </Root>
  );
};
