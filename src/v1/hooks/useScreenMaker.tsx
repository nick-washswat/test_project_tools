import React from 'react';
import styled from 'styled-components/native';
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
const useScreenMaker = (screenName: string) => {
  const {isLoading, data} = useQuery(screenName, () =>
    fetch(`http://localhost:3000/${screenName}`).then(res => res.json()),
  );

  if (isLoading) {
    return <ActivityIndicator />;
  } else {
    return (
      <ScrollView>
        <Wrapper>
          {data.elements.map((el: UIType, index: number) => {
            const Component = Components[el.id as keyof typeof Components];
            return <Component key={el.id + index} {...(el as any)} />;
          })}
        </Wrapper>
      </ScrollView>
    );
  }
};

const Wrapper = styled.View`
  flex: 1;

  align-items: center;
`;

const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

export default useScreenMaker;
