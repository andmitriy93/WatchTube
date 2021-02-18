json.extract! video, :id, :title, :author_id
json.video_url  url_for(video.clip)