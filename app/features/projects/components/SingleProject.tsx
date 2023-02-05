import { motion } from "framer-motion";
import {
  animationDelay,
  snapFromLeftAnimation,
  snapFromRightAnimation,
} from "~/common/utils/AnimationVariants";
import { PostHeader } from "~/features/blog/components/PostHeader";
import { PostShare } from "~/features/blog/components/PostShare";
import { Project } from "~/models/project.server";

interface ISinglePost {
  project: Project;
  markdown: any;
}

export const SingleProject: React.FC<ISinglePost> = ({ project, markdown }) => {
  return (
    <div className="container mt-12">
      <div className="pb-[120px]">
        <div className="flex flex-wrap justify-center mx-[-16px]">
          <div className="w-full px-4">
            <motion.div>
              <PostHeader post={project} />
              <motion.div
                {...snapFromLeftAnimation}
                transition={{ delay: animationDelay[2] }}
                className="postBody"
                dangerouslySetInnerHTML={{
                  __html: markdown.replace(
                    /href/g,
                    "target='_blank' class='hover-underline-animation hover:text-white transition-all' href"
                  ),
                }}
              />
              <motion.div
                {...snapFromRightAnimation}
                transition={{ delay: animationDelay[3] }}
              >
                <PostShare />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
