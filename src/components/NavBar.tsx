import React, { useContext } from 'react';
import styled from 'styled-components';

import * as NetlifyIdentityWidget from 'netlify-identity-widget';
import theme from 'theme';
import { Link } from 'react-router-dom';
import { FoodContext } from 'context/FoodProvider';

const Root = styled.div`
  height: 6rem;
  background-color: ${theme.color.primaryBackgroundColor};
  border-bottom: 1px solid ${theme.color.lightgreen};
`;

const NavWrapper = styled.div`
  height: 100%;
  padding: 0 ${theme.rem.xl};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled(Link)`
  font-size: ${theme.em.xxl};
  color: ${theme.color.lightgreen};
  font-weight: bold;
  font-family: 'Rubik', 'Roboto', 'sans-serif';
  text-decoration: none;
`;

const LoginButton = styled.div`
  background-color: ${theme.color.lightgreen};
  color: black;
  border-radius: 5px;
  padding: ${theme.rem.m};

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
