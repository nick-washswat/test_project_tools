import React from 'react';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
  id: string;
  title: string;
  description: string;
  itemListTitle: string;
  itemList: string;
  actions: any;
};

type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer: React.FC<SpacerProps> = ({height, width}) => {
  return <ViewSpacer height={height} width={width} />;
};

// const UI005UI: React.FC<Props> = ({
//   title,
//   description,
//   itemListTitle,
//   itemList,
//   actions,
// }) => {
//   return (
//     <Wrapper>
//       <Title>{title}</Title>
//       <Description>{description}</Description>
//     </Wrapper>
//   );
// };

const UI005: React.FC<Props> = () => {
  return (
    <Wrapper>
      <CardContainer>
        <Title>생활빨래</Title>

        <BouncyCheckbox
          size={28}
          iconStyle={{borderWidth: 1, borderColor: '#E0E2E6'}}
          fillColor="#1C1D20"
          style={{position: 'absolute', right: 0, top: 20}}
        />
        <Spacer height={12} />
        <Description>일괄 물세탁 후 기계건조합니다.</Description>
      </CardContainer>
    </Wrapper>
  );
};

export default UI005;

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  /* justify-content: center; */
  align-items: center;
`;

const CardContainer = styled.View`
  margin-top: 30px;
  width: 327px;
  height: 146px;
  background-color: #ffffff;
  /* Grayscale/Gray_50 */
  border: 1px solid #e0e2e6;
  /* DS_L */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding-horizontal: 24px;
  padding-vertical: 20px;
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

const ItemListTitle = styled.Text``;

const ItemList = styled.Text``;

const CheckBox = styled.View``;

const ViewSpacer = styled.View<SpacerProps>`
  height: ${props => props.height || 0}px;
  width: ${props => props.width || 0}px;
`;
