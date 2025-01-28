import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  backwardRoute: null,
  forwardRoute: null,
};

export interface RouteState {
  backwardRoute: string | null;
  forwardRoute: string | null;
}

export interface RootStateRoute {
  route: RouteState;
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setBackwardRoute: (state: RouteState, action: PayloadAction<string>) => {
      state.backwardRoute = action.payload;
    },
    setForwardRoute: (state: RouteState, action: PayloadAction<string>) => {
      state.forwardRoute = action.payload;
    },
    resetRoutes: (state: RouteState) => {
      state.backwardRoute = null;
      state.forwardRoute = null;
    },
  },
});

export const { setBackwardRoute, setForwardRoute, resetRoutes } = routeSlice.actions;
export default routeSlice.reducer;