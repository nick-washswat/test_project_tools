import React from 'react';
import styled from 'styled-components/native';

type Props = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};
const UI007UI: React.FC<Props> = ({title, description, imageUrl}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <HorizontalLine />
      <AnswerContainer>
        <Image source={imageUrl}></Image>
        <Description>{description}</Description>
      </AnswerContainer>
    </Container>
  );
};

const UI007 = () => {
  return (
    <Wrapper>
      <UI007UI
        title="생활빨래에 속옷 말고 일반 의류를 넣어도 되나요?"
        description="권장하지 않아요! 일반의류는 기계건조 시 사이즈가 줄어들 수 있어요. 줄어들어도 괜찮은 옷이라면 넣어주세요."
        imageUrl={require('../assets/callout.svg')}
      />
    </Wrapper>
  );
};

export default UI007;
const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

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
