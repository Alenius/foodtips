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

const ListWrapper = styled.div`
  padding-top: 2rem;
  justify-content: center;
  display: grid;
  width: 75%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`;

const Link = styled.a`
  padding: 1rem;
  border: 1px solid;
  border-color: var(--light-green);
  text-decoration: none;
  color: var(--light-green);
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  font-style: italic;
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
      <ListWrapper>
        {elegibleRecepies.map(it => {
          console.log(it);
          return (
            <Link
              href={it.link}
              target={'_blank'}
              key={it.title}
              rel="noopener noreferrer"
            >
              <Title>{it.title}</Title>
              <SubTitleWrapper>
                <SubTitle>{`${it.cuisine} \u2022 `}</SubTitle>
                <SubTitle>{it.tags.map(it => it)}</SubTitle>
              </SubTitleWrapper>
            </Link>
          );
        })}
      </ListWrapper>
    </Root>
  );
};

export default RecipePresentationView;
