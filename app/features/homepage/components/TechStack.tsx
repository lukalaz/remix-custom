import SkillCard from "./SkillCard";
import react from "../../../assets/images/logo-icons/react.svg";
import remix from "../../../assets/images/logo-icons/remix.svg";
import sql from "../../../assets/images/logo-icons/sql.svg";
import git from "../../../assets/images/logo-icons/git.svg";
import reactQuery from "../../../assets/images/logo-icons/react-query.svg";
import prisma from "../../../assets/images/logo-icons/prisma.svg";
import node from "../../../assets/images/logo-icons/node.svg";
import azure from "../../../assets/images/logo-icons/azure.svg";
import StyledTitle from "~/common/components/StyledTitle";
import { motion } from "framer-motion";
import { snapFromTopAnimation } from "~/common/utils/AnimationVariants";

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="pt-[40px]">
      <div className="container">
        <StyledTitle
          title={"My Tech Stack"}
          preTitle="What I love to work with the most"
          description="These are some technologies I enjoy using. At one point I'm going to write descriptions for them and turn this into a slider. Currently I am too lazy for that."
        />
        <motion.div
          {...snapFromTopAnimation}
          className="flex flex-wrap mx-[-16px]"
        >
          <SkillCard title={"React"} content={"Nije los React"} icon={react} />
          <SkillCard title={"Remix"} content={"Nije los React"} icon={remix} />
          <SkillCard
            title={"react-query"}
            content={"Nije los React"}
            icon={reactQuery}
          />
          <SkillCard title={"SQL"} content={"Nije los React"} icon={sql} />
          <SkillCard
            title={"Prisma"}
            content={"Nije los React"}
            icon={prisma}
          />
          <SkillCard title={"Azure"} content={"Nije los React"} icon={azure} />
          <SkillCard title={"Node"} content={"Nije los React"} icon={node} />
          <SkillCard title={"Git"} content={"Nije los React"} icon={git} />
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
