// import React, { useState } from "react";
// import Wrapper from "../assets/wrappers/FaceMesh";

// const PhotoFaceDetector = () => {
//   const [imageSrc, setImageSrc] = useState(null);

//   const handleImageChange = (e) => {
//     // console.log("heeelllo");
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImageSrc(imageUrl);
//     }
//   };

//   return (
//     <Wrapper>
//       <div>
//         <input
//           type="file"
//           id="avatar"
//           name="avatar"
//           accept="image/png, image/jpeg"
//           onChange={handleImageChange}
//         />
//       </div>
//       <div>
//         {" "}
//         {imageSrc && (
//           <img src={imageSrc} alt="Selected Image" className="selectedphoto" />
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// export default PhotoFaceDetector;
