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

const Wrapper = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-vertical: 8px;
  padding-horizontal: 24px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
