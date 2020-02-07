import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Button = styled(Link)`
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.5rem;
  border-width: 0px;
  background-color: #8cd881;
  color: black;
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
  children
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
