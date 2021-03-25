json.extract! @user, :username, :id, :email
json.comments do 
  @user.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :video_id
    end
  end
end