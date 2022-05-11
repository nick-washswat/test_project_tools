import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
  screensList: Array<screenPropTypes>;
}

const initialState: InitialState = {
  screensList: [],
};

const screensSlice = createSlice({
  name: 'screens',
  initialState,
  reducers: {
    addScreen: (state, action: PayloadAction<screenPropTypes>) => {
      state.screensList.push(action.payload);
    },
    updateScreen: (
      state,
      action: PayloadAction<{
        screenId: string;
        targetUIId: string;
        isChecked: boolean;
      }>,
    ) => {
      console.log('>>>>>>>>>>>>', action.payload);
      const screenIndex = state.screensList.findIndex(
        el => el.screen === action.payload.screenId,
      );
      if (screenIndex !== -1) {
        const targetUIIndex = state.screensList[screenIndex].elements.findIndex(
          el => el.id === action.payload.targetUIId,
        );
        if (targetUIIndex !== -1) {
          state.screensList[screenIndex].elements[targetUIIndex].isEnabled =
            action.payload.isChecked;
        }
      }
    },
    removeScreen: (state, action: PayloadAction<string>) => {},
    resetScreens: () => ({
      ...initialState,
    }),
  },
});

export const {addScreen, updateScreen, removeScreen, resetScreens} =
  screensSlice.actions;
export default screensSlice.reducer;
