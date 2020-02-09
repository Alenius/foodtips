import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const PageContentWrapper: React.FC = ({ children }) => {
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.color.primaryBackgroundColor};
    padding: ${theme.em.xl} ${theme.rem.xl};
  `;

  return <Wrapper>{children}</Wrapper>;
};

export default PageContentWrapper;
