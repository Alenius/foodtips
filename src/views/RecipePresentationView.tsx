import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Recipe } from '../constants/foodItems';
import ViewTitle from '../components/ViewTitle';

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--light-slate);
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
`;

const InfoText = styled.p`
  color: #8cd881;
`;

interface Props {
  selectedTags: string[];
  chosenRecipes: Recipe[];
  tagsFinished: boolean;
  setChosenRecipes(chosenRecipes: Recipe[]): void;
}

const RecipePresentationView: React.FC<Props> = ({
  chosenRecipes,
  setChosenRecipes,
  tagsFinished,
  selectedTags
}) => {
  const [elegibleRecepies, setElegibleRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    if (tagsFinished)
      window.scroll({ top: 3 * window.innerHeight, behavior: 'smooth' });
  }, [tagsFinished]);

  useEffect(() => {
    const filteredRecipeArr = chosenRecipes.filter(item =>
      item.tags.some(tag => selectedTags.includes(tag))
    );
    setElegibleRecipes(filteredRecipeArr);
  }, [selectedTags, setChosenRecipes]);

  return (
    <Root>
      <ViewTitle>The start of something delicious</ViewTitle>
      <InfoText>Here are the recepies that fit your description</InfoText>
      {elegibleRecepies.map(it => {
        return (
          <a
            href={it.link}
            target={'_blank'}
            key={it.title}
            rel="noopener noreferrer"
          >
            {it.title}
          </a>
        );
      })}
    </Root>
  );
};

export default RecipePresentationView;
