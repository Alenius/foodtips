import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import ViewTitle from 'components/ViewTitle';
import { FoodContext } from 'context/FoodProvider';
import theme from 'theme';
import PageContentWrapper from 'components/PageContentWrapper';

const InfoText = styled.p`
  color: ${theme.color.lightgreen};
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${theme.em.l};
  justify-items: center;
  width: 75%;
`;

const Link = styled.a`
  padding: ${theme.em.m} ${theme.rem.m};
  border: 1px solid;
  border-color: ${theme.color.lightgreen};
  text-decoration: none;
  color: ${theme.color.lightgreen};
`;

const Title = styled.div`
  font-size: ${theme.em.l};
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubTitle = styled.div`
  font-size: ${theme.em.m};
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
    <PageContentWrapper>
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
    </PageContentWrapper>
  );
};

export default RecipePresentation;
