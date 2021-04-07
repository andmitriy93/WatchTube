
// export const likeToComment = (like) => {
//   return $.ajax({
//     url: "/api/likes",
//     method: "POST",
//     data: { like },
//   });
// };

// export const deleteLikeFromComment = (likeId) => {
//   return $.ajax({
//     url: "/api/likes",
//     method: "DELETE",
//     data: { likeId },
//   });
// };

export const fetchComments = () => {
  return $.ajax({
    url: `/api/comments`,
    method: "GET",
  });
};

export const fetchComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: "GET",
  });
};

export const createComment = (comment) => {
  return $.ajax({
    url: "/api/comments",
    method: "POST",
    data: { comment },
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: "PATCH",
    data: { comment },
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: "DELETE",
  });
};
