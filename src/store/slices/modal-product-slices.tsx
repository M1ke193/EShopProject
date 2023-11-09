import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "src/common/interface";

interface modalState {
  modalStatus: boolean;
  modalProductSelected: IProduct;
}

const initialState: modalState = {
  modalStatus: false,
  modalProductSelected: {} as IProduct,
};

const modalProductSlice = createSlice({
  name: "modalProduct",
  initialState,
  reducers: {
    changeModalStatus: (state, action: PayloadAction<IProduct | undefined>) => {
      state.modalStatus = !state.modalStatus;
      if (state.modalStatus && action?.payload) {
        state.modalProductSelected = action.payload;
      }
    },
  },
});
export const { changeModalStatus } = modalProductSlice.actions;
export default modalProductSlice.reducer;
