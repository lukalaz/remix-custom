import { motion } from "framer-motion";
import {
  animationDelay,
  snapFromRightAnimation,
  snapFromTopAnimation,
} from "~/common/utils/AnimationVariants";
import { Post } from "~/models/post.server";
import { PostHeader } from "./PostHeader";
import { PostShare } from "./PostShare";

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
            <motion.div
              {...snapFromTopAnimation}
              transition={{ delay: animationDelay[1] }}
            >
              <PostHeader post={post} />
              <div
                className="postBody"
                dangerouslySetInnerHTML={{ __html: markdown }}
              />
              <motion.div
                {...snapFromRightAnimation}
                transition={{ delay: animationDelay[2] }}
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
