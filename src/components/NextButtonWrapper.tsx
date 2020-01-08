import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20%;
`;

interface Props {
  children: React.ReactChild;
}

const NextButtonWrapper: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NextButtonWrapper;
