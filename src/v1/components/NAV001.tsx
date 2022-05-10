import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

// assets
import ArrowLeft from 'v1/assets/arrowLeft.svg';

// types
import {MainStackType} from 'v1/types/routeTypes';

const NAV001 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackType>>();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <StyledButton onPress={() => Alert.alert('HEY there')}>
          <Icon source={ArrowLeft} />
        </StyledButton>
      ),
    });
  }, []);
  return null;
};

export default NAV001;

const StyledButton = styled.TouchableOpacity``;

const Icon = styled.Image``;
