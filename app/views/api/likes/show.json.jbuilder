# json.partial! 'api/likes/like', like: @like
json.extract! @like, :id, :comment_id, :user_id