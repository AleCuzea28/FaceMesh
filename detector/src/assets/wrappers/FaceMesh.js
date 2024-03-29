import styled from "styled-components";

const Wrapper = styled.section`
  .choose-file-container {
    /* border: 1px solid black; */
    border-radius: 1.2rem;
    padding: 1rem;
    color: white;
    font-size: 15px;
  }
  .choose-file-container::-webkit-file-upload-button {
    background: #83c5be;
    padding: 8px;
    color: white;
    border-radius: 10px;
    transition: all 0.5s ease;
  }
  .choose-file-container::-webkit-file-upload-button:hover {
    letter-spacing: 3px;
    background-color: #006d77;
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(237 246 249) 0px 7px 29px 0px;
  }
  .choose-file-container::-webkit-file-upload-button:active {
    letter-spacing: 3px;
    background-color: #006d77;
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(237 246 249) 0px 7px 29px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
  .image {
    background-color: rgba(131, 197, 190, 0.4);
    /* opacity: 0.4; */
    height: 28rem;
    width: 31rem;
    border-radius: 1.25rem;
    position: relative;
    overflow: hidden;
    z-index: 10;
  }
  .image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: #83c5be; */
    /* opacity: 0.4; */
    border-radius: 1.25rem;
    z-index: 10;
  }
  .form-container {
    display: flex;
    justify-content: center;
  }
  .image img {
    position: absolute !important;
    z-index: 100;
    /* display: block; */
    width: 100%;
    height: auto;
    background-color: transparent;
  }
  /* .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  } */
`;
export default Wrapper;
