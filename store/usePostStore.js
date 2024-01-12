import { create } from "zustand";
import { produce } from "immer";

const usePostStore = create((set) => ({
  postList: null,
  setPostList: (data) => set({ postList: data }),
  upVotePost: (index) =>
    set(
      produce((state) => {
        if (state?.postList?.children[index]) {
          state.postList.children[index].data.score += 1;
        }
      })
    ),
  downVotePost: (index) =>
    set(
      produce((state) => {
        if (state?.postList?.children[index]) {
          state.postList.children[index].data.score = Math.max(
            0,
            state.postList.children[index].data.score - 1
          );
        }
      })
    ),
}));

export default usePostStore;
