export const fetchVideos = () =>
  $.ajax({
    method: "GET",
    url: "/api/videos",
  });

export const fetchVideo = (videoId) =>
  $.ajax({
    method: "GET",
    url: `/api/videos/${videoId}`,
    data: { videoId },
  });

export const searchVideos = (videoTitle) => {
  $.ajax({
    method: "GET",
    url: "/api/videos/search",
    data: { videoTitle },
  });
};
