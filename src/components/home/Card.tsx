import React, {memo, Profiler, useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeCard, updateCard} from 'store/slices/cardSlice';
import styled from 'styled-components/native';
import Cross from 'assets/cross.svg';

const Card: React.FC<CardPropTypes> = ({_id, title, color}) => {
  const dispatch = useDispatch();
  const [selectedCompTitle, setSelectedCompTitle] = useState('');
  const [selectedCompNewTitle, setSelectedCompNewTitle] = useState('');

  const onPressHandler = () => {
    dispatch(
      updateCard({oldTitle: selectedCompTitle, newTitle: selectedCompNewTitle}),
    );
    setSelectedCompTitle('');
    setSelectedCompNewTitle('');
  };

  const deleteHandler = () => {
    dispatch(removeCard(_id));
  };

  return (
    <Profiler
      id={_id}
      onRender={() => console.log('>>>> Num Of Renders', title.toUpperCase())}>
      <Wrapper color={color}>
        <Text>{title}</Text>
        <RowWrapper>
          <StyledInput
            value={selectedCompTitle}
            onChangeText={setSelectedCompTitle}
          />
          <StyledInput
            value={selectedCompNewTitle}
            onChangeText={setSelectedCompNewTitle}
          />
          <StyledButton onPress={onPressHandler}>
            <Text>Change</Text>
          </StyledButton>
        </RowWrapper>
        <DeletButton onPress={deleteHandler}>
          <Icon source={Cross} />
        </DeletButton>
      </Wrapper>
    </Profiler>
  );
};

export default memo(Card);

const Wrapper = styled.View<{color: string}>`
  width: 100%;
  height: 100px;
  align-items: center;
  background-color: ${props => props.color};
  padding-vertical: 10px;
  padding-horizontal: 10px;
`;

const Text = styled.Text``;

const RowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  height: 25px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-right: 10px;
  padding-horizontal: 5px;
`;

const StyledButton = styled.TouchableOpacity``;

const DeletButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Icon = styled.Image``;
