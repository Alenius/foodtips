import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.5rem;
  border-width: 0px;
  background-color: #8cd881;
  background-color: ${(props): string => (props.disabled ? 'gray' : '#8cd881')};
  color: ${(props): string => (props.disabled ? 'white' : 'black')};

  :hover {
    cursor: ${(props): string => (props.disabled ? 'cursor' : 'pointer')};
  }
`;

interface Props {
  children: React.ReactNode;
  onClick(): void;
  disabled: boolean;
}

const NextButton: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} type="button" onClick={(): void => onClick()}>
      {children}
    </Button>
  );
};

export default NextButton;
