// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import pricingReducer from './slices/pricingSlices';

export const store = configureStore({
  reducer: {
    pricing: pricingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;