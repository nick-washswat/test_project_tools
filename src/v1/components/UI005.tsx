import React from 'react';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Spacer from './common/Spacer';

type Props = {
  id: string;
  title: string;
  description: string;
  itemListTitle: string;
  itemList: string;
  actions: any;
  isChecked: boolean;
};

const UI005: React.FC<Props> = ({
  title,
  description,
  itemListTitle,
  itemList,
  actions,
  isChecked,
}) => {
  return (
    <CardContainer isChecked={isChecked}>
      <Title>{title}</Title>
      <BouncyCheckbox
        isChecked={isChecked}
        onPress={actions}
        size={28}
        iconStyle={{
          borderWidth: 1,
          borderColor: isChecked ? '#1C1D20' : '#E0E2E6',
        }}
        fillColor="#1C1D20"
        style={{position: 'absolute', right: 0, top: 20}}
      />
      <Spacer height={12} />
      <Description>{description}</Description>
      <Spacer height={12} />
      <HorizontalLine />
      <Spacer height={12} />
      <ItemListWrapper>
        <ItemList>{itemListTitle}</ItemList>
        <ItemListTitle>{itemList}</ItemListTitle>
      </ItemListWrapper>
    </CardContainer>
  );
};

export default UI005;

const CardContainer = styled.View<{isChecked: boolean}>`
  margin-top: 30px;
  width: 327px;
  height: 146px;
  background-color: #ffffff;
  /* Grayscale/Gray_50 */
  border-width: 1px;
  border-color: ${props => (props.isChecked ? '#1C1D20' : '#e0e2e6')};
  /* DS_L */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding-horizontal: 24px;
  padding-vertical: 20px;
`;

const ItemListWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #2c5ae9;
`;

const Description = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #848a93;
`;

const HorizontalLine = styled.View`
  height: 1px;
  background-color: #eff0f2;
`;
const ItemListTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #5d6166;
`;

const ItemList = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  color: #5d6166;
`;
