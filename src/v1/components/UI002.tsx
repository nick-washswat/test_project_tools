import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  texts?: string[];
  buttonText?: string;
  dataUrl?: string;
  globalSave?: {
    name?: string;
    value?: string;
  }[];
};

const UI002: React.FC<Props> = ({texts, buttonText}) => {
  return (
    <Wrapper>
      <LeftContainer>
        {texts?.map(el => (
          <Text>{el}</Text>
        ))}
      </LeftContainer>
      <RightContainer onPress={() => Alert.alert('OPEN CALENDAR')}>
        <Text>{buttonText}</Text>
      </RightContainer>
    </Wrapper>
  );
};

export default UI002;

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 24;
  pading-vertical: 10;
`;

const LeftContainer = styled.View`
  flex: 1;
`;

const RightContainer = styled.TouchableOpacity`
  padding: 10px;
  border: 1px solid #cacaca;
  border-radius: 10;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
