import React from 'react';
import styled from 'styled-components/native';

type Props = {
  buttonText: string;
  action: any;
};

const UI009: React.FC<Props> = ({buttonText, action}) => {
  return (
    <ConfirmBtn onPress={action}>
      <ConfirmText>{buttonText}</ConfirmText>
    </ConfirmBtn>
  );
};

export default UI009;

const ConfirmBtn = styled.TouchableOpacity`
  background-color: #1c1d20;
  border-radius: 12px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-horizontal: 24px;
`;
const ConfirmText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;
