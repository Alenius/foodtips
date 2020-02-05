import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PagePresentation from 'views/PagePresentation';
import CuisineSelectorView from 'views/CuisineSelectorView';
import TagsSelectorView from 'views/TagsSelectorView';
import RecipePresentationView from 'views/RecipePresentationView';

const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #282c34;
  align-items: center;
`;

export const Home: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [cuisineFinished, setCuisineFinished] = useState<boolean>(false);
  const [tagsFinished, setTagsFinished] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (cuisineFinished === false) {
      setSelectedTags([]);
    }
  }, [cuisineFinished]);

  return (
    <PageRoot>
      <PagePresentation started={started} setStarted={setStarted} />
      {started ? (
        <CuisineSelectorView
          started={started}
          cuisineFinished={cuisineFinished}
          setCuisineFinished={setCuisineFinished}
        />
      ) : null}
      {started && cuisineFinished ? (
        <TagsSelectorView
          cuisineFinished={cuisineFinished}
          tagsFinished={tagsFinished}
          setTagsFinished={setTagsFinished}
        />
      ) : null}
      {started && cuisineFinished && tagsFinished ? (
        <RecipePresentationView tagsFinished={tagsFinished} />
      ) : null}
    </PageRoot>
  );
};
