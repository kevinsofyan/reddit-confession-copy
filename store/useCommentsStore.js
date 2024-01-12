import { create } from "zustand";

const useCommentsStore = create((set) => ({
  data: {}, // Your initial nested data structure goes here
  upVoteComment: (commentId) => {
    set((state) =>
      produce(state, (draft) => {
        const comment = findCommentById(draft.data, commentId);
        if (comment) {
          comment.data.score += 1;
        }
      })
    );
  },
  downVoteComment: (commentId) => {
    set((state) =>
      produce(state, (draft) => {
        const comment = findCommentById(draft.data, commentId);
        if (comment) {
          comment.data.score -= 1;
        }
      })
    );
  },
}));

function findCommentById(data, commentId) {
  for (const item of data.children || []) {
    for (const comment of item.data.children || []) {
      if (comment.data.id === commentId) {
        return comment;
      }
    }
  }
  return null;
}

export default useCommentsStore;
