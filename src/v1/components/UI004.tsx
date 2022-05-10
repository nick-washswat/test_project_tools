import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id?: string;
  imageUrl?: string;
  text?: string;
};

const UI004: React.FC<Props> = ({imageUrl, text}) => {
  return (
    <Wrapper>
      <Icon source={{uri: imageUrl}} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default UI004;

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 24px;
`;

const Icon = styled.Image`
  height: 30px;
  width: 30px;
  background-color: yellowgreen;
`;

const Text = styled.Text`
  flex: 1;
  font-size: 15px;
  margin-left: 20px;
`;
