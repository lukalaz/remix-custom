import StyledTitle from "~/common/components/StyledTitle";
import { Slider } from "./Slider";

const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="pt-[120px] border-t border-gray-700 relative z-40"
    >
      <div className="container">
        <StyledTitle
          title={"My Tech Stack"}
          preTitle="What I love to work with the most"
        />
        <Slider />
      </div>
    </section>
  );
};

export default TechStack;
