// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import destinationMesh from "../../../destinationMesh.png";
// import Wrapper from "../assets/wrappers/PhotoFaceDetector";

// const MyComponent = () => {
//   const [generateImage, setGenerateImage] = useState(false);
//   const [imageKey, setImageKey] = useState(0);

//   const handleFileUpload = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     const formData = new FormData();
//     formData.append("file", event.target.files[0]);

//     try {
//       await axios.post("http://127.0.0.1:8000/api/uploader", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setGenerateImage(true); // Trigger image generation after successful upload
//       setImageKey((prevKey) => prevKey + 1);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };
//   //   useEffect(() => {
//   //     if (generateImage) {
//   //       // Update the key to force re-rendering of the image
//   //       setImageKey((prevKey) => prevKey + 1);
//   //       setGenerateImage(false); // Reset generateImage after rendering the image
//   //     }
//   //   }, [generateImage]);

//   return (
//     <Wrapper>
//       <form encType="multipart/form-data">
//         <input type="file" name="file" onChange={handleFileUpload} />
//       </form>
//       <button onClick={() => setGenerateImage(true)}>Generate Image</button>
//       <div className="image">
//         {generateImage && (
//           <img key={imageKey} src={destinationMesh} alt="mesh" />
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// export default MyComponent;

// import React, { useState, useEffect, Form } from "react";
// import axios from "axios";
// import customFetch from "../utils/customFetch";
// import destinationMesh from "../../../destinationMesh.png";

// function MyComponent() {
//   const [generateImage, setGenerateImage] = useState(false);

//   const handleClick = () => {
//     return setGenerateImage(true);
//     // return console.log("Hello");
//   };

//   return (
//     <div>
//       <form action="/api/uploader" method="POST" encType="multipart/form-data">
//         <input type="file" name="file" />
//         <input type="submit" />
//       </form>
//       <button type="submit" onClick={handleClick}>
//         {" "}
//         generate image{" "}
//       </button>
//       <div className="image">
//         {generateImage && <img src={destinationMesh} alt="mesh" />}
//       </div>
//     </div>
//   );
// }

// export default MyComponent;

//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios
//       .get("/api/myfunction")
//       .then((response) => {
//         setMessage(response.data.message);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
