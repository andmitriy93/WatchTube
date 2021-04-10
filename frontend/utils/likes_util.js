
export const fetchLikes = () => {
  return $.ajax({
    url: `/api/likes`,
    method: 'GET',
  })
}

export const likeToComment = (commentId) => {
  return $.ajax({
    url: "/api/likes",
    method: "POST",
    data: { commentId },
  });
};

export const deleteLikeFromComment = (likeId) => {
  return $.ajax({
    url: `/api/likes/${likeId}`,
    method: "DELETE",
    data: { likeId },
  });
}
