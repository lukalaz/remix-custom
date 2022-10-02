import { motion } from "framer-motion";
import {
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
    <div className="container mt-22">
      <div className="pb-[120px]">
        <div className="flex flex-wrap justify-center mx-[-16px]">
          <div className="w-full px-4">
            <motion.div {...snapFromTopAnimation} transition={{ delay: 0.65 }}>
              <PostHeader post={post} />
              <div dangerouslySetInnerHTML={{ __html: markdown }} />
              <motion.div
                {...snapFromRightAnimation}
                transition={{ delay: 0.9 }}
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
