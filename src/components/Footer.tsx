import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const Root = styled.div`
  height: 8rem;
  background-color: ${theme.color.secondaryBackgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${theme.rem.xl};
  color: ${theme.color.lightgreen};
  justify-content: space-between;
`;

const Footer: React.FC = () => {
  return (
    <Root>
      <div>FoodTips</div>
      <div>Adam Alenius, 2020</div>
    </Root>
  );
};

export default Footer;
