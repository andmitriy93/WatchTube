json.extract! video, :id, :title, :author_id
json.video_url video.video_url || url_for(video.clip)