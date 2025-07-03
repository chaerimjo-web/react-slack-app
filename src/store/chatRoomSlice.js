import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChatRoom: {
    createBy: { //누구에의해 만들어짐
      name: "",
      image: "",
    },
    description: "",
    name: "",
    id: "",
  },
  isPriviteChatRoom: false,
  usePosts: null, //누가 몇개의 채팅을 작성했는지
};

export const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState, //초기상태
  reducer: {}, //상태를 변경하는 함수들
});

export default chatRoomSlice.reducer;
