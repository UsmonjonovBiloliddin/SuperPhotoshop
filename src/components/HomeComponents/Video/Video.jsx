import React from "react";
import "./Video.scss";
import 'animate.css';
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div className="Video">
      <h3></h3>
      <div className="video animate__animated animate__fadeInUp">
        <ReactPlayer
          url="https://youtu.be/H94ZSOnK2oo?si=Q_qaQvaAE5xYIGXe"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
      
    </div>
  );
};

export default Video;
