# json.array! @videos do |video|
#     json.extract! video, :id, :title
#     json.videoUrl url_for(video.clip)
# end

# reference like Benchbnb index for the benches

@videos.each do |video|
    json.set! video.id do
        json.partial! video: video
    end
end