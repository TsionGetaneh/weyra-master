import { createSlice } from '@reduxjs/toolkit';

const pricingSlice = createSlice({
  name: 'pricing',
  initialState: {
    plan: 'monthly',
  },
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlan } = pricingSlice.actions;
export default pricingSlice.reducer;