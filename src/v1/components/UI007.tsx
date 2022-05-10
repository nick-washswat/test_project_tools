import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};
const UI007: React.FC<Props> = ({title, description, imageUrl}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <HorizontalLine />
      <AnswerContainer>
        <Image source={{uri: imageUrl}} />
        <Description>{description}</Description>
      </AnswerContainer>
    </Container>
  );
};

export default UI007;

const Container = styled.View`
  padding: 16px;
  border-radius: 10px;
  background-color: #f3f4f5;
  margin: 0 24px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  padding-bottom: 16px;
  /* Black_10 */
  color: #1c1d20;
`;

const HorizontalLine = styled.View`
  height: 1px;
  background-color: #e0e2e5;
`;

const AnswerContainer = styled.View`
  flex-direction: row;
  padding-top: 16px;
`;

const Image = styled.Image`
  margin-right: 16px;
`;

const Description = styled.Text`
  width: 85%;
  font-size: 14px;
  color: #5d6166;
  line-height: 20px;
`;
