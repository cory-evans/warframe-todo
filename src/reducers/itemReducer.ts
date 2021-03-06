import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from 'warframe-items'
import type { RootState } from '../store'

interface ItemState { 
  item: Item | null;
  components: Item[];
  ingoreList: string[];
}

const initialState: ItemState = {
  item: null,
  components: [],
  // TODO: make this configurable for the user, and persist the store
  ingoreList: ['Gallium', 'Neurodes', 'Neural Sensors', 'Orokin Cell', 'Morphics', 'Control Module', 'Isos']
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;
    },
    clearItem: (state) => {
      state.item = null;
    },
    setComponents: (state, action: PayloadAction<Item[]>) => {
      state.components = action.payload;
    },
    clearComponents: (state) => {
      state.components = [];
    }
  }
});

export const { setItem, clearItem, clearComponents, setComponents } = itemSlice.actions;

export const selectItem = (state: RootState) => state.currentItem.item;

export default itemSlice.reducer;