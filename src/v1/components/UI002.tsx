import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  id: string;
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
          <Text key={el}>{el}</Text>
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
  margin-vertical: 5px;
  padding-horizontal: 24px;
  pading-vertical: 10px;
`;

const LeftContainer = styled.View`
  flex: 1;
`;

const RightContainer = styled.TouchableOpacity`
  padding: 10px;
  border: 1px solid #cecece;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
