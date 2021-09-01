import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleSharpIcon from "@material-ui/icons/CheckCircleSharp";
export default function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  verified,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <CheckCircleSharpIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
