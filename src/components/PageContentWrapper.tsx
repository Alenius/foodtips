import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const PageContentWrapper: React.FC = ({ children }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.primaryBackgroundColor};
    height: 100vh;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    /* this prevents the padding from chaging the height */
    box-sizing: border-box;
  `;

  return <Wrapper>{children}</Wrapper>;
};

export default PageContentWrapper;
