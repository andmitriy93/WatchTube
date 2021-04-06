@likes.each do |like|
  json.set! like.id do
    json.extract! @like, :id, :comment_id, :user_id
    # json.likesCount likes.count
    # json.liked_by_current_user !!like.find_by(user_id: current_user.id)
  end
end