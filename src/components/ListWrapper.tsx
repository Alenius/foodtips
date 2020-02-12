import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding-top: 2rem;
  justify-content: center;
  display: grid;
  width: 75%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`;

export const ListWrapper: React.FC = ({ children }) => {
  return <Root>{children}</Root>;
};
