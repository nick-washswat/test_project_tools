import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  id?: string;
  screen?: string;
  isPreserveGlobalSave?: boolean;
  buttonText?: string;
  isEnabled?: boolean;
};

const NAV002: React.FC<Props> = ({buttonText, screen}) => {
  return (
    <Button onPress={() => Alert.alert('FETCH SCREEN ' + screen)}>
      <Text>{buttonText}</Text>
    </Button>
  );
};

export default NAV002;

const Button = styled.TouchableOpacity`
  background-color: #000;
  width: 80%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding-vertical: 20px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
