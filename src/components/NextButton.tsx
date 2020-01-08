import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.5rem;
  border-width: 0px;
  background-color: #8cd881;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  children: React.ReactNode;
  onClick(): void;
}

const NextButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={(): void => onClick()}>
      {children}
    </Button>
  );
};

export default NextButton;
