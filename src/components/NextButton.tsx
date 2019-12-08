import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.25rem;
  border-width: 0px;
`;

interface Props {
  children: string;
  onClick(): void;
}

const NextButton: React.FC<Props> = ({ children, onClick }) => {
  return <Button onClick={(): void => onClick()}>{children}</Button>;
};

export default NextButton;
