import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id: string;
  title: string;
  imageUrl: string;
};

const UI006: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>자주 묻는 질문</Title>
    </Wrapper>
  );
};

export default UI006;
const Wrapper = styled.View`
  flex: 1;
  padding-horizontal: 24px;
`;

const Title = styled.Text`
  /* text-align: center; */
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* Black_10 */
  color: #1c1d20;
  margin-top: 20px;
`;

const Img = styled.Image``;
