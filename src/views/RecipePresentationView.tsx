import React, { useEffect } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: lightseagreen;
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
`;

interface Props {
  selectedCuisines: string[];
  selectedTags: string[];
}

const RecipePresentationView: React.FC<Props> = ({
  selectedCuisines,
  selectedTags
}) => {
  useEffect(() => {}, [selectedCuisines, selectedTags]);

  return <Root>hej</Root>;
};

export default RecipePresentationView;
