json.partial! 'video', video: @video
json.videoLikes @video.likes.each do |like|
  json.partial! 'api/likes/like', like: like
end