
export const fetchLikes = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}/likes`,
    method: 'GET',
    data: { commentId }
  })
}

export const likeToComment = (like) => {
  return $.ajax({
    url: "/api/likes",
    method: "POST",
    data: { like },
  });
};

export const deleteLikeFromComment = (likeId) => {
  return $.ajax({
    url: `/api/likes/${likeId}`,
    method: "DELETE",
    data: { likeId },
  });
}
