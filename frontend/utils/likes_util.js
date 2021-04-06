

export const fetchLikes = () => {
  return $.ajax({
    url: '/api/likes',
    method: 'GET'
  })
}

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
}