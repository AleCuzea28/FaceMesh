//custom components
import TypingEffect from "../components/TypingEffect";
import FaceMeshComponent from "../components/FaceMeshComponent";
import GradCapComponent from "../components/GradCapComponent";

//wrapper
import Wrapper from "../assets/wrappers/Dashboard";
//image
import undraw_decide from "../assets/img/undraw_decide.svg";

const Dashboard = () => {
  return (
    <Wrapper>
      <TypingEffect />
      <div className="detectors-container">
        <div className="description-mesh">
          <h2> You can see your meshed face</h2>
          <div className="face-mesh-container">
            <FaceMeshComponent />
          </div>
        </div>
        <div className="description-grad">
          <h2> You can see yourself at grad</h2>
          <div className="grad-cap-container">
            <GradCapComponent />
          </div>
        </div>
        <div className="undraw-decide">
          <img src={undraw_decide} alt="image" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Dashboard;
