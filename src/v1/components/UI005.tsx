import React, {useState} from 'react';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Spacer from './common/Spacer';
import {Dimensions, StyleProp, ViewStyle} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateScreen} from 'v1/store/slices/screensSlice';

type Props = {
  screenId: string;
  id: string;
  title: string;
  description: string;
  itemListTitle: string;
  itemList: string;
  actions: any;
  isChecked: boolean;
};

const getIconStyle = (isChecked: boolean) => ({
  borderWidth: 1,
  borderColor: isChecked ? '#1C1D20' : '#E0E2E6',
});

const checkboxStyle: StyleProp<ViewStyle> = {
  position: 'absolute',
  right: 0,
  top: 20,
};

const UI005: React.FC<Props> = ({
  screenId,
  id,
  title,
  description,
  itemListTitle,
  itemList,
  actions,
}) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  let bouncyCheckboxRef: BouncyCheckbox | null = null;

  const onPress = () => {
    if (bouncyCheckboxRef !== null) {
      bouncyCheckboxRef.onPress();
    }
  };

  const onPressCheckHandler = () => {
    dispatch(
      updateScreen({
        screenId,
        targetUIId: actions[0].target,
        isChecked: !isChecked,
      }),
    );
    setIsChecked(!isChecked);
  };

  return (
    <CardContainer isChecked={isChecked} onPress={onPress}>
      <Title>{title}</Title>
      <BouncyCheckbox
        isChecked={isChecked}
        onPress={onPressCheckHandler}
        size={28}
        iconStyle={getIconStyle(isChecked)}
        fillColor="#1C1D20"
        style={checkboxStyle}
        ref={(ref: any) => (bouncyCheckboxRef = ref)}
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

const CardContainer = styled.TouchableOpacity<{isChecked: boolean}>`
  margin-bottom: 10px;
  width: ${Dimensions.get('window').width - 48}px;
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
