export const createLike = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}/likes`,
    method: 'POST',
    data: { comment }
  })
}


export const deleteLike = (comment, likeId) => {
  return $.ajax({
    url: `/api/comments/${comment.id}/${likeId}`,
    method: 'DELETE',
  })
}
