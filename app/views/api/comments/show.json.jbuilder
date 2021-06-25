json.extract! @comment, :id, :body, :author_id, :video_id
json.author @comment.author
json.likesCount @comment.likes.count
json.liked_by_current_user !!@comment.likes.find_by(user_id: current_user.id)
