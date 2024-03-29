import styled from "styled-components";

const Wrapper = styled.section`
  /* background-color: brown;
  z-index: -1;
  position: relative; */
  .detectors-container {
    padding-top: 0.2rem;
    display: grid;
    /* border: 1px solid black; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 1rem;
    justify-items: center;
  }
  .face-mesh-container,
  .grad-cap-container {
    height: 33rem;
    border: 3px solid rgba(237, 246, 249, 0.4);
    border-radius: 1.25rem;
    width: 33rem;
    display: flex;
    justify-content: center;
    background-color: transparent;
    /* opacity: 1; */
    /* background-color: ; */
    /* filter: blur(2px); */
    /* -webkit-filter: blur(8px); */
  }
  .undraw-decide {
    display: flex;
    justify-content: center;
    grid-column: 1 / span 2; /* Elementul 3 ocupă 2 coloane */
    grid-row: 2; /* Se află pe a doua linie */
  }
  img {
    height: 100px;
  }
  h2 {
    display: flex;
    justify-content: center;
    color: #edf6f9;
  }
`;
export default Wrapper;
