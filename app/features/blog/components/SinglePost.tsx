import { motion } from "framer-motion";
import {
  animationDelay,
  snapFromLeftAnimation,
  snapFromRightAnimation,
} from "~/common/utils/AnimationVariants";
import { Post } from "~/models/post.server";
import { PostHeader } from "./PostHeader";
import { PostShare } from "./PostShare";
import { HighlightedHtmlContent } from "./HighlightedHtml";

interface ISinglePost {
  post: Post;
  markdown: any;
}

export const SinglePost: React.FC<ISinglePost> = ({ post, markdown }) => {
  return (
    <div className="container mt-12">
      <div className="pb-[120px]">
        <div className="flex flex-wrap justify-center mx-[-16px]">
          <div className="w-full px-4">
            <motion.div>
              <PostHeader post={post} />
              <motion.div
                {...snapFromLeftAnimation}
                transition={{ delay: animationDelay[2] }}
                className="postBody"
              >
                <HighlightedHtmlContent htmlContent={markdown} />
              </motion.div>
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
