import { createSlice } from '@reduxjs/toolkit';

// Xác định trạng thái | cấu trúc trạng thái
const initialState = {
  currentSong: null,
  isPlaying: false,
  isLoop: false,
  isShuffle: false,
};

export const cartSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSong(state, action) {},
    togglePlay(state, action) {},
    toggleLoop(state, action) {},
    toggleShuffle(state, action) {},
    nextSong(state, action) {},
    prevSong(state, action) {},
  },
});

export const { addItem, removeItem, updateItem, addVoucher, clearItems } =
  cartSlice.actions;
