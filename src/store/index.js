import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import chatRoomSlice from "./chatRoomSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
		chatRoom: chatRoomSlice,
  },
});

export default store;
