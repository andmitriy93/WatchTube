// export const fetchComments = (userId) => {
//   return $.ajax({
//     url: `/api/users/${userId}/comments`,
//     method: "GET",
//     data: { userId }
//   });
// };

export const likeToComment = (id) => {
  return $.ajax({
    url: "/api/likes",
    method: "POST",
    data: { id },
  });
};

export const deleteLikeFromComment = (id) => {
  return $.ajax({
    url: "/api/likes",
    method: "DELETE",
    data: { id },
  });
};

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
