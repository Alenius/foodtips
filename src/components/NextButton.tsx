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
  color: ${theme.color.black};
  text-decoration: none;
  text-align: center;
  background-color: ${(props: { disabled: boolean }): string =>
    props.disabled ? theme.color.lightgray : theme.color.lightgreen};
  opacity: ${(props: { disabled: boolean }): number =>
    props.disabled ? 0.5 : 1};

  :hover {
    cursor: ${(props: { disabled: boolean }): string =>
      props.disabled ? 'default' : 'pointer'};
  }
`;

interface Props {
  to: string;
  onClick?: () => void;
  disabled?: boolean;
}

const NextButton: React.FC<Props> = ({
  to,
  onClick = (): void => {},
  children,
  disabled = false,
}) => {
  return (
    <Wrapper>
      <Button
        disabled={disabled}
        to={to}
        onClick={(e): void => {
          disabled ? e.preventDefault() : onClick();
        }}
      >
        {children}
      </Button>
    </Wrapper>
  );
};

export default NextButton;
