import React from 'react';
import styled from 'styled-components/native';
import Spacer from './common/Spacer';

type Props = {
  id: string;
  title: string;
  moreText: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  actions: any;
};

const UI008: React.FC<Props> = ({
  title,
  moreText,
  description,
  imageUrl,
  buttonText,
  actions,
}) => {
  return (
    <CardContainer>
      <MainImage source={{uri: imageUrl}} />
      <Spacer height={16} />
      <HeaderWrap>
        <Title>{title}</Title>
        <MoreBtn onPress={actions} activeOpacity={0.7}>
          <MoreText>{moreText}</MoreText>
        </MoreBtn>
      </HeaderWrap>
      <Spacer height={16} />
      <Description>{description}</Description>
      <Spacer height={16} />
      <AddButton activeOpacity={0.7} onPress={actions}>
        <AddText>+ {buttonText}</AddText>
      </AddButton>
    </CardContainer>
  );
};

export default UI008;

const CardContainer = styled.View`
  border-radius: 16px;
  margin-top: 27px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e2e6;
  height: 321px;
  width: 327px;
  padding-horizontal: 16px;
`;
const MainImage = styled.Image`
  align-self: center;
  width: 327px;
  height: 144px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const HeaderWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
  color: #1c1d20;
`;
const MoreBtn = styled.TouchableOpacity``;
const MoreText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: right;
  color: #2c5ae9;
`;

const Description = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #848a93;
  line-height: 20px;
`;

const AddButton = styled.TouchableOpacity`
  background: #ffffff;
  height: 48px;
  border: 1px solid #e0e2e6;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const AddText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #1c1d20;
`;
