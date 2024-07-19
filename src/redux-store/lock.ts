import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  permissionDenied: false
}
export interface LockState {
  permissionDenied: boolean;
}

export interface RootStateLock {
  lock: LockState;
}
export const lockSlice = createSlice({
  name: 'lock',
  initialState,
  reducers: {
    denyPermission: (state: LockState) => {
      state.permissionDenied = !state.permissionDenied
    },
    resetPermission: (state: LockState) => {
      state.permissionDenied = false
    }
  }
})

export const { denyPermission, resetPermission } = lockSlice.actions
export default lockSlice.reducer