import { createSlice } from '@reduxjs/toolkit';

// Xác định trạng thái | cấu trúc trạng thái
const initialState = {
  items: [],
  voucher: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
    updateItem(state, action) {},
    addVoucher(state, action) {},
    clearItems(state) {},
  },
});

export const { addItem, removeItem, updateItem, addVoucher, clearItems } =
  cartSlice.actions;
