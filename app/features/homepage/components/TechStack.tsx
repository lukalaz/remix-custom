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
          description="These are some technologies I enjoy using. At one point I'm going to write descriptions for them and turn this into a slider. Currently I am too lazy for that."
        />
        <Slider />
      </div>
    </section>
  );
};

export default TechStack;
