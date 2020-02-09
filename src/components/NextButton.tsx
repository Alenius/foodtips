import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import theme from 'theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Button = styled(Link)`
  padding: ${theme.rem.m};
  padding-left: ${theme.rem.l};
  padding-right: ${theme.rem.l};
  font-size: ${theme.em.l};
  border-width: 0px;
  background-color: ${theme.color.lightgreen};
  color: ${theme.color.black};
  text-decoration: none;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  to: string;
  onClick?: () => void;
}

const NextButton: React.FC<Props> = ({
  to,
  onClick = (): void => {
    return;
  },
  children,
}) => {
  return (
    <Wrapper>
      <Button to={to} onClick={(): void => onClick()}>
        {children}
      </Button>
    </Wrapper>
  );
};

export default NextButton;
