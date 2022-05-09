import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {AppState} from 'v1/store';
import {useDispatch} from 'react-redux';

// components
import {Card} from 'v1/components';

// store
import {addCard} from 'v1/store/slices/cardSlice';
import {useQuery} from 'react-query';
import {ActivityIndicator} from 'react-native';

const Home = () => {
  const dispatch = useDispatch();
  const {list} = useSelector((state: AppState) => state.card);
  const {isLoading, error, data} = useQuery('homeScreen', () =>
    fetch('http://localhost:3000/homeScreen').then(res => res.json()),
  );
  console.log('>>>>>>>>>>>>>> LOADING', isLoading);
  console.log('?????????????? DATA', data);
  const renderItemHandler = useCallback(({item}) => <Card {...item} />, []);

  const addNewCardHandler = () => {
    dispatch(addCard());
  };

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <Wrapper>
        <StyledFlatlis data={data} renderItem={renderItemHandler} />
        <AddButton onPress={addNewCardHandler}>
          <Text>Add Card</Text>
        </AddButton>
      </Wrapper>
    );
  }
};

export default Home;

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const StyledFlatlis = styled.FlatList`
  width: 100%;
`;

const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  background-color: #000;
  border-radius: 50px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
`;

const Text = styled.Text`
  font-size: 18px;
  color: #fff;
`;
