import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
  list: Array<CardPropTypes>;
  count: number;
}

const initialState: InitialState = {
  list: [],
  count: 0,
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
