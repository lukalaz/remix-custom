import { Post } from "~/models/post.server";
import { PostHeader } from "./PostHeader";
import { PostShare } from "./PostShare";

interface ISinglePost {
  post: Post;
  markdown: any;
}

export const SinglePost: React.FC<ISinglePost> = ({ post, markdown }) => {
  console.log(post);
  console.log(markdown);

  return (
    <div className="container mt-22">
      <div className="pb-[120px]">
        <div className="flex flex-wrap justify-center mx-[-16px]">
          <div className="w-full px-4">
            <div>
              <PostHeader post={post} />
              <div dangerouslySetInnerHTML={{ __html: markdown }} />
              <PostShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
