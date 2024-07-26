import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { EventPayload, Event } from "../types";

const eventSlice = createSlice({
  name: "events",
  initialState: [] as Event[],
  reducers: {
    createEvent: (state, action: PayloadAction<EventPayload>) => {
      const newTodo: Event = {
        id: uuidv4() as string,
        eventName: action.payload.eventName,
        date: action.payload.date,
        time: action.payload.time,
        description: action.payload.description,
        location: action.payload.location,
      };
      state.push(newTodo);
    },
    deleteEvent: (state, action) => {
      const index = state.findIndex((event) => event.id === action.payload);
      if (index !== 1) {
        state.splice(index, 1);
      }
    },
    editEvent: (state, action: PayloadAction<Event>) => {
      const index = state.findIndex((event) => event.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { createEvent, deleteEvent, editEvent } = eventSlice.actions;
export default eventSlice.reducer;
