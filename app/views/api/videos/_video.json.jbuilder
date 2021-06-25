json.extract! video, :id, :title, :author_id
json.videoComments video.comments.pluck(:id)
json.video_url url_for(video.clip) if video.clip.attached?

