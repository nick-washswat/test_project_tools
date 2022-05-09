import React from 'react';
import styled from 'styled-components/native';

type Props = {
  texts: string[];
  buttonText: string;
  dataUrl: string;
  globalSave: {
    name: string;
    value: string;
  }[];
};

const UI002: React.FC<Props> = ({texts, buttonText}) => {
  return (
    <Wrapper>
      <LeftContainer>
        {texts.map(el => (
          <StyledText>{el}</StyledText>
        ))}
      </LeftContainer>
      <RightContainer>
        <StyledText>{buttonText}</StyledText>
      </RightContainer>
    </Wrapper>
  );
};

export default UI002;

const Wrapper = styled.View``;

const LeftContainer = styled.View``;

const RightContainer = styled.TouchableOpacity``;

const StyledText = styled.Text``;
