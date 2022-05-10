import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackType} from 'v1/types/routeTypes';

const useCustomRoute = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackType>>();
  const navigateTo = (path: keyof MainStackType, params?: any) => {
    navigation.navigate(path, params);
  };
  const goBack = navigation.goBack;
  const setOptions = navigation.setOptions;

  return {navigateTo, goBack, setOptions};
};

export default useCustomRoute;
