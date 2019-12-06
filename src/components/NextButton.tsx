import React from 'react';
import styled from 'styled-components';

const RootDiv = styled.div`
  font-size: 30px;
  color: #dba11c;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #454754;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  onClick: () => void;
}

const NextButton: React.FC<Props> = ({ onClick }) => {
  return <RootDiv onClick={onClick}>Next</RootDiv>;
};

export default NextButton;
