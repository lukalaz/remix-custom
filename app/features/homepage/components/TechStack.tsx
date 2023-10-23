import StyledTitle from "~/common/components/StyledTitle";
import SkillCard from "./SkillCard";
import react from "../../../assets/images/logo-icons/react.png";
import angular from "../../../assets/images/logo-icons/angular.png";
import ts from "../../../assets/images/logo-icons/ts.png";
import tailwind from "../../../assets/images/logo-icons/tailwind.png";
import jest from "../../../assets/images/logo-icons/jest.png";
import azure from "../../../assets/images/logo-icons/azure.png";
import git from "../../../assets/images/logo-icons/git.png";
import reactQuery from "../../../assets/images/logo-icons/react-query.png";
import rxjs from "../../../assets/images/logo-icons/rxjs.png";
import mui from "../../../assets/images/logo-icons/mui.png";

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
        <div className="flex flex-col gap-3 md:flex-row justify-center align-center px-10 mb-3">
          <SkillCard title={"Typescript"} icon={ts} position="left" />
          <SkillCard title={"React"} icon={react} position="left" />
          <SkillCard title={"Git"} icon={git} position="left" />
          <SkillCard title={"Jest"} icon={jest} position="left" />
          <SkillCard title={"Angular"} icon={angular} position="left" />
        </div>
        <div className="flex flex-col gap-3 md:flex-row justify-center align-center px-10">
          <SkillCard title={"R Query"} icon={reactQuery} position={"left"} />
          <SkillCard title={"RxJs"} icon={rxjs} position="left" />
          <SkillCard title={"Azure"} icon={azure} position="left" />
          <SkillCard title={"Tailwind"} icon={tailwind} position="left" />
          <SkillCard title={"MUI"} icon={mui} position="left" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
