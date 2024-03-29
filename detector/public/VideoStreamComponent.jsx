// // VideoStreamComponent.js
// import React, { useEffect, useRef } from "react";
// import axios from "axios";

// const VideoStreamComponent = () => {
//   const videoRef = useRef(null);

//   const fetchVideoStream = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/api/uploader_video",
//         {
//           responseType: "blob", // Set response type to blob
//         }
//       );
//       const videoBlob = response.data;
//       const videoUrl = URL.createObjectURL(videoBlob);
//       videoRef.current.src = videoUrl;
//     } catch (error) {
//       console.error("Error fetching video stream:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Video Stream Component</h1>
//       <button onClick={fetchVideoStream}>Fetch Video Stream</button>
//       <video ref={videoRef} controls autoPlay />
//     </div>
//   );
// };

// export default VideoStreamComponent;
