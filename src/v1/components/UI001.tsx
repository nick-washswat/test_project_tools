import React from 'react';
import styled from 'styled-components/native';

type Props = {
  texts: string[];
};

const UI001: React.FC<Props> = ({texts}) => {
  return (
    <Wrapper>
      {texts.slice(0, 2).map(el => (
        <StyledText>{el}</StyledText>
      ))}
    </Wrapper>
  );
};

export default UI001;

const Wrapper = styled.View``;

const StyledText = styled.Text``;
