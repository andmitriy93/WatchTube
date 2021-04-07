
export const fetchLikes = () => {
  return $.ajax({
    url: '/api/likes',
    method: 'GET'
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
    url: "/api/likes",
    method: "DELETE",
    data: { likeId },
  });
}
