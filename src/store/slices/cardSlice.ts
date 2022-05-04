import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const dummyCards = [
  {
    _id: '1',
    title: 'Card 1',
    color: '#42f5cb',
  },
  {
    _id: '2',
    title: 'Card 2',
    color: '#91fffb',
  },
  {
    _id: '3',
    title: 'Card 3',
    color: '#cbff2e',
  },
  {
    _id: '4',
    title: 'Card 4',
    color: '#d2b1fc',
  },
  {
    _id: '5',
    title: 'Card 5',
    color: '#fcb1bc',
  },
];

interface InitialState {
  list: Array<CardPropTypes>;
  count: number;
}

const initialState: InitialState = {
  list: dummyCards,
  count: dummyCards.length + 1,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: state => {
      state.list.push({
        _id: state.count.toString(),
        title: 'Card ' + state.count,
        color:
          '#' +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0'),
      });
      state.count += 1;
    },
    updateCard: (
      state,
      action: PayloadAction<{oldTitle: string; newTitle: string}>,
    ) => {
      const memoIndex = state.list.findIndex(
        el => el.title === action.payload.oldTitle,
      );
      if (memoIndex !== -1) {
        state.list[memoIndex] = {
          ...state.list[memoIndex],
          title: action.payload.newTitle,
          color:
            '#' +
            Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, '0'),
        };
      }
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(el => el._id != action.payload);
    },
    resetCardList: () => ({
      ...initialState,
    }),
  },
});

export const {addCard, updateCard, removeCard, resetCardList} =
  cardSlice.actions;
export default cardSlice.reducer;
