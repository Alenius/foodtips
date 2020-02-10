import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const FoodHeader = styled.h1`
  color: ${theme.color.lightgreen};
`;

interface Props {
  children: string;
}

const ViewTitle: React.FC<Props> = ({ children }) => {
  return <FoodHeader>{children}</FoodHeader>;
};

export default ViewTitle;
