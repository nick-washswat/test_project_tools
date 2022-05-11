import React from 'react';
import styled from 'styled-components/native';
import useCustomRoute from 'v1/hooks/useCustomRoute';
import {MainStackType} from 'v1/types/routeTypes';

type Props = {
  id?: string;
  screen: keyof MainStackType;
  isPreserveGlobalSave?: boolean;
  buttonText?: string;
  isEnabled?: boolean;
};

const NAV002: React.FC<Props> = ({buttonText, screen}) => {
  const {navigateTo} = useCustomRoute();
  return (
    <Button onPress={() => navigateTo(screen)}>
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
  margin-vertical: 30px;
  padding-vertical: 20px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
