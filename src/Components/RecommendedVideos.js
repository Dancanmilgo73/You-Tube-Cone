import React, { useEffect } from "react";
import { getPopularVideos } from "../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
export default function RecommendedVideos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);
  console.log(videos);
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos.map((video, idx) => (
          <VideoCard
            key={idx}
            title={video.snippet.title}
            views={`${video.statistics.viewCount} views`}
            image={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
            timestamp={`${2}days ago`}
            channelImage={video.snippet.thumbnails.medium.url}
          />
        ))}
      </div>
    </div>
  );
}
