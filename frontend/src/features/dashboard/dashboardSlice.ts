import { createSlice } from "@reduxjs/toolkit"
import { DashboardState } from "../../intefaces/dashboard"

const initialState: DashboardState = {
    recentNotes: [],
    history: [],
    loading: false,
    error: null,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchRecentNotes: (state) => {
      state.loading = true
    },
    fetchRecentNotesSuccess: (state, action) => {
      state.recentNotes = action.payload
      state.loading = false
    },
    fetchRecentNotesError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    fetchHistory: (state) => {
      state.loading = true
    },
    fetchHistorySuccess: (state, action) => {
      state.history = action.payload
      state.loading = false
    },
    fetchHistoryError: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  },
})

export const { fetchRecentNotes, fetchRecentNotesSuccess, fetchRecentNotesError, fetchHistory, fetchHistorySuccess, fetchHistoryError } = dashboardSlice.actions;

export default dashboardSlice.reducer
