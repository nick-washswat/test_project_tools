
import {atom, RecoilState} from 'recoil'
import dummyCards from 'v2/dummyCards';

interface InitialState {
  list: Array<CardPropTypes>;
  count: number;
}
export const initialStateAtom:RecoilState<InitialState>=atom({
  key:'initialstateAtom',
  default:{
    list:dummyCards,
    count:dummyCards.length+1
  }
})


