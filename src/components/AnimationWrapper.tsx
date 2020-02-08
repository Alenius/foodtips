import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import theme from 'theme';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
`;

const AnimatedWrapper = styled(animated.div)``;

interface Props {
  backgroundColor?: string;
}

const AnimationWrapper: React.FC<Props> = ({
  children,
  backgroundColor = theme.color.primaryBackgroundColor,
}) => {
  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    set({ opacity: 1 });
  }, []);

  return (
    <MainWrapper backgroundColor={backgroundColor}>
      <AnimatedWrapper style={props}>{children}</AnimatedWrapper>
    </MainWrapper>
  );
};

export default AnimationWrapper;
