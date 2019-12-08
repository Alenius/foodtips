import React from 'react';
import styled from 'styled-components';

const FoodHeader = styled.h1`
  color: #8cd881;
`;

interface Props {
  children: string;
}

const ViewTitle: React.FC<Props> = ({ children }) => {
  return <FoodHeader>{children}</FoodHeader>;
};

export default ViewTitle;
