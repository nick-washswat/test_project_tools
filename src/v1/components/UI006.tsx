import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id: string;
  title: string;
  imageUrl: string;
};

const UI006: React.FC<Props> = ({title, imageUrl}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Img source={{uri: imageUrl}} />
    </Wrapper>
  );
};

export default UI006;
const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding-horizontal: 24px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #1c1d20;
  margin-right: 6px;
  margin-bottom: 10px;
`;

const Img = styled.Image`
  width: 18px;
  height: 18px;
`;
