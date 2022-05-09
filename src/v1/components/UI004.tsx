import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id: string;
  imageUrl: string;
  text: string;
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

const Wrapper = styled.View``;

const Icon = styled.Image``;

const Text = styled.Text``;
