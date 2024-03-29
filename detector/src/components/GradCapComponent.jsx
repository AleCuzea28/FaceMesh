import axios from "axios";
import React, { useState } from "react";
import Wrapper from "../assets/wrappers/GrapCap";

function GradCapComponent() {
  const [file, setFile] = useState(null);
  const [imageKey, setImageKey] = useState(0);
  const [meshImage, setMeshImage] = useState(null);

  const handleFileUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    try {
      await axios.post("http://127.0.0.1:8000/api/uploader/toca", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      import(`../../../finalGradCap.png`).then((module) => {
        setMeshImage(module.default);
      });
      setFile(event.target.files[0]); // Update the file state after successful upload
      setImageKey((prevKey) => prevKey + 1); // Force re-render by updating imageKey
      // Dynamically import the mesh image
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Wrapper>
      <form encType="multipart/form-data" className="form-container">
        <input
          type="file"
          name="file"
          className="choose-file-container"
          onChange={handleFileUpload}
        />
      </form>
      <div className="image">
        {meshImage && <img key={imageKey} src={meshImage} alt="toca" />}
      </div>
    </Wrapper>
  );
}

export default GradCapComponent;
