import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {AppState} from 'v1/store';
import {useDispatch} from 'react-redux';
import {useQuery} from 'react-query';
import {ActivityIndicator} from 'react-native';

// components
import {
  NAV001,
  NAV002,
  BLANK,
  UI001,
  UI002,
  UI003,
  UI004,
  UI005,
  UI006,
  UI007,
} from 'v1/components';

const Components = {
  NAV001: NAV001,
  NAV002: NAV002,
  BLANK: BLANK,
  UI001: UI001,
  UI002: UI002,
  UI003: UI003,
  UI004: UI004,
  UI005: UI005,
  UI006: UI006,
  UI007: UI007,
};

interface UIType {
  id: string;
}

const Home = () => {
  const {isLoading, error, data} = useQuery('homeScreen', () =>
    fetch('http://localhost:3000/screen001').then(res => res.json()),
  );

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <Wrapper>
        {data.elements.map((el: UIType) => {
          const Component = Components[el.id as keyof typeof Components];
          return <Component {...el} />;
        })}
      </Wrapper>
    );
  }
};

export default Home;

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
