import React from 'react';
import styled from 'styled-components/native';
import {boolean, string} from 'yargs';

type Props = {
  id: string;
  screen: string;
  isPreserveGlobalSave: boolean;
  buttonText: string;
  isEnabled: boolean;
};

const NAV002: React.FC<Props> = ({buttonText}) => {
  return (
    <Wrapper>
      <Text>{buttonText}</Text>
    </Wrapper>
  );
};

export default NAV002;

const Wrapper = styled.TouchableOpacity``;

const Text = styled.Text``;
