import SkillCard from "./SkillCard";
import react from "../../../assets/images/logo-icons/react.png";
import remix from "../../../assets/images/logo-icons/remix.png";
import sql from "../../../assets/images/logo-icons/sql.png";
import git from "../../../assets/images/logo-icons/git.png";
import reactQuery from "../../../assets/images/logo-icons/react-query.png";
import prisma from "../../../assets/images/logo-icons/prisma.png";
import node from "../../../assets/images/logo-icons/node.png";
import azure from "../../../assets/images/logo-icons/azure.png";
import StyledTitle from "~/common/components/StyledTitle";
import { randomShortInterval } from "~/common/utils/AnimationVariants";

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="pt-[40px]">
      <div className="container">
        <StyledTitle
          title={"My Tech Stack"}
          preTitle="What I love to work with the most"
          description="These are some technologies I enjoy using. At one point I'm going to write descriptions for them and turn this into a slider. Currently I am too lazy for that."
        />
        <div className="flex flex-wrap mx-[-16px]">
          <SkillCard
            title={"React"}
            icon={react}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"Remix"}
            icon={remix}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"react-query"}
            icon={reactQuery}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"SQL"}
            icon={sql}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"Prisma"}
            icon={prisma}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"Azure"}
            icon={azure}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"Node"}
            icon={node}
            animationDelay={randomShortInterval()}
          />
          <SkillCard
            title={"Git"}
            icon={git}
            animationDelay={randomShortInterval()}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
