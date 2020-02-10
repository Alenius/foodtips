import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import theme from 'theme';

const MainWrapper = styled.div`
  display: flex;
  padding: ${theme.em.xl} ${theme.rem.xl};
  flex: 1;
  background-color: ${theme.color.secondaryBackgroundColor};
`;

const AnimatedWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

interface Props {
  backgroundColor?: string;
}

const PageContentWrapper: React.FC<Props> = ({ children }) => {
  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    set({ opacity: 1 });
  }, [set]);

  // the animated div is needed so that the background does not flash white when the opacity
  // shift is happening
  return (
    <MainWrapper>
      <AnimatedWrapper style={props}>{children}</AnimatedWrapper>
    </MainWrapper>
  );
};

export default PageContentWrapper;
