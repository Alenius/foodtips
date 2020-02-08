import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import ViewTitle from 'components/ViewTitle';
import { FoodContext } from 'context/FoodProvider';
import AnimationWrapper from 'components/AnimationWrapper';
import theme from 'theme';

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.secondaryBackgroundColor};
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
  tagsFinished: boolean;
}

const RecipePresentation: React.FC<Props> = ({ tagsFinished }) => {
  const { state: contextState } = useContext(FoodContext);

  useEffect(() => {
    if (tagsFinished)
      window.scroll({ top: 3 * window.innerHeight, behavior: 'smooth' });
  }, [tagsFinished]);

  return (
    <AnimationWrapper backgroundColor={theme.color.secondaryBackgroundColor}>
      <Root>
        <ViewTitle>The start of something delicious</ViewTitle>
        <InfoText>Here are the recepies that fit your description</InfoText>
        <ListWrapper>
          {contextState.selectedRecipes.map(it => {
            return (
              <Link
                href={it.link}
                target={'_blank'}
                key={it.title}
                rel='noopener noreferrer'
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
    </AnimationWrapper>
  );
};

export default RecipePresentation;
