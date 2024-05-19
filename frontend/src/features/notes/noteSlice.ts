import { createSlice, nanoid } from '@reduxjs/toolkit'

import type { NoteState } from '../../intefaces/notes';

const initialState: NoteState = {
  notes: [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNewNote: (state, action) => {
      state.notes.push({
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        tags: action.payload.tags,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },
  },
})

export const { addNewNote, deleteNote } = noteSlice.actions

export default noteSlice.reducer

